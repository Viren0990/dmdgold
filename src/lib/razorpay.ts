import Razorpay from 'razorpay';
import crypto from 'crypto';

// ============================================
// RAZORPAY INSTANCE (Server-Side Only)
// ============================================

export const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

// ============================================
// SIGNATURE VERIFICATION
// ============================================

/**
 * Verify the signature for a standard one-time payment.
 * Razorpay sends: razorpay_order_id|razorpay_payment_id
 */
export function verifyPaymentSignature(
  orderId: string,
  paymentId: string,
  signature: string
): boolean {
  const body = `${orderId}|${paymentId}`;
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
    .update(body)
    .digest('hex');

  try {
    return crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(signature)
    );
  } catch {
    return false;
  }
}

/**
 * Verify Webhook Signature.
 * Razorpay sends: webhook payload body as string
 */
export function verifyWebhookSignature(
  body: string,
  signature: string
): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
    .update(body)
    .digest('hex');

  try {
    return crypto.timingSafeEqual(
      Buffer.from(expectedSignature),
      Buffer.from(signature)
    );
  } catch {
    return false;
  }
}

// ============================================
// HELPER: Convert rupees to paise
// ============================================

export function toPaise(rupees: number): number {
  return Math.round(rupees * 100);
}

export function toRupees(paise: number): number {
  return paise / 100;
}
