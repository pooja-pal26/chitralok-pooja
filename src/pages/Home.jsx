import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import Marquee from '../components/Marquee';
import BTSGallery from '../components/BTSGallery';
import KineticTicker from '../components/KineticTicker';
import DirectorSpotlight from '../components/DirectorSpotlight';
import EastDelhiMap from '../components/EastDelhiMap';

export default function Home({ onOpenVideo }) {
  const { hero, story, featuredWorks, brand } = siteData;
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = hero.slides || [
    {
      id: 1,
      tag: hero.tag,
      headlinePrefix: hero.headlinePrefix,
      headlineMain: hero.headlineMain,
      headlineAccent: hero.headlineAccent,
      manifesto: hero.manifesto,
      bgImage: hero.bgImage,
      ctaText: 'Get in touch',
      ctaLink: '/contact',
      secondaryText: 'View Selected Works →',
      secondaryLink: '/work',
      videoUrl: hero.defaultShowreelVideo
    }
  ];

  // Hero carousel auto-play timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      setActiveSlide((prev) => (prev < heroSlides.length - 1 ? prev + 1 : 0));
    } else if (diff < -45) {
      setActiveSlide((prev) => (prev > 0 ? prev - 1 : heroSlides.length - 1));
    }
    touchStartX.current = null;
  };

  const handlePrevSlide = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev > 0 ? prev - 1 : heroSlides.length - 1));
  };

  const handleNextSlide = (e) => {
    e.stopPropagation();
    setActiveSlide((prev) => (prev < heroSlides.length - 1 ? prev + 1 : 0));
  };

  return (
    <div style={{ width: '100%' }}>
      {/* 1. Hero Section: Cinematic Multi-Slide Carousel with Scroll Reveal */}
      <section className="hero-carousel-section" style={{
        position: 'relative',
        minHeight: '100vh',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg-surface)',
        borderBottom: '1px solid var(--border-subtle)',
        overflow: 'hidden'
      }}>
        {/* Visual Frame: Contains Carousel Images & Navigation Controls */}
        <div
          className="hero-visual-frame"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden'
          }}
        >
          {/* Background Visual Carousel: Stacked Crossfading Images */}
          {heroSlides.map((slide, idx) => (
            <React.Fragment key={slide.id}>
              {/* Ambient Blurred Background (Cinema Backdrop Glow) */}
              <img
                src={slide.bgImage}
                alt=""
                aria-hidden="true"
                className="hero-slide-ambient"
                style={{
                  position: 'absolute',
                  inset: '-25px',
                  width: 'calc(100% + 50px)',
                  height: 'calc(100% + 50px)',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: 'blur(36px) brightness(0.35)',
                  opacity: activeSlide === idx ? 0.9 : 0,
                  transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: 'none',
                  display: 'block'
                }}
              />

              {/* Crisp 100% High-Definition Main Visual (Full Uncut on Desktop & Mobile) */}
              <img
                src={slide.bgImage}
                alt={`S&P Chitralok Studios Visual ${slide.id}`}
                className="hero-slide-main"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'center center',
                  filter: 'none',
                  opacity: activeSlide === idx ? 1 : 0,
                  transition: 'opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: 'none'
                }}
              />
            </React.Fragment>
          ))}

          {/* Carousel Navigation Arrow Buttons (Floating on sides) */}
          <div className="hero-arrow-nav" style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            transform: 'translateY(-50%)',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 clamp(16px, 2.5vw, 40px)',
            zIndex: 4,
            pointerEvents: 'none'
          }}>
            <button
              onClick={handlePrevSlide}
              aria-label="Previous Hero Slide"
              title="Previous Slide"
              style={{
                pointerEvents: 'auto',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(212, 166, 42, 0.4)',
                background: 'rgba(10, 10, 9, 0.65)',
                color: 'var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold-primary)';
                e.currentTarget.style.color = '#070707';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(10, 10, 9, 0.65)';
                e.currentTarget.style.color = 'var(--gold-primary)';
                e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.4)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>

            <button
              onClick={handleNextSlide}
              aria-label="Next Hero Slide"
              title="Next Slide"
              style={{
                pointerEvents: 'auto',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(212, 166, 42, 0.4)',
                background: 'rgba(10, 10, 9, 0.65)',
                color: 'var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold-primary)';
                e.currentTarget.style.color = '#070707';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(10, 10, 9, 0.65)';
                e.currentTarget.style.color = 'var(--gold-primary)';
                e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.4)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>

        <div className="hero-spacer" style={{ flex: 1 }} />

        {/* Floating Scroll Indicator on Initial Clean Screen */}
        <div className="hero-scroll-indicator" style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px',
          opacity: isScrolledDown ? 0 : 1,
          visibility: isScrolledDown ? 'hidden' : 'visible',
          transition: 'opacity 0.5s ease, visibility 0.5s ease',
          pointerEvents: 'none'
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--gold-primary)',
            textShadow: '0 2px 10px rgba(0,0,0,0.8)'
          }}>
            Scroll to Enter ↓
          </span>
          <div style={{
            width: '1.5px',
            height: '32px',
            background: 'linear-gradient(180deg, var(--gold-primary), transparent)',
            borderRadius: '1px'
          }} />
        </div>

        {/* Hero Bottom Content: Smooth Scroll Reveal Effect */}
        <div className="hero-bottom-content" style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 var(--container-pad) clamp(28px, 5vh, 64px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(20px, 3vw, 36px)',
          opacity: isScrolledDown ? 1 : 0,
          transform: isScrolledDown ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: isScrolledDown ? 'auto' : 'none'
        }}>
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              marginBottom: '14px',
              width: '100%'
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(10px, 2.8vw, 11px)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--gold-primary)',
                fontWeight: 600,
                lineHeight: 1.3
              }}>
                {hero.tag}
              </span>
              <span style={{
                fontSize: '11px',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-secondary)',
                letterSpacing: '0.12em',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                marginLeft: 'auto'
              }}>
                · {String(activeSlide + 1).padStart(2, '0')}&nbsp;/&nbsp;{String(heroSlides.length).padStart(2, '0')}
              </span>
            </div>

            <h1 style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 8.5vw, 156px)',
              lineHeight: 0.94,
              letterSpacing: '-0.035em'
            }}>
              <span style={{ display: 'block' }}>{hero.headlinePrefix}</span>
              <span style={{ display: 'block' }}>
                {hero.headlineMain} <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>{hero.headlineAccent}</span>
              </span>
            </h1>

            <p style={{
              margin: '20px 0 0',
              maxWidth: '680px',
              fontSize: 'clamp(14px, 2vw, 18px)',
              lineHeight: 1.6,
              color: 'var(--text-light-sub)',
              letterSpacing: '0.01em'
            }}>
              {hero.manifesto}
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            borderTop: '1px solid var(--border-medium)',
            paddingTop: '28px'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px 32px' }}>
              <Link
                to="/contact"
                className="ul"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '44px',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--gold-primary)',
                  whiteSpace: 'nowrap'
                }}
              >
                Get in touch →
              </Link>
              <Link
                to="/work"
                className="ul"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  minHeight: '44px',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
                }}
              >
                View Selected Projects →
              </Link>
            </div>

            {/* Slide Pagination Indicator Pills */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {heroSlides.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Switch to slide ${idx + 1}`}
                  title={`Slide ${idx + 1}`}
                  style={{
                    height: '4px',
                    width: activeSlide === idx ? '32px' : '14px',
                    borderRadius: '2px',
                    background: activeSlide === idx ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.22)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Section: Our Story & Manifesto (Luxury Ambient Gradient) */}
      <section className="our-story-section">
        <div className="our-story-ambient-glow" />
        <div style={{ flex: '1 1 200px', minWidth: 0, position: 'relative', zIndex: 1 }}>
          <span style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
            {story.badge}
          </span>
        </div>
        <div style={{ flex: '4 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative', zIndex: 1 }}>
          <p style={{
            margin: 0,
            fontFamily: 'var(--font-heading)',
            fontWeight: 600,
            fontSize: 'clamp(20px, 3.4vw, 54px)',
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)'
          }}>
            {story.statement}
          </p>
          <Link
            to="/about"
            className="ul"
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '44px',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--gold-primary)',
              borderBottom: '1px solid var(--gold-primary)'
            }}
          >
            {story.linkText} →
          </Link>
        </div>
      </section>

    

      {/* 4. Section: Featured Works with Magnetic Cursor Interaction */}
      <section style={{ padding: '0 var(--container-pad) 72px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '16px', marginBottom: '48px' }}>
          <div>
            <span style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
              SELECTED PROJECTS
            </span>
            <h2 style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 5vw, 72px)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.025em'
            }}>
              Films That Define <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>Brands.</span>
            </h2>
          </div>
          <Link
            to="/work"
            className="ul"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              minHeight: '44px',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontWeight: 600
            }}
          >
            Explore Complete Archive →
          </Link>
        </div>

        <div className="selected-projects-grid">
          {featuredWorks.map((work) => (
            <div
              key={work.id}
              className="th"
            >
              <div style={{
                position: 'relative',
                aspectRatio: '16/9',
                background: '#0a0a09',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '1px solid var(--border-subtle)'
              }}>
                {/* Ambient Blurred Backdrop for Full Artwork Depth */}
                <img
                  src={work.img}
                  alt=""
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    inset: '-15px',
                    width: 'calc(100% + 30px)',
                    height: 'calc(100% + 30px)',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    filter: 'blur(22px) brightness(0.32)',
                    opacity: 0.85,
                    pointerEvents: 'none'
                  }}
                />
                {/* 100% Full Uncut High-Definition Main Image */}
                <img
                  src={work.img}
                  alt={work.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    imageRendering: '-webkit-optimize-contrast',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                />
                {work.status && (
                  <span style={{
                    position: 'absolute',
                    left: '16px',
                    top: '14px',
                    padding: '5px 12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    background: 'rgba(7, 7, 7, 0.9)',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '2px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
                    {work.status}
                  </span>
                )}

                <span style={{
                  position: 'absolute',
                  right: '16px',
                  top: '14px',
                  padding: '5px 12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  background: 'rgba(7, 7, 7, 0.85)',
                  border: '1px solid var(--border-gold)',
                  borderRadius: '2px'
                }}>
                  {work.cat}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '8px 24px', marginTop: '16px' }}>
                <span className="tt" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 1.8vw, 26px)', lineHeight: 1.2 }}>
                  {work.title}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                  {work.credit}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Behind The Scenes (BTS) Showcase Section */}
      <BTSGallery onOpenMedia={(mediaUrl, title) => onOpenVideo(mediaUrl, title)} />

      {/* 6. Golden Call To Action — Let’s Connect */}
      <section style={{
        background: 'var(--gold-primary)',
        color: 'var(--bg-primary)',
        padding: 'clamp(64px, 9vw, 136px) var(--container-pad) clamp(48px, 7vw, 104px)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'clamp(36px, 5vw, 64px)'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <span style={{
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 700,
            color: 'rgba(7, 7, 7, 0.75)'
          }}>
            LET’S CONNECT
          </span>
          <h2 style={{
            margin: 0,
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 8vw, 148px)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em'
          }}>
            Let’s make something <span style={{ fontStyle: 'italic' }}>worth watching .</span>
          </h2>
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px 64px',
          borderTop: '1px solid var(--bg-primary)',
          paddingTop: '32px'
        }}>
          <div style={{ flex: '1 1 240px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>Direct Email</span>
            <a href={`mailto:${brand.email}`} className="ul" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 3.2vw, 28px)', lineHeight: 1.2, textDecoration: 'underline', textUnderlineOffset: '6px', wordBreak: 'break-all', color: 'inherit' }}>
              {brand.email}
            </a>
          </div>
          <div style={{ flex: '1 1 240px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>Office Phone</span>
            <a href={`tel:${brand.phone.replace(/[^0-9+]/g, '')}`} className="ul" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 3.2vw, 28px)', lineHeight: 1.2, textDecoration: 'underline', textUnderlineOffset: '6px', wordBreak: 'break-all', color: 'inherit' }}>
              {brand.phone}
            </a>
          </div>
          <div style={{ flex: '1 1 240px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>Studio Location</span>
            <Link to="/contact" className="ul" style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(18px, 3.2vw, 28px)', lineHeight: 1.2, textDecoration: 'underline', textUnderlineOffset: '6px', wordBreak: 'break-all', color: 'inherit' }}>
              Block E, Pandav Nagar, East Delhi – 110092
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Interactive Studio Location Map (Placed Below Let’s Connect Section) */}
      <EastDelhiMap />
    </div>
  );
}
