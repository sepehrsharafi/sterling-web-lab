import ContactSection from "@/components/ContactSection";
import Expertise from "@/components/Expertise";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Pricing from "@/components/Pricing";
import ServicesHome from "@/components/ServicesHome";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import { ScrollHandler } from "@/components/ScrollHandler";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <>
      <ScrollHandler />
      <Hero />
      <Marquee />
      <Expertise />
      <ServicesHome />
      <Work />
      <Testimonials />
      <Pricing />
      {/* <ContactSection /> */}
    </>
  );
}
