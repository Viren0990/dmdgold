'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ Name: '', Business: '', Phone: '', Email: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  // YOUR GOOGLE SCRIPT URL HERE
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxeEmbIAVjy1j9agw5IcLsCQo3OWsXB6mKxNsmlTl_H1aXUBDlixG5BOxQzMaszjbqwKw/exec";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Note: Keys must match Google Sheet Headers exactly
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData();
    formData.append('Name', formState.Name);
    formData.append('Business', formState.Business);
    formData.append('Phone', formState.Phone);
    formData.append('Email', formState.Email);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors" // Important for Google Sheets
      });
      setStatus('success');
      setFormState({ Name: '', Business: '', Phone: '', Email: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-white -mt-12 z-40 py-24 px-6 md:px-12 shadow-[0_-50px_100px_rgba(0,0,0,0.1)] scroll-mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* LEFT SIDE (Same as before) */}
        <div className="flex-1 space-y-8">
           {/* ... (Your existing text code) ... */}
           <div>
            <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              Get Started
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] leading-tight">
              Ready to <span className="italic text-[#C6A87C]">Transform</span> Your Jewelry Business?
            </h3>
          </div>
          <p className="text-gray-500 leading-relaxed">
            Book a personalized demo with our experts.
          </p>
        </div>

        {/* RIGHT SIDE: FORM */}
        <div className="flex-1 bg-[#FAF9F6] p-8 md:p-12 rounded-3xl border border-[#C6A87C]/10">
          
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-2xl font-serif text-[#2C2C2C]">Message Received</h3>
              <p className="text-gray-500">We will be in touch shortly.</p>
              <button onClick={() => setStatus('idle')} className="text-[#C6A87C] font-bold text-sm uppercase tracking-widest mt-4">Send Another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Note: name prop must match Sheet Header + state key */}
              
              <div className="relative group">
                <input 
                  type="text" 
                  name="Name"
                  required
                  value={formState.Name}
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-[#2C2C2C] focus:outline-none focus:border-[#C6A87C] transition-colors peer"
                  placeholder=" " 
                  onChange={handleChange}
                />
                <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C6A87C] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#C6A87C]">
                  Your Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="text" 
                  name="Business"
                  required
                  value={formState.Business}
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-[#2C2C2C] focus:outline-none focus:border-[#C6A87C] transition-colors peer"
                  placeholder=" "
                  onChange={handleChange}
                />
                <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C6A87C] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#C6A87C]">
                  Jewelry Business Name
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  name="Email"
                  required
                  value={formState.Email}
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-[#2C2C2C] focus:outline-none focus:border-[#C6A87C] transition-colors peer"
                  placeholder=" "
                  onChange={handleChange}
                />
                <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C6A87C] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#C6A87C]">
                  Email Address
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="tel" 
                  name="Phone"
                  required
                  value={formState.Phone}
                  className="w-full bg-transparent border-b border-gray-300 py-3 text-[#2C2C2C] focus:outline-none focus:border-[#C6A87C] transition-colors peer"
                  placeholder=" "
                  onChange={handleChange}
                />
                <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C6A87C] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#C6A87C]">
                  Phone Number
                </label>
              </div>

              <button 
                disabled={status === 'submitting'}
                className="w-full bg-[#2C2C2C] text-white py-4 rounded-full font-bold uppercase tracking-widest hover:bg-[#C6A87C] transition-colors duration-300 mt-6 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Schedule My Demo'}
              </button>

            </form>
          )}
        </div>
      </div>
    </section>
  );
}