import { AboutSection, BookingWizardSection, CalculatorSection, ContactSection, DashboardPreviewSection, GalleryBlogFaqSection, GuardShowcaseSection, HeroSection, IndustriesSection, ServicesSection, TestimonialsSection, TrustSection, WhyChooseUsSection } from '@/components/site/Sections';
import { useSiteMeta } from '@/hooks/useSiteMeta';

export const HomePage = () => {
  useSiteMeta('Premium Security Solutions', 'Luxury security agency website for TRIGUN Security Force & Facility Management.');
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ServicesSection />
      <GuardShowcaseSection />
      <IndustriesSection />
      <BookingWizardSection />
      <CalculatorSection />
      <DashboardPreviewSection />
      <TestimonialsSection />
      <GalleryBlogFaqSection />
      <ContactSection />
    </>
  );
};
