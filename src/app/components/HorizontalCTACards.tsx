'use client';

import Link from 'next/link';
import Image from 'next/image';

const cards = [
  {
    id: 'langar',
    title: 'LANGAR',
    titleHighlight: 'Sewa',
    description: 'Feeding the hungry with dignity and compassion through our daily community kitchen initiatives.',
    linkText: 'Learn about Langar Sewa',
    linkHref: '#langar',
    image: '/assets/images/hero_2.png',
    imageAlt: 'Langar Sewa',
  },
  {
    id: 'health',
    title: 'HEALTH',
    titleHighlight: 'Camps',
    description: 'Bringing critical medical services and healthcare awareness to the most underserved regions of Yamunanagar.',
    linkText: 'View Health Initiatives',
    linkHref: '#health',
    image: '/assets/images/hero_3.png',
    imageAlt: 'Health Initiatives',
  },
];

export default function HorizontalCTACards() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              id={card.id}
              className="bg-sky-100 rounded-xl overflow-hidden transition-colors duration-300 hover:bg-sky-200 group"
            >
              <div className="flex flex-col md:flex-row gap-5 p-5 min-h-[320px]">
                {/* Image */}
                <div className="relative flex-shrink-0 md:w-[45%] h-60 md:h-auto rounded-lg overflow-hidden shadow-[6px_6px_0_0_#E8B910]">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center flex-1 px-2 py-3 gap-4">
                  <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-gray-900 leading-tight">
                    {card.title}{' '}
                    <span className="text-orange-500 font-serif italic font-normal">
                      {card.titleHighlight}
                    </span>
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                  <Link
                    href={card.linkHref}
                    className="text-gray-800 text-sm font-medium underline underline-offset-4 
                             hover:text-orange-600 transition-colors duration-300 inline-flex items-center gap-2"
                  >
                    {card.linkText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
