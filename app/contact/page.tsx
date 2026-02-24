import ContactUs from "../../components/ContactUs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us to discuss your project.",
  alternates: {
    canonical: "/contact",
  },
};

const ContactPage = () => {
  return <ContactUs />;
};

export default ContactPage;
