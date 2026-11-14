import React, { useState, useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { siteData } from '../data/content';
import KineticTicker from './KineticTicker';

/**
 * BTSVideoCard — High-end Cinema Video Player Card
 * Plays automatically when the slide is active, tracks playback with a luxury golden progress bar,
 * provides center play/pause and audio controls, and notifies the slider when finished.
 */
function BTSVideoCard({
  item,
  isActive,
  isMuted,
  onToggleMute,
  onOpenMedia,
  displayTag,
  onVideoEnded,
  cardVirtualIdx
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Synchronize muted state with video element
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // Handle active slide transitions: auto-play when entering, pause and reset when leaving
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      setIsManuallyPaused(false);
      setProgress(0);
      video.currentTime = 0;
      video.muted = isMuted;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // If unmuted autoplay was rejected by browser policy, fallback to muted
            video.muted = true;
            video.play()
              .then(() => setIsPlaying(true))
              .catch(() => setIsPlaying(false));
          });
      }
    } else {
      video.pause();
      setIsPlaying(false);
      setProgress(0);
      video.currentTime = 0;
    }
  }, [isActive, isMuted]);

  const togglePlay = (e) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setIsManuallyPaused(false);
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {});
    } else {
      setIsManuallyPaused(true);
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(100);
    // When the video finishes playing, notify parent carousel to smoothly advance to the next slide
    if (isActive && !isManuallyPaused && onVideoEnded) {
      onVideoEnded(cardVirtualIdx);
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleExpand = (e) => {
    e.stopPropagation();
    if (onOpenMedia) {
      onOpenMedia(item.videoSrc, item.title);
    }
  };

  return (
    <div
      className="bts-img-wrapper bts-video-wrapper"
      style={{ position: 'relative', cursor: 'pointer' }}
      onClick={togglePlay}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={item.videoSrc}
        poster={item.poster}
        loop={false}
        muted={isMuted}
        playsInline
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={handleEnded}
        onTimeUpdate={handleTimeUpdate}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block'
        }}
      />

      {/* Lens Tag Badge */}
      <div className="bts-overlay">
        <span className="bts-lens-tag">
          {displayTag}
        </span>
      </div>

      {/* Golden Video Progress Bar along Bottom Edge */}
      {isActive && (
        <div className="bts-video-progress-track">
          <div
            className="bts-video-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Center Play/Pause Button */}
      <button
        type="button"
        onClick={togglePlay}
        className={`bts-video-center-btn ${isPlaying ? 'is-playing' : 'is-paused'} ${isHovered ? 'show-controls' : ''}`}
        aria-label={isPlaying ? 'Pause video' : 'Play video'}
        title={isPlaying ? 'Pause' : 'Play'}
      >
        {isPlaying ? (
          <Pause size={24} fill="currentColor" strokeWidth={0} />
        ) : (
          <Play size={26} fill="currentColor" strokeWidth={0} style={{ marginLeft: '3px' }} />
        )}
      </button>

      {/* Top-Right Quick Utility Controls: Mute and Lightbox Expand */}
      <div className="bts-video-quick-controls">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onToggleMute) onToggleMute();
          }}
          className="bts-video-icon-btn"
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
          title={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </button>
        <button
          type="button"
          onClick={handleExpand}
          className="bts-video-icon-btn"
          aria-label="Expand in full lightbox"
          title="Watch full in modal"
        >
          <Maximize2 size={14} />
        </button>
      </div>
    </div>
  );
}

/**
 * BTSGallery — Seamless Infinite Loop Carousel
 * Features 3-set virtual clones for flawless continuous wrapping in both directions,
 * video auto-playback that advances to next slide upon completion, touch drag, and responsive centering.
 */
