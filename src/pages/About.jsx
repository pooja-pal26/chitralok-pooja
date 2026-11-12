import React, { useState, useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import GoldenCTA from '../components/GoldenCTA';

/** Renders a single roster member card with responsive image framing and optional action link. */
function TeamCard({ person, objectPosition = 'center top', compactCredit = false, actionLink = null }) {
  const roleLabel = person.subtitle || person.role;
  const secondaryText = compactCredit ? (person.credit || person.vision) : person.credit;
  const quoteText = compactCredit ? null : (person.vision || person.notes);

  return (
    <div className="visionary-card">
      <div className="visionary-card-media">
        <img
          src={person.img}
          alt={person.name}
          loading="lazy"
          className="visionary-card-img"
          style={{ objectPosition }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(7,7,7,0.1) 0%, rgba(7,7,7,0.3) 50%, rgba(7,7,7,0.92) 100%)',
          pointerEvents: 'none'
        }} />
      </div>

      <div className="visionary-card-body">
        <h3 style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>
          {person.name}
        </h3>
        {roleLabel && (
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
            {roleLabel}
          </span>
        )}
        {secondaryText && (
          <span style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5, letterSpacing: '0.02em', marginTop: compactCredit ? '2px' : 0 }}>
            {secondaryText}
          </span>
        )}
        {quoteText && (
          <p style={{ margin: '4px 0 0', fontSize: '12px', lineHeight: 1.6, color: 'var(--text-light-sub)', fontStyle: 'italic' }}>
            {quoteText}
          </p>
        )}
        {actionLink && actionLink.variant === 'underline' && (
          <Link
            to={actionLink.to}
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
            {actionLink.label}
          </Link>
        )}
        {actionLink && actionLink.variant === 'button' && (
          <Link
            to={actionLink.to}
            className="actor-view-details-btn"
            aria-label={`View full details about ${person.name}`}
          >
            <span>{actionLink.label}</span>
            <span style={{ fontSize: '14px', marginLeft: '6px' }}>&rarr;</span>
          </Link>
        )}
      </div>
    </div>
  );
}

/** Category header row with numbered gold pill dot and optional right subtitle. */
function RosterCategoryHeader({ title, subtitle }) {
  return (
    <div className="about-category-header">
      <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
        {title}
      </span>
      {subtitle && (
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-secondary)', letterSpacing: '0.12em' }}>
          {subtitle}
        </span>
      )}
    </div>
  );
}

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
    <div className="about-page">
      {/* Hero Title Section */}
      <section className="about-hero-section">
        <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
          About Us
        </span>
        <h1 className="about-hero-title">
          {about.headingPart1} <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>{about.headingAccent}</span> {about.headingPart2}
        </h1>
      </section>

      {/* Set Still Banner */}
      <section className="about-banner-section">
        <div className="about-banner-frame">
          <img
            src={about.bannerImg}
            alt="Chitralok Studios Production Studio"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-split-section">
        <div className="about-split-label">
          <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            Who We Are
          </span>
        </div>
        <div className="about-split-content about-who-content">
          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: 'var(--text-light-sub)', fontWeight: 400, fontFamily: 'var(--font-sans)' }}>
            {about.p1}
          </p>
          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: 'var(--text-light-sub)', fontWeight: 400, fontFamily: 'var(--font-sans)' }}>
            {about.p2}
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="about-split-section">
        <div className="about-split-label">
          <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
            How We Work
          </span>
        </div>
        <div className="about-split-content">
          {about.steps.map((s, idx) => (
            <div key={idx} className="about-step-row">
              <span className="about-step-num">{s.n}</span>
              <div className="about-step-body">
                <span className="about-step-title">{s.title}</span>
                <span className="about-step-text">{s.text}</span>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
        </div>
      </section>

      {/* Studio Leadership & Visionaries Behind Chitralok */}
      <section className="about-roster-section">
        <div className="about-roster-header">
          <div>
            <span style={{ fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'block', marginBottom: '12px' }}>
              STUDIO CREATIVE ROSTER &amp; LEADERSHIP
            </span>
            <h2 style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 5vw, 64px)',
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
        <div className="about-category-block">
          <RosterCategoryHeader
            title="01 · PRODUCERS"
            subtitle={`${about.producers?.length || 6} Executive Producers`}
          />
          <div className="about-team-grid">
            {about.producers && about.producers.map((producer, idx) => (
              <TeamCard
                key={idx}
                person={producer}
                objectPosition="center center"
                compactCredit
              />
            ))}
          </div>
        </div>

        {/* 2. SECOND: DIRECTORS */}
        <div className="about-category-block">
          <RosterCategoryHeader
            title="02 · DIRECTORS"
            subtitle="Directorial Vision & Craft"
          />
          <div className="about-team-grid">
            {about.directors && about.directors.map((director, idx) => (
              <TeamCard
                key={idx}
                person={director}
                actionLink={director.path ? { to: director.path, label: 'View Archive →', variant: 'underline' } : null}
              />
            ))}
          </div>
        </div>

        {/* 3. THIRD: WRITERS */}
        <div className="about-category-block">
          <RosterCategoryHeader title="03 · WRITERS" />
          <div className="about-team-grid">
            {about.writers && about.writers.map((writer, idx) => (
              <TeamCard
                key={idx}
                person={writer}
                actionLink={{
                  to: writer.detailsPath || writer.path || (writer.name.toLowerCase().includes('pushpendra') ? '/director' : '/actor/prragati-chauhaan'),
                  label: 'View Details',
                  variant: 'button'
                }}
              />
            ))}
          </div>
        </div>

        {/* 4. FOURTH: ACTORS */}
        <div className="about-category-block">
          <RosterCategoryHeader
            title="04 · ACTORS"
            subtitle="Featured Ensemble & Cast"
          />
          <div className="about-team-grid">
            {about.actors && about.actors.map((actor, idx) => (
              <TeamCard
                key={idx}
                person={actor}
                actionLink={{
                  to: actor.detailsPath || '/actor/prragati-chauhaan',
                  label: 'View Details',
                  variant: 'button'
                }}
              />
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
              height: 'min(92vh, 92dvh)',
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
            <div
              className="about-modal-topbar"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px 20px',
                background: 'rgba(14, 13, 11, 0.98)',
                borderBottom: '1px solid rgba(212, 166, 42, 0.3)',
                zIndex: 2
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  flexShrink: 0,
                  background: 'var(--gold-primary)',
                  boxShadow: '0 0 10px var(--gold-primary)'
                }} />
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)',
                  fontWeight: 600,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>
                  {iframeModal.title} · Artist Profile
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
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
