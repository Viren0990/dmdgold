'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const [formState, setFormState] = useState({ Name: '', Business: '', Phone: '', Email: '', City: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // Optimistic submission - fire and forget with keepalive so it finishes in background
      fetch('/api/contact', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState),
        keepalive: true
      }).catch(console.error);

      // Immediately redirect using hard navigation to prevent UI stuck in 'submitting' state
      window.location.href = '/thank-you';
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

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
          value={formState.Email}
          className="w-full bg-transparent border-b border-gray-300 py-3 text-[#2C2C2C] focus:outline-none focus:border-[#C6A87C] transition-colors peer"
          placeholder=" "
          onChange={handleChange}
        />
        <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C6A87C] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#C6A87C]">
          Email Address (Optional)
        </label>
      </div>

      <div className="relative group">
        <input 
          type="text" 
          name="City"
          value={formState.City}
          className="w-full bg-transparent border-b border-gray-300 py-3 text-[#2C2C2C] focus:outline-none focus:border-[#C6A87C] transition-colors peer"
          placeholder=" "
          onChange={handleChange}
        />
        <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C6A87C] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#C6A87C]">
          City (Optional)
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
