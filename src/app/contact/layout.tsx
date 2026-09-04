import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Ways to Give',
  description:
    'Talk to us about giving, starting a Waqf, or partnering with us — or give directly by bank transfer. Based in Abuja, Nigeria; help available worldwide.',
  alternates: { canonical: '/contact' },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
