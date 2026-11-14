import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';

export default function Footer() {
  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'instagram':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        );
      case 'youtube':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
          </svg>
        );
      case 'facebook':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        );
      case 'imdb':
        return (
          <span style={{
            fontSize: '9px',
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            letterSpacing: '0.04em',
            lineHeight: 1
          }}>
            IMDb
          </span>
        );
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        );
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Column 1: Studio Name & Address (Centered in its box) */}
        <div className="footer-col footer-col-address">
          <div className="footer-col-inner" style={{ alignItems: 'center', textAlign: 'center' }}>
            <Link
              to="/"
              className="footer-logo-link"
              aria-label="S&P Chitralok Studios Home"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                lineHeight: 1
              }}
            >
              <img
                src={siteData.brand.logo}
                alt="S&P Chitralok Studios Logo"
                style={{
                  width: '42px',
                  height: '42px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 10px rgba(212, 166, 42, 0.5))',
                  display: 'block',
                  transition: 'transform var(--transition-fast), filter var(--transition-fast)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 14px rgba(212, 166, 42, 0.75))';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.filter = 'drop-shadow(0 0 10px rgba(212, 166, 42, 0.5))';
                }}
              />
            </Link>
            <div
              className="footer-address-text"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '4px',
                width: '100%'
              }}
            >
              <div
                className="footer-company-name"
                style={{
                  display: 'block',
                  width: '100%',
                  fontFamily: 'var(--font-serif)',
                  fontSize: '21px',
                  fontWeight: 600,
                  color: 'var(--gold-primary)',
                  marginBottom: '4px',
                  lineHeight: 1.3
                }}
              >
                S&amp;P Chitralok Studios
              </div>
              <div className="footer-address-line" style={{ display: 'block', width: '100%', fontSize: '15px', color: 'var(--text-light-sub)', lineHeight: 1.5 }}>
               24/3, 24/4 & 24/5, 3rd Floor,     
              </div>
              <div className="footer-address-line" style={{ display: 'block', width: '100%', fontSize: '15px', color: 'var(--text-light-sub)', lineHeight: 1.5 }}>
                Block E, Pandav Nagar,
              </div>
              <div className="footer-address-line" style={{ display: 'block', width: '100%', fontSize: '15px', color: 'var(--text-light-sub)', lineHeight: 1.5 }}>
                East Delhi – 110092
              </div>
              <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
                <a
                  href={`tel:${siteData.brand.phone.replace(/[^0-9+]/g, '')}`}
                  style={{
                    fontSize: '14px',
                    color: 'var(--gold-primary)',
                    textDecoration: 'none',
                    letterSpacing: '0.03em',
                    transition: 'opacity var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  {siteData.brand.phone}
                </a>
                <a
                  href={`mailto:${siteData.brand.email}`}
                  style={{
                    fontSize: '13px',
                    color: 'var(--text-light-sub)',
                    textDecoration: 'none',
                    letterSpacing: '0.02em',
                    transition: 'color var(--transition-fast)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-light-sub)'}
                >
                  {siteData.brand.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical Divider 1 */}
        <div className="footer-v-divider" />

        {/* Column 2: Navigation Links (Quick Links) */}
        <div className="footer-col footer-links footer-col-explore">
          <div className="footer-col-inner">
            <span className="footer-col-title">Quick Links</span>
            <div className="footer-nav-list">
              <Link className="nl" to="/">Home</Link>
              <Link className="nl" to="/about">About Us</Link>
              <Link className="nl" to="/directors">Directors</Link>
              <Link className="nl" to="/work">Projects</Link>
              <Link className="nl" to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* Vertical Divider 2 */}
        <div className="footer-v-divider" />

        {/* Column 3: Follow With Icons */}
        <div className="footer-col footer-links footer-col-follow">
          <div className="footer-col-inner">
            <span className="footer-col-title">Follow</span>
            <div className="footer-social-list">
              {siteData.brand.socials.map((s, idx) => (
                <a
                  key={idx}
                  className="footer-social-link"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Follow on ${s.name}`}
                >
                  <span className="footer-social-icon">{getSocialIcon(s.name)}</span>
                  <span className="footer-social-label">{s.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Divider 2 (Between Columns & Bottom Bar) */}
      <div className="footer-h-divider footer-h-divider-bottom" />

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={siteData.brand.logo}
            alt="S&P Chitralok Studios Logo"
            style={{ width: '32px', height: '32px', objectFit: 'contain', filter: 'drop-shadow(0 0 6px rgba(212, 166, 42, 0.4))' }}
          />
          <span className="footer-brand">{siteData.brand.fullName}</span>
        </div>
        <span className="footer-copy">
          © {new Date().getFullYear()} S&amp;P Chitralok Studios. All rights reserved.
        </span>
      </div>
    </footer>
  );
}


