import React from 'react';
import { HeroBentoGrid } from '@/components/home/HeroBentoGrid';
import { ImpactCounterBar } from '@/components/home/ImpactCounterBar';
import { AboutGridSection } from '@/components/home/AboutGridSection';
import { HowItWorksGrid } from '@/components/home/HowItWorksGrid';
import { FeaturedProjects } from '@/components/home/FeaturedProjects';
import { ComparisonSection } from '@/components/home/ComparisonSection';
import { FAQSection } from '@/components/home/FAQSection';
import { TestimonialSection } from '@/components/home/TestimonialSection';
import { CTASection } from '@/components/home/CTASection';

export default function HomePage() {
  return (
    <div className="w-full bg-brand-mist">
      {/* 1. Hero 6-Card Mosaic */}
      <HeroBentoGrid />

      {/* 2. Impact Counter Bar Grid */}
      <ImpactCounterBar />

      {/* 3. About Us & Fiduciary Stewardship */}
      <AboutGridSection />

      {/* 4. How Waqf Works (4-Step Process Grid) */}
      <HowItWorksGrid />

      {/* 5. Featured Endowments Showcase */}
      <FeaturedProjects />

      {/* 6. Why Us & Comparison Table */}
      <ComparisonSection />

      {/* 7. FAQ & Creative Caption Cards */}
      <FAQSection />

      {/* 8. Testimonial Storytelling */}
      <TestimonialSection />

      {/* 9. High-Conversion CTA Banner */}
      <CTASection />
    </div>
  );
}
