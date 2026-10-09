import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import FeaturePageView, { featureMetadata } from '@/components/FeaturePageView';
import { featurePages, getFeaturePage } from '@/lib/featurePages';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return featurePages
    .filter((p) => p.path.startsWith('/features/') && !p.customPage)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getFeaturePage((await params).slug);
  return page ? featureMetadata(page) : {};
}

export default async function FeatureRoute({ params }: Props) {
  const page = getFeaturePage((await params).slug);
  if (!page || !page.path.startsWith('/features/')) notFound();
  return <FeaturePageView page={page} />;
}
