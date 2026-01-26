"use client";
import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NavItem } from '../types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems: NavItem[] = [
  { label: 'Work', href: '/#work' },
  { label: 'Services', href: '/services' },
  { label: 'Agency', href: '/agency' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact', isButton: true },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled || isOpen ? 'bg-brand-black/80 backdrop-blur-md border-b border-gray-800 py-4' : 'bg-transparent py-6 border-gray-800'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-[110]">
          {/* Logo */}
          <Link href="/" className="text-4xl font-display font-bold hover:text-brand-accent transition-colors relative">
            sterling<span className="text-brand-accent">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 py-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className={item.isButton 
                  ? "group flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-lg font-medium hover:bg-brand-accent hover:text-white transition-all duration-300"
                  : `text-xl font-medium transition-colors hover:text-brand-accent ${
                      pathname === item.href ? 'text-brand-accent' : 'text-gray-300'
                  }`
                }
              >
                {item.label}
                {item.isButton && <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 relative focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] md:hidden bg-brand-black/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-in-out w-screen h-screen ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 p-4 w-full">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className={`text-4xl font-display font-bold tracking-tight transition-all duration-300 hover:scale-105 ${
                  item.isButton ? 'text-brand-accent' : 'text-white'
              }`}
              style={{ 
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: isOpen ? 1 : 0,
                transitionDelay: `${index * 50 + 100}ms`
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;