'use client';

import { useState } from 'react';
import { checkoutOneTime } from '@/lib/checkout';
import { Plan } from '@prisma/client';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';

// --- Validation helpers ---
const VALIDATORS: Record<string, { test: (v: string) => boolean; message: string }> = {
  name: {
    test: (v) => v.trim().length >= 2,
    message: 'Name must be at least 2 characters',
  },
  email: {
    test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
    message: 'Please enter a valid email address',
  },
  phone: {
    test: (v) => /^\+?[0-9]{10,15}$/.test(v),
    message: 'Please enter a valid 10-digit mobile number',
  },
  company: {
    test: (v) => v.trim().length >= 2,
    message: 'Shop / Company name must be at least 2 characters',
  },
};

export default function CheckoutClient({ plan }: { plan: Plan }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    gstNumber: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  // Calculate GST for display only (Backend does actual calculation)
  const basePriceRupees = plan.licensePrice / 100;
  const gstAmountRupees = basePriceRupees * 0.18;
  const totalAmountRupees = basePriceRupees + gstAmountRupees;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field as user types
    if (touched[name]) {
      setTouched((prev) => ({ ...prev, [name]: true }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const getFieldError = (field: string): string | null => {
    if (!touched[field]) return null;
    const validator = VALIDATORS[field];
    if (!validator) return null;
    return validator.test(formData[field as keyof typeof formData]) ? null : validator.message;
  };

  const isFormValid = (): boolean => {
    return Object.keys(VALIDATORS).every((field) =>
      VALIDATORS[field].test(formData[field as keyof typeof formData])
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Touch all required fields to show validation
    const allTouched: Record<string, boolean> = {};
    Object.keys(VALIDATORS).forEach((k) => (allTouched[k] = true));
    setTouched(allTouched);

    if (!isFormValid()) return;

    setLoading(true);
    setErrorMessage(null);

    await checkoutOneTime({
      planSlug: plan.slug,
      customerName: formData.name,
      customerEmail: formData.email,
      customerPhone: formData.phone,
      company: formData.company,
      gstNumber: formData.gstNumber,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.pincode,
      paymentFor: 'LICENSE',
      onVerifyStart: () => {
        setVerifying(true);
      },
      onSuccess: (orderId?: string) => {
        // Redirect to persistent success page
        const orderParam = orderId || '';
        router.push(`/checkout/success?order_id=${orderParam}`);
      },
      onError: (error: string) => {
        setErrorMessage(error);
        setLoading(false);
      },
    });
  };

  const inputClasses = (field: string) => {
    const error = getFieldError(field);
    return `w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 bg-white text-gray-900 ${
      error
        ? 'border-red-300 focus:ring-red-200 focus:border-red-400'
        : 'border-gray-200 focus:ring-[#C6A87C]/50 focus:border-[#C6A87C]'
    }`;
  };

  return (
    <>
      {/* Load Razorpay SDK only on checkout page */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left Column: Form or Verification Screen */}
        <div className="flex-1 order-2 lg:order-1">
          {verifying ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-12 shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center min-h-[500px]"
            >
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <Check className="w-10 h-10 text-green-500" />
              </div>
              <h2 className="text-3xl font-serif text-[#1A1A1A] mb-4">Payment Successful!</h2>
              <p className="text-gray-500 text-lg mb-8 max-w-md">
                Please wait while we securely verify your payment, generate your license, and configure your dashboard.
              </p>
              
              <div className="flex items-center space-x-3 text-[#C6A87C] font-medium bg-[#FAF9F6] px-6 py-3 rounded-full">
                <div className="w-5 h-5 border-2 border-[#C6A87C] border-t-transparent rounded-full animate-spin"></div>
                <span>Securing your account... Do not close this tab.</span>
              </div>
            </motion.div>
          ) : (
            <>
              <Link href="/pricing" className="inline-flex items-center text-sm text-gray-500 hover:text-[#1A1A1A] mb-8 font-semibold transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Plans
              </Link>

          <h2 className="text-3xl font-serif text-[#2C2C2C] mb-2">Business Details</h2>
          <p className="text-gray-500 mb-8 text-sm">Please provide your details to complete the purchase and generate your tax invoice.</p>

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} onBlur={handleBlur} className={inputClasses('name')} />
                {getFieldError('name') && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{getFieldError('name')}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} onBlur={handleBlur} className={inputClasses('email')} />
                {getFieldError('email') && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{getFieldError('email')}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Phone Number *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} onBlur={handleBlur} className={inputClasses('phone')} />
                {getFieldError('phone') && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{getFieldError('phone')}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Shop / Company Name *</label>
                <input type="text" name="company" value={formData.company} onChange={handleInputChange} onBlur={handleBlur} className={inputClasses('company')} />
                {getFieldError('company') && <p className="text-xs text-red-500 mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{getFieldError('company')}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">GST Number (Optional)</label>
              <input type="text" name="gstNumber" value={formData.gstNumber} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6A87C]/50 bg-white text-gray-900 uppercase" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Address (Optional)</label>
              <input type="text" name="address" value={formData.address} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6A87C]/50 bg-white text-gray-900" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">City (Optional)</label>
                <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6A87C]/50 bg-white text-gray-900" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">State (Optional)</label>
                <input type="text" name="state" value={formData.state} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6A87C]/50 bg-white text-gray-900" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">Pincode (Optional)</label>
                <input type="text" name="pincode" value={formData.pincode} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#C6A87C]/50 bg-white text-gray-900" />
              </div>
            </div>

            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-4 rounded-xl text-sm font-bold tracking-widest uppercase transition-all duration-300 flex justify-center items-center shadow-lg bg-[#1A1A1A] text-white hover:bg-black hover:scale-[1.02] ${loading ? 'opacity-70 cursor-not-allowed scale-100' : ''}`}
              >
                {loading ? <span className="animate-pulse">Processing...</span> : 'Proceed to Payment'}
              </button>
            </div>
          </form>
            </>
          )}
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:w-[400px] order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32"
          >
            <h3 className="text-xl font-serif text-[#2C2C2C] mb-6 flex items-center gap-3">
              <span className="w-6 h-px bg-[#C6A87C]"></span>
              Order Summary
            </h3>

            <div className="mb-6">
              <h4 className="font-bold text-[#1A1A1A] text-lg">{plan.name}</h4>
              <p className="text-sm text-gray-500 mt-1">{plan.description}</p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Base License Price</span>
                <span className="font-semibold text-[#1A1A1A]">{formatPrice(basePriceRupees)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">GST (18%)</span>
                <span className="font-semibold text-[#1A1A1A]">{formatPrice(gstAmountRupees)}</span>
              </div>
            </div>

            <div className="w-full h-px bg-gray-100 mb-6" />

            <div className="flex justify-between items-center mb-8">
              <span className="font-bold text-[#1A1A1A] uppercase tracking-wider text-sm">Total Payable</span>
              <span className="text-2xl font-bold text-[#C6A87C]">{formatPrice(totalAmountRupees)}</span>
            </div>

            <div className="bg-[#FAF9F6] p-4 rounded-xl text-xs text-gray-500 leading-relaxed">
              <span className="font-bold text-[#1A1A1A] flex items-center mb-1">
                <Check className="w-3 h-3 mr-1 text-[#C6A87C]" /> Secure Payment
              </span>
              Payments are processed securely via Razorpay. Your tax invoice will be generated and emailed to you immediately after successful payment.
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
