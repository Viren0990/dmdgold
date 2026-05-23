import { Metadata } from 'next';
import PricingContent from './PricingContent';

export const metadata: Metadata = {
  title: 'Pricing Plans',
  description: 'Choose the perfect DMD Gold plan for your jewelry business. Transparent pricing for premium features.',
};

export default function PricingPage() {
  return <PricingContent />;
}