import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyWebhookSignature } from '@/lib/razorpay';

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get('x-razorpay-signature');

    if (!signature || !verifyWebhookSignature(rawBody, signature)) {
      return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 400 });
    }

    const event = JSON.parse(rawBody);

    switch (event.event) {
      case 'payment.captured': {
        const payment = event.payload.payment.entity;
        
        const dbPayment = await prisma.payment.findFirst({
          where: { razorpayOrderId: payment.order_id },
        });

        if (dbPayment?.webhookEventId === event.id) {
          return NextResponse.json({ success: true, message: 'Already processed' });
        }

        if (dbPayment && dbPayment.status !== 'CAPTURED') {
          const { count } = await prisma.payment.updateMany({
            where: { id: dbPayment.id, status: { not: 'CAPTURED' } },
            data: {
              status: 'CAPTURED',
              capturedAt: new Date(),
              razorpayPaymentId: payment.id,
              razorpayMethod: payment.method,
              webhookVerified: true,
              webhookEventId: event.id,
            },
          });

          if (count > 0) {
            await prisma.purchase.updateMany({
              where: { id: dbPayment.purchaseId, status: { not: 'PAID' } },
              data: {
                status: 'PAID',
                amountPaid: payment.amount,
              },
            });
          }
        }
        break;
      }
      

      case 'payment.failed': {
        const payment = event.payload.payment.entity;
        const dbPayment = await prisma.payment.findFirst({
          where: { razorpayOrderId: payment.order_id },
        });

        if (dbPayment?.webhookEventId === event.id) {
          return NextResponse.json({ success: true, message: 'Already processed' });
        }

        if (dbPayment && dbPayment.status !== 'FAILED') {
          const { count } = await prisma.payment.updateMany({
            where: { id: dbPayment.id, status: { not: 'FAILED' } },
            data: {
              status: 'FAILED',
              failureReason: payment.error_description || 'Payment failed',
              webhookVerified: true,
              webhookEventId: event.id,
            },
          });

          if (count > 0) {
            await prisma.purchase.updateMany({
              where: { id: dbPayment.purchaseId, status: { not: 'FAILED' } },
              data: {
                status: 'FAILED',
              },
            });
          }
        }
        break;
      }
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Webhook Error:', error);
    
    if (error?.code === 'P2002') {
      console.log('Webhook already processed (caught P2002)');
      return NextResponse.json({ success: true, message: 'Already processed' }, { status: 200 });
    }

    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}
