import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top navbar-custom">
      <div className="container">
        <button 
          className="navbar-brand btn btn-link text-decoration-none p-0"
          onClick={() => scrollToSection('hero')}
        >
          <span className="text-gradient">Teje Lanas Vivi</span>
        </button>
        
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('quienes-somos')}
              >
                Quiénes Somos
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('productos')}
              >
                Productos
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('servicios')}
              >
                Servicios
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('faq')}
              >
                FAQ
              </button>
            </li>
            <li className="nav-item ms-lg-2">
              <button 
                className="btn btn-primary-custom"
                onClick={() => scrollToSection('contacto')}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;