export default function BTSGallery({ onOpenMedia, onOpenImage }) {
  const { btsGallery } = siteData;
  const total = btsGallery.length;

  // 3 Clone Sets: [Set 0 (left clone), Set 1 (middle original), Set 2 (right clone)]
  // Initial virtual index starts at Set 1 (total)
  const [virtualIndex, setVirtualIndex] = useState(total);
  const [isHovered, setIsHovered] = useState(false);
  const [subIndexMap, setSubIndexMap] = useState({});
  const [isMuted, setIsMuted] = useState(true);

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const hasMoved = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const isNormalizing = useRef(false);

  // Cloned data list (3x original array)
  const displayItems = useRef([
    ...btsGallery.map((item, i) => ({ ...item, _key: `c0_${i}`, _origIdx: i })),
    ...btsGallery.map((item, i) => ({ ...item, _key: `c1_${i}`, _origIdx: i })),
    ...btsGallery.map((item, i) => ({ ...item, _key: `c2_${i}`, _origIdx: i }))
  ]).current;

  // Active slide in original array (0 to total - 1)
  const activeSlide = ((virtualIndex % total) + total) % total;
  const currentItem = displayItems[virtualIndex];
  const isCurrentVideo = currentItem?.type === 'video';

  // Compute target scroll position to center a card
  const getTargetScroll = useCallback((idx) => {
    if (!containerRef.current) return 0;
    const container = containerRef.current;
    const card = container.children[idx];
    if (!card) return 0;
    return card.offsetLeft - (container.clientWidth / 2) + (card.clientWidth / 2);
  }, []);

  // Programmatic scroll to a virtual index
  const scrollToIndex = useCallback((targetVirtual, behavior = 'smooth') => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const targetScroll = getTargetScroll(targetVirtual);
    container.scrollTo({ left: targetScroll, behavior });
    setVirtualIndex(targetVirtual);
  }, [getTargetScroll]);

  // Silent boundary normalization to keep virtualIndex safely inside [total, 2 * total - 1]
  const normalizePosition = useCallback((curVirtual) => {
    if (!containerRef.current || isNormalizing.current) return;
    const container = containerRef.current;

    if (curVirtual < total || curVirtual >= 2 * total) {
      isNormalizing.current = true;
      const normalized = ((curVirtual % total) + total) % total + total;
      const targetScroll = getTargetScroll(normalized);

      // Instant jump without animation
      container.scrollTo({ left: targetScroll, behavior: 'auto' });
      setVirtualIndex(normalized);

      // Release lock
      setTimeout(() => {
        isNormalizing.current = false;
      }, 50);
    }
  }, [total, getTargetScroll]);

  // Navigation handlers
  const handlePrev = useCallback(() => {
    scrollToIndex(virtualIndex - 1, 'smooth');
  }, [virtualIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    scrollToIndex(virtualIndex + 1, 'smooth');
  }, [virtualIndex, scrollToIndex]);

  // When an active video finishes playing, automatically move to the next slide!
  const handleVideoEnded = useCallback((cardVirtualIdx) => {
    if (cardVirtualIdx === virtualIndex && !isHovered && !isDragging.current) {
      handleNext();
    }
  }, [virtualIndex, isHovered, handleNext]);

  // Auto-scroll timer: Advances after 4.5s ONLY for non-video slides (images/galleries)
  useEffect(() => {
    if (isHovered || isDragging.current) return;

    // If active slide is a video, let onVideoEnded handle moving to the next slide
    if (isCurrentVideo) return;

    const timer = setTimeout(() => {
      handleNext();
    }, 4500);

    return () => clearTimeout(timer);
  }, [virtualIndex, isHovered, isCurrentVideo, handleNext]);

  // Safety fallback: in case a video stalls or network pauses, advance after 25s
  useEffect(() => {
    if (isHovered || isDragging.current || !isCurrentVideo) return;

    const safetyTimer = setTimeout(() => {
      handleNext();
    }, 25000);

    return () => clearTimeout(safetyTimer);
  }, [virtualIndex, isHovered, isCurrentVideo, handleNext]);

  // Initial centering on mount (runs synchronously before paint)
  useLayoutEffect(() => {
    if (containerRef.current) {
      const targetScroll = getTargetScroll(total);
      containerRef.current.scrollLeft = targetScroll;
    }
  }, [total, getTargetScroll]);

  // Re-verify initial scroll after any asset/font paint
  useEffect(() => {
    const t = setTimeout(() => {
      if (containerRef.current) {
        const targetScroll = getTargetScroll(total);
        containerRef.current.scrollLeft = targetScroll;
      }
    }, 60);
    return () => clearTimeout(t);
  }, [total, getTargetScroll]);

  // Handle silent normalization after smooth scroll settles
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScrollEnd = () => {
      normalizePosition(virtualIndex);
    };

    container.addEventListener('scrollend', handleScrollEnd);

    // Fallback timer for browsers that do not yet support scrollend
    const fallbackTimer = setTimeout(() => {
      normalizePosition(virtualIndex);
    }, 420);

    return () => {
      container.removeEventListener('scrollend', handleScrollEnd);
      clearTimeout(fallbackTimer);
    };
  }, [virtualIndex, normalizePosition]);

  // Window resize handler: maintains centered position
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const targetScroll = getTargetScroll(virtualIndex);
      containerRef.current.scrollTo({ left: targetScroll, behavior: 'auto' });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [virtualIndex, getTargetScroll]);

  // Dot navigation handler: Shortest circular path
  const handleDotClick = (dotIdx) => {
    const currentSlide = ((virtualIndex % total) + total) % total;
    let diff = dotIdx - currentSlide;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const targetVirtual = virtualIndex + diff;
    scrollToIndex(targetVirtual, 'smooth');
  };

  // Sub-images navigation for multi-still frames
  const handleSubNext = (e, origIdx, maxLen) => {
    e.stopPropagation();
    setSubIndexMap((prev) => ({
      ...prev,
      [origIdx]: ((prev[origIdx] || 0) + 1) % maxLen
    }));
  };

  const handleSubPrev = (e, origIdx, maxLen) => {
    e.stopPropagation();
    setSubIndexMap((prev) => ({
      ...prev,
      [origIdx]: ((prev[origIdx] || 0) - 1 + maxLen) % maxLen
    }));
  };

  // Snap to the card closest to center upon drag release
  const snapToClosest = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const viewportCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = virtualIndex;
    let minDiff = Infinity;

    for (let i = 0; i < container.children.length; i++) {
      const card = container.children[i];
      const cardCenter = card.offsetLeft + card.clientWidth / 2;
      const diff = Math.abs(cardCenter - viewportCenter);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = i;
      }
    }

    scrollToIndex(closestIndex, 'smooth');
  }, [virtualIndex, scrollToIndex]);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    if (e.target.closest('button') || e.target.closest('.bts-video-center-btn')) return;
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeftPos.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.35;
    if (Math.abs(walk) > 4) {
      hasMoved.current = true;
    }
    containerRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (hasMoved.current) {
      snapToClosest();
    }
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      snapToClosest();
    }
    setIsHovered(false);
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    if (e.target.closest('button') || e.target.closest('.bts-video-center-btn')) return;
    setIsHovered(true);
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    scrollLeftPos.current = containerRef.current.scrollLeft;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.35;
    if (Math.abs(walk) > 4) {
      hasMoved.current = true;
    }
    containerRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
    if (!isDragging.current) return;
    isDragging.current = false;
    if (hasMoved.current) {
      snapToClosest();
    }
  };

  // Card click handler
  const handleCardClick = (item, cardVirtualIdx) => {
    if (hasMoved.current) return;

    // If clicking a card that is not the active centered slide, scroll it to center
    if (cardVirtualIdx !== virtualIndex) {
      scrollToIndex(cardVirtualIdx, 'smooth');
      return;
    }

    // For images: Open in full lightbox
    if (item.type !== 'video') {
      const origIdx = cardVirtualIdx % total;
      const hasSub = item.subImages && item.subImages.length > 0;
      const subIdx = hasSub ? (subIndexMap[origIdx] || 0) : 0;
      const activeSub = hasSub ? item.subImages[subIdx] : null;
      const mediaUrl = activeSub ? activeSub.img : item.img;
      const mediaTitle = activeSub ? activeSub.title : item.title;

      if (onOpenMedia) {
        onOpenMedia(mediaUrl, mediaTitle);
      } else if (onOpenImage) {
        onOpenImage(mediaUrl, mediaTitle);
      }
    }
  };

  return (
    <section className="bts-section" style={{ padding: '72px 0 100px', borderTop: '1px solid var(--border-subtle)', overflow: 'hidden' }}>
      {/* Kinetic Scrolling Typography for Life On Set */}
      <KineticTicker
        track1={[
          'LIFE ON SET||& THE CRAFT',
          'BEHIND THE SCENES||S&P CHITRALOK',
          'LIFE ON SET||& THE CRAFT',
          'BEHIND THE SCENES||S&P CHITRALOK'
        ]}
        track2={[
          'BEHIND THE SCENES||S&P CHITRALOK',
          'LIFE ON SET||& THE CRAFT',
          'BEHIND THE SCENES||S&P CHITRALOK',
          'LIFE ON SET||& THE CRAFT'
        ]}
      />

      {/* Top Controls Bar: Counter and Infinite Loop Navigation Arrows */}
      <div
        className="bts-top-controls-bar"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 var(--container-pad)',
          marginTop: '36px',
          marginBottom: '20px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold-primary)',
            fontWeight: 600
          }}>
            BEHIND THE SCENES
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--text-secondary)',
            letterSpacing: '0.12em'
          }}>
            · {String(activeSlide + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </div>

        {/* Navigation Arrow Icons (Infinite Loop Navigation) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button
            onClick={handlePrev}
            aria-label="Previous Behind The Scenes Slide"
            title="Previous Frame"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid rgba(212, 166, 42, 0.45)',
              background: 'rgba(10, 10, 9, 0.75)',
              color: 'var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold-primary)';
              e.currentTarget.style.color = '#070707';
              e.currentTarget.style.borderColor = 'var(--gold-primary)';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(10, 10, 9, 0.75)';
              e.currentTarget.style.color = 'var(--gold-primary)';
              e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.45)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={handleNext}
            aria-label="Next Behind The Scenes Slide"
            title="Next Frame"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              border: '1px solid rgba(212, 166, 42, 0.45)',
              background: 'rgba(10, 10, 9, 0.75)',
              color: 'var(--gold-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--gold-primary)';
              e.currentTarget.style.color = '#070707';
              e.currentTarget.style.borderColor = 'var(--gold-primary)';
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(10, 10, 9, 0.75)';
              e.currentTarget.style.color = 'var(--gold-primary)';
              e.currentTarget.style.borderColor = 'rgba(212, 166, 42, 0.45)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* BTS Carousel Track */}
      <div
        className="bts-carousel-wrapper"
        style={{ position: 'relative', width: '100%' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={containerRef}
          className="bts-carousel-track carousel-draggable"
          style={{ padding: '0 var(--container-pad)' }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {displayItems.map((item, idx) => {
            const isCenterCard = idx === virtualIndex;
            const origIdx = item._origIdx;
            const isVideo = item.type === 'video';
            const hasSubImages = Boolean(item.subImages && item.subImages.length > 0);
            const subIdx = hasSubImages ? (subIndexMap[origIdx] || 0) : 0;
            const activeSub = hasSubImages ? item.subImages[subIdx] : null;

            const displayImg = isVideo ? null : (activeSub ? activeSub.img : item.img);
            const displayTitle = activeSub ? activeSub.title : item.title;
            const displayMeta = activeSub ? activeSub.meta : item.meta;
            const displayTag = activeSub
              ? activeSub.tag
              : (item.tag || (isVideo ? `CINEMA CLIP #${origIdx + 1}` : `STILL FRAME #${origIdx + 1}`));

            return (
              <div
                key={item._key || idx}
                className={`bts-carousel-card ${isCenterCard ? 'active-slide' : ''}`}
                onClick={() => handleCardClick(item, idx)}
                role="button"
                tabIndex={0}
                aria-label={`View BTS: ${displayTitle}`}
              >
                {isVideo ? (
                  <BTSVideoCard
                    item={item}
                    isActive={isCenterCard}
                    isMuted={isMuted}
                    onToggleMute={() => setIsMuted((prev) => !prev)}
                    onOpenMedia={onOpenMedia}
                    displayTag={displayTag}
                    onVideoEnded={handleVideoEnded}
                    cardVirtualIdx={idx}
                  />
                ) : (
                  <div className="bts-img-wrapper" style={{ position: 'relative' }}>
                    <img
                      key={displayImg}
                      src={displayImg}
                      alt={displayTitle}
                      loading="lazy"
                      style={{
                        animation: hasSubImages ? 'btsFadeSwap 0.35s ease forwards' : 'none'
                      }}
                    />

                    {/* Lens Tag Badge */}
                    <div className="bts-overlay">
                      <span className="bts-lens-tag">
                        {displayTag}
                      </span>
                    </div>

                    {/* Combined Frame Sub-Image Navigation Controls */}
                    {hasSubImages && (
                      <>
                        {/* Sub-counter badge at top-right */}
                        <div
                          style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            padding: '4px 10px',
                            background: 'rgba(10, 10, 9, 0.85)',
                            border: '1px solid rgba(212, 166, 42, 0.45)',
                            borderRadius: '12px',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            letterSpacing: '0.12em',
                            color: 'var(--gold-primary)',
                            fontWeight: 600,
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            zIndex: 6,
                            pointerEvents: 'none'
                          }}
                        >
                          {subIdx + 1} / {item.subImages.length}
                        </div>

                        {/* Previous Sub-Image Button (when on 2nd image) */}
                        {subIdx > 0 && (
                          <button
                            type="button"
                            onClick={(e) => handleSubPrev(e, origIdx, item.subImages.length)}
                            aria-label="Previous photo in this set"
                            title="Previous photo"
                            style={{
                              position: 'absolute',
                              left: '14px',
                              top: '50%',
                              transform: 'translateY(-50%)',
                              width: '38px',
                              height: '38px',
                              borderRadius: '50%',
                              border: '1px solid rgba(212, 166, 42, 0.5)',
                              background: 'rgba(10, 10, 9, 0.82)',
                              color: 'var(--gold-primary)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              cursor: 'pointer',
                              backdropFilter: 'blur(8px)',
                              WebkitBackdropFilter: 'blur(8px)',
                              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.65)',
                              zIndex: 7,
                              transition: 'all 0.25s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'var(--gold-primary)';
                              e.currentTarget.style.color = '#070707';
                              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'rgba(10, 10, 9, 0.82)';
                              e.currentTarget.style.color = 'var(--gold-primary)';
                              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                            }}
                          >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="15 18 9 12 15 6"></polyline>
                            </svg>
                          </button>
                        )}

                        {/* Next Sub-Image Button */}
                        <button
                          type="button"
                          onClick={(e) => handleSubNext(e, origIdx, item.subImages.length)}
                          aria-label="Next photo in this set"
                          title="Next photo"
                          style={{
                            position: 'absolute',
                            right: '14px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            border: '1px solid rgba(212, 166, 42, 0.5)',
                            background: 'rgba(10, 10, 9, 0.82)',
                            color: 'var(--gold-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            backdropFilter: 'blur(8px)',
                            WebkitBackdropFilter: 'blur(8px)',
                            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.65)',
                            zIndex: 7,
                            transition: 'all 0.25s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--gold-primary)';
                            e.currentTarget.style.color = '#070707';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(10, 10, 9, 0.82)';
                            e.currentTarget.style.color = 'var(--gold-primary)';
                            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                          }}
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                          </svg>
                        </button>

                        {/* Micro Pill Indicators for Sub-Images */}
                        <div
                          style={{
                            position: 'absolute',
                            bottom: '12px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '6px',
                            zIndex: 6,
                            pointerEvents: 'none'
                          }}
                        >
                          {item.subImages.map((_, sIdx) => (
                            <span
                              key={sIdx}
                              style={{
                                width: sIdx === subIdx ? '16px' : '6px',
                                height: '4px',
                                borderRadius: '2px',
                                background: sIdx === subIdx ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.45)',
                                transition: 'all 0.25s ease'
                              }}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                <div
                  className="bts-details"
                  onClick={() => {
                    if (isVideo && onOpenMedia) {
                      onOpenMedia(item.videoSrc, displayTitle);
                    }
                  }}
                >
                  <span className="bts-title">{displayTitle}</span>
                  <span className="bts-meta">{displayMeta}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Dots & Frame Counter */}
        <div className="carousel-dots-container" style={{ marginTop: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--gold-primary)',
            letterSpacing: '0.15em',
            fontWeight: 500
          }}>
            {String(activeSlide + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {btsGallery.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleDotClick(idx)}
                className={`carousel-dot ${idx === activeSlide ? 'active' : ''}`}
                aria-label={`Go to BTS slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
