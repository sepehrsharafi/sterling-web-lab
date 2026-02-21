"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Instagram, Mail, ArrowUpRight } from "lucide-react";
import { PageView } from "../types";

interface FooterProps {
  onChangeView?: (view: PageView) => void;
}

const Footer: React.FC<FooterProps> = ({ onChangeView }) => {
  type ModalType = "privacy" | "terms" | null;

  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(false);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      setIsClosing(false);
      if (openTimerRef.current) {
        clearTimeout(openTimerRef.current);
      }
    };
  }, []);

  const modalContent: Record<
    Exclude<ModalType, null>,
    { title: string; description: string }
  > = {
    privacy: {
      title: "Privacy Policy",
      description:
        "We respect your privacy and only collect information necessary to provide our services. Data is never sold or shared with third parties without your consent, and you can request deletion at any time.",
    },
    terms: {
      title: "Terms & Conditions",
      description:
        "By engaging with Sterling Web Lab, you agree to our commitment to quality delivery, clear communication, and timely approvals. Project timelines may adjust based on scope changes, and invoices are due upon receipt unless otherwise stated.",
    },
  };

  const handleLinkClick = (e: React.MouseEvent, view: PageView) => {
    e.preventDefault();
    if (onChangeView) {
      onChangeView(view);
      window.scrollTo(0, 0);
    }
  };

  const openModal = (type: Exclude<ModalType, null>) => {
    setActiveModal(type);
    setIsClosing(false);
    setIsOpening(true);
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    openTimerRef.current = setTimeout(() => {
      setIsOpening(false);
    }, 50);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveModal(null);
      setIsClosing(false);
    }, 250);
  };
  const socials = [
    {
      icon: Instagram,
      href: "https://instagram.com/sterlingweblab",
      external: true,
    },
    {
      icon: Mail,
      href: "mailto:sterlingweblab@gmail.com",
      external: false,
    },
  ];

  return (
    <footer className="bg-black text-white overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 pt-24 pb-12">
        <div className="flex flex-col items-center text-center mb-24 relative z-10">
          <h2 className="text-4xl md:text-7xl font-display font-bold mb-8 leading-tight">
            Have an idea? <br /> Let's enter the {" "}
            <span className="text-brand-accent">lab.</span>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-brand-accent hover:text-white transition-all duration-300 transform hover:scale-105"
          >
            Start a Project
            <ArrowUpRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-16">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold font-display mb-6">sterling.</h3>
            <p className="text-gray-400 max-w-sm leading-relaxed">
              Sterling Web Lab is a digital agency focused on creating precise,
              high-value web experiences. Based in San Francisco, working
              globally.
            </p>
            <div className="flex gap-4 mt-8">
              {socials.map(({ icon: Icon, href, external }, i) => (
                <a
                  key={i}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              {[
                { label: "Work", href: "/#work" },
                { label: "Services", href: "/services" },
                { label: "Agency", href: "/agency" },
                { label: "Blog", href: "/blog" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors relative group inline-block"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a
                  href="mailto:sterlingweblab@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  sterlingweblab@gmail.com
                </a>
              </li>
              <li>+98 936 767 7180</li>
              <li>+98 915 409 3785</li>
              <li>
                123 Innovation Dr.
                <br />
                San Francisco, CA
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-white/5 text-sm text-gray-500">
          <p>&copy; 2024 Sterling Web Lab. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button
              type="button"
              onClick={() => openModal("privacy")}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => openModal("terms")}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.05]">
        <h1 className="text-[15vw] md:text-[20vw] font-bold leading-none text-center whitespace-nowrap select-none">
          STERLING
        </h1>
      </div>
      {activeModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 py-8 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            isClosing || isOpening ? "opacity-0" : "opacity-100"
          }`}
          onClick={closeModal}
        >
          <div
            className={`relative max-w-xl w-full bg-gradient-to-br from-black via-black to-brand-accent/10 border border-white/10 rounded-3xl p-8 shadow-2xl text-white transform transition-all duration-300 ease-out ${
              isClosing || isOpening
                ? "opacity-0 translate-y-4 scale-[0.98]"
                : "opacity-100 translate-y-0 scale-100"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start gap-4 mb-4">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-brand-accent mb-2">
                  Sterling Web Lab
                </p>
                <h3 className="text-2xl font-bold font-display">
                  {modalContent[activeModal].title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close modal"
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {modalContent[activeModal].description}
            </p>
            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={closeModal}
                className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-semibold hover:bg-brand-accent hover:text-white transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
