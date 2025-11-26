import React, { useState, useEffect } from 'react';
import { FaDownload } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'benefits', 'contact'];

      // Find the section that is currently most visible in the viewport
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the element is roughly in the middle of the viewport or near the top
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">spydra</div>
      <div className="navbar-menu">
        <a
          href="#home"
          className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
          onClick={(e) => handleClick(e, 'home')}
        >
          Home
        </a>
        <a
          href="#features"
          className={`nav-link ${activeSection === 'features' ? 'active' : ''}`}
          onClick={(e) => handleClick(e, 'features')}
        >
          Features
        </a>
        <a
          href="#benefits"
          className={`nav-link ${activeSection === 'benefits' ? 'active' : ''}`}
          onClick={(e) => handleClick(e, 'benefits')}
        >
          Benefits
        </a>
        <a
          href="#contact"
          className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
          onClick={(e) => handleClick(e, 'contact')}
        >
          Contact us
        </a>
      </div>
      <button className="navbar-cta">
        <FaDownload className="cta-icon" />
        Download Now
      </button>
    </nav>
  );
};

export default Navbar;
