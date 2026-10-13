'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Button from '@/components/common/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/courses', label: 'Courses' },
    { href: '/universities', label: 'Universities' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#0B1730] rounded-full flex items-center justify-center">
              <span className="text-[#E9B746] font-bold text-lg">360°</span>
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-[#0B1730] text-lg">360 Education</div>
              <div className="text-[#087F75] text-xs font-medium">LEARN • CHOOSE • ACHIEVE</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#52627A] hover:text-[#E9B746] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="!py-2 !px-4 text-sm">
              Enquire Now ↗
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#0B1730]" /> : <Menu className="w-6 h-6 text-[#0B1730]" />}
          </button>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6 border-b">
            <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-[#0B1730] rounded-full flex items-center justify-center">
                <span className="text-[#E9B746] font-bold text-lg">360°</span>
              </div>
              <div>
                <div className="font-bold text-[#0B1730]">360 Education</div>
                <div className="text-[#087F75] text-xs">LEARN • CHOOSE • ACHIEVE</div>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-[#0B1730]" />
            </button>
          </div>

          <div className="flex-1 px-6 py-6 space-y-2 overflow-y-auto">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-[#52627A] hover:text-[#E9B746] hover:bg-gray-50 transition-all font-medium py-3 px-4 rounded-lg"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="p-6 border-t">
            <Button href="/contact" onClick={() => setIsOpen(false)} className="w-full">
              Enquire Now ↗
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
