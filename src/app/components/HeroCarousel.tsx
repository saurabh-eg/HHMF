'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    title: "Serving Humanity with Love",
    description: "Har Har Maidan Fateh is dedicated to serving underprivileged communities through food distribution, health camps, and educational support in Yamunanagar, Haryana.",
    image: "/assets/images/hero_1.png",
    linkText: "Learn about our mission",
    linkHref: "#about"
  },
  {
    id: 2,
    title: "Langar Sewa - Free Community Meals",
    description: "We provide free meals to thousands of people in need, continuing the sacred tradition of Langar Sewa to ensure no one goes hungry in our community.",
    image: "/assets/images/hero_2.png",
    linkText: "Learn about Langar Sewa",
    linkHref: "#langar"
  },
  {
    id: 3,
    title: "Health Support for All",
    description: "Regular health camps provide essential medical care, check-ups, and medicines to underserved communities who otherwise lack access to healthcare.",
    image: "/assets/images/hero_3.png",
    linkText: "View our health initiatives",
    linkHref: "#health"
  },
  {
    id: 4,
    title: "Education Changes Lives",
    description: "Through our education support programs, we help underprivileged children access quality education and build a brighter future.",
    image: "/assets/images/hero_4.png",
    linkText: "Support education initiatives",
    linkHref: "#education"
  }
];

