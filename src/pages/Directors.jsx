import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';
import GoldenCTA from '../components/GoldenCTA';
import KineticTicker from '../components/KineticTicker';

export default function Directors() {
  const { boardOfDirectors } = siteData;

  useEffect(() => {
    document.title = 'Directors — S&P Chitralok Studios';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ width: '100%' }}>
      {/* Page Title Section */}
      <section style={{ padding: '96px var(--container-pad) 48px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '12px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
            STUDIO LEADERSHIP &amp; GOVERNANCE
          </span>
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', letterSpacing: '0.12em' }}>
            · S&amp;P CHITRALOK STUDIOS
          </span>
        </div>

        <h1 style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(52px, 10vw, 160px)',
          lineHeight: 0.94,
          letterSpacing: '-0.035em'
        }}>
          <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>Directors.</span>
        </h1>

        {/* <p style={{ margin: 0, maxWidth: '680px', fontSize: '19px', lineHeight: 1.65, color: 'var(--text-light-sub)' }}>
          Visionary leadership, strategic governance, and an unwavering commitment to cinematic excellence guide S&P Chitralok Studios across feature films and television productions.
        </p> */}
      </section>

      {/* Directors Cards Grid Section */}
      <section style={{ padding: '0 var(--container-pad) 96px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '32px',
          alignItems: 'stretch'
        }}>
          {boardOfDirectors && boardOfDirectors.map((director) => (
            <div
              key={director.id}
              className="director-board-card"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '6px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease',
                position: 'relative'
              }}
            >
              {/* Portrait Media Container */}
              <div style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '4/4.5',
                overflow: 'hidden',
                background: '#0a0a09'
              }}>
                <img
                  src={director.img}
                  alt={director.name}
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="director-card-img"
                />
                {/* Cinematic Vignette Overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(7,7,7,0.05) 0%, rgba(7,7,7,0.3) 55%, rgba(7,7,7,0.92) 100%)',
                  pointerEvents: 'none'
                }} />

                {/* Monogram Tag Badge */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  padding: '4px 10px',
                  background: 'rgba(7, 7, 7, 0.75)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(212, 166, 42, 0.35)',
                  borderRadius: '20px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  color: 'var(--gold-primary)',
                  fontWeight: 600
                }}>
                  {director.monogram}
                </div>

                {/* Bottom Role Tag in Media */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--gold-primary)',
                    boxShadow: '0 0 8px var(--gold-primary)'
                  }} />
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    fontWeight: 600
                  }}>
                    {director.role}
                  </span>
                </div>
              </div>

              {/* Card Information Body */}
              <div style={{
                padding: '28px 24px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                flex: 1
              }}>
                <h2 style={{
                  margin: 0,
                  fontFamily: 'var(--font-serif)',
                  fontSize: '24px',
                  fontWeight: 600,
                  lineHeight: 1.2,
                  letterSpacing: '0.04em',
                  color: 'var(--text-primary)',
                  textTransform: 'uppercase'
                }}>
                  {director.name}
                </h2>

                <span style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase'
                }}>
                  {director.company}
                </span>

                {director.vision && (
                  <p style={{
                    margin: '8px 0 0',
                    fontSize: '14px',
                    lineHeight: 1.65,
                    color: 'var(--text-light-sub)',
                    fontStyle: 'italic',
                    borderLeft: '2px solid rgba(212, 166, 42, 0.4)',
                    paddingLeft: '14px'
                  }}>
                    “{director.vision}”
                  </p>
                )}

                {director.bio && (
                  <p style={{
                    margin: '10px 0 0',
                    fontSize: '13.5px',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)'
                  }}>
                    {director.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Directorial Feature Spotlight: Pushpendra Singh Archive Banner */}
      <section style={{ padding: '0 var(--container-pad) 96px' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(22, 20, 17, 0.95) 0%, rgba(12, 11, 10, 0.98) 100%)',
          border: '1px solid rgba(212, 166, 42, 0.28)',
          borderRadius: '8px',
          padding: 'clamp(28px, 4vw, 48px)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
        }}>
          <div style={{ maxWidth: '640px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontWeight: 600
            }}>
              CREATIVE DIRECTION &amp; CINEMATIC VISION
            </span>
            <h3 style={{
              margin: 0,
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 3vw, 34px)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              lineHeight: 1.2
            }}>
              Directorial Portfolio of <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>Pushpendra Singh</span>
            </h3>
            <p style={{
              margin: 0,
              fontSize: '15px',
              lineHeight: 1.6,
              color: 'var(--text-light-sub)'
            }}>
              Explore landmark feature films Paid Palki, Aaoge Jab Tum, Sarkar (2005), and legendary television series including Kyunki Saas Bhi Kabhi Bahu Thi and Kahaani Ghar Ghar Kii.
            </p>
          </div>

          <Link
            to="/director"
            className="ul"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              background: 'rgba(212, 166, 42, 0.12)',
              border: '1px solid var(--gold-primary)',
              borderRadius: '4px',
              color: 'var(--gold-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.25s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold-primary)';
              e.currentTarget.style.color = '#070707';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(212, 166, 42, 0.12)';
              e.currentTarget.style.color = 'var(--gold-primary)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <span>Explore Directorial Archive</span>
            <span style={{ fontSize: '15px' }}>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* Kinetic Typography Marquee Slider */}
      <section style={{ margin: '0 0 64px' }}>
        <KineticTicker
          track1={[
            'AMOD KUMAR SINGH',
            'PAWAN KUMAR',
            'KRISHNA PANDEY',
            'BOARD OF DIRECTORS',
            'S&P CHITRALOK STUDIOS'
          ]}
          track2={[
            'STRATEGIC GOVERNANCE',
            'CINEMATIC EXCELLENCE',
            'AUTEUR VISION',
            'FEATURE FILMS & SERIES'
          ]}
        />
      </section>

      {/* Footer / CTA Section */}
      <GoldenCTA text="Collaborate with our Directors" link="/contact" />
    </div>
  );
}
