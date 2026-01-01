'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function CTACards() {
  return (
    <section className="component container container--100">
      <div className="container__col container__col--100">
        <section className="section-headline component component--headline container section-headline--small section-headline--no-border" lang="en" dir="ltr">
          <h2 className="section-headline__title section-headline__title--small">More about our organization</h2>
        </section>
        <section className="component grouped-cta-cards">
          <div className="grouped-cta-cards__items">
            <div className="cta-card component" lang="en" dir="ltr">
              <div className="cta-card__image" style={{ position: 'relative', height: '200px' }}>
                <Image
                  alt="Our Role"
                  src="/assets/images/activities_main.png"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="cta-card__title">
                <span>Our role</span>
              </div>
              <div className="cta-card__description">
                <p>For over 25 years, the Har Har Maidan Fateh has been committed to fighting the greatest inequities in the world.</p>
              </div>
              <ul className="cta-card__links" aria-label="Our role">
                <li className="cta-card__link">
                  <Link className="arrow-link" href="#about">
                    <span>Learn more</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="cta-card component" lang="en" dir="ltr">
              <div className="cta-card__image" style={{ position: 'relative', height: '200px' }}>
                <Image
                  alt="How we work"
                  src="/assets/images/hero_1.png"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="cta-card__title">
                <span>How we work</span>
              </div>
              <div className="cta-card__description">
                <p>We are focused on results. Those that can be measured. And those measured in ways beyond numbers.</p>
              </div>
              <ul className="cta-card__links" aria-label="How we work">
                <li className="cta-card__link">
                  <Link className="arrow-link" href="#activities">
                    <span>Learn more</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="cta-card component" lang="en" dir="ltr">
              <div className="cta-card__image" style={{ position: 'relative', height: '200px' }}>
                <Image
                  alt="Our story"
                  src="/assets/images/hero_4.png"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="cta-card__title">
                <span>Our story</span>
              </div>
              <div className="cta-card__description">
                <p>Learn about the origins of our organization and the values that drive our work.</p>
              </div>
              <ul className="cta-card__links" aria-label="Our story">
                <li className="cta-card__link">
                  <Link className="arrow-link" href="#about">
                    <span>Learn more</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
