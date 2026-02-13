"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const useSmoothScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="/#"]');
      
      if (!link) return;
      
      const href = link.getAttribute('href');
      if (!href || !href.startsWith('/#')) return;
      
      e.preventDefault();
      
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        // Add 70px margin-top as requested
        const offsetTop = element.offsetTop - 70;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Update URL without triggering page reload
        window.history.pushState(null, '', href);
      }
    };

    // Handle initial page load with hash
    const handleInitialScroll = () => {
      if (window.location.hash && window.location.hash.startsWith('#')) {
        const targetId = window.location.hash.replace('#', '');
        const element = document.getElementById(targetId);
        
        if (element) {
          setTimeout(() => {
            const offsetTop = element.offsetTop - 70;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Add event listeners
    document.addEventListener('click', handleSmoothScroll);
    
    // Handle initial scroll on page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleInitialScroll);
    } else {
      handleInitialScroll();
    }

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      document.removeEventListener('DOMContentLoaded', handleInitialScroll);
    };
  }, [pathname]);
};