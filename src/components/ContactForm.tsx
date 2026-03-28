'use client';

import React, { useState } from 'react';

export default function ContactForm() {
  const [formState, setFormState] = useState({ Name: '', Business: '', Phone: '', Email: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch('/api/contact', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormState({ Name: '', Business: '', Phone: '', Email: '' });
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 min-h-[300px]">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-2xl font-serif text-[#2C2C2C]">Message Received</h3>
        <p className="text-gray-500">We will be in touch shortly.</p>
        <button onClick={() => setStatus('idle')} className="text-[#C6A87C] font-bold text-sm uppercase tracking-widest mt-4">Send Another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
  );
}
