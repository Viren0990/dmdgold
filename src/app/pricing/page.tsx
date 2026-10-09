import { Metadata } from 'next';
import PricingContent from './PricingClient';

export const metadata: Metadata = {
  title: 'Pricing — Jewellery Software from ₹6,000/year',
  description: 'DMD Gold Retailer Edition ₹6,000/year and Wholesaler Edition ₹12,000/year, full support included. Billing, HUID stock, karigar tracking, e-invoice and B2B wholesale orders.',
  alternates: {
    canonical: 'https://www.dmdgold.com/pricing',
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
