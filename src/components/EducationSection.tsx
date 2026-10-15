'use client';

import React from 'react';
import { EDUCATION_LIST } from '@/data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-label">04 // Academic Excellence</div>
          <h2 className="section-heading">Education & Distinctions</h2>
          <p className="section-subheading">
            First Class Honours degree and 100% Distinctions across UK-accredited computing programs.
          </p>
        </div>

        <div className="edu-grid">
          {EDUCATION_LIST.map((edu, idx) => (
            <div key={idx} className="edu-item">
              <div className="edu-main">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <h3 className="edu-title">{edu.degree}</h3>
                  <span className={`edu-grade-badge ${edu.badgeType === 'first-class' ? 'grade-first-class' : 'grade-distinction'}`}>
                    ★ {edu.grade}
                  </span>
                </div>
                <div className="edu-school">{edu.institution} — {edu.location}</div>
                <p className="edu-desc">{edu.details}</p>
              </div>

              <div style={{ textAlign: 'right', minWidth: '120px' }}>
                <span className="timeline-badge">{edu.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
