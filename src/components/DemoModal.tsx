'use client';

import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';

export default function DemoModal() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsPopupOpen(true);
    window.addEventListener('open-demo-modal', handleOpenModal);
    return () => window.removeEventListener('open-demo-modal', handleOpenModal);
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPopupOpen]);

  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 text-left">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-sm cursor-pointer"
        onClick={() => setIsPopupOpen(false)}
      />
      
      {/* Popup Content */}
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[90vh]">
        {/* Form Side */}
        <div className="flex-1 p-8 md:p-12 overflow-y-auto scrollbar-hide">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-3xl font-serif text-[#2C2C2C]">Book a Demo</h3>
              <p className="text-gray-500 mt-2">See how DMD Gold can transform your business.</p>
            </div>
            <button 
              onClick={() => setIsPopupOpen(false)} 
              className="text-gray-400 hover:text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ContactForm />
        </div>
        
        {/* Direct Contact Side */}
        <div className="hidden md:flex md:w-[40%] bg-[#FAF9F6] p-8 md:p-12 flex-col justify-center border-t md:border-t-0 md:border-l border-gray-200">
          <h4 className="text-[#C6A87C] text-xs font-bold uppercase tracking-widest mb-6">Contact Us Directly</h4>
          <div className="space-y-8 text-sm text-[#2C2C2C]">
            <div>
              <div className="font-bold mb-2 flex items-center gap-2">
                <span className="text-[#C6A87C] text-lg">📍</span> Address
              </div>
              <div className="text-gray-500 leading-snug">Office No-01, Amaryllis Domkhel Rd,<br />Wagholi, Pune, Maharashtra 412207</div>
            </div>
            <div>
              <div className="font-bold mb-2 flex items-center gap-2">
                <span className="text-[#C6A87C] text-lg">📞</span> Phone
              </div>
              <div className="text-gray-500">+91 9371123699</div>
            </div>
            <div>
              <div className="font-bold mb-2 flex items-center gap-2">
                <span className="text-[#C6A87C] text-lg">✉️</span> Email
              </div>
              <div className="text-gray-500">info@dmdgold.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
