import { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Pricing Plans — Affordable Jewellery Software for Every Business Size',
  description: 'Transparent pricing for DMD Gold jewellery software. Plans for small jewellery shops, multi-branch retailers, and B2B wholesalers across India. Start with a free demo — no commitment required.',
  alternates: {
    canonical: 'https://www.dmdgold.com/plans',
  },
  keywords: ['jewellery software pricing', 'jewellery software plans india', 'affordable jewellery ERP', 'gold shop software price', 'jewellery billing software cost'],
};

export default function PricingPage() {
  return <PricingContent />;
}