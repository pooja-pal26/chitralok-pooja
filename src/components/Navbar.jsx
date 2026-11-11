import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname]);

  // Close mobile drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileOpen]);

  const toggleMobileNav = () => {
    setIsMobileOpen(prev => {
      const next = !prev;
      document.body.style.overflow = next ? 'hidden' : '';
      return next;
    });
  };

  const closeMobileNav = () => {
    setIsMobileOpen(false);
    document.body.style.overflow = '';
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brand-link" aria-label="Chitralok Studios">
          <img
            src={siteData.brand.logo}
            alt="Chitralok Studios Logo"
            className="brand-logo-img"
          />
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-title">
            <span>Chitralok</span>
            <span style={{ color: 'var(--gold-primary)' }}>Studios</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Main Navigation">
          <Link to="/" className={`nl ${isActive('/') ? 'active' : ''}`}>
            Home
          </Link>
          <Link to="/about" className={`nl ${isActive('/about') ? 'active' : ''}`}>
            About Us
          </Link>
          <Link to="/director" className={`nl ${isActive('/director') ? 'active' : ''}`}>
            Director
          </Link>
          <Link to="/work" className={`nl ${isActive('/work') ? 'active' : ''}`}>
            Projects
          </Link>
          <Link to="/contact" className={`nl ${isActive('/contact') ? 'active' : ''}`}>
            Contact Us
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          className={`mobile-nav-toggle ${isMobileOpen ? 'active' : ''}`}
          onClick={toggleMobileNav}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${isMobileOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Mobile Navigation Menu">
        {/* Mobile Drawer Top Bar with Brand & Close Button */}
        <div className="mobile-drawer-header">
          <Link to="/" onClick={closeMobileNav} className="brand-link" aria-label="Chitralok Studios">
            <img
              src={siteData.brand.logo}
              alt="Chitralok Studios Logo"
              className="brand-logo-img"
            />
            <span className="brand-divider" aria-hidden="true" />
            <span className="brand-title">
              <span>Chitralok</span>
              <span style={{ color: 'var(--gold-primary)' }}>Studios</span>
            </span>
          </Link>

          <button
            className="mobile-drawer-close"
            onClick={closeMobileNav}
            aria-label="Close navigation menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="mobile-drawer-links" aria-label="Mobile Menu Links">
          <Link to="/" onClick={closeMobileNav} className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" onClick={closeMobileNav} className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>
          <Link to="/director" onClick={closeMobileNav} className={`mobile-nav-link ${isActive('/director') ? 'active' : ''}`}>Director</Link>
          <Link to="/work" onClick={closeMobileNav} className={`mobile-nav-link ${isActive('/work') ? 'active' : ''}`}>Projects</Link>
          <Link to="/contact" onClick={closeMobileNav} className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
        </nav>
      </div>
    </>
  );
}
