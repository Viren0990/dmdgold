'use client';

import { useState, useEffect } from 'react';
import { checkoutOneTime } from '@/lib/checkout';
import { Plan } from '@prisma/client';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, AlertCircle, Plus, Minus } from 'lucide-react';
import Link from 'next/link';
import Script from 'next/script';
import { useRouter } from 'next/navigation';
import { ACCESSORIES } from '@/lib/constants';

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

  // Warm up the serverless function as soon as the checkout page loads.
  // While the user fills in their name/email/phone (~30-60s), the function boots up
  // silently in the background so it responds instantly when they click "Pay Now".
  useEffect(() => {
    fetch('/api/payments/create-order', { method: 'GET' }).catch(() => {});
  }, []);

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

  // Accessories State
  const [selectedAccessories, setSelectedAccessories] = useState<Record<string, number>>({});

  const handleAccessoryChange = (id: string, delta: number) => {
    setSelectedAccessories((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      const updated = { ...prev };
      if (next === 0) {
        delete updated[id];
      } else {
        updated[id] = next;
      }
      return updated;
    });
  };

  // Calculate Totals dynamically
  const accessoryTotalPaise = Object.entries(selectedAccessories).reduce((total, [id, qty]) => {
    const acc = ACCESSORIES.find(a => a.id === id);
    return total + (acc ? acc.pricePaise * qty : 0);
  }, 0);

  const basePriceRupees = plan.licensePrice / 100;
  const accessoryTotalRupees = accessoryTotalPaise / 100;
  const totalBaseRupees = basePriceRupees + accessoryTotalRupees;
  
  const gstAmountRupees = totalBaseRupees * 0.18;
  const totalAmountRupees = totalBaseRupees + gstAmountRupees;

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
      accessories: selectedAccessories,
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
      {/* Load Razorpay SDK as soon as page hydrates so it's ready for the button click */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
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

            {plan.slug === 'retail-pro' && (
              <div className="pt-8 border-t border-gray-100">
                <h3 className="text-lg font-serif text-[#2C2C2C] mb-1">Optional Hardware & Accessories</h3>
                <p className="text-xs text-gray-500 mb-6">Equip your shop with fully compatible DMD accessories.</p>
                <div className="space-y-4">
                  {ACCESSORIES.map(acc => {
                    const qty = selectedAccessories[acc.id] || 0;
                    return (
                      <div key={acc.id} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-50 transition-colors">
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{acc.name}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{formatPrice(acc.pricePaise / 100)} {acc.unit}</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            type="button" 
                            onClick={() => handleAccessoryChange(acc.id, -1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#C6A87C] hover:border-[#C6A87C] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-4 text-center text-sm font-bold text-gray-900">{qty}</span>
                          <button 
                            type="button" 
                            onClick={() => handleAccessoryChange(acc.id, 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-gray-200 text-gray-600 hover:text-[#C6A87C] hover:border-[#C6A87C] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

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
                <span className="text-gray-500">Software License</span>
                <span className="font-semibold text-[#1A1A1A]">{formatPrice(basePriceRupees)}</span>
              </div>
              
              {accessoryTotalRupees > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Hardware Accessories</span>
                  <span className="font-semibold text-[#1A1A1A]">{formatPrice(accessoryTotalRupees)}</span>
                </div>
              )}

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
