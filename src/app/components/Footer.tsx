'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact">
      <section className="global-footer global-footer--dark" dir="ltr">
        <div className="global-footer__container container">
          <div className="global-footer__logo" lang="en" dir="ltr">
            <Link href="/" className="global-footer__logo-link" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <img src="/assets/images/logo.jpeg" alt="Har Har Maidan Fateh Logo" style={{ height: '70px', width: 'auto', filter: 'brightness(1.1)' }} />
              <div style={{ fontFamily: "'Noto Serif', Georgia, serif", fontSize: '1.6rem', fontWeight: 700, fontStyle: 'italic', color: '#f5f3ed' }}>Har Har Maidan Fateh</div>
            </Link>
          </div>

          <div className="global-footer__main-content">
            <div className="global-footer__description" lang="en">
              We are a community-based NGO serving humanity through Langar Sewa, health camps, and educational support in Yamunanagar, Haryana, India.
            </div>

            <div className="global-footer__social-icons">
              <div style={{ display: 'flex', gap: '20px', fontSize: '24px' }}>
                <a href="https://www.facebook.com/HarHarMaidanFateh/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Facebook</a>
                <a href="https://www.instagram.com/harharmaidan/" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Instagram</a>
              </div>
            </div>

            <nav className="global-footer__main-links global-footer__main-links--desktop" aria-label="Main areas">
              <ul className="global-footer__items">
                <li className="global-footer__link-item" lang="en" dir="ltr">
                  <Link className="global-footer__link link" href="#about">About</Link>
                </li>
                <li className="global-footer__link-item" lang="en" dir="ltr">
                  <Link className="global-footer__link link" href="#activities">Our work</Link>
                </li>
                <li className="global-footer__link-item" lang="en" dir="ltr">
                  <Link className="global-footer__link link" href="#impact">Impact</Link>
                </li>
              </ul>
            </nav>

            <div className="global-footer__copyright">
              <div className="footer-copyright" lang="en">© 2025 Har Har Maidan Fateh. Registered NGO in Haryana.</div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
