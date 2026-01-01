'use client';

import { useState } from 'react';
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
    <div className="min-h-screen flex flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <main className="flex-1">
        {/* Hero Carousel Section */}
        <HeroCarousel />

        {/* Mission Statement Section */}
        <MissionStatement />

        {/* Horizontal CTA Cards - Langar Sewa & Health Camps */}
        <HorizontalCTACards />

        {/* Half Gate Hero - Our Impact */}
        <HalfGateHero />

        {/* Our Activities - Tabbed Content Carousel */}
        <TabbedContentCarousel />

        {/* Organization Stats */}
        <OrganizationStats />

        {/* More about our organization - CTA Cards */}
        <CTACards />
      </main>

      <Footer />
    </div>
  );
}
