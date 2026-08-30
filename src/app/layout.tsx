import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SITE_CONFIG } from '@/data/siteData';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} (${SITE_CONFIG.nameArabic}) — Shariah-Governed Islamic Endowment Fund`,
  description: SITE_CONFIG.description,
  keywords: [
    'Waqf',
    'Sadaqah Jariyah',
    'Islamic Endowment',
    'Islamic Finance',
    'Shariah Governance',
    'Lajnatul Awqaaf',
    'Nigeria Awqaaf',
    'Islamic Philanthropy',
  ],
  openGraph: {
    title: `${SITE_CONFIG.name} — Nurturing Eternal Impact`,
    description: SITE_CONFIG.description,
    type: 'website',
    locale: 'en_US',
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
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
