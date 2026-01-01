'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Logo and Brand */}
          <div className="md:col-span-3">
            <Link href="/" className="flex items-center gap-3 no-underline mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500 bg-white flex-shrink-0">
                <Image
                  src="/assets/images/logo.jpeg"
                  alt="Har Har Maidan Fateh Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-white text-lg font-bold font-serif italic">
                Har Har Maidan Fateh
              </span>
            </Link>
          </div>

          {/* Description */}
          <div className="md:col-span-4">
            <p className="text-gray-300 text-sm leading-relaxed">
              We are a community-based NGO serving humanity through Langar Sewa, health camps, and educational support in Yamunanagar, Haryana, India.
            </p>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/HarHarMaidanFateh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/harharmaidan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <nav>
              <ul className="flex flex-wrap md:flex-col gap-4 md:gap-2 list-none p-0 m-0">
                <li>
                  <Link href="#about" className="text-gray-300 hover:text-white transition-colors text-sm underline underline-offset-2">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#activities" className="text-gray-300 hover:text-white transition-colors text-sm underline underline-offset-2">
                    Our work
                  </Link>
                </li>
                <li>
                  <Link href="#impact" className="text-gray-300 hover:text-white transition-colors text-sm underline underline-offset-2">
                    Impact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Har Har Maidan Fateh. Registered NGO in Haryana.
          </p>
        </div>
      </div>
    </footer>
  );
}
