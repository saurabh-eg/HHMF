'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const nextSlide = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const activeItems = activityData.find(tab => tab.id === activeTab)?.items || [];

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [activeTab, emblaApi]);

  return (
    <section
      className="component container container--bleed theme-dark container--flush-bottom container--background container--no-bottom-padding"
      style={{ '--background-color': '#313A44', paddingBottom: '60px' } as React.CSSProperties}
    >
      <section className="tabbed-content-carousel">
        <div className="tabbed-content-carousel__container container">
          <div className="tabbed-content-carousel__header">
            <h2 className="tabbed-content-carousel__title">Our Activities</h2>
            <div className="tabbed-content-carousel__link tabbed-content-carousel__link--top">
              <Link className="arrow-link arrow-link--arrow" href="#activities">
                <span>See All Activities</span>
              </Link>
            </div>
          </div>

          <div className="tabbed-content-carousel__content">
            <section aria-label="topics">
              <ul className="tabbed-content-carousel__tab-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', listStyle: 'none', padding: 0 }}>
                {activityData.map(tab => (
                  <li key={tab.id} className="tabbed-content-carousel__tab-item">
                    <button
                      className={`btn btn--pill tabbed-content-carousel__tab-button ${activeTab === tab.id ? 'btn--primary' : ''}`}
                      onClick={() => setActiveTab(tab.id)}
                      type="button"
                    >
                      {tab.label}
                    </button>
                  </li>
                ))}
              </ul>
            </section>

            <div className="tabbed-content-carousel__carousel" style={{ position: 'relative', marginTop: '30px' }}>
              <div className="tabbed-content-carousel__controls" style={{ position: 'absolute', top: '-50px', right: 0, display: 'flex', gap: '10px' }}>
                <button
                  className="btn btn--primary btn--icon-only"
                  onClick={scrollPrev}
                  type="button"
                  aria-label="Previous"
                  style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}
                >
                  ←
                </button>
                <button
                  className="btn btn--primary btn--icon-only"
                  onClick={nextSlide}
                  type="button"
                  aria-label="Next"
                  style={{ borderRadius: '50%', width: '40px', height: '40px', padding: 0 }}
                >
                  →
                </button>
              </div>

              <div className="embla" ref={emblaRef} style={{ overflow: 'hidden' }}>
                <div className="embla__container" style={{ display: 'flex' }}>
                  {activeItems.map((item, index) => (
                    <div key={index} className="embla__slide" style={{ flex: '0 0 100%', minWidth: 0, paddingRight: '20px' }}>
                      <div className="article-promo component" style={{ display: 'flex', backgroundColor: '#fff', color: '#000', borderRadius: '8px', overflow: 'hidden' }}>
                        <div style={{ flex: '0 0 40%', position: 'relative', minHeight: '300px' }}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            style={{ objectFit: 'cover' }}
                          />
                        </div>
                        <div className="article-promo__content" style={{ padding: '30px', flex: '1' }}>
                          <h2 className="article-promo__title" style={{ fontSize: '1.5rem', marginBottom: '15px' }}>
                            <Link href={item.link}>{item.title}</Link>
                          </h2>
                          <div className="article-promo__description" style={{ fontSize: '1rem', color: '#666' }}>
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
