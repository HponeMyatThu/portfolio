'use client';

import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <strong>{PERSONAL_INFO.name}</strong> — {PERSONAL_INFO.title}
          <div style={{ fontSize: '0.8rem', marginTop: '2px', color: 'var(--text-dim)' }}>
            Built with Next.js & Vanilla CSS • No AI-cliché templates • High-speed & clear
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px' }}>
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="nav-item">
            GitHub
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="nav-item">
            LinkedIn
          </a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="nav-item">
            Email
          </a>
          <a href={PERSONAL_INFO.resumePdf} download className="nav-item">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
