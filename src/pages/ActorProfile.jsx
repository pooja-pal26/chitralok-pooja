import React from 'react';
import { Link } from 'react-router-dom';
import { Film, PenTool, Sparkles, ArrowLeft, ExternalLink } from 'lucide-react';
import { siteData } from '../data/content';
import GoldenCTA from '../components/GoldenCTA';
import KineticTicker from '../components/KineticTicker';

/**
 * ActorProfile — Cinematic Profile Page for Prragati Chauhaan
 * Supports standalone full-page view and seamlessly embedded iframe view.
 */
export default function ActorProfile({ onOpenVideo, isEmbed: isEmbedProp }) {
  const isEmbed = isEmbedProp || (typeof window !== 'undefined' && (
    new URLSearchParams(window.location.search).get('embed') === 'true' ||
    window.self !== window.top
  ));

  const { prragatiProfile } = siteData;
  const profile = prragatiProfile || {
    nameFirst: 'Prragati',
    nameLast: 'Chauhaan',
    role: 'Lead Actor & Screenplay Writer',
    tag: 'Lead Protagonist · Narrative Lead',
    // character: 'Kemli',
    // film: 'Paid Palki',
    portraitImg: '/assets/images/actor.PNG',
    bannerImg: '/assets/images/paid_palki_banner.webp',
    quote: '“Acting is not merely performing; it is a sacred act of stepping into the soul of another human being and defending their truth without judgment.”',
    bio1: 'Prragati Chauhaan is a powerhouse Indian actress, model, and screen narrative architect recognized for her nuanced character immersion, raw emotional gravity, and dedication to socially grounded Indian cinema.',
    bio2: 'In the landmark social feature film "Paid Palki", presented by S&P Chitralok Studios, Prragati headlines as the central protagonist "Kemli" — a sheltered tribal girl whose transformation from vulnerability to fierce dignity forms the emotional core of the film.',
    bio3: 'As a creative pillar and narrative lead at S&P Chitralok Studios, Prragati champions fearless storytelling that reflects the complexities of contemporary and rural India.',
    filmography: [],
    stills: [],
    attributes: []
  };

  const renderSocialIcon = (name, size = 18) => {
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

  return (
    <div style={{
      width: '100%',
      background: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Breadcrumb & Tag Header */}
      <section style={{
        padding: isEmbed
          ? '28px clamp(16px, 4vw, 48px) 20px'
          : '110px clamp(16px, 4vw, 48px) 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        borderBottom: '1px solid var(--border-subtle)'
      }}>
        {!isEmbed && (
          <Link
            to="/about"
            style={{
              alignSelf: 'flex-start',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              textDecoration: 'none',
              marginBottom: '6px'
            }}
          >
            <ArrowLeft size={14} /> Back to About &amp; Creative Roster
          </Link>
        )}

        {/* <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}> */}
          {/* <span style={{
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold-primary)',
            fontWeight: 600,
            fontFamily: 'var(--font-mono)'
          }}>
            ARTIST PROFILE · S&P CHITRALOK STUDIOS
          </span> */}
          {/* <span style={{
            fontSize: '11px',
            fontFamily: 'var(--font-mono)',
            color: 'var(--text-secondary)',
            letterSpacing: '0.12em'
          }}>
            · MODEL &amp; ACTRESS
          </span> */}
        {/* </div> */}

        <h1 style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(44px, 7.5vw, 120px)',
          lineHeight: 0.95,
          letterSpacing: '-0.03em'
        }}>
          {profile.nameFirst}<br />
          <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>{profile.nameLast}</span>
        </h1>
      </section>

      {/* Main Profile Grid: Portrait & In-Depth Biography */}
      <section style={{
        padding: '48px clamp(16px, 4vw, 48px) 64px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '48px 64px',
        alignItems: 'flex-start'
      }}>
        {/* Left Column: Portrait Frame & Quick Attributes Box */}
        <div style={{
          flex: '1 1 320px',
          maxWidth: '460px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px'
        }}>
          <div style={{
            position: 'relative',
            aspectRatio: '4/5',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-gold)',
            borderRadius: '2px',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.7)'
          }}>
            <img
              src={profile.portraitImg}
              alt={`${profile.nameFirst} ${profile.nameLast}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 40%, rgba(7, 7, 7, 0.92) 100%)',
              pointerEvents: 'none'
            }} />
            <span style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              background: 'rgba(7, 7, 7, 0.9)',
              padding: '5px 12px',
              border: '1px solid var(--border-gold)',
              borderRadius: '2px'
            }}>
             ACTOR
            </span>
            <div style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              right: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <span style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '22px',
                color: '#FFFFFF',
                fontWeight: 600
              }}>
                {profile.nameFirst} {profile.nameLast}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--gold-primary)'
              }}>
                {/* {profile.photoSubtitle || 'Actress'} */}
              </span>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div style={{
            background: 'rgba(14, 13, 11, 0.85)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px',
            padding: '24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontWeight: 600,
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '8px'
            }}>
              Key Credentials
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {profile.attributes && profile.attributes.map((attr, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {attr.label}
                  </span>
                  <span style={{ fontSize: '14px', color: 'var(--text-primary)', fontWeight: 500 }}>
                    {attr.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Profiles Card — Below Key Credentials */}
          <div style={{
            background: 'rgba(14, 13, 11, 0.85)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '2px',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontWeight: 600,
              borderBottom: '1px solid var(--border-subtle)',
              paddingBottom: '8px'
            }}>
              Follow &amp; Connect
            </span>
            <div style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${(profile.socialLinks || [
                { name: 'Instagram', url: 'https://instagram.com/counterpc?igshid=szr5kayi2v6t' },
                { name: 'Facebook', url: 'https://www.facebook.com/COUNTERPC.QUEEN.OF.WANDS' },
                { name: 'IMDb', url: 'https://www.imdb.com' }
              ]).length}, 1fr)`,
              gap: '10px'
            }}>
              {(profile.socialLinks || [
                { name: 'Instagram', url: 'https://instagram.com/counterpc?igshid=szr5kayi2v6t' },
                { name: 'Facebook', url: 'https://www.facebook.com/COUNTERPC.QUEEN.OF.WANDS' },
                { name: 'IMDb', url: 'https://www.imdb.com' }
              ]).map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${profile.nameFirst || 'Prragati'} on ${s.name}`}
                  title={`${s.name} (Opens in a new tab)`}
                  style={{
                    height: '42px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(212, 166, 42, 0.3)',
                    borderRadius: '2px',
                    color: 'var(--gold-primary)',
                    textDecoration: 'none',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--gold-primary)';
                    e.currentTarget.style.color = '#070707';
                    e.currentTarget.style.borderColor = 'var(--gold-primary)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(212, 166, 42, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.color = 'var(--gold-primary)';
                    e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.3)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {renderSocialIcon(s.name, 19)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Biography & Character Breakdown */}
        <div style={{
          flex: '1.4 1 420px',
          minWidth: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>
          {/* Artist Quote */}
          <div style={{
            padding: '28px 24px',
            background: 'rgba(212, 166, 42, 0.05)',
            borderLeft: '3px solid var(--gold-primary)',
            borderRadius: '2px'
          }}>
            <p style={{
              margin: 0,
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(18px, 2.2vw, 24px)',
              lineHeight: 1.45,
              color: 'var(--gold-primary)',
              fontStyle: 'italic'
            }}>
              {profile.quote}
            </p>
          </div>

          {/* Biography Paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{
              margin: 0,
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(24px, 3.2vw, 36px)',
              fontWeight: 600,
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em'
            }}>
              The Art of Nuanced Character Immersion
            </h2>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.75, color: 'var(--text-light-sub)' }}>
              {profile.bio1}
            </p>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.75, color: 'var(--text-light-sub)' }}>
              {profile.bio2}
            </p>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: 1.75, color: 'var(--text-light-sub)' }}>
              {profile.bio3}
            </p>
          </div>

          {/* Character Spotlight: Kemli */}
          {profile.characterDetails && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(16, 15, 12, 0.95) 0%, rgba(22, 20, 16, 0.9) 100%)',
              border: '1px solid rgba(212, 166, 42, 0.35)',
              borderRadius: '3px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
              boxShadow: '0 12px 36px rgba(0,0,0,0.45)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)',
                  fontWeight: 600
                }}>
                  <Sparkles size={14} /> Character Spotlight · Paid Palki
                </span>
                <span style={{
                  padding: '4px 10px',
                  background: 'rgba(212, 166, 42, 0.12)',
                  border: '1px solid var(--border-gold)',
                  borderRadius: '2px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)'
                }}>
                  Lead Role
                </span>
              </div>

              <h3 style={{
                margin: 0,
                fontFamily: 'var(--font-serif)',
                fontSize: '26px',
                color: 'var(--text-primary)',
                fontWeight: 600
              }}>
                Kemli — {profile.characterDetails.tagline}
              </h3>

              <p style={{
                margin: 0,
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--text-light-sub)'
              }}>
                {profile.characterDetails.summary}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Works & Narrative Milestones */}
      <section style={{
        padding: '56px clamp(16px, 4vw, 48px) 64px',
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(9, 9, 8, 0.5)'
      }}>
        <div style={{ marginBottom: '36px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold-primary)',
            fontWeight: 600,
            display: 'block',
            marginBottom: '8px'
          }}>
            CREATIVE WORKS &amp; CREDITS
          </span>
          <h2 style={{
            margin: 0,
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 4vw, 48px)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)'
          }}>
            Filmography &amp; <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>Works.</span>
          </h2>
        </div>

        <div className="actor-filmography-grid">
          {profile.filmography && profile.filmography.map((film, idx) => {
            const hasVideo = !!film.videoUrl;
            const hasLink = !!film.externalUrl;
            const isInstagram = film.externalUrl && film.externalUrl.includes('instagram.com');

            const handlePlay = (e) => {
              e.preventDefault();
              e.stopPropagation();
              if (hasVideo && onOpenVideo) {
                onOpenVideo(film.videoUrl, film.title);
              } else if (hasLink) {
                window.open(film.externalUrl, '_blank', 'noopener,noreferrer');
              }
            };

            return (
              <div
                key={idx}
                onClick={handlePlay}
                style={{
                  background: 'rgba(14, 13, 11, 0.75)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  cursor: (hasVideo || hasLink) ? 'pointer' : 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.55)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-subtle)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '16/9',
                  overflow: 'hidden',
                  background: 'var(--bg-card)'
                }}>
                  <img
                    src={film.img}
                    alt={film.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 40%, rgba(7, 7, 7, 0.9) 100%)',
                    pointerEvents: 'none'
                  }} />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    background: 'rgba(7, 7, 7, 0.88)',
                    padding: '4px 10px',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '2px'
                  }}>
                    {film.year}
                  </span>

                  {(hasVideo || hasLink) && (
                    <button
                      type="button"
                      onClick={handlePlay}
                      aria-label={`Play ${film.title}`}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: 'rgba(7, 7, 7, 0.78)',
                        border: '1.5px solid var(--gold-primary)',
                        color: 'var(--gold-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 2,
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--gold-primary)';
                        e.currentTarget.style.color = '#070707';
                        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(7, 7, 7, 0.78)';
                        e.currentTarget.style.color = 'var(--gold-primary)';
                        e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                      }}
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '2px' }}>
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                  )}
                </div>

                <div style={{ padding: '18px 16px', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)'
                  }}>
                    {film.role}
                  </span>
                  <h3 style={{
                    margin: 0,
                    fontFamily: 'var(--font-serif)',
                    fontSize: '18px',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    color: 'var(--text-primary)'
                  }}>
                    {film.title}
                  </h3>
                  <p style={{
                    margin: '4px 0 0',
                    fontSize: '13px',
                    lineHeight: 1.55,
                    color: 'var(--text-light-sub)'
                  }}>
                    {film.desc}
                  </p>

                  {(hasVideo || hasLink) && (
                    <div style={{ marginTop: 'auto', paddingTop: '14px' }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--gold-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'opacity 0.2s ease'
                      }}>
                        {isInstagram ? 'Watch Reel' : 'Watch Video'} →
                      </span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Kinetic Typography Marquee Slider */}
      <section style={{ margin: '24px 0 36px' }}>
        <KineticTicker
          track1={['PRRAGATI CHAUHAAN', 'LEAD ACTRESS', 'PAID PALKI', 'SCREENPLAY WRITER']}
          track2={['S&P CHITRALOK STUDIOS', 'NARRATIVE LEAD', 'AUTEUR CINEMA', 'METHOD ACTING']}
        />
      </section>

      {/* Production Stills & Behind-The-Scenes Frames */}
      {/* <section style={{
        padding: '56px clamp(16px, 4vw, 48px) 72px',
        borderTop: '1px solid var(--border-subtle)'
      }}>
      </section> */}

      {/* Footer / CTA Section */}
      {!isEmbed ? (
        <GoldenCTA text="Collaborate with S&P Chitralok" link="/contact" />
      ) : (
        <div style={{
          padding: '24px clamp(16px, 4vw, 48px)',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          background: 'rgba(12, 11, 10, 0.95)'
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-secondary)',
            letterSpacing: '0.12em'
          }}>
            S&amp;P CHITRALOK STUDIOS · PRODUCTION ROSTER
          </span>
          <a
            href="/contact"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              textDecoration: 'none',
              fontWeight: 600
            }}
          >
            Get In Touch ↓
          </a>
        </div>
      )}
    </div>
  );
}

