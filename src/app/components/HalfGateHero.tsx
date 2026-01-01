'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HalfGateHero() {
  return (
    <section className="component container container--bleed theme-light" id="impact">
      <div className="container container--100">
        <div className="container__col container__col--100">
          <section className="half-gate-hero js-half-gate-hero half-gate-hero--image-left" style={{ '--gate-color': '#fff' } as React.CSSProperties}>
            <div className="half-gate-hero__container">
              <figure className="half-gate-hero__media" style={{ position: 'relative', minHeight: '400px' }}>
                <Image
                  src="/assets/images/hero_1.png"
                  alt="Community Impact"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </figure>
              <div className="half-gate-hero__gate half-gate-hero__gate--mobile gate-style-horizontal"></div>
              <div className="half-gate-hero__gate half-gate-hero__gate--desktop gate-style"></div>
              <div className="half-gate-hero__content">
                <div className="half-gate-hero__inner">
                  <div className="half-gate-hero__spaceholder"></div>
                  <div className="half-gate-hero__text-content half-gate-hero__text-content--align-center">
                    <div className="half-gate-hero__eyebrow half-gate-hero__eyebrow--image" style={{ marginBottom: '20px' }}>
                      <h3 style={{ color: '#F54713', fontFamily: 'var(--f-theme-headline-base)', fontSize: '1.5rem', fontWeight: 'bold' }}>Our Impact in Yamunanagar</h3>
                    </div>
                    <div className="half-gate-hero__description">
                      Every day, we see the transformative power of community support. From providing meals to ensuring medical care, our mission at Har Har Maidan Fateh is to bring tangible change to those who need it most in Yamunanagar, Haryana.
                    </div>
                    <div className="half-gate-hero__link">
                      <Link className="btn btn--tertiary" href="#activities">Discover Our Work</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
