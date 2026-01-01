'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import MissionStatement from './components/MissionStatement';
import HorizontalCTACards from './components/HorizontalCTACards';
import HalfGateHero from './components/HalfGateHero';
import TabbedContentCarousel from './components/TabbedContentCarousel';
import OrganizationStats from './components/OrganizationStats';
import CTACards from './components/CTACards';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      
      <main className="main-content">
        <div id="main-content"></div>
        <div className="main-content-wrapper">
          
          <h1 className="container u-visuallyhidden invisible-page-title">
            Har Har Maidan Fateh
          </h1>

          {/* Hero Carousel Section */}
          <HeroCarousel />

          {/* Mission Statement Section */}
          <MissionStatement />

          {/* Horizontal CTA Cards */}
          <HorizontalCTACards />

          {/* Half Gate Hero - Community Assistance */}
          <HalfGateHero />

          {/* Our Activities - Tabbed Content Carousel */}
          <TabbedContentCarousel />

          {/* Organization Stats */}
          <OrganizationStats />

          {/* More about our organization */}
          <CTACards />

        </div>
      </main>

      <Footer />
    </>
  );
}
