import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'TW3 App',
        short_name: 'TW3 App',
        description: 'Support TD technologie du web - champllion à Albi',
        lang: 'fr',
        orientation: 'portrait-primary',
        display: 'minimal-ui',
        background_color: '#f1f1f1',
        start_url: '/',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}