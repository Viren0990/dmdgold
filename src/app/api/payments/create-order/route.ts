import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { razorpay } from "@/lib/razorpay";
import { ACCESSORIES } from "@/lib/constants";

// Basic in-memory rate limiting (IP -> timestamps)
// Note: For a production app, use Redis or Upstash for distributed rate limiting
const rateLimitCache = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 5; // Max 5 orders per minute per IP

  const timestamps = rateLimitCache.get(ip) || [];
  // Filter out old timestamps
  const recent = timestamps.filter((ts) => now - ts < windowMs);

  if (recent.length >= maxRequests) {
    return true; // Rate limited
  }

  recent.push(now);
  rateLimitCache.set(ip, recent);
  return false;
}

// Simple validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^\+?[0-9]{10,15}$/;

// Lightweight warm-up endpoint — the checkout page pings this on load
// so the serverless function is already hot when the user clicks "Pay Now"
export async function GET() {
  return NextResponse.json({ status: 'warm' });
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    // In App Router, getting the IP reliably can depend on the hosting platform (Vercel, AWS, etc.)
    // We try 'x-forwarded-for' first, fallback to a generic bucket if missing
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests, please try again later" },
        { status: 429 },
      );
    }

    const {
      planSlug,
      customerEmail,
      customerName,
      customerPhone,
      company,
      gstNumber,
      address,
      city,
      state,
      pincode,
      accessories, // Record<string, number> where key is accessory id and value is quantity
    } = await req.json();

    // 2. Input Validation
    if (
      !planSlug ||
      !customerName ||
      !customerEmail ||
      !customerPhone ||
      !company
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
    if (!EMAIL_REGEX.test(customerEmail)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }
    if (!PHONE_REGEX.test(customerPhone)) {
      return NextResponse.json(
        { error: "Invalid phone format" },
        { status: 400 },
      );
    }
    // Limit string lengths to prevent giant payload DB crashes
    if (customerName.length > 100 || company.length > 100) {
      return NextResponse.json(
        { error: "Field length exceeded max limits" },
        { status: 400 },
      );
    }

    // 3 & 4. Fetch Plan and Customer in PARALLEL to save time
    let [plan, customer] = await Promise.all([
      prisma.plan.findUnique({ where: { slug: planSlug } }),
      prisma.customer.findUnique({
        where: { email: customerEmail },
        include: { purchases: true },
      })
    ]);

    if (!plan) {
      return NextResponse.json({ error: "Plan not found" }, { status: 404 });
    }

    if (!customer) {
      // Email is new. Check if the phone is already taken by another account.
      const existingPhoneCustomer = await prisma.customer.findUnique({
        where: { phone: customerPhone },
        include: { purchases: true },
      });

      if (existingPhoneCustomer) {
        // Phone is taken. Check if they have any paid purchases.
        const hasPaidPurchases = existingPhoneCustomer.purchases.some(
          (p) => p.status === "PAID" || p.status === "ACTIVATED",
        );

        if (hasPaidPurchases) {
          return NextResponse.json(
            {
              error:
                "This phone number is already associated with an active account.",
            },
            { status: 400 },
          );
        } else {
          // The account has no paid purchases. This is likely a typo from a previous failed checkout attempt!
          // We can safely take over this abandoned record and fix its email to the correct one.
          customer = await prisma.customer.update({
            where: { id: existingPhoneCustomer.id },
            data: {
              email: customerEmail,
              name: customerName,
              company: company,
              gstNumber: gstNumber || existingPhoneCustomer.gstNumber,
              address: address || existingPhoneCustomer.address,
              city: city || existingPhoneCustomer.city,
              state: state || existingPhoneCustomer.state,
              pincode: pincode || existingPhoneCustomer.pincode,
            },
            include: { purchases: true },
          });
        }
      } else {
        // Brand new email and brand new phone
        customer = await prisma.customer.create({
          data: {
            name: customerName,
            email: customerEmail,
            phone: customerPhone,
            company: company,
            gstNumber: gstNumber || null,
            address: address || null,
            city: city || null,
            state: state || null,
            pincode: pincode || null,
            passwordHash: "pending-setup",
          },
          include: { purchases: true },
        });
      }
    } else {
      // Email exists! We found the customer.

      // 1. Prevent double purchasing of the same plan!
      const alreadyOwnsPlan = customer.purchases.some(
        (p) =>
          p.planId === plan.id &&
          (p.status === "PAID" || p.status === "ACTIVATED"),
      );
      if (alreadyOwnsPlan) {
        return NextResponse.json(
          { error: "You already have an active license for this plan." },
          { status: 400 },
        );
      }

      // 2. If they provided a new phone number, make sure it's not taken by a paying account.
      if (customer.phone !== customerPhone) {
        const existingPhoneCustomer = await prisma.customer.findUnique({
          where: { phone: customerPhone },
          include: { purchases: true },
        });

        if (existingPhoneCustomer) {
          const hasPaid = existingPhoneCustomer.purchases.some(
            (p) => p.status === "PAID" || p.status === "ACTIVATED",
          );
          if (hasPaid) {
            return NextResponse.json(
              {
                error:
                  "This new phone number is already associated with another active account.",
              },
              { status: 400 },
            );
          } else {
            // The other account is an abandoned typo. Free up the phone number by renaming it!
            await prisma.customer.update({
              where: { id: existingPhoneCustomer.id },
              data: {
                phone: `abandoned_${Date.now()}_${existingPhoneCustomer.phone}`,
              },
            });
          }
        }
      }

      // Update existing customer with their new checkout details
      customer = await prisma.customer.update({
        where: { id: customer.id },
        data: {
          name: customerName,
          phone: customerPhone,
          company: company,
          gstNumber: gstNumber || customer.gstNumber,
          address: address || customer.address,
          city: city || customer.city,
          state: state || customer.state,
          pincode: pincode || customer.pincode,
        },
        include: { purchases: true },
      });
    }

    // 5. Calculate GST Server-Side (Never trust UI for amounts)
    let baseAmount = plan.licensePrice; // in paise
    
    // Process accessories if provided
    const validAccessories: any[] = [];
    if (accessories && typeof accessories === 'object') {
      for (const [id, quantity] of Object.entries(accessories)) {
        if (typeof quantity === 'number' && quantity > 0) {
          const accDef = ACCESSORIES.find(a => a.id === id);
          if (accDef) {
            const itemTotal = accDef.pricePaise * quantity;
            baseAmount += itemTotal;
            validAccessories.push({
              id: accDef.id,
              name: accDef.name,
              quantity: quantity,
              unitPricePaise: accDef.pricePaise,
              totalPricePaise: itemTotal
            });
          }
        }
      }
    }

    const taxAmount = Math.round(baseAmount * 0.18); // 18% GST on total (license + hardware)
    const totalAmount = baseAmount + taxAmount;

    // 6. Create an Order in Razorpay
    const order = await razorpay.orders.create({
      amount: totalAmount,
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: {
        customerId: customer.id,
        planId: plan.id,
      },
    });

    // 7 & 8. Save the pending purchase AND payment in a SINGLE nested database query!
    const purchase = await prisma.purchase.create({
      data: {
        customerId: customer.id,
        planId: plan.id,
        baseAmount: baseAmount,
        taxAmount: taxAmount,
        totalAmount: totalAmount,
        razorpayOrderId: order.id,
        status: "PENDING",
        accessories: validAccessories.length > 0 ? validAccessories : undefined,
        payments: {
          create: {
            customerId: customer.id,
            amount: totalAmount,
            razorpayPaymentId: `pending_${order.id}`, // Globally unique placeholder
            razorpayOrderId: order.id,
            status: "PENDING",
          }
        }
      },
    });

    // 9. Send the Order ID back to the client
    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
      },
    });
  } catch (error) {
    console.error("Create Order Error:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 },
    );
  }
}
