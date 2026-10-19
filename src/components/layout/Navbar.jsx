'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#admissions', label: 'Admissions' },
    { href: '#courses', label: 'Course Finder' },
    { href: '#universities', label: 'Universities' },
    { href: '#about', label: 'About Us' },
    { href: '#faq', label: 'FAQs' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
    <header className="sticky top-0 z-30 bg-[#ffffffed] backdrop-blur-[14px] border-b border-[#e8edf4]">
      <div className="max-w-[1180px] mx-auto px-4">
        <div className="flex justify-between items-center h-[82px] gap-5">
          <Link href="#home" className="flex items-center gap-3 min-w-0 sm:min-w-[235px]" aria-label="360 Education & Consultancy home">
            <img src="/logo.jpeg" alt="360 Education & Consultancy Logo" className="w-12 h-12 sm:w-[66px] sm:h-[66px] object-contain" />
            <div className="hidden sm:block">
              <strong className="block text-[#091831] text-[15px] leading-[1.15]">360 Education & Consultancy</strong>
              <small className="block text-[#7b8494] text-[10px] tracking-[1.25px] uppercase mt-1">Your Career, Our Direction</small>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-[21px] text-[13px] font-[750] text-[#34435b]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-[#9a6d16] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#contact"
            className="hidden lg:inline-flex justify-center items-center gap-2 px-5 py-3 rounded-[10px] text-[13px] font-[850] border border-transparent bg-gradient-to-br from-[#f5d990] to-[#e8bd61] text-[#16213a] shadow-[0_9px_25px_rgba(214,169,65,0.19)] hover:-translate-y-[2px] transition-transform cursor-pointer"
          >
            Enquire Now ↗
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="lg:hidden border-0 bg-none text-[#091831] text-[26px] p-2"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

    </header>

    <button
      type="button"
      aria-label="Close navigation menu"
      onClick={() => setIsOpen(false)}
      className={`lg:hidden fixed inset-0 z-40 bg-[#09183180] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
      aria-hidden={!isOpen}
      tabIndex={isOpen ? 0 : -1}
    />
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`lg:hidden fixed right-0 top-0 z-50 flex h-dvh w-[min(20rem,85vw)] flex-col items-stretch overflow-y-auto bg-white p-5 text-[14px] text-black shadow-[-12px_0_35px_rgba(7,24,49,0.2)] transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="mb-4 flex justify-end">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="grid h-10 w-10 place-items-center rounded-xl border border-[#c99a6b55] text-[#34435b] hover:bg-white/50"
          >
            <X size={20} />
          </button>
        </div>
        <p className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[1.8px] text-black">Menu</p>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="w-full rounded-xl px-4 py-3.5 font-medium text-black transition-colors hover:bg-gray-100"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#e8bd61] px-5 py-3.5 text-[13px] font-[850] text-black transition-colors hover:bg-[#f5d990]"
          >
            Enquire Now ↗
          </Link>
      </nav>
    </>
  );
}
