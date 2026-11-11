import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/content';

/**
 * DirectorSpotlight — Signature Showcase for Pushpendra Singh
 * Displays the director with portrait, TV & feature film highlights,
 * and zero IMDb clutter on the home page (reserved only for director profile).
 */
export default function DirectorSpotlight({ onOpenVideo }) {
  const director = siteData.directors[0] || siteData.director;

  return (
    <div className="director-spotlight-wrapper">
      <div className="director-spotlight-card">
        {/* Left Column: Official Portrait */}
        <div className="director-spotlight-media-wrap">
          <div className="director-spotlight-media">
            <img
              src={director.img || director.portraitImg}
              alt="Pushpendra Singh — Television & Film Director"
              className="director-spotlight-img"
              loading="lazy"
            />
            <span className="director-spotlight-badge">
              Paid Palki · Writer &amp; Director
            </span>
          </div>
        </div>

        {/* Right Column: Bio, Vision & Television / Film Legacy */}
        <div className="director-spotlight-info">
          <div className="director-spotlight-meta-top">
            <span className="director-spotlight-tag">
              INDIAN TELEVISION &amp; FILM DIRECTOR
            </span>
          </div>

          <h3 className="director-spotlight-name">
            Pushpendra <span className="name-accent">Singh</span>
          </h3>

          <p className="director-spotlight-quote">
            “Stories on screen become part of the collective consciousness when told with truth and unwavering craft.”
          </p>

          <p className="director-spotlight-desc">
            Pushpendra Singh started his directorial career as an associate director on <em>Kyaa Hoga Nimmo Kaa</em> and worked as <strong>Second Director on the iconic film Sarkar (2005)</strong>, going on to direct some of Indian television’s biggest daily blockbusters and landmark feature films like <em>Paid Palki</em>.
          </p>

          {/* Television & Film Directorial Portfolio Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '4px 0' }}>
            {[
              'Sarkar (2005 Movie — Second Director)',
              'Paid Palki (Feature Film)',
              'Aaoge Jab Tum (2026)',
              'Kyunki Saas Bhi Kabhi Bahu Thi (2006)',
              'Kahaani Ghar Ghar Kii (2008)',
              'Kis Desh Mein Hai Meraa Dil',
              'Zindagi Ki Mehek (2017)',
              'Jai Shri Krishna',
              'Shakuntala (2008–2009)',
              'Meera',
              'Kuchh Is Tara (2011)',
              'Sarkar (TV)'
            ].map((title, i) => (
              <span
                key={i}
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                  color: 'var(--text-light-sub)',
                  background: 'rgba(212, 166, 42, 0.08)',
                  border: '1px solid rgba(212, 166, 42, 0.22)',
                  padding: '4px 10px',
                  borderRadius: '2px'
                }}
              >
                {title}
              </span>
            ))}
          </div>

          {/* Feature Films Showcase: Sarkar, Paid Palki & Aaoge Jab Tum */}
          <div className="director-spotlight-feature-box">
            <div className="feature-box-header">
              <span className="feature-label">DIRECTORIAL FEATURE CINEMA</span>
              <span className="feature-year">THEATRICAL RELEASES</span>
            </div>
            <h4 className="feature-title">Sarkar (2005) · Paid Palki · Aaoge Jab Tum (2026)</h4>
            <p className="feature-summary">
              Served as <strong>Second Director on Sarkar (2005)</strong> starring Amitabh Bachchan, followed by writing and directing the landmark social feature <em>Paid Palki</em> and upcoming theatrical feature <em>Aaoge Jab Tum</em>.
            </p>
          </div>

          {/* Action Links (No IMDb reference here - strictly kept only on director profile) */}
          <div className="director-spotlight-actions">
            <Link to="/director" className="btn-link-action" style={{ fontSize: '13px', padding: '10px 0' }}>
              <span>View Full Biography &amp; Filmography →</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
