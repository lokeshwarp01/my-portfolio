import React from 'react';
import projects from '../data/ProjectsData';
import './Projects.css'
export default function Projects() {
  return (
    <section id="Projects" className="section">
      <h2>Projects</h2>
      <div className="grid">
        {projects.map(p => (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="links">
              <a href={p.repo} target="_blank" rel="noopener noreferrer">Code</a>
              <a href={p.demo} target="_blank" rel="noopener noreferrer">Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
