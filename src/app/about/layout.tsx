import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About & Governance',
  description:
    'Who we are: a Nigerian Islamic charity for Sadaqah, Zakat and Waqf, guided by an independent Shariah board and a board of trustees, and openly audited.',
  alternates: { canonical: '/about' },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
