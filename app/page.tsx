import ContactSection from "@/components/ContactSection";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Pricing from "@/components/Pricing";
import ServicesHome from "@/components/ServicesHome";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";

export default async function Home() {
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