const GATE_ANIMATION_DURATION = 800; // ms for gate to close/open
const AUTO_PLAY_INTERVAL = 6000; // ms between auto-advances

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedSlide, setDisplayedSlide] = useState(0); // What's visually shown
  const [gateState, setGateState] = useState<'open' | 'closing' | 'closed' | 'opening'>('open');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const isTransitioning = gateState !== 'open';

  // Clear any pending timeouts
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

    // Step 1: Start closing the gate
    setGateState('closing');

    // Step 2: When gate is fully closed, swap the slide
    timeoutRef.current = setTimeout(() => {
      setDisplayedSlide(index);
      setGateState('closed');

      // Step 3: Small delay then start opening
      timeoutRef.current = setTimeout(() => {
        setGateState('opening');

        // Step 4: Gate fully open, transition complete
        timeoutRef.current = setTimeout(() => {
          setGateState('open');
        }, GATE_ANIMATION_DURATION);
      }, 100);
    }, GATE_ANIMATION_DURATION);
  }, [currentSlide, isTransitioning, clearTimeouts]);

  const nextSlide = useCallback(() => {
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    goToSlide(prevIndex);
  }, [currentSlide, goToSlide]);

  // Auto-play logic
  useEffect(() => {
    const startAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      autoPlayRef.current = setInterval(() => {
        if (gateState === 'open') {
          nextSlide();
        }
      }, AUTO_PLAY_INTERVAL);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [nextSlide, gateState]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeouts();
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [clearTimeouts]);

  // Determine gate CSS class
  const getGateClass = () => {
    switch (gateState) {
      case 'open':
        return 'hero-gate--open';
      case 'closing':
        return 'hero-gate--closing';
      case 'closed':
        return 'hero-gate--closed';
      case 'opening':
        return 'hero-gate--opening';
      default:
        return 'hero-gate--open';
    }
  };

  return (
    <section
      className="hero-carousel-wrapper"
      style={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        minHeight: '600px',
        overflow: 'hidden',
        backgroundColor: '#F54713'
      }}
    >
      {/* Slides Container */}
      <div className="hero-slides" style={{ position: 'relative', width: '100%', height: '100%' }}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="hero-slide"
            style={{
              position: 'absolute',
              inset: 0,
              visibility: index === displayedSlide ? 'visible' : 'hidden',
              zIndex: index === displayedSlide ? 1 : 0,
            }}
          >
            {/* Background Image */}
            <div style={{ position: 'absolute', inset: 0 }}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: 'cover' }}
                priority={index === 0}
                sizes="100vw"
              />
            </div>

            {/* Dark Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.45)',
                zIndex: 2
              }}
            />

            {/* Content */}
            <div
              className="hero-content"
              style={{
                position: 'relative',
                zIndex: 3,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '0 5%',
                maxWidth: '1400px',
                margin: '0 auto'
              }}
            >
              <div
                className="hero-content-inner"
                style={{
                  opacity: index === displayedSlide && gateState === 'open' ? 1 : 0,
                  transform: index === displayedSlide && gateState === 'open' ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                  transitionDelay: gateState === 'open' ? '0.2s' : '0s',
                }}
              >
                <h2
                  className="text-over-media__title text-over-media__title--medium"
                  style={{
                    color: 'white',
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    marginBottom: '20px',
                    lineHeight: 1.2
                  }}
                >
                  {slide.title}
                </h2>
                <p
                  style={{
                    color: 'white',
                    maxWidth: '700px',
                    marginBottom: '30px',
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    lineHeight: 1.6,
                    opacity: 0.95
                  }}
                >
                  {slide.description}
                </p>
                <a
                  className="hero-cta-btn"
                  href={slide.linkHref}
                  style={{
                    display: 'inline-block',
                    padding: '14px 36px',
                    background: 'linear-gradient(135deg, #E8630A 0%, #FF8534 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    fontWeight: 700,
                    borderRadius: '50px',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 6px 20px rgba(232, 99, 10, 0.4)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}
                >
                  {slide.linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Gate Overlay - The Orange Doors */}
      <div
        className={`hero-gate ${getGateClass()}`}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          pointerEvents: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* Branding Overlay - Appears when gates close */}
        <div
          style={{
            position: 'absolute',
            zIndex: 15,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            opacity: gateState === 'closing' || gateState === 'closed' ? 1 : 0,
            transform: gateState === 'closing' || gateState === 'closed' ? 'scale(1)' : 'scale(0.9)',
            transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
            transitionDelay: gateState === 'closing' ? '0.3s' : '0s'
          }}
        >
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid white',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            backgroundColor: 'white'
          }}>
            <img
              src="/assets/images/logo.jpeg"
              alt="Logo"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{
            color: 'white',
            fontSize: '1.8rem',
            fontWeight: 800,
            fontFamily: "'Noto Serif', serif",
            textShadow: '0 2px 10px rgba(0,0,0,0.2)',
            letterSpacing: '1px'
          }}>
            Har Har Maidan Fateh
          </div>
        </div>

        {/* Left Door */}
        <div
          className="hero-gate__left"
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#F54713',
            transform: gateState === 'open' || gateState === 'opening'
              ? 'translateX(-100%)'
              : 'translateX(0)',
            transition: `transform ${GATE_ANIMATION_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          }}
        />
        {/* Right Door */}
        <div
          className="hero-gate__right"
          style={{
            width: '50%',
            height: '100%',
            backgroundColor: '#F54713',
            transform: gateState === 'open' || gateState === 'opening'
              ? 'translateX(100%)'
              : 'translateX(0)',
            transition: `transform ${GATE_ANIMATION_DURATION}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          }}
        />
      </div>



      {/* Navigation Controls */}
      <div
        className="hero-controls"
        style={{
          position: 'absolute',
          right: '30px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        {/* Pagination Dots */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '15px' }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.7)',
                backgroundColor: index === currentSlide ? 'white' : 'transparent',
                cursor: isTransitioning ? 'not-allowed' : 'pointer',
                padding: 0,
                transition: 'all 0.3s ease',
                opacity: isTransitioning ? 0.5 : 1,
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <button
          type="button"
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous slide"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            cursor: isTransitioning ? 'not-allowed' : 'pointer',
            padding: '8px',
            borderRadius: '4px',
            opacity: isTransitioning ? 0.5 : 1,
            transition: 'all 0.3s ease',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next slide"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: 'white',
            cursor: isTransitioning ? 'not-allowed' : 'pointer',
            padding: '8px',
            borderRadius: '4px',
            opacity: isTransitioning ? 0.5 : 1,
            transition: 'all 0.3s ease',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      {/* Slide Counter */}
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          color: 'white',
          fontSize: '14px',
          fontWeight: 500,
          letterSpacing: '2px',
        }}
      >
        <span style={{ fontSize: '20px', fontWeight: 700 }}>{String(currentSlide + 1).padStart(2, '0')}</span>
        <span style={{ opacity: 0.6, margin: '0 8px' }}>/</span>
        <span style={{ opacity: 0.6 }}>{String(slides.length).padStart(2, '0')}</span>
      </div>
    </section>
  );
}
