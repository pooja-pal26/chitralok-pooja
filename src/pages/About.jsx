import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import GoldenCTA from '../components/GoldenCTA';

const renderSocialIcon = (name, size = 16) => {
  switch (name.toLowerCase()) {
    case 'instagram':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'youtube':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
        </svg>
      );
    case 'facebook':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      );
    case 'imdb':
      return (
        <svg
          width={Math.round(size * 1.55)}
          height={size}
          viewBox="0 0 32 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect x="1" y="1" width="30" height="18" rx="3.5" stroke="currentColor" strokeWidth="1.75" />
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M5.5 5.5h1.8v9H5.5v-9zm3 0h2.1l1.1 4.5 1.1-4.5h2.1v9h-1.6V8.2l-1 4.2h-1.2l-1-4.2v6.3H8.5v-9zm7.5 0h2.2c1.5 0 2.5.9 2.5 2.8v3.4c0 1.9-1 2.8-2.5 2.8H16v-9zm1.6 1.6v5.8h.5c.7 0 1-.5 1-1.5V8.1c0-1-.3-1.5-1-1.5h-.5zm4.4-1.6h1.6v3.2c.4-.6 1-.9 1.7-.9 1.3 0 2.1 1 2.1 2.9v1.2c0 1.9-.8 2.9-2.1 2.9-.7 0-1.3-.3-1.7-.9v.7H22v-9.1zm1.6 4.3v2.2c0 .7.3 1 .8 1s.8-.3.8-1V9.8c0-.7-.3-1-.8-1s-.8.3-.8 1z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default function About() {
  const { about } = siteData;
  const [iframeModal, setIframeModal] = useState({ isOpen: false, url: '', title: '' });

  // Close modal on Escape key and lock body scroll when modal is open
  useEffect(() => {
    if (!iframeModal.isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIframeModal({ isOpen: false, url: '', title: '' });
      }
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [iframeModal.isOpen]);


  return (
    <div style={{ width: '100%' }}>
      {/* Hero Title Section */}
      <section style={{ padding: '120px var(--container-pad) 96px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
        <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
          About Us
        </span>
        <h1 style={{
          margin: 0,
          maxWidth: '1180px',
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(40px, 6.6vw, 108px)',
          lineHeight: 1.02,
          letterSpacing: '-0.025em'
        }}>
          {about.headingPart1} <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>{about.headingAccent}</span> {about.headingPart2}
        </h1>
      </section>

      {/* Set Still Banner */}
      <section style={{ padding: '0 var(--container-pad) 128px' }}>
        <div style={{
          aspectRatio: '21/9',
          minHeight: '280px',
          background: 'var(--bg-card)',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)'
        }}>
          <img
            src={about.bannerImg}
            alt="Chitralok Studios Production Studio"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Who We Are */}
      <section style={{ padding: '0 var(--container-pad) 128px', display: 'flex', flexWrap: 'wrap', gap: '40px 80px' }}>
        <div style={{ flex: '1 1 200px', minWidth: 0 }}>
          <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            Who We Are
          </span>
        </div>
        <div style={{ flex: '4 1 560px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '860px' }}>
          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: 'var(--text-light-sub)', fontWeight: 400, fontFamily: 'var(--font-sans)' }}>
            {about.p1}
          </p>
          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: 'var(--text-light-sub)', fontWeight: 400, fontFamily: 'var(--font-sans)' }}>
            {about.p2}
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section style={{ padding: '0 var(--container-pad) 128px', display: 'flex', flexWrap: 'wrap', gap: '40px 80px' }}>
        <div style={{ flex: '1 1 200px', minWidth: 0 }}>
          <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            How We Work
          </span>
        </div>
        <div style={{ flex: '4 1 560px', minWidth: 0 }}>
          {about.steps.map((s, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px 40px',
                padding: '36px 0',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ flex: 'none', width: '56px', fontFamily: 'var(--font-serif)', fontSize: '22px', color: 'var(--gold-primary)' }}>
                {s.n}
              </span>
              <div style={{ flex: '1 1 300px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.6vw, 52px)', lineHeight: 1.05, letterSpacing: '-0.015em' }}>
                  {s.title}
                </span>
                <span style={{ fontSize: '17px', lineHeight: 1.65, color: 'var(--text-light-sub)', maxWidth: '520px' }}>
                  {s.text}
                </span>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
        </div>
      </section>

      {/* Studio Leadership & Visionaries Behind Chitralok */}
      <section style={{
        padding: '100px var(--container-pad) 130px',
        borderTop: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        gap: '72px'
      }}>
        {/* Section Header */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '20px' }}>
          <div>
            <span style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
              STUDIO CREATIVE ROSTER &amp; LEADERSHIP
            </span>
            <h2 style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
              color: 'var(--text-primary)'
            }}>
              The Visionaries Behind <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>Chitralok.</span>
            </h2>
          </div>
          <span style={{ fontSize: '14px', color: 'var(--text-secondary)', letterSpacing: '0.04em', maxWidth: '380px' }}>
            Empowering fearless storytelling, cultural authenticity, and world-class cinematic execution across India.
          </span>
        </div>

        {/* 1. FIRST: PRODUCERS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '14px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
              01 · PRODUCERS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.12em' }}>
              {about.producers?.length || 6} Executive Producers
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '28px'
          }}>
            {about.producers && about.producers.map((producer, idx) => (
              <div
                key={idx}
                className="visionary-card"
                style={{
                  background: 'rgba(12, 12, 11, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Visual Image Frame */}
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  background: 'var(--bg-card)'
                }}>
                  <img
                    src={producer.img}
                    alt={producer.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,7,7,0.1) 0%, rgba(7,7,7,0.3) 50%, rgba(7,7,7,0.92) 100%)',
                    pointerEvents: 'none'
                  }} />
                </div>

                {/* Card Details */}
                <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {producer.name}
                  </h3>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                    {producer.subtitle || producer.role}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, letterSpacing: '0.02em', marginTop: '2px' }}>
                    {producer.credit || producer.vision}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. SECOND: DIRECTORS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '14px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
              02 · DIRECTORS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.12em' }}>
              Directorial Vision &amp; Craft
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '28px'
          }}>
            {about.directors && about.directors.map((director, idx) => (
              <div
                key={idx}
                className="visionary-card"
                style={{
                  background: 'rgba(12, 12, 11, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  background: 'var(--bg-card)'
                }}>
                  <img
                    src={director.img}
                    alt={director.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,7,7,0.1) 0%, rgba(7,7,7,0.3) 50%, rgba(7,7,7,0.92) 100%)',
                    pointerEvents: 'none'
                  }} />
                </div>

                <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {director.name}
                  </h3>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                    {director.subtitle || director.role}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, letterSpacing: '0.02em', marginTop: '2px' }}>
                    {director.credit}
                  </span>
                  {director.vision && (
                    <p style={{ margin: '4px 0 0', fontSize: '12px', lineHeight: 1.6, color: 'var(--text-light-sub)', fontStyle: 'italic' }}>
                      {director.vision}
                    </p>
                  )}
                  {director.path && (
                    <Link
                      to={director.path}
                      className="ul"
                      style={{
                        marginTop: 'auto',
                        paddingTop: '8px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontSize: '11px',
                        letterSpacing: '0.16em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-primary)',
                        fontWeight: 600
                      }}
                    >
                      View Archive →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. THIRD: WRITERS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '14px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
              03 · WRITERS
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '28px'
          }}>
            {about.writers && about.writers.map((writer, idx) => (
              <div
                key={idx}
                className="visionary-card"
                style={{
                  background: 'rgba(12, 12, 11, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  background: 'var(--bg-card)'
                }}>
                  <img
                    src={writer.img}
                    alt={writer.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,7,7,0.1) 0%, rgba(7,7,7,0.3) 50%, rgba(7,7,7,0.92) 100%)',
                    pointerEvents: 'none'
                  }} />
                </div>

                <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {writer.name}
                  </h3>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                    {writer.subtitle || writer.role}
                  </span>
                  <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, letterSpacing: '0.02em' }}>
                    {writer.credit}
                  </span>
                  <p style={{ margin: '4px 0 0', fontSize: '12px', lineHeight: 1.6, color: 'var(--text-light-sub)', fontStyle: 'italic' }}>
                    {writer.vision}
                  </p>
                  <Link
                    to={writer.detailsPath || writer.path || (writer.name.toLowerCase().includes('pushpendra') ? '/director' : '/actor/prragati-chauhaan')}
                    className="actor-view-details-btn"
                    aria-label={`View full details about ${writer.name}`}
                    style={{
                      marginTop: 'auto',
                      padding: '10px 18px',
                      background: 'rgba(212, 166, 42, 0.08)',
                      border: '1px solid rgba(212, 166, 42, 0.45)',
                      borderRadius: '2px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-primary)',
                      fontWeight: 600,
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      width: '100%',
                      boxSizing: 'border-box'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--gold-primary)';
                      e.currentTarget.style.color = '#070707';
                      e.currentTarget.style.borderColor = 'var(--gold-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(212, 166, 42, 0.08)';
                      e.currentTarget.style.color = 'var(--gold-primary)';
                      e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.45)';
                    }}
                  >
                    <span>View Details</span>
                    <span style={{ fontSize: '13px' }}>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FOURTH: ACTORS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '14px' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
              04 · ACTORS
            </span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.12em' }}>
              Featured Ensemble &amp; Cast
            </span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
            gap: '28px'
          }}>
            {about.actors && about.actors.map((actor, idx) => (
              <div
                key={idx}
                className="visionary-card"
                style={{
                  background: 'rgba(12, 12, 11, 0.65)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.6)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.65)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '4/5',
                  overflow: 'hidden',
                  background: 'var(--bg-card)'
                }}>
                  <img
                    src={actor.img}
                    alt={actor.name}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(7,7,7,0.1) 0%, rgba(7,7,7,0.3) 50%, rgba(7,7,7,0.92) 100%)',
                    pointerEvents: 'none'
                  }} />
                </div>

                <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>
                    {actor.name}
                  </h3>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                    {actor.subtitle || actor.role}
                  </span>
                  {actor.credit && (
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, letterSpacing: '0.02em' }}>
                      {actor.credit}
                    </span>
                  )}
                  {(actor.vision || actor.notes) && (
                    <p style={{ margin: '4px 0 0', fontSize: '12px', lineHeight: 1.6, color: 'var(--text-light-sub)', fontStyle: 'italic' }}>
                      {actor.vision || actor.notes}
                    </p>
                  )}
                  <Link
                    to={actor.detailsPath || '/actor/prragati-chauhaan'}
                    className="actor-view-details-btn"
                    aria-label={`View full details about ${actor.name}`}
                    style={{
                      marginTop: 'auto',
                      padding: '10px 18px',
                      background: 'rgba(212, 166, 42, 0.08)',
                      border: '1px solid rgba(212, 166, 42, 0.45)',
                      borderRadius: '2px',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-primary)',
                      fontWeight: 600,
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      width: '100%',
                      boxSizing: 'border-box'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--gold-primary)';
                      e.currentTarget.style.color = '#070707';
                      e.currentTarget.style.borderColor = 'var(--gold-primary)';
                      e.currentTarget.style.boxShadow = '0 4px 18px rgba(212, 166, 42, 0.35)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(212, 166, 42, 0.08)';
                      e.currentTarget.style.color = 'var(--gold-primary)';
                      e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.45)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <span>View Details</span>
                    <span style={{ fontSize: '14px', marginLeft: '6px' }}>&rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Golden CTA */}
      <GoldenCTA text="Start a project" link="/contact" />
    
      {/* Iframe Modal for View Details */}
      {iframeModal.isOpen && (
        <div
          className="iframe-modal-backdrop"
          onClick={() => setIframeModal({ isOpen: false, url: '', title: '' })}
          role="dialog"
          aria-modal="true"
          aria-label={`${iframeModal.title} Details`}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999999,
            background: 'rgba(4, 4, 4, 0.94)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(10px, 2.5vw, 24px)',
            animation: 'projectModalFadeIn 0.2s ease forwards'
          }}
        >
          <div
            className="iframe-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1160px',
              height: '92vh',
              maxHeight: '940px',
              background: '#090908',
              border: '1px solid rgba(212, 166, 42, 0.45)',
              borderRadius: '6px',
              boxShadow: '0 30px 100px rgba(0, 0, 0, 0.98), 0 0 50px rgba(212, 166, 42, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              animation: 'projectModalScaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
            }}
          >
            {/* Modal Top Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 20px',
              background: 'rgba(14, 13, 11, 0.98)',
              borderBottom: '1px solid rgba(212, 166, 42, 0.3)',
              zIndex: 2
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--gold-primary)',
                  boxShadow: '0 0 10px var(--gold-primary)'
                }} />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)',
                  fontWeight: 600
                }}>
                  {iframeModal.title} · Artist Profile
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <a
                  href={iframeModal.url.replace('?embed=true', '').replace('&embed=true', '')}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-primary)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <span>Open in Full Page</span>
                  <ExternalLink size={12} />
                </a>

                <button
                  type="button"
                  onClick={() => setIframeModal({ isOpen: false, url: '', title: '' })}
                  aria-label="Close Profile Dialog"
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(212, 166, 42, 0.4)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gold-primary)';
                    e.currentTarget.style.color = '#070707';
                    e.currentTarget.style.borderColor = 'var(--gold-primary)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#FFFFFF';
                    e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.4)';
                  }}
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Embedded Iframe Viewport */}
            <iframe
              src={iframeModal.url}
              title={`${iframeModal.title} Profile Details`}
              style={{
                width: '100%',
                flex: 1,
                border: 'none',
                background: 'var(--bg-primary)'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}