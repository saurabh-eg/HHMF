'use client';

import Link from 'next/link';
import Image from 'next/image';

const cards = [
  {
    id: 'langar',
    title: 'Langar',
    titleHighlight: 'Sewa',
    description: 'Feeding the hungry with dignity and compassion through our daily community kitchen initiatives.',
    linkText: 'Learn about Langar Sewa',
    linkHref: '#langar',
    image: '/assets/images/hero_2.png',
    imageAlt: 'Langar Sewa',
  },
  {
    id: 'health',
    title: 'Health',
    titleHighlight: 'Camps',
    description: 'Bringing critical medical services and healthcare awareness to the most underserved regions of Yamunanagar.',
    linkText: 'View Health Initiatives',
    linkHref: '#health',
    image: '/assets/images/hero_3.png',
    imageAlt: 'Health Initiatives',
  },
];

export default function HorizontalCTACards() {
  return (
    <>
      <section className="hcta-section">
        <div className="hcta-container">
          {cards.map((card) => (
            <div key={card.id} className="hcta-card" id={card.id}>
              <div className="hcta-card__inner">
                {/* Image */}
                <div className="hcta-card__media">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                {/* Content */}
                <div className="hcta-card__content">
                  <h3 className="hcta-card__title">
                    {card.title} <mark>{card.titleHighlight}</mark>
                  </h3>
                  <p className="hcta-card__description">{card.description}</p>
                  <div className="hcta-card__link">
                    <Link href={card.linkHref}>{card.linkText}</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .hcta-section {
          padding: 60px 20px;
          background-color: #fff;
        }

        .hcta-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        @media (max-width: 900px) {
          .hcta-container {
            grid-template-columns: 1fr;
          }
        }

        .hcta-card {
          background-color: #E8F4FC;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: background-color 0.25s ease;
        }

        .hcta-card:hover {
          background-color: #D6EBFA;
        }

        .hcta-card__inner {
          display: flex;
          flex-direction: row;
          gap: 24px;
          padding: 18px;
          min-height: 350px;
        }

        @media (max-width: 600px) {
          .hcta-card__inner {
            flex-direction: column;
            min-height: auto;
          }
        }

        .hcta-card__media {
          position: relative;
          flex: 0 0 45%;
          min-height: 280px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 6px 6px 0 0 #E8B910;
        }

        @media (max-width: 600px) {
          .hcta-card__media {
            flex: none;
            height: 220px;
            min-height: 220px;
          }
        }

        .hcta-card__content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 10px 15px;
          gap: 16px;
        }

        .hcta-card__title {
          font-family: var(--font-sans, 'Noto Sans', sans-serif);
          font-size: clamp(1.4rem, 2vw, 1.75rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: -0.02em;
          line-height: 1.2;
          color: #1a1a1a;
          margin: 0;
        }

        .hcta-card__title mark {
          background: none;
          color: #E8630A;
          font-family: var(--font-serif, 'Noto Serif', Georgia, serif);
          font-style: italic;
          font-weight: 400;
          text-transform: none;
        }

        .hcta-card__description {
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin: 0;
        }

        .hcta-card__link a {
          display: inline-block;
          color: #1a1a1a;
          font-weight: 600;
          font-size: 0.95rem;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.2s ease;
        }

        .hcta-card__link a:hover {
          color: #E8630A;
        }
      `}</style>
    </>
  );
}
