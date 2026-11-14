import React, { useState, useEffect } from 'react';
import { siteData } from '../data/content';

/**
 * Preloader — Minimalist Luxury Intro for S&P Chitralok Studios
 * Understated, sleek, and fast (1.0s). Refined 1px golden hairline progress
 * and elegant typography matching Dharma 2.0 quiet luxury aesthetic.
 */
export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    // Keep window strictly at top on load
    window.scrollTo(0, 0);

    const startTime = performance.now();
    const duration = 950; // Fast & crisp 0.95s

    const tick = (now) => {
      const elapsed = now - startTime;
      const pct = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(pct);

      if (elapsed < duration) {
        requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsGone(true);
            if (onComplete) onComplete();
          }, 500);
        }, 120);
      }
    };

    const anim = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(anim);
  }, [onComplete]);

  if (isGone) return null;

  return (
    <div
      className={`minimal-preloader ${isFading ? 'fade-out' : ''}`}
      aria-hidden="true"
    >
      <div className="minimal-preloader-inner">
        {/* Subtle Clean Brand Monogram / Title */}
        <div className="minimal-preloader-brand">
          <img
            src={siteData.brand.logo}
            alt=""
            className="minimal-preloader-logo"
          />
          <span className="minimal-preloader-title">
            {siteData.brand.name}
          </span>
        </div>

        {/* Delicate Hairline Progress Rule */}
        <div className="minimal-preloader-track">
          <div
            className="minimal-preloader-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Small Monospace Counter */}
        <div className="minimal-preloader-counter">
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}
