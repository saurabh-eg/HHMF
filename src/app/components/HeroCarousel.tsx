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

const GATE_DURATION = 600; // ms for gate to close/open
const AUTO_PLAY_INTERVAL = 6000;

type GateState = 'open' | 'closing' | 'closed' | 'opening';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedSlide, setDisplayedSlide] = useState(0);
  const [gateState, setGateState] = useState<GateState>('open');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const isTransitioning = gateState !== 'open';

  const clearTimeouts = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning || index === currentSlide) return;

    clearTimeouts();
    setCurrentSlide(index);

    // Step 1: Close the gates
    setGateState('closing');

    // Step 2: When gates are closed, swap the slide
    timeoutRef.current = setTimeout(() => {
      setDisplayedSlide(index);
      setGateState('closed');

      // Step 3: Open the gates
      timeoutRef.current = setTimeout(() => {
        setGateState('opening');

        // Step 4: Gates fully open
        timeoutRef.current = setTimeout(() => {
          setGateState('open');
        }, GATE_DURATION);
      }, 100);
    }, GATE_DURATION);
  }, [currentSlide, isTransitioning, clearTimeouts]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-play
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      if (gateState === 'open') nextSlide();
    }, AUTO_PLAY_INTERVAL);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [nextSlide, gateState]);

  // Cleanup
  useEffect(() => {
    return () => {
      clearTimeouts();
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [clearTimeouts]);

  // Gate position based on state
  const getGateTransform = (side: 'left' | 'right') => {
    const isOpen = gateState === 'open' || gateState === 'opening';
    if (side === 'left') {
      return isOpen ? 'translateX(-100%)' : 'translateX(0)';
    }
    return isOpen ? 'translateX(100%)' : 'translateX(0)';
  };

  return (
    <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-orange-500">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="absolute inset-0"
          style={{
            visibility: index === displayedSlide ? 'visible' : 'hidden',
            zIndex: index === displayedSlide ? 1 : 0,
          }}
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
                className="max-w-2xl"
                style={{
                  opacity: index === displayedSlide && gateState === 'open' ? 1 : 0,
                  transform: index === displayedSlide && gateState === 'open' ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                  transitionDelay: gateState === 'open' ? '0.15s' : '0s',
                }}
              >
                <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sans uppercase tracking-tight mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                  {slide.description}
                </p>
                <a
                  href={slide.linkHref}
                  className="inline-block bg-orange-500 text-white font-bold 
                           px-8 py-4 rounded uppercase text-sm tracking-wider
                           transition-colors duration-300 hover:bg-orange-600"
                >
                  {slide.linkText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Gate Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none flex">
        {/* Left Door */}
        <div
          className="w-1/2 h-full bg-orange-500"
          style={{
            transform: getGateTransform('left'),
            transition: `transform ${GATE_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          }}
        />
        {/* Right Door */}
        <div
          className="w-1/2 h-full bg-orange-500"
          style={{
            transform: getGateTransform('right'),
            transition: `transform ${GATE_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          }}
        />
        
        {/* Logo in Center (when gates are closed) */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-5"
          style={{
            opacity: gateState === 'closing' || gateState === 'closed' ? 1 : 0,
            transform: gateState === 'closing' || gateState === 'closed' ? 'scale(1)' : 'scale(0.9)',
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            transitionDelay: gateState === 'closing' ? '0.25s' : '0s',
          }}
        >
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
            <Image
              src="/assets/images/logo.jpeg"
              alt="Har Har Maidan Fateh"
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white text-xl md:text-2xl font-bold font-serif tracking-wide">
            Har Har Maidan Fateh
          </span>
        </div>
      </div>

      {/* Right Side Navigation */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center gap-4">
        {/* Pagination Dots */}
        <div className="flex flex-col gap-3 mb-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full border-2 border-white/70 transition-all duration-300 p-0
                ${index === currentSlide ? 'bg-white' : 'bg-transparent hover:bg-white/30'}
                ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Buttons */}
        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className={`w-9 h-9 flex items-center justify-center bg-white/10 border border-white/30 
                     text-white rounded transition-all duration-300 hover:bg-white/20
                     ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className={`w-9 h-9 flex items-center justify-center bg-white/10 border border-white/30 
                     text-white rounded transition-all duration-300 hover:bg-white/20
                     ${isTransitioning ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
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
