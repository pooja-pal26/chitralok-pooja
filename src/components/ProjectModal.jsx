import React, { useEffect, useRef } from 'react';
import { X, Play } from 'lucide-react';

export default function ProjectModal({ project, onClose, onOpenVideo }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    // Lock body scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Handle Escape key
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const coverPhoto = project.bannerImg || project.img;

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: 'rgba(3, 3, 3, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(8px, 2.5vw, 24px)',
        animation: 'projectModalFadeIn 0.2s ease forwards'
      }}
    >
      <div
        ref={modalRef}
        className="project-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '920px',
          maxHeight: 'calc(100vh - 32px)',
          background: '#090908',
          border: '1px solid rgba(212, 166, 42, 0.28)',
          borderRadius: '4px',
          boxShadow: '0 30px 100px -10px rgba(0, 0, 0, 0.98), 0 0 40px rgba(212, 166, 42, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          animation: 'projectModalScaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards'
        }}
      >
        {/* Floating Minimal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal (Esc)"
          className="project-modal-close"
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            zIndex: 30,
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: 'rgba(9, 9, 8, 0.85)',
            border: '1px solid rgba(212, 166, 42, 0.5)',
            color: '#FFFFFF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.7), 0 0 14px rgba(212, 166, 42, 0.18)',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = 'var(--gold-primary)';
            e.currentTarget.style.color = 'var(--gold-primary)';
            e.currentTarget.style.transform = 'scale(1.06)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.5)';
            e.currentTarget.style.color = '#FFFFFF';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          <X size={20} strokeWidth={2.2} />
        </button>

        {/* 1. Header: Full-Bleed Cover Photo */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(260px, 48vw, 440px)',
          background: '#040404',
          overflow: 'hidden',
          flexShrink: 0
        }}>
          <img
            src={coverPhoto}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block'
            }}
          />

          {/* Smooth Dark Gradient Overlay from bottom to fade into body */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #090908 0%, rgba(9, 9, 8, 0.5) 45%, rgba(9, 9, 8, 0.15) 100%)',
            pointerEvents: 'none'
          }} />

          {/* Prominent Play Button on Cover Photo */}
          {project.videoUrl && onOpenVideo && (
            <button
              type="button"
              onClick={() => onOpenVideo(project.videoUrl, project.title)}
              aria-label={`Play video for ${project.title}`}
              title={`Watch ${project.cat === 'Film' ? 'Trailer' : 'Video'}`}
              style={{
                position: 'absolute',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                background: 'rgba(7, 7, 7, 0.78)',
                border: '2px solid var(--gold-primary)',
                color: 'var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backdropFilter: 'blur(8px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.65)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                zIndex: 11
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                e.currentTarget.style.background = 'var(--gold-primary)';
                e.currentTarget.style.color = '#070707';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                e.currentTarget.style.background = 'rgba(7, 7, 7, 0.78)';
                e.currentTarget.style.color = 'var(--gold-primary)';
              }}
            >
              <Play size={24} fill="currentColor" style={{ marginLeft: '3px' }} />
            </button>
          )}

          {/* Clean Meta Details on Cover Photo */}
          <div style={{
            position: 'absolute',
            bottom: '24px',
            left: 'clamp(18px, 4vw, 36px)',
            right: 'clamp(18px, 4vw, 36px)',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            zIndex: 10
          }}>
            {/* Category · Year · Genre · Status */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '8px 14px',
              fontSize: '12px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: 'var(--gold-primary)'
            }}>
              <span>{project.cat}</span>
              {project.year && project.year.toLowerCase().trim() !== project.status?.toLowerCase().trim() && (
                <>
                  <span style={{ opacity: 0.4 }}>•</span>
                  <span>{project.year}</span>
                </>
              )}
              {project.status && (
                <>
                  <span style={{ opacity: 0.4 }}>•</span>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '2px 8px',
                    background: 'rgba(212, 166, 42, 0.15)',
                    border: '1px solid var(--gold-primary)',
                    borderRadius: '2px',
                    color: 'var(--gold-primary)',
                    letterSpacing: '0.14em'
                  }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold-primary)' }} />
                    {project.status}
                  </span>
                </>
              )}
              {project.genre && (
                <>
                  <span style={{ opacity: 0.4 }}>•</span>
                  <span style={{ color: 'var(--text-secondary)', letterSpacing: '0.14em' }}>{project.genre}</span>
                </>
              )}
            </div>

            {/* Project Title */}
            <h1
              id="project-modal-title"
              style={{
                margin: 0,
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(28px, 4.5vw, 48px)',
                fontWeight: 500,
                lineHeight: 1.12,
                letterSpacing: '-0.025em',
                color: '#FFFFFF',
                textShadow: '0 2px 14px rgba(0,0,0,0.85)'
              }}
            >
              {project.title}
            </h1>
          </div>
        </div>

        {/* 2. Main Content Body */}
        <div style={{
          padding: '24px clamp(18px, 4vw, 36px) 48px',
          display: 'flex',
          flexDirection: 'column',
          gap: '36px'
        }}>
          
          {/* Subtitle / Credit Line & Action Button */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '20px'
          }}>
            <div style={{
              fontSize: '14px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)'
            }}>
              <span style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>{project.credit}</span>
              {project.client && <span> · {project.client}</span>}
              {project.milestone && <span style={{ color: 'var(--text-muted)' }}> · {project.milestone}</span>}
            </div>

            {project.videoUrl && onOpenVideo && (
              <button
                onClick={() => onOpenVideo(project.videoUrl, project.title)}
                aria-label="Play trailer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 22px',
                  borderRadius: '2px',
                  background: 'var(--gold-primary)',
                  color: '#070707',
                  border: 'none',
                  fontFamily: 'inherit',
                  fontSize: '12px',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 4px 16px rgba(212, 166, 42, 0.25)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.92';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(212, 166, 42, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(212, 166, 42, 0.25)';
                }}
              >
                <Play size={13} fill="#070707" />
                <span>{project.cat === 'Film' ? 'Watch Trailer' : 'Watch Video'}</span>
              </button>
            )}
          </div>

          {/* 3. Story Synopsis */}
          {project.synopsis && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{
                fontSize: '11px',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--gold-primary)',
                fontWeight: 600
              }}>
                Overview
              </span>
              <p style={{
                margin: 0,
                fontSize: '16px',
                lineHeight: 1.75,
                color: 'var(--text-light-sub)',
                fontFamily: 'var(--font-serif)',
                maxWidth: '820px'
              }}>
                {project.synopsis}
              </p>
            </div>
          )}

          {/* 4. Production Details Specs */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
            gap: '16px',
            borderTop: '1px solid var(--border-subtle)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '20px 0'
          }}>
            <div>
              <span style={{ display: 'block', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Director
              </span>
              <span style={{ fontSize: '14px', color: 'var(--text-primary)', marginTop: '4px', display: 'block' }}>
                {project.director || project.credit}
              </span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Production / Network
              </span>
              <span style={{ fontSize: '14px', color: 'var(--text-primary)', marginTop: '4px', display: 'block' }}>
                {project.studio || project.client}
              </span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Release / Status
              </span>
              <span style={{ fontSize: '14px', color: 'var(--text-primary)', marginTop: '4px', display: 'block' }}>
                {project.year && project.year.toLowerCase().trim() !== project.status?.toLowerCase().trim()
                  ? `${project.year}${project.status ? ` (${project.status})` : ''}`
                  : (project.status || project.year || 'Upcoming')}
              </span>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                Format
              </span>
              <span style={{ fontSize: '14px', color: 'var(--gold-primary)', marginTop: '4px', display: 'block' }}>
                {project.cat} Production
              </span>
            </div>
          </div>

          {/* Key Creative Credits (Producers, Screenplay, DOP) */}
          {(project.producers || project.screenplay || project.dialogues || project.dop) && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '16px',
              padding: '16px 20px',
              background: 'rgba(15, 15, 14, 0.45)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '2px'
            }}>
              {project.producers && (
                <div>
                  <span style={{ display: 'block', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
                    Producers
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-primary)', marginTop: '4px', display: 'block', lineHeight: 1.5 }}>
                    {project.producers}
                  </span>
                </div>
              )}
              {project.screenplay && (
                <div>
                  <span style={{ display: 'block', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
                    Screenplay
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-primary)', marginTop: '4px', display: 'block', lineHeight: 1.5 }}>
                    {project.screenplay}
                  </span>
                </div>
              )}
              {project.dialogues && (
                <div>
                  <span style={{ display: 'block', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
                    Dialogues
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-primary)', marginTop: '4px', display: 'block', lineHeight: 1.5 }}>
                    {project.dialogues}
                  </span>
                </div>
              )}
              {project.dop && (
                <div>
                  <span style={{ display: 'block', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold-primary)', fontWeight: 600 }}>
                    DOP (Cinematography)
                  </span>
                  <span style={{ fontSize: '13px', color: 'var(--text-primary)', marginTop: '4px', display: 'block', lineHeight: 1.5 }}>
                    {project.dop}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* 5. Cast & Characters Showcase */}
          {project.cast && project.cast.length > 0 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--gold-primary)',
                  fontWeight: 600
                }}>
                  Cast & Characters
                </span>

              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
                gap: '12px'
              }}>
                {project.cast.map((member, idx) => {
                  const initials = member.actor
                    .split(' ')
                    .filter(Boolean)
                    .slice(0, 2)
                    .map(w => w[0])
                    .join('')
                    .toUpperCase();

                  return (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(18, 18, 17, 0.75)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: '2px',
                        padding: '12px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        minWidth: 0
                      }}
                    >
                      {/* Real Actor Portrait Image or Gold Initial Monogram */}
                      {member.img ? (
                        <div style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          overflow: 'hidden',
                          border: '1px solid rgba(212, 166, 42, 0.6)',
                          flexShrink: 0
                        }}>
                          <img
                            src={member.img}
                            alt={member.actor}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: member.objectPosition || 'center'
                            }}
                          />
                        </div>
                      ) : (
                        <div style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '50%',
                          background: '#161615',
                          border: '1px solid rgba(212, 166, 42, 0.35)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--gold-primary)',
                          fontFamily: 'var(--font-serif)',
                          fontSize: '14px',
                          fontWeight: 600,
                          flexShrink: 0
                        }}>
                          {initials}
                        </div>
                      )}

                      {/* Actor & Character Details */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0, overflow: 'hidden' }}>
                        <span style={{
                          fontSize: '14px',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          {member.actor}
                        </span>
                        <span style={{
                          fontSize: '12px',
                          fontFamily: 'var(--font-serif)',
                          fontStyle: 'italic',
                          color: 'var(--gold-primary)',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}>
                          as {member.character}
                        </span>
                        {member.role && (
                          <span style={{
                            fontSize: '9px',
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: 'var(--text-muted)',
                            marginTop: '2px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis'
                          }}>
                            {member.role}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          

        </div>
      </div>
    </div>
  );
}
