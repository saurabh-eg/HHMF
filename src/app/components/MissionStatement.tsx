'use client';

import Link from 'next/link';

export default function MissionStatement() {
  return (
    <section className="bg-white py-20 md:py-28" id="about">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed text-gray-800 font-serif">
          Our mission is to promote{' '}
          <em className="text-orange-500 font-semibold not-italic">compassion</em>, dignity, and social
          responsibility by helping{' '}
          <em className="text-orange-500 font-semibold italic">vulnerable</em>{' '}
          communities meet their basic needs.
        </p>
        <div className="mt-10">
          <Link
            href="#langar"
            className="inline-block border border-gray-800 text-gray-800 font-medium 
                     px-8 py-3 text-sm tracking-wide transition-all duration-300 
                     hover:bg-gray-800 hover:text-white no-underline"
          >
            Learn about Langar Sewa
          </Link>
        </div>
      </div>
    </section>
  );
}
