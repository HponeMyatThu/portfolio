'use client';

import React from 'react';
import { EXPERIENCES } from '@/data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-label">02 // Career History</div>
          <h2 className="section-heading">Professional Experience</h2>
          <p className="section-subheading">
            3+ years of software engineering in enterprise environments, multi-national client teams, and high-volume production systems.
          </p>
        </div>

        <div className="timeline">
          {EXPERIENCES.map((exp) => (
            <article key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                  {exp.client && (
                    <div className="timeline-client">{exp.client}</div>
                  )}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="timeline-badge">{exp.period}</span>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '4px' }}>
                    {exp.location}
                  </div>
                </div>
              </div>

              <p className="timeline-desc">{exp.description}</p>

              <ul className="achievement-list">
                {exp.achievements.map((ach, idx) => (
                  <li key={idx} className="achievement-item">
                    {ach}
                  </li>
                ))}
              </ul>

              <div className="project-tags">
                {exp.skills.map((skill, idx) => (
                  <span key={idx} className="tag-pill" style={{ background: 'var(--bg-tag-accent)', color: 'var(--accent)' }}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
