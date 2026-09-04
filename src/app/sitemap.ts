import type { MetadataRoute } from 'next';

// Keep in sync with SITE_URL in src/app/layout.tsx.
const SITE_URL = 'https://lajnatulawqaaf.org';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ['', '/about', '/endowments', '/transparency', '/contact'];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}
