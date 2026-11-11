import React, { useState } from 'react';
import { siteData } from '../data/content';
import GoldenCTA from '../components/GoldenCTA';
import ProjectModal from '../components/ProjectModal';

export default function Work({ onOpenVideo }) {
  const { allWorks } = siteData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Film', 'Series', 'Ad Film'];

  const filteredWorks = activeFilter === 'All'
    ? allWorks
    : allWorks.filter(w => w.cat === activeFilter);

  return (
    <div style={{ width: '100%' }}>
      {/* Projects Title Heading — Matching Contact Page Theme */}
      <section style={{ padding: '104px var(--container-pad) 64px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h1 style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(56px, 11vw, 184px)',
          lineHeight: 0.92,
          letterSpacing: '-0.035em'
        }}>
          Our <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>projects.</span>
        </h1>
        <p style={{ margin: 0, maxWidth: '640px', fontSize: '19px', lineHeight: 1.65, color: 'var(--text-light-sub)' }}>
          A curated archive of landmark feature films, television classics, and commercial advertisements.
        </p>

        <div role="group" aria-label="Filter projects by category" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px 28px',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '20px',
          marginTop: '8px'
        }}>
          {categories.map((cat, idx) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={idx}
                className={`filter-btn ${isActive ? 'active' : 'fb'}`}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={isActive}
                style={{
                  minHeight: '44px',
                  padding: 0,
                  fontFamily: 'inherit',
                  fontSize: '12px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  color: isActive ? 'var(--gold-primary)' : 'var(--text-secondary)',
                  background: 'transparent',
                  border: 0,
                  borderBottom: isActive ? '1px solid var(--gold-primary)' : '1px solid transparent',
                  transition: 'color var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid — 4 Columns in one row */}
      <section style={{ padding: '0 var(--container-pad) 128px' }}>
        <div className="work-projects-grid">
          {filteredWorks.map((work) => {
            const cardImg = work.posterImg || work.img;
            return (
              <div
                key={work.id}
                className="th project-card-interactive"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(work)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedProject(work);
                  }
                }}
                aria-label={`View details for ${work.title}`}
                style={{
                  cursor: 'pointer',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '4px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {/* Poster Frame (3:4 portrait ratio matching Director showcase) */}
                <div style={{
                  position: 'relative',
                  aspectRatio: '3/4',
                  width: '100%',
                  background: '#0d0d0d',
                  overflow: 'hidden'
                }}>
                  <img
                    src={cardImg}
                    alt={work.title}
                    className="project-card-img"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                    loading="lazy"
                  />

                  {/* Year / Status Badge (Top-Right) */}
                  {(work.status || work.year) && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(7, 7, 7, 0.85)',
                      border: '1px solid var(--border-subtle)',
                      padding: '3px 8px',
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--gold-primary)',
                      letterSpacing: '0.1em',
                      zIndex: 2,
                      borderRadius: '2px'
                    }}>
                      {work.status || work.year}
                    </div>
                  )}

                  {/* Subtle Hover "View Details" Pill */}
                  <div
                    className="project-card-view-badge"
                    style={{
                      position: 'absolute',
                      bottom: '12px',
                      left: '12px',
                      padding: '5px 12px',
                      fontSize: '10px',
                      fontFamily: 'var(--font-mono)',
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                      color: 'var(--gold-primary)',
                      background: 'rgba(8, 8, 8, 0.92)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(212, 166, 42, 0.45)',
                      borderRadius: '2px',
                      opacity: 0,
                      transform: 'translateY(6px)',
                      transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                      zIndex: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>View Details</span>
                    <span style={{ fontSize: '11px' }}>→</span>
                  </div>

                  {/* Play Video Button on Poster Card */}
                  {work.videoUrl && onOpenVideo && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenVideo(work.videoUrl, work.title);
                      }}
                      className="project-card-play-btn"
                      aria-label={`Watch video for ${work.title}`}
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        padding: '5px 12px',
                        fontSize: '10px',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: '#070707',
                        background: 'var(--gold-primary)',
                        border: 'none',
                        borderRadius: '2px',
                        opacity: 0,
                        transform: 'translateY(6px)',
                        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                        zIndex: 3,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        cursor: 'pointer'
                      }}
                    >
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#070707">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                      <span>Play Video</span>
                    </button>
                  )}
                </div>

                {/* Card Information Body */}
                <div style={{
                  padding: '18px 16px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  flex: 1
                }}>
                  <h3 className="tt" style={{
                    margin: 0,
                    fontFamily: 'var(--font-serif)',
                    fontSize: '20px',
                    fontWeight: 600,
                    lineHeight: 1.25,
                    color: 'var(--text-primary)',
                    transition: 'color var(--transition-fast)'
                  }}>
                    {work.title}
                  </h3>

                  <span style={{
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    marginTop: 'auto'
                  }}>
                    {work.genre || work.cat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredWorks.length === 0 && (
          <p style={{ margin: '40px 0', fontSize: '17px', color: 'var(--text-light-sub)' }}>
            No projects in this category yet.
          </p>
        )}
      </section>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenVideo={onOpenVideo}
      />

      {/* Golden CTA */}
      <GoldenCTA text="Start a project" link="/contact" />
    </div>
  );
}

