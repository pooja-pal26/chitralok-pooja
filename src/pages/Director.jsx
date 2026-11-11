import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import GoldenCTA from '../components/GoldenCTA';
import KineticTicker from '../components/KineticTicker';

export default function Director({ onOpenVideo }) {
  const { director } = siteData;
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredFilms = director.films.filter((film) => {
    if (activeFilter === 'films') {
      return film.kind.toLowerCase().includes('feature') || film.kind.toLowerCase().includes('film');
    }
    if (activeFilter === 'tv') {
      return !film.kind.toLowerCase().includes('feature') && !film.kind.toLowerCase().includes('theatrical');
    }
    return true;
  });

  return (
    <div style={{ width: '100%' }}>
      {/* Director Title Heading */}
      <section style={{ padding: '96px var(--container-pad) 48px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
            DIRECTOR PROFILE
          </span>
          {/* <span style={{
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-secondary)',
            letterSpacing: '0.12em'
          }}>
            · BORN 15 SEPTEMBER 1981
          </span> */}
        </div>

        <h1 style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(52px, 10vw, 160px)',
          lineHeight: 0.94,
          letterSpacing: '-0.035em'
        }}>
          {director.nameFirst}<br />
          <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>{director.nameLast}</span>
        </h1>
      </section>

      {/* Portrait, Biography & Subtle IMDb Pill (Only here on Director Profile) */}
      <section style={{ padding: '0 var(--container-pad) 112px', display: 'flex', flexWrap: 'wrap', gap: '48px 80px', alignItems: 'flex-start' }}>
        {/* Left Column: Portrait */}
        <div style={{
          flex: '1 1 340px',
          minWidth: 0,
          maxWidth: '520px',
          aspectRatio: '4/5',
          background: 'var(--bg-card)',
          position: 'relative',
          overflow: 'hidden',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
        }}>
          <img
            src={director.portraitImg}
            alt={`Portrait of ${director.nameFirst} ${director.nameLast}`}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '24px 20px 16px',
            background: 'linear-gradient(180deg, transparent 0%, rgba(7,7,7,0.92) 100%)'
          }}>
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)'
            }}>
              Pushpendra Singh · Director
            </span>
            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
              18+ Years in Indian Television &amp; Cinema
            </span>
          </div>
        </div>

        {/* Right Column: Bio Details */}
        <div style={{ flex: '1.4 1 400px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '24px', paddingTop: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
              {director.role}
            </span>
            <span style={{
              background: 'rgba(212, 166, 42, 0.1)',
              color: 'var(--gold-hover)',
              border: '1px solid var(--border-gold)',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              padding: '3px 10px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              Paid Palki · Writer &amp; Director
            </span>

            {/* Exclusive Minimal IMDb pill — Only placed here on the director profile with authentic small icon */}
            {director.imdbUrl && (
              <a
                href={director.imdbUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View Pushpendra Singh on IMDb"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '3px 9px',
                  borderRadius: '3px',
                  background: 'rgba(245, 197, 24, 0.08)',
                  border: '1px solid rgba(245, 197, 24, 0.35)',
                  color: 'var(--text-primary)',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(245, 197, 24, 0.2)';
                  e.currentTarget.style.borderColor = '#F5C518';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(245, 197, 24, 0.08)';
                  e.currentTarget.style.borderColor = 'rgba(245, 197, 24, 0.35)';
                }}
              >
                <span style={{
                  background: '#F5C518',
                  color: '#000000',
                  fontWeight: 900,
                  fontSize: '9.5px',
                  lineHeight: 1,
                  padding: '2px 4px',
                  borderRadius: '2px',
                  letterSpacing: '0.04em'
                }}>
                  IMDb
                </span>
                <span style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>
                  nm9362954
                </span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>

          <p style={{ margin: 0, fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 2.6vw, 36px)', lineHeight: 1.35, letterSpacing: '-0.01em', color: 'var(--text-primary)' }}>
            {director.quote}
          </p>

          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: 'var(--text-light-sub)', maxWidth: '640px' }}>
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Pushpendra Singh</strong>{' '}
            is a prominent Indian Television and Film Director. He started his career in the Indian entertainment industry as an associate director on{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Kyaa Hoga Nimmo Kaa</strong>{' '}
            and served as second director on the classic Bollywood political drama{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Sarkar</strong>{' '}
            <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>(2005)</span>{' '}
            starring{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Amitabh Bachchan</strong>.
          </p>

          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: 'var(--text-light-sub)', maxWidth: '640px' }}>
            Following this breakthrough, Pushpendra took the directorial helm for several of the highest-rated daily series and mythological epics in Indian television history, including{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Kahaani Ghar Ghar Kii</strong>{' '}
            <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>(2008)</span>,{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Kyunki Saas Bhi Kabhi Bahu Thi</strong>{' '}
            <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>(2006)</span>,{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Kis Desh Mein Hai Meraa Dil</strong>,{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Kuchh Is Tara</strong>{' '}
            <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>(2011)</span>,{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Jai Shri Krishna</strong>,{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Meera</strong>,{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Shakuntala</strong>{' '}
            <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>(2008–2009)</span>,{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Zindagi Ki Mehek</strong>{' '}
            <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>(2017)</span>, and{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Sarkar</strong>{' '}
            <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>(TV Series)</span>.
          </p>

          <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.7, color: 'var(--text-light-sub)', maxWidth: '640px' }}>
            Expanding his cinematic horizon, Pushpendra has written and directed the landmark social feature film{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Paid Palki</strong>, presented by{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>S&amp;P Chitralok Studios</strong>, alongside helming the upcoming theatrical feature film{' '}
            <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Aaoge Jab Tum</strong>{' '}
            <span style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>(2026)</span>.
          </p>
        </div>
      </section>

      {/* Kinetic Typography Marquee */}
      <section style={{ margin: '0 0 80px' }}>
        <KineticTicker />
      </section>

      {/* Complete Directorial Filmography & Television Showcase with Real Posters */}
      <section style={{ padding: '0 var(--container-pad) 128px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', justifyContent: 'space-between', gap: '20px', marginBottom: '40px' }}>
          <div>
            <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600, display: 'block', marginBottom: '8px' }}>
              DIRECTORIAL ARCHIVE
            </span>
            <h2 style={{
              margin: 0,
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 4vw, 56px)',
              fontWeight: 500,
              letterSpacing: '-0.02em'
            }}>
              Television Classics &amp; <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>Feature Films.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { id: 'all', label: 'All Works' },
              { id: 'films', label: 'Feature Films' },
              { id: 'tv', label: 'Television Series' }
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  padding: '8px 16px',
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  background: activeFilter === f.id ? 'var(--gold-primary)' : 'var(--bg-card)',
                  color: activeFilter === f.id ? '#070707' : 'var(--text-secondary)',
                  border: activeFilter === f.id ? '1px solid var(--gold-primary)' : '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  fontWeight: activeFilter === f.id ? 700 : 500,
                  transition: 'all 0.2s ease'
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Visual Poster Grid with Real Web Images */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '32px 24px'
        }}>
          {filteredFilms.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '4px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(0,0,0,0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Poster Container */}
              <div style={{
                position: 'relative',
                aspectRatio: '3/4',
                width: '100%',
                background: '#0d0d0d',
                overflow: 'hidden'
              }}>
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'transform 0.4s ease'
                  }}
                  loading="lazy"
                  onError={(e) => {
                    // Fallback visual if external image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(7,7,7,0.85)',
                  border: '1px solid var(--border-subtle)',
                  padding: '3px 8px',
                  fontSize: '10px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--gold-primary)',
                  letterSpacing: '0.1em'
                }}>
                  {item.year}
                </div>
              </div>

              {/* Information Meta */}
              <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <span style={{
                  fontSize: '10px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)'
                }}>
                  {item.role} · {item.network}
                </span>

                <h3 style={{
                  margin: 0,
                  fontFamily: 'var(--font-serif)',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: 1.25,
                  color: 'var(--text-primary)'
                }}>
                  {item.title}
                </h3>

                <span style={{
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  marginTop: 'auto'
                }}>
                  {item.kind}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recognition & Landmark Milestones */}
      <section style={{
        padding: '96px var(--container-pad)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '40px 80px'
      }}>
        <div style={{ flex: '1 1 200px', minWidth: 0 }}>
          <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
            RECOGNITION &amp; MILESTONES
          </span>
        </div>
        <div style={{ flex: '4 1 560px', minWidth: 0 }}>
          {director.awards.map((a, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: '8px 24px',
                padding: '20px 0',
                borderTop: '1px solid var(--border-subtle)'
              }}
            >
              <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 2.4vw, 32px)', lineHeight: 1.2 }}>
                {a.title}
              </span>
              <span style={{ fontSize: '12px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                {a.meta}
              </span>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
        </div>
      </section>

      {/* Golden CTA */}
      <GoldenCTA text="Start a project" link="/contact" />
    </div>
  );
}
