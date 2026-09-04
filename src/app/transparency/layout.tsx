import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transparency & Audits',
  description:
    'How we keep your gift safe: 100% of your capital preserved, earnings only spent on causes, independent Shariah and financial audits, and public yearly reports.',
  alternates: { canonical: '/transparency' },
};

export default function TransparencyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
