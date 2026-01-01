'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "SERVING HUMANITY WITH LOVE",
    description: "Har Har Maidan Fateh is dedicated to serving underprivileged communities through food distribution, health camps, and educational support in Yamunanagar, Haryana.",
    image: "/assets/images/hero_1.png",
    linkText: "Learn about our mission",
    linkHref: "#about"
  },
  {
    id: 2,
    title: "LANGAR SEWA - FREE COMMUNITY MEALS",
    description: "We provide free meals to thousands of people in need, continuing the sacred tradition of Langar Sewa to ensure no one goes hungry in our community.",
    image: "/assets/images/hero_2.png",
    linkText: "Learn about Langar Sewa",
    linkHref: "#langar"
  },
  {
    id: 3,
    title: "HEALTH SUPPORT FOR ALL",
    description: "Regular health camps provide essential medical care, check-ups, and medicines to underserved communities who otherwise lack access to healthcare.",
    image: "/assets/images/hero_3.png",
    linkText: "View our health initiatives",
    linkHref: "#health"
  },
  {
    id: 4,
    title: "EDUCATION CHANGES LIVES",
    description: "Through our education support programs, we help underprivileged children access quality education and build a brighter future.",
    image: "/assets/images/hero_4.png",
    linkText: "Support education initiatives",
    linkHref: "#education"
  }
];

const AUTO_PLAY_INTERVAL = 6000;

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 700);
  }, [currentSlide, isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (!isAnimating) nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [nextSlide, isAnimating]);

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
          
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-[1]" />

          {/* Content */}
          <div className="relative z-[2] h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
              <div
                className={`max-w-2xl transition-all duration-700 delay-200 ${
                  index === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans uppercase tracking-tight mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  {slide.description}
                </p>
                <a
                  href={slide.linkHref}
                  className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold 
                           px-8 py-4 rounded uppercase text-sm tracking-wider
                           transition-all duration-300 hover:shadow-xl hover:scale-105
                           shadow-lg shadow-orange-500/30"
                >
                  {slide.linkText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Right Side Navigation */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4">
        {/* Pagination Dots */}
        <div className="flex flex-col gap-3 mb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`w-3 h-3 rounded-full border-2 border-white/70 transition-all duration-300 p-0
                ${index === currentSlide ? 'bg-white scale-110' : 'bg-transparent hover:bg-white/30'}
                ${isAnimating ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <button
          onClick={prevSlide}
          disabled={isAnimating}
          className={`w-9 h-9 flex items-center justify-center bg-white/10 border border-white/30 
                     text-white rounded transition-all duration-300 hover:bg-white/20
                     ${isAnimating ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className={`w-9 h-9 flex items-center justify-center bg-white/10 border border-white/30 
                     text-white rounded transition-all duration-300 hover:bg-white/20
                     ${isAnimating ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Bottom Slide Counter */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white text-sm font-medium tracking-widest">
        <span className="text-xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="opacity-60 mx-2">/</span>
        <span className="opacity-60">{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}
