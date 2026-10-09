import { MetadataRoute } from 'next'
import { featurePages } from '@/lib/featurePages'
import { guides } from '@/lib/guides'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.dmdgold.com'
    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/software`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/our-story`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        ...featurePages.map((p) => ({
            url: `${baseUrl}${p.path}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
        {
            url: `${baseUrl}/guides`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...guides.map((g) => ({
            url: `${baseUrl}/guides/${g.slug}`,
            lastModified: new Date(g.updated),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms-and-conditions`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ]
}
