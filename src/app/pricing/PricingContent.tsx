'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

// --- DATA: PLANS ---
const plans = [
    {
        name: "Showroom Essential",
        description: "Perfect for single-store retailers starting their digital journey.",
        price: "₹2,499",
        period: "/month",
        features: [
            "Smart Billing & Invoicing",
            "Barcode Inventory Tracking",
            "Daily Gold Rate Integration",
            "Basic Sales Reports",
            "Single User Access"
        ],
        cta: "Start Free Trial",
        popular: false
    },
    {
        name: "Business Pro",
        description: "Advanced tools for growing jewelers who need speed & accuracy.",
        price: "₹4,999",
        period: "/month",
        features: [
            "Everything in Essential",
            "RFID Integration Support",
            "Karigar & Manufacturing Module",
            "CRM & Customer Loyalty",
            "WhatsApp Notifications",
            "Up to 5 Users"
        ],
        cta: "Get Started",
        popular: true
    },
    {
        name: "Enterprise Chain",
        description: "Complete control for multi-branch brands and wholesalers.",
        price: "Custom",
        period: "",
        features: [
            "Everything in Pro",
            "Multi-Branch Sync",
            "Head Office Dashboard",
            "API Access for E-commerce",
            "Dedicated Account Manager",
            "Unlimited Users"
        ],
        cta: "Contact Sales",
        popular: false
    }
];

