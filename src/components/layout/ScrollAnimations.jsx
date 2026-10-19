'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 70,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });

    const frame = window.requestAnimationFrame(() => {
      AOS.refreshHard();
      window.dispatchEvent(new Event('scroll'));
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      AOS.refreshHard();
      window.dispatchEvent(new Event('scroll'));
    });

    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
