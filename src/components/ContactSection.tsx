'use client';

import React, { useState } from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-label">05 // Get In Touch</div>
          <h2 className="section-heading">Connect & Collaborate</h2>
          <p className="section-subheading">
            Open for remote engineering positions, technical consulting, and architecture collaborations worldwide.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {/* Email Card */}
          <div className="skill-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>✉️</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '4px' }}>Email</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Direct email for inquiries, project proposals, or interviews.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="btn btn-primary btn-sm">
                Send Email
              </a>
              <button type="button" onClick={copyEmail} className="btn btn-secondary btn-sm">
                {copied ? '✓ Copied!' : 'Copy Address'}
              </button>
            </div>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className="skill-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>💬</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '4px' }}>Phone / WhatsApp</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Direct line: {PERSONAL_INFO.phone}
            </p>
            <a href={`tel:${PERSONAL_INFO.phone}`} className="btn btn-secondary btn-sm">
              Call / WhatsApp
            </a>
          </div>

          {/* Resume Downloads */}
          <div className="skill-card" style={{ padding: '24px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>📄</div>
            <h3 style={{ fontSize: '1.05rem', fontWeight: '700', marginBottom: '4px' }}>Resume & CV</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '14px' }}>
              Download complete ATS-compliant 2-page curriculum vitae.
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <a 
                href={PERSONAL_INFO.resumePdf} 
                download="Hpone_Myat_Thu_Resume.pdf" 
                className="btn btn-primary btn-sm"
              >
                Download PDF
              </a>
              <a 
                href={PERSONAL_INFO.resumePhotoPdf} 
                download="Hpone_Myat_Thu_Resume_Photo.pdf" 
                className="btn btn-secondary btn-sm"
              >
                Photo Version
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
