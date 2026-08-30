import React from 'react';
import { HeroBentoGrid } from '@/components/home/HeroBentoGrid';
import { PillarsSection } from '@/components/home/PillarsSection';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { GovernanceSection } from '@/components/home/GovernanceSection';
import { TransparencySnapshot } from '@/components/home/TransparencySnapshot';
import { FAQSection } from '@/components/home/FAQSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div>
      <HeroBentoGrid />
      <PillarsSection />
      <FeaturedProjects />
      <GovernanceSection />
      <TransparencySnapshot />
      <FAQSection />
      <CTASection />
    </div>
  );
}
