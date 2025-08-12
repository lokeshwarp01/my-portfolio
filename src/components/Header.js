import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">PANUGANTI LOKESHWAR</h1>
      <nav className="nav">
        {['About','Skills','Projects','Contact'].map(link => (
          <a key={link} href={`#${link}`}>{link}</a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
