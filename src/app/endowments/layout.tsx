import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Endowments & Causes',
  description:
    'Support clean water, healthcare, schools and income-earning property in Nigeria — give a one-off Sadaqah, or start a lasting Waqf in your family’s name.',
  alternates: { canonical: '/endowments' },
};

export default function EndowmentsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
