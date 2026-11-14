import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';
import ScrollTopButton from './components/ScrollTopButton';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Director from './pages/Director';
import Directors from './pages/Directors';
import ActorProfile from './pages/ActorProfile';
import Contact from './pages/Contact';

export default function App() {
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    src: '',
    title: ''
  });

  const handleOpenVideo = (src, title = '') => {
    setVideoModal({
      isOpen: true,
      src: src || 'https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?autoplay=1',
      title: title || ''
    });
  };

  const handleCloseVideo = () => {
    setVideoModal({
      isOpen: false,
      src: '',
      title: ''
    });
  };

  // Detect whether running in an embedded iframe context
  const isEmbed = typeof window !== 'undefined' && (
    new URLSearchParams(window.location.search).get('embed') === 'true' ||
    (window.self !== window.top)
  );

  // If running inside an iframe, render directly without site-wide navbar and footer
  if (isEmbed) {
    return (
      <Router>
        <ScrollToTop />
        <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
          <Routes>
            <Route path="/actor/prragati-chauhaan" element={<ActorProfile onOpenVideo={handleOpenVideo} isEmbed={true} />} />
            <Route path="/prragati-chauhaan" element={<ActorProfile onOpenVideo={handleOpenVideo} isEmbed={true} />} />
            <Route path="*" element={<ActorProfile onOpenVideo={handleOpenVideo} isEmbed={true} />} />
          </Routes>
          <VideoModal
            isOpen={videoModal.isOpen}
            onClose={handleCloseVideo}
            videoSrc={videoModal.src}
            title={videoModal.title}
          />
        </div>
      </Router>
    );
  }

  return (
    <Router>
      <Preloader />
      <ScrollToTop />
      <CustomCursor />
      
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
        <Navbar />

        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Routes>
            <Route path="/" element={<Home onOpenVideo={handleOpenVideo} />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work onOpenVideo={handleOpenVideo} />} />
            <Route path="/work/films" element={<Work onOpenVideo={handleOpenVideo} />} />
            <Route path="/work/serials" element={<Work onOpenVideo={handleOpenVideo} />} />
            <Route path="/directors" element={<Directors />} />
            <Route path="/director" element={<Director onOpenVideo={handleOpenVideo} />} />
            <Route path="/actor/prragati-chauhaan" element={<ActorProfile onOpenVideo={handleOpenVideo} isEmbed={false} />} />
            <Route path="/prragati-chauhaan" element={<ActorProfile onOpenVideo={handleOpenVideo} isEmbed={false} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home onOpenVideo={handleOpenVideo} />} />
          </Routes>
        </main>

        <Footer />

        <ScrollTopButton />

        <VideoModal
          isOpen={videoModal.isOpen}
          onClose={handleCloseVideo}
          videoSrc={videoModal.src}
          title={videoModal.title}
        />
      </div>
    </Router>
  );
}
