import React, { useState } from 'react';
import { siteData } from '../data/content';
import EastDelhiMap from '../components/EastDelhiMap';

export default function Contact() {
  const { brand } = siteData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Film',
    msg: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) {
      triggerToast('Please fill out all required fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      triggerToast('Thank you! We will get back to you within 2 working days.');
      setFormData({
        name: '',
        email: '',
        type: 'Film',
        msg: ''
      });
    }, 700);
  };

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 4500);
  };

  return (
    <div style={{ width: '100%' }}>
      {/* Contact Title Heading */}
      <section style={{ padding: '104px var(--container-pad) 80px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <h1 style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontWeight: 500,
          fontSize: 'clamp(56px, 11vw, 184px)',
          lineHeight: 0.92,
          letterSpacing: '-0.035em'
        }}>
          Let’s <span style={{ fontStyle: 'italic', color: 'var(--gold-primary)' }}>talk.</span>
        </h1>
        <p style={{ margin: 0, maxWidth: '560px', fontSize: '19px', lineHeight: 1.65, color: 'var(--text-light-sub)' }}>
          Tell us about your film, campaign or series. We read every enquiry and reply within two working days.
        </p>
      </section>

      {/* Info & Form Grid */}
      <section style={{ padding: '0 var(--container-pad) 128px', display: 'flex', flexWrap: 'wrap', gap: '72px 96px', alignItems: 'flex-start' }}>
        {/* Left Column */}
        <div style={{ flex: '1 1 380px', minWidth: 0, display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '28px 0', borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Official Email
            </span>
            <a className="em" href={`mailto:${brand.email}`} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 2.3vw, 32px)', lineHeight: 1.2, textDecoration: 'none', wordBreak: 'break-all' }}>
              {brand.email}
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '28px 0', borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Office Phone
            </span>
            <a className="em" href={`tel:${brand.phone.replace(/[^0-9+]/g, '')}`} style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 2.6vw, 36px)', lineHeight: 1.2, textDecoration: 'none' }}>
              {brand.phone}
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '28px 0', borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Studio Address
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '18px', lineHeight: 1.55, color: 'var(--text-primary)' }}>
              <div style={{ display: 'block', fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, color: 'var(--gold-primary)', marginBottom: '2px' }}>
                S&amp;P Chitralok Studios
              </div>
              <div style={{ display: 'block', color: 'var(--text-light-sub)' }}>24/3, 24/4 &amp; 24/5, 3rd Floor,</div>
              <div style={{ display: 'block', color: 'var(--text-light-sub)' }}>Block E, Pandav Nagar,</div>
              <div style={{ display: 'block', color: 'var(--text-light-sub)' }}>East Delhi – 110092</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '28px 0', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Social Channels
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px 20px' }}>
              {brand.socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nl"
                  style={{
                    fontSize: '13px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--gold-primary)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {s.name} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <form onSubmit={handleSubmit} style={{ flex: '1.2 1 420px', minWidth: 0, display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px, 3.2vw, 44px)', lineHeight: 1.15 }}>
            Tell us about your project
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label htmlFor="name" style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Name *
            </label>
            <input
              className="form-input"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              required
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label htmlFor="email" style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Email *
            </label>
            <input
              className="form-input"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label htmlFor="type" style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Project type
            </label>
            <select
              className="form-select"
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="Film">Film</option>
              <option value="Ad Film">Ad Film</option>
              <option value="Series">Series</option>
              <option value="Music Video">Music Video</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label htmlFor="msg" style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
              Message *
            </label>
            <textarea
              className="form-textarea"
              id="msg"
              name="msg"
              rows={4}
              value={formData.msg}
              onChange={handleChange}
              placeholder="The story, timeline and budget in a few lines"
              required
            />
          </div>

          <button className="btn-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </section>

      {/* Toast Feedback Notification */}
      <div className={`form-toast ${toastMessage ? 'show' : ''}`} role="status" aria-live="polite">
        {toastMessage}
      </div>

      {/* Studio Location Map */}
      <EastDelhiMap />
    </div>
  );
}

