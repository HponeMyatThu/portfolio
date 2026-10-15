'use client';

import React, { useEffect } from 'react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="project-category-badge">{project.category}</span>
            <h2 className="project-title" style={{ fontSize: '1.4rem', marginTop: '2px' }}>
              {project.title}
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
              {project.tagline}
            </p>
          </div>
          <button 
            type="button" 
            onClick={onClose} 
            className="modal-close-btn"
            aria-label="Close details"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          <div>
            <h3 className="modal-section-title">
              <span>🏛️</span> Architecture & System Design
            </h3>
            <p className="modal-text">
              {project.architectureDetails.overview}
            </p>
          </div>

          <div>
            <h3 className="modal-section-title">
              <span>⚡</span> Key Engineering Features
            </h3>
            <ul className="achievement-list" style={{ marginTop: '8px' }}>
              {project.architectureDetails.keyFeatures.map((feat, idx) => (
                <li key={idx} className="achievement-item">
                  {feat}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="modal-section-title">
              <span>🎯</span> Technical Challenges Solved
            </h3>
            <p className="modal-text">
              {project.architectureDetails.challengesSolved}
            </p>
          </div>

          <div>
            <h3 className="modal-section-title">
              <span>🛠️</span> Technologies & Specifications
            </h3>
            <div className="project-tags" style={{ marginTop: '8px' }}>
              {project.technologies.map((t, idx) => (
                <span key={idx} className="tag-pill" style={{ fontSize: '0.82rem', padding: '3px 9px' }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '10px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
                View Repository on GitHub
              </a>
            )}
            <button type="button" onClick={onClose} className="btn btn-secondary btn-sm">
              Close Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
