import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/siteData';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_CONFIG.name,
    short_name: 'Lajnah Awqaaf',
    description: SITE_CONFIG.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#F8FAFC',
    theme_color: '#123788',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
