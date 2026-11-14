import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteData } from '../data/content';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(true);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change or search query change
  useEffect(() => {
    setIsProjectsDropdownOpen(false);
    setIsMobileOpen(false);
    document.body.style.overflow = '';
  }, [location.pathname, location.search]);

  // Handle outside clicks and Escape key for desktop dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsProjectsDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsProjectsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

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

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path || location.pathname.startsWith(`${path}/`);
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="brand-link" aria-label="S&P Chitralok Studios">
          <img
            src={siteData.brand.logo}
            alt="S&P Chitralok Studios Logo"
            className="brand-logo-img"
          />
          <span className="brand-divider" aria-hidden="true" />
          <span className="brand-title">
            <span className="brand-sp">S&P</span>
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
          <Link to="/directors" className={`nl ${isActive('/directors') ? 'active' : ''}`}>
            Directors
          </Link>

          {/* Projects with Dropdown: Films & Serials */}
          <div
            className="nav-dropdown-wrapper"
            ref={dropdownRef}
            onMouseEnter={() => setIsProjectsDropdownOpen(true)}
            onMouseLeave={() => setIsProjectsDropdownOpen(false)}
          >
            <Link
              to="/work"
              className={`nl nav-dropdown-trigger ${isActive('/work') ? 'active' : ''}`}
              aria-expanded={isProjectsDropdownOpen}
              aria-haspopup="true"
            >
              <span>Projects</span>
              <svg
                className={`nav-dropdown-caret ${isProjectsDropdownOpen ? 'open' : ''}`}
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </Link>

            <div
              className={`nav-dropdown-menu ${isProjectsDropdownOpen ? 'show' : ''}`}
              role="menu"
              aria-label="Projects Submenu"
            >
              <Link
                to="/work?cat=Film"
                className="nav-dropdown-item"
                onClick={() => setIsProjectsDropdownOpen(false)}
                role="menuitem"
              >
                <span className="nav-dropdown-bullet">•</span>
                <span className="nav-dropdown-label">Films</span>
              </Link>
              <div className="nav-dropdown-divider" />
              <Link
                to="/work?cat=Series"
                className="nav-dropdown-item"
                onClick={() => setIsProjectsDropdownOpen(false)}
                role="menuitem"
              >
                <span className="nav-dropdown-bullet">•</span>
                <span className="nav-dropdown-label">Serials</span>
              </Link>
            </div>
          </div>

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
          <Link to="/" onClick={closeMobileNav} className="brand-link" aria-label="S&P Chitralok Studios" style={{ gap: 0 }}>
            <img
              src={siteData.brand.logo}
              alt="S&P Chitralok Studios Logo"
              className="brand-logo-img"
            />
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
          <Link to="/directors" onClick={closeMobileNav} className={`mobile-nav-link ${isActive('/directors') ? 'active' : ''}`}>Directors</Link>

          {/* Mobile Projects Accordion with Films & Serials */}
          <div className="mobile-drawer-accordion-item">
            <div className="mobile-drawer-projects-trigger">
              <Link
                to="/work"
                onClick={closeMobileNav}
                className={`mobile-nav-link ${isActive('/work') ? 'active' : ''}`}
              >
                Projects
              </Link>
              <button
                type="button"
                className={`mobile-sub-toggle ${isMobileProjectsOpen ? 'expanded' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileProjectsOpen(prev => !prev);
                }}
                aria-label="Toggle projects submenu"
                aria-expanded={isMobileProjectsOpen}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
            </div>

            {isMobileProjectsOpen && (
              <div className="mobile-projects-submenu">
                <Link
                  to="/work?cat=Film"
                  onClick={closeMobileNav}
                  className="mobile-sub-link"
                >
                  <span className="mobile-sub-bullet">•</span>
                  <span>Films</span>
                </Link>
                <Link
                  to="/work?cat=Series"
                  onClick={closeMobileNav}
                  className="mobile-sub-link"
                >
                  <span className="mobile-sub-bullet">•</span>
                  <span>Serials</span>
                </Link>
              </div>
            )}
          </div>

          <Link to="/contact" onClick={closeMobileNav} className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact Us</Link>
        </nav>
      </div>
    </>
  );
}
