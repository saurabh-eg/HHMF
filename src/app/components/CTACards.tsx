'use client';

import Link from 'next/link';
import Image from 'next/image';

const cards = [
  {
    id: 'role',
    title: 'Our role',
    description: 'For over 25 years, the Har Har Maidan Fateh has been committed to fighting the greatest inequities in the world.',
    image: '/assets/images/activities_main.png',
    imageAlt: 'Our Role',
    link: '#about',
  },
  {
    id: 'work',
    title: 'How we work',
    description: 'We are focused on results. Those that can be measured. And those measured in ways beyond numbers.',
    image: '/assets/images/hero_1.png',
    imageAlt: 'How we work',
    link: '#activities',
  },
  {
    id: 'story',
    title: 'Our story',
    description: 'Learn about the origins of our organization and the values that drive our work.',
    image: '/assets/images/hero_4.png',
    imageAlt: 'Our story',
    link: '#about',
  },
];

export default function CTACards() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 uppercase tracking-wide mb-10">
          More About Our Organization
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card) => (
            <div key={card.id} className="group">
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-5">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {card.description}
              </p>
              <Link
                href={card.link}
                className="text-gray-900 text-sm font-medium underline underline-offset-4 
                         hover:text-orange-600 transition-colors duration-300 inline-flex items-center gap-1"
              >
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
