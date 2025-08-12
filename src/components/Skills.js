import React from 'react';
import skills from '../data/SkillsData';
import './Skills.css'

export default function Skills() {
  return (
    <section id="Skills" className="section light">
      <h2>Skills</h2>
      <ul className="skills-grid">
        {skills.map(s => <li key={s}>{s}</li>)}
      </ul>
    </section>
  );
}
