'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#activities', label: 'Our Activities' },
    { href: '#langar', label: 'Langar Sewa' },
    { href: '#health', label: 'Health Camps' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <nav
        className={`transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-white shadow-md py-3'
            : 'bg-gradient-to-b from-black/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 no-underline z-50">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                scrolled || mobileMenuOpen ? 'border-orange-500' : 'border-white/80'
              }`}
            >
              <Image
                src="/assets/images/logo.jpeg"
                alt="Har Har Maidan Fateh Logo"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </div>
            <span
              className={`text-base sm:text-lg font-bold font-serif transition-all duration-300 ${
                scrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white drop-shadow-md'
              }`}
            >
              Har Har Maidan Fateh
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className={`lg:hidden text-2xl p-2 transition-all duration-300 bg-transparent border-none cursor-pointer z-50 ${
              scrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Navigation Links - Desktop */}
          <ul className="hidden lg:flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 no-underline ${
                    scrolled
                      ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-50'
                      : 'text-white hover:text-orange-300 drop-shadow-sm'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="ml-4">
              <Link
                href="#donate"
                className="inline-block bg-orange-500 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-all duration-300 hover:bg-orange-600 no-underline"
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-white"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`relative h-full flex flex-col pt-20 transition-all duration-300 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
        }`}>
          <ul className="flex-1 list-none m-0 px-6 py-4 flex flex-col">
            {navLinks.map((link, index) => (
              <li 
                key={link.href}
                className={`border-b border-gray-100 transition-all duration-300 ${
                  mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms' }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-4 text-gray-800 text-base font-medium hover:text-orange-500 transition-colors no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Donate Button - Fixed at bottom */}
          <div className={`px-6 pb-8 pt-4 transition-all duration-300 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: mobileMenuOpen ? '300ms' : '0ms' }}
          >
            <Link
              href="#donate"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-orange-500 
                       text-white font-bold text-base px-6 py-4 rounded-lg 
                       shadow-lg shadow-orange-500/30 no-underline
                       hover:bg-orange-600 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
