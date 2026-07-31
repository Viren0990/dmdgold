'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactForm() {
  const router = useRouter();
  const [formState, setFormState] = useState({ Name: '', Business: '', BusinessType: '', Phone: '', Email: '', City: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [businessSelect, setBusinessSelect] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

      {businessSelect !== 'Other' ? (
        <div className="relative group" ref={dropdownRef}>
          <div 
            className={`w-full bg-transparent border-b border-gray-300 py-3 cursor-pointer flex items-center justify-between transition-colors ${isDropdownOpen ? 'border-[#C6A87C]' : ''}`}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className={`text-[#2C2C2C] ${businessSelect ? 'opacity-100' : 'opacity-0'}`}>
              {businessSelect || 'Placeholder'}
            </span>
          </div>
          
          <label 
            className={`absolute left-0 transition-all pointer-events-none ${
              businessSelect || isDropdownOpen
                ? '-top-4 text-xs text-[#C6A87C]' 
                : 'top-3 text-sm text-gray-400'
            }`}
          >
            Business Type *
          </label>
          <div className="absolute right-0 top-3 pointer-events-none text-gray-400 transition-transform duration-200" style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          
          {isDropdownOpen && (
            <div className="absolute left-0 top-full mt-1 w-full bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[100]">
              {['Retailer', 'Wholesaler', 'Other'].map((option) => (
                <div 
                  key={option}
                  className="px-4 py-3 cursor-pointer transition-colors text-sm text-[#2C2C2C] hover:bg-gray-50"
                  onClick={() => {
                    setBusinessSelect(option);
                    setIsDropdownOpen(false);
                    if (option !== 'Other') {
                      setFormState({ ...formState, BusinessType: option });
                    } else {
                      setFormState({ ...formState, BusinessType: '' });
                    }
                  }}
                >
                  {option === 'Other' ? 'Other (Type your own)' : option}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="relative flex items-end gap-2">
          <div className="relative flex-1 group">
            <input 
              type="text" 
              name="BusinessType" 
              required 
              value={formState.BusinessType} 
              className="w-full bg-transparent border-b border-gray-300 py-3 text-[#2C2C2C] focus:outline-none focus:border-[#C6A87C] transition-colors peer"
              placeholder=" " 
              onChange={handleChange} 
              autoFocus
            />
            <label className="absolute left-0 top-3 text-gray-400 text-sm transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-[#C6A87C] peer-not-placeholder-shown:-top-4 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-[#C6A87C]">
              Specify Business Type *
            </label>
          </div>
          <button 
            type="button"
            onClick={() => {
              setBusinessSelect('');
              setFormState({ ...formState, BusinessType: '' });
            }}
            className="p-2 mb-1 rounded-full text-gray-400 hover:text-[#2C2C2C] hover:bg-gray-100 transition-all"
            title="Back to options"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>
      )}

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
