import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { IllustrativeNotice } from '@/components/common/IllustrativeNotice';
import { SITE_CONFIG } from '@/data/siteData';

// TODO: confirm the production domain and update this if it differs.
const SITE_URL = 'https://lajnatulawqaaf.org';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_CONFIG.name} — Sadaqah, Zakat & Waqf in Nigeria`,
    template: `%s · ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  applicationName: SITE_CONFIG.name,
  keywords: [
    'Waqf',
    'Sadaqah',
    'Sadaqah Jariyah',
    'Zakat',
    'Islamic charity Nigeria',
    'Islamic endowment',
    'Lajnatul Awqaaf',
    'give clean water Nigeria',
    'orphan sponsorship Nigeria',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${SITE_CONFIG.name} — Give today. Give forever.`,
    description: SITE_CONFIG.description,
    url: SITE_URL,
    siteName: SITE_CONFIG.name,
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} — Give today. Give forever.`,
    description: SITE_CONFIG.description,
  },
  robots: {
    // TODO: while figures are illustrative / pre-launch, consider index:false.
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased foundation-grain">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-full focus:bg-brand-royal focus:text-white focus:font-cairo focus:font-bold focus:text-sm"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <IllustrativeNotice />
      </body>
    </html>
  );
}
