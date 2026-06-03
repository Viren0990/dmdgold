import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'DMD Gold | Luxury Jewelry Software',
        short_name: 'DMD Gold',
        description: 'Premier luxury jewelry software solutions.',
        start_url: '/',
        display: 'standalone',
        background_color: '#FAF9F6',
        theme_color: '#C6A87C',
        icons: [
            {
                src: '/icon.png',
                sizes: '192x192',
                type: 'image/png',
            },
        ],
    }
}
