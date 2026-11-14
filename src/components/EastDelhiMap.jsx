import React from 'react';
import { siteData } from '../data/content';

/**
 * EastDelhiMap — Interactive Dark-Themed Map of East Delhi Studio
 * Full-width, with floating studio address badge and exact coordinates for Pandav Nagar, East Delhi.
 */
export default function EastDelhiMap() {
  const { brand } = siteData;
  const fullAddress = 'Block E, Pandav Nagar, East Delhi – 110092';
  const mapQuery = encodeURIComponent('Block E, Pandav Nagar, East Delhi, Delhi 110092');

  return (
    <section className="eastdelhi-map-section lucknow-map-section" aria-label="S&P Chitralok Studios East Delhi Location Map">
      {/* Top Gradient Transition Overlay */}
      <div className="map-gradient-top" />

      {/* Floating Studio Info Badge */}
      <div className="map-floating-badge">
        <div className="map-badge-header">
          <div className="map-pulse-dot" />
          <span className="map-badge-tag">STUDIO LOCATION</span>
        </div>
        <h3 className="map-badge-title">S&P Chitralok Studios</h3>
        <p className="map-badge-desc">
          Block E, Pandav Nagar,<br />
          East Delhi – 110092
        </p>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
          target="_blank"
          rel="noopener noreferrer"
          className="map-open-link"
          aria-label="Open S&P Chitralok Studios address in Google Maps"
        >
          Open in Google Maps ↗
        </a>
      </div>

      {/* Interactive Google Map Embed */}
      <div className="map-iframe-container">
        <iframe
          title={`S&P Chitralok Studios — ${fullAddress}`}
          className="eastdelhi-map-iframe lucknow-map-iframe"
          src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Bottom Gradient Transition to Footer */}
      <div className="map-gradient-bottom" />
    </section>
  );
}

