'use client';

import React from 'react';
import { SKILL_GROUPS } from '@/data/portfolioData';

export default function SkillsSection() {
  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="section-label">03 // Technical Stack</div>
          <h2 className="section-heading">Skills & Architecture</h2>
          <p className="section-subheading">
            Production-tested technologies across cross-platform mobile, microservices, enterprise desktop, and cloud DevOps.
          </p>
        </div>

        <div className="skills-container">
          {SKILL_GROUPS.map((group, idx) => (
            <div key={idx} className="skill-card">
              <h3 className="skill-category-title">{group.category}</h3>
              <div className="skill-pill-list">
                {group.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
