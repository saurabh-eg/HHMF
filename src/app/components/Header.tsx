'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About Us' },
    { href: '#activities', label: 'Our Activities' },
    { href: '#langar', label: 'Langar Sewa' },
    { href: '#health', label: 'Health Camps' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className="site-header-wrapper"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
      }}
    >
      <nav
        className="hmf-navbar"
        style={{
          background: scrolled 
            ? 'rgba(255, 255, 255, 0.98)' 
            : 'linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          padding: scrolled ? '12px 40px' : '20px 40px',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
        }}
      >
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          {/* Logo/Brand */}
          <Link
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div style={{
              width: '55px',
              height: '55px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: scrolled ? '2px solid #E8630A' : '2px solid rgba(255,255,255,0.8)',
              transition: 'all 0.3s ease',
              flexShrink: 0,
            }}>
              <img
                src="/assets/images/logo.jpeg"
                alt="Har Har Maidan Fateh Logo"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                }}
              />
            </div>
            <span style={{
              color: scrolled ? '#1a1a1a' : 'white',
              fontSize: '1.35rem',
              fontWeight: 700,
              fontFamily: "'Noto Serif', Georgia, serif",
              textShadow: scrolled ? 'none' : '0 1px 3px rgba(0,0,0,0.3)',
              transition: 'all 0.3s ease',
            }}>
              Har Har Maidan Fateh
            </span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: scrolled ? '#1a1a1a' : 'white',
              fontSize: '28px',
              cursor: 'pointer',
              padding: '8px',
              transition: 'all 0.3s ease',
            }}
            className="mobile-menu-toggle"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>

          {/* Navigation Links */}
          <ul
            className={`nav-menu ${mobileMenuOpen ? 'nav-open' : ''}`}
            style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: '8px',
              alignItems: 'center',
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    color: scrolled ? '#333' : 'white',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    padding: '10px 16px',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    display: 'block',
                    textShadow: scrolled ? 'none' : '0 1px 2px rgba(0,0,0,0.2)',
                  }}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li style={{ marginLeft: '8px' }}>
              <a
                href="#donate"
                style={{
                  background: 'linear-gradient(135deg, #E8630A 0%, #FF8534 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: 600,
                  padding: '12px 24px',
                  borderRadius: '50px',
                  transition: 'all 0.3s ease',
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 15px rgba(232, 99, 10, 0.3)',
                  fontSize: '0.95rem',
                }}
                className="donate-btn"
              >
                Donate Now
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>{`
        .nav-link:hover {
          background: ${scrolled ? 'rgba(232, 99, 10, 0.1)' : 'rgba(255,255,255,0.15)'};
          color: ${scrolled ? '#E8630A' : 'white'} !important;
        }
        
        .donate-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(232, 99, 10, 0.4);
        }

        @media (max-width: 1024px) {
          .mobile-menu-toggle { 
            display: block !important; 
          }
          
          .nav-menu { 
            position: fixed;
            top: ${scrolled ? '79px' : '95px'};
            left: 0;
            right: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            padding: 20px;
            gap: 5px;
            transform: translateY(-120%);
            opacity: 0;
            transition: all 0.3s ease;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          }
          
          .nav-menu.nav-open {
            transform: translateY(0);
            opacity: 1;
          }
          
          .nav-menu .nav-link {
            color: #333 !important;
            text-shadow: none !important;
            padding: 15px 20px !important;
            width: 100%;
            text-align: center;
            border-radius: 10px;
          }
          
          .nav-menu .nav-link:hover {
            background: rgba(232, 99, 10, 0.1);
          }
          
          .nav-menu li:last-child {
            margin-top: 10px;
            margin-left: 0 !important;
          }
          
          .nav-menu .donate-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </header>
  );
}
