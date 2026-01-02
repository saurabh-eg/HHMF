'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HalfGateHero() {
  return (
    <section className="bg-white py-12 md:py-20" id="impact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/images/hero_1.png"
                alt="Community Impact"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-orange-500 text-sm md:text-base font-bold uppercase tracking-widest mb-4">
              Our Impact in Yamunanagar
            </h3>
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              Every day, we see the transformative power of community support. From providing meals to ensuring medical care, our mission at Har Har Maidan Fateh is to bring tangible change to those who need it most in Yamunanagar, Haryana.
            </p>
            <Link
              href="#activities"
              className="inline-block bg-orange-500 text-white font-semibold 
                       px-8 py-3 rounded text-sm tracking-wide
                       transition-colors duration-300 hover:bg-orange-600 no-underline"
            >
              Discover Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
