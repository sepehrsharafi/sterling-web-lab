import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Expertise from '@/components/Expertise';
import ServicesHome from '@/components/ServicesHome';
import Work from '@/components/Work';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Expertise />
      <ServicesHome />
      <Work />
      <Testimonials />
      <Pricing />
      <ContactSection />
    </>
  );
}