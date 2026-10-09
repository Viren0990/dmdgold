import { Metadata } from 'next';
import FeaturePageView, { featureMetadata } from '@/components/FeaturePageView';
import { getFeaturePage } from '@/lib/featurePages';

const page = getFeaturePage('jewellery-software-pune')!;

export const metadata: Metadata = featureMetadata(page);

export default function JewellerySoftwarePunePage() {
  return <FeaturePageView page={page} />;
}
