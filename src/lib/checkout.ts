interface CheckoutOptions {
  planSlug: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  company: string;
  gstNumber?: string;
  address?: string;
  city?: string;
  state?: string;
  pincode?: string;
  paymentFor: 'LICENSE';
  onSuccess?: (orderId?: string) => void;
  onError?: (error: string) => void;
}

// Friendly error message mapping
const ERROR_MESSAGES: Record<string, string> = {
  'Missing required fields': 'Please fill in all required fields marked with *',
  'Invalid email format': 'Please enter a valid email address (e.g., name@example.com)',
  'Invalid phone format': 'Please enter a valid 10-digit mobile number',
  'Field length exceeded max limits': 'Name or company name is too long (max 100 characters)',
  'Plan not found': 'This plan is no longer available. Please go back and select another.',
  'Too many requests, please try again later': 'You\'re trying too fast. Please wait a minute and try again.',
  'You already have an active license for this plan.': 'You already own this plan! Check your email for login details.',
  'This phone number is already associated with an active account.': 'This phone number is already registered. Please use a different number or contact support.',
  'This new phone number is already associated with another active account.': 'This phone number is already in use by another account.',
  'Failed to create order': 'Something went wrong on our end. Please try again in a moment.',
  'Payment verification failed': 'We couldn\'t verify your payment. If money was deducted, it will be refunded automatically. Please contact support.',
};

function friendlyError(backendMessage: string): string {
  return ERROR_MESSAGES[backendMessage] || backendMessage;
}

/**
 * Wait for the Razorpay SDK to be available on window.
 * Returns true if loaded, false if timed out.
 */
function waitForRazorpay(timeoutMs = 10000): Promise<boolean> {
  return new Promise((resolve) => {
    if ((window as any).Razorpay) {
      resolve(true);
      return;
    }

    const interval = 100;
    let elapsed = 0;
    const timer = setInterval(() => {
      elapsed += interval;
      if ((window as any).Razorpay) {
        clearInterval(timer);
        resolve(true);
      } else if (elapsed >= timeoutMs) {
        clearInterval(timer);
        resolve(false);
      }
    }, interval);
  });
}

/**
 * Handle a one-time payment checkout via Razorpay
 */
export async function checkoutOneTime(options: CheckoutOptions) {
  try {
    // 1. Create Order on our backend
    const orderRes = await fetch('/api/payments/create-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(options),
    });
    
    if (!orderRes.ok) {
      const errorData = await orderRes.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to create order');
    }
    const orderData = await orderRes.json();

    // 2. Wait for Razorpay SDK to load
    const sdkReady = await waitForRazorpay();
    if (!sdkReady) {
      throw new Error('Payment gateway is taking too long to load. Please check your internet connection and refresh the page.');
    }

    // 3. Open Razorpay Checkout Modal
    const rzpOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'DMD Gold',
      description: `License Payment for ${options.planSlug}`,
      order_id: orderData.orderId,
      prefill: {
        name: orderData.customer.name,
        email: orderData.customer.email,
        contact: orderData.customer.phone,
      },
      theme: {
        color: '#1A1A1A',
      },
      config: {
        display: {
          hide: [
            { method: 'wallet' },
            { method: 'paylater' }
          ]
        }
      },
      modal: {
        ondismiss: function () {
          options.onError?.('Payment cancelled. You can try again when ready.');
        },
      },
      handler: async function (response: any) {
        // 4. Verify Payment securely on our backend
        const verifyRes = await fetch('/api/payments/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });

        if (verifyRes.ok) {
          const data = await verifyRes.json();
          // Pass the order ID so the UI can redirect to the success page
          options.onSuccess?.(data.razorpayOrderId || response.razorpay_order_id);
        } else {
          const errorData = await verifyRes.json().catch(() => ({}));
          options.onError?.(friendlyError(errorData.error || 'Payment verification failed'));
        }
      },
    };

    const rzp = new (window as any).Razorpay(rzpOptions);
    rzp.on('payment.failed', function (response: any) {
      options.onError?.(response.error.description);
    });
    rzp.open();
  } catch (error: any) {
    options.onError?.(friendlyError(error.message));
  }
}
