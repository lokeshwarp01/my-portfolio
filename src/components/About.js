import React from 'react';
import './About.css';
import profileImage from './profile.jpg';

export default function About() {
  return (
    <section id="About" className="section">
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Your Name" />
        </div>

        <div className="about-content">

          <h2>About Me</h2>
          <p className="intro">
            MCA 2025 pass-out seeking a Frontend Software Engineer role my skills in JavaScript, React, HTML, and
            CSS. Eager to build scalable, user-friendly web applications and grow within an innovative, collaborative,
            and inclusive tech environment
          </p>

          <div className="education">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Master of Computer Applications</h4>
              <p className="institution">RVR & JC College of engineering, Guntur</p>
              <p className="duration">2023 - 2025 | CGPA: 7.90/10</p>
            </div>

            <div className="education-item">
              <h4>Bachelor of Computer Applications</h4>
              <p className="institution">JKC College, Guntur</p>
              <p className="duration">2020 - 2023 | CGPA: 7.91/10</p>
            </div>

            <h3>Address</h3>
            <div className="education-item">
              <h4>Present</h4>
              <p className="institution">709,Bapu Nagar,SR Nagar</p>
              <p className="duration">Hyderabad,Telengana,500038</p>
            </div>

            <div className="education-item">
              <h4>Permanent</h4>
              <p className="institution">123-18-735,3rd line krishna tulasi Nagar</p>
              <p className="duration">Guntur,Andhra Pradesh ,522006</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}