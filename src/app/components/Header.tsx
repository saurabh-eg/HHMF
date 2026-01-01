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
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-gradient-to-b from-black/50 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div
              className={`w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 transition-all duration-300 ${
                scrolled ? 'border-orange-500' : 'border-white/80'
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
              className={`text-lg font-bold font-serif transition-all duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white drop-shadow-md'
              }`}
            >
              Har Har Maidan Fateh
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className={`lg:hidden text-2xl p-2 transition-all duration-300 bg-transparent border-none cursor-pointer ${
              scrolled ? 'text-gray-900' : 'text-white'
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
                className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold text-sm px-5 py-2.5 rounded-md transition-all duration-300 hover:shadow-lg hover:scale-105 no-underline"
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="bg-white/95 backdrop-blur-md list-none m-0 p-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all no-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="#donate"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold px-5 py-3 rounded-md no-underline"
              >
                Donate Now
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
