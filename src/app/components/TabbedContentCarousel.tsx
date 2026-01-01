'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const activityData = [
  {
    id: "langar",
    label: "Langar Sewa",
    items: [
      {
        title: "The Spirit of Langar: Feeding Thousands",
        description: "Our community kitchen serves nutritious meals to everyone, regardless of background, ensuring no one in Yamunanagar goes to bed hungry.",
        image: "/assets/images/hero_2.png",
        link: "#langar"
      },
      {
        title: "Sustainability in our Kitchen",
        description: "How we manage local food donations and volunteer efforts to run a zero-waste community kitchen.",
        image: "/assets/images/hero_1.png",
        link: "#langar"
      }
    ]
  },
  {
    id: "health",
    label: "Health Camps",
    items: [
      {
        title: "Bringing Healthcare to Doorsteps",
        description: "Our mobile health units and regular camps provide essential medicine and checkups to rural Haryana.",
        image: "/assets/images/hero_3.png",
        link: "#health"
      }
    ]
  },
  {
    id: "education",
    label: "Education Support",
    items: [
      {
        title: "Empowering the Next Generation",
        description: "Providing books, uniforms, and tutoring to children to bridge the educational divide.",
        image: "/assets/images/hero_4.png",
        link: "#education"
      }
    ]
  },
  {
    id: "community",
    label: "Community Events",
    items: [
      {
        title: "Yamunanagar Unity Meet 2025",
        description: "Celebrating our local culture and strengthening community bonds through annual events.",
        image: "/assets/images/activities_main.png",
        link: "#activities"
      }
    ]
  }
];

export default function TabbedContentCarousel() {
  const [activeTab, setActiveTab] = useState(activityData[0].id);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const activeItems = activityData.find(tab => tab.id === activeTab)?.items || [];
  const currentItem = activeItems[currentItemIndex];

  const scrollPrev = useCallback(() => {
    setCurrentItemIndex(prev => (prev > 0 ? prev - 1 : activeItems.length - 1));
  }, [activeItems.length]);

  const nextSlide = useCallback(() => {
    setCurrentItemIndex(prev => (prev < activeItems.length - 1 ? prev + 1 : 0));
  }, [activeItems.length]);

  useEffect(() => {
    setCurrentItemIndex(0);
  }, [activeTab]);

  return (
    <section className="bg-slate-700 py-16 md:py-20" id="activities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-white text-2xl md:text-3xl font-bold uppercase tracking-wide mb-4 md:mb-0">
            Our Activities
          </h2>
          <Link
            href="#activities"
            className="text-white/80 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 no-underline"
          >
            See All Activities
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Content Area */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left - Tab Navigation */}
          <div className="lg:w-1/5">
            <ul className="flex lg:flex-col flex-wrap gap-2">
              {activityData.map(tab => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-all duration-300 border-l-4 ${
                      activeTab === tab.id
                        ? 'bg-white/10 border-orange-500 text-white'
                        : 'border-transparent text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Center - Carousel Image */}
          <div className="lg:w-2/5 relative">
            {currentItem && (
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src={currentItem.image}
                  alt={currentItem.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Carousel Controls */}
            {activeItems.length > 1 && (
              <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2">
                <button
                  onClick={scrollPrev}
                  className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full 
                           shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-110"
                  aria-label="Previous"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full 
                           shadow-lg transition-all duration-300 hover:bg-orange-600 hover:scale-110"
                  aria-label="Next"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Right - Content Card */}
          <div className="lg:w-2/5">
            {currentItem && (
              <div className="bg-white rounded-lg p-6 md:p-8 h-full flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {currentItem.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {currentItem.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
