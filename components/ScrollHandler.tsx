"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export const ScrollHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Handle initial page load with hash in URL
    const handleInitialHash = () => {
      if (window.location.hash && window.location.hash === '#work') {
        setTimeout(() => {
          const workSection = document.getElementById('work');
          if (workSection) {
            const offsetTop = workSection.offsetTop - 70;
            window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
            });
          }
        }, 300); // Delay to ensure page is fully loaded
      }
    };

    // Handle navigation from other pages
    if (pathname === '/' && window.location.hash === '#work') {
      handleInitialHash();
    }

    // Handle hash changes (like when clicking back/forward buttons)
    const handleHashChange = () => {
      if (window.location.hash === '#work') {
        handleInitialHash();
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname]);

  return null; // This component doesn't render anything
};