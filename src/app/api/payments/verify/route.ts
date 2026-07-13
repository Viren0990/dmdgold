import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyPaymentSignature, razorpay } from '@/lib/razorpay';

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      await req.json();

    // 1. Verify the cryptographic signature
    const isValid = verifyPaymentSignature(
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature
    );

    if (!isValid) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // 2. Find the purchase and payment in our DB
    const purchase = await prisma.purchase.findUnique({
      where: { razorpayOrderId: razorpay_order_id },
      include: { payments: true },
    });

    if (!purchase) {
      return NextResponse.json({ error: 'Purchase not found' }, { status: 404 });
    }

    // 3. Verify the amount explicitly with Razorpay API (prevent partial capture attacks)
    const rzpPayment = await razorpay.payments.fetch(razorpay_payment_id);
    
    if (rzpPayment.amount !== purchase.totalAmount) {
      return NextResponse.json({ error: 'Amount mismatch' }, { status: 400 });
    }

    // Accept 'captured' (auto-capture done) or 'authorized' (auto-capture pending)
    // If authorized, the webhook will confirm the final capture shortly.
    if (rzpPayment.status !== 'captured' && rzpPayment.status !== 'authorized') {
       return NextResponse.json({ error: 'Payment not captured' }, { status: 400 });
    }

    // 4. Update the database securely
    await prisma.$transaction([
      prisma.purchase.update({
        where: { id: purchase.id },
        data: {
          status: 'PAID',
          amountPaid: purchase.totalAmount, // Fully paid
          activatedAt: new Date(),
        },
      }),
      prisma.payment.updateMany({
        where: { razorpayOrderId: razorpay_order_id },
        data: {
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,
          status: 'CAPTURED',
          capturedAt: new Date(),
        },
      }),
    ]);

    return NextResponse.json({ 
      success: true, 
      message: 'Payment verified successfully',
      razorpayOrderId: razorpay_order_id,
    });
  } catch (error) {
    console.error('Verify Payment Error:', error);
    return NextResponse.json({ error: 'Failed to verify payment' }, { status: 500 });
  }
}