// --- COMPONENT: PRICING CARD ---
const PricingCard = ({ plan }: { plan: any }) => (
    <div
        className={`
      relative p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2
      ${plan.popular
                ? 'bg-[#2C2C2C] border-[#C6A87C] shadow-2xl shadow-[#C6A87C]/20 text-white'
                : 'bg-white border-gray-100 shadow-xl hover:shadow-2xl text-[#2C2C2C]'
            }
    `}
    >
        {plan.popular && (
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#C6A87C] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1 rounded-full shadow-lg">
                Most Popular
            </div>
        )}

        <div className="space-y-4 mb-8">
            <h3 className={`text-xl font-serif ${plan.popular ? 'text-[#C6A87C]' : 'text-[#2C2C2C]'}`}>
                {plan.name}
            </h3>
            <p className={`text-sm leading-relaxed ${plan.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                {plan.description}
            </p>
        </div>

        <div className="mb-8">
            <span className="text-4xl font-serif font-bold">{plan.price}</span>
            <span className={`text-sm ${plan.popular ? 'text-gray-500' : 'text-gray-400'}`}>{plan.period}</span>
        </div>

        {/* Feature List */}
        <ul className="space-y-4 mb-8">
            {plan.features.map((feature: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                    <svg
                        className={`w-5 h-5 shrink-0 ${plan.popular ? 'text-[#C6A87C]' : 'text-green-600'}`}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.popular ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                </li>
            ))}
        </ul>

        {/* CTA Button */}
        <button
            className={`
        w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs transition-colors
        ${plan.popular
                    ? 'bg-[#C6A87C] text-white hover:bg-white hover:text-[#2C2C2C]'
                    : 'bg-[#FAF9F6] text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-white'
                }
      `}
        >
            {plan.cta}
        </button>
    </div>
);

// --- COMPONENT: COMPARISON TABLE ---
const ComparisonTable = () => (
    <div className="w-full overflow-x-auto">
        <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b border-gray-100">
                    <th className="py-6 px-4 text-sm font-bold text-gray-400 uppercase tracking-widest">Features</th>
                    <th className="py-6 px-4 text-center font-serif text-[#2C2C2C]">Essential</th>
                    <th className="py-6 px-4 text-center font-serif text-[#C6A87C]">Business Pro</th>
                    <th className="py-6 px-4 text-center font-serif text-[#2C2C2C]">Enterprise</th>
                </tr>
            </thead>
            <tbody className="text-sm text-gray-600 divide-y divide-gray-50">
                {[
                    ["Billing & Invoicing", true, true, true],
                    ["RFID Scanning", false, true, true],
                    ["Multi-Branch Sync", false, false, true],
                    ["Mobile App Access", "Read Only", "Full Access", "Full Access"],
                    ["Support Level", "Email", "Priority Chat", "Dedicated Mgr"],
                ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4 font-medium text-[#2C2C2C]">{row[0]}</td>
                        <td className="py-4 px-4 text-center">
                            {typeof row[1] === 'boolean' ? (
                                row[1] ? <span className="text-green-500">●</span> : <span className="text-gray-200">−</span>
                            ) : row[1]}
                        </td>
                        <td className="py-4 px-4 text-center bg-[#FAF9F6]">
                            {typeof row[2] === 'boolean' ? (
                                row[2] ? <span className="text-[#C6A87C]">●</span> : <span className="text-gray-200">−</span>
                            ) : row[2]}
                        </td>
                        <td className="py-4 px-4 text-center">
                            {typeof row[3] === 'boolean' ? (
                                row[3] ? <span className="text-green-500">●</span> : <span className="text-gray-200">−</span>
                            ) : row[3]}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default function PricingContent() {
    const [showComparison, setShowComparison] = useState(false);
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    return (
        <main className="w-full bg-[#FAF9F6]">
            <Navbar />

            {/* 1. HEADER (Fixed pt-32 for better spacing) */}
            <section className="pt-32 pb-12 px-6 md:px-12 text-center">
                <div className="max-w-4xl mx-auto space-y-6">
                    <h2 className="text-[#C6A87C] text-xs font-bold tracking-[0.3em] uppercase">
                        Membership Plans
                    </h2>
                    <h1 className="text-5xl md:text-6xl font-serif text-[#2C2C2C]">
                        Choose Your <span className="italic text-[#C6A87C]">Tier</span>
                    </h1>
                    <p className="text-gray-500 text-lg">
                        Transparent pricing with no hidden fees. Upgrade or downgrade at any time.
                    </p>
                </div>

                {/* Billing Toggle */}
                <div className="flex justify-center items-center gap-4 mt-12">
                    <span className={`text-sm font-bold tracking-widest uppercase ${billingCycle === 'monthly' ? 'text-[#2C2C2C]' : 'text-gray-400'}`}>Monthly</span>
                    <button
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                        className="w-16 h-8 bg-gray-200 rounded-full relative transition-colors duration-300 focus:outline-none"
                    >
                        <div className={`absolute top-1 w-6 h-6 bg-[#C6A87C] rounded-full shadow-md transition-all duration-300 ${billingCycle === 'monthly' ? 'left-1' : 'left-9'}`} />
                    </button>
                    <span className={`text-sm font-bold tracking-widest uppercase ${billingCycle === 'yearly' ? 'text-[#2C2C2C]' : 'text-gray-400'}`}>Yearly <span className="text-[#C6A87C] text-[10px] ml-1">(Save 20%)</span></span>
                </div>
            </section>

            {/* 2. PRICING CARDS */}
            <section className="pb-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, i) => (
                        <PricingCard key={i} plan={plan} />
                    ))}
                </div>
            </section>

            {/* 3. COMPARISON TOGGLE */}
            <section className="pb-24 px-6 md:px-12">
                <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                    <button
                        onClick={() => setShowComparison(!showComparison)}
                        className="w-full py-6 px-8 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-serif text-xl text-[#2C2C2C]">Compare All Features</span>
                        <svg
                            className={`w-6 h-6 text-[#C6A87C] transition-transform duration-300 ${showComparison ? 'rotate-180' : ''}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Fixed max-h for smoother animation */}
                    <div className={`transition-all duration-500 ease-in-out ${showComparison ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <ComparisonTable />
                    </div>
                </div>
            </section>

            {/* 4. FOOTER CTA */}
            <div className="bg-white">
                <Contact />
            </div>

            <Footer />
        </main>
    );
}
