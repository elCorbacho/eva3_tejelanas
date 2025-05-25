import React from 'react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <div className="footer-logo">
              <span className="text-gradient">Teje Lanas Vivi</span>
            </div>
            <p className="text-light mb-4" style={{color: '#d1d5db'}}>
              Creamos piezas únicas tejidas a mano con amor y dedicación. 
              Cada producto cuenta una historia de tradición, calidad y estilo artesanal.
            </p>
            <div className="footer-social">
              <a 
                href="https://www.instagram.com/teje_lanas.vivi" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                📷
              </a>
              <a href="mailto:teje.lanas.vivi@gmail.com">
                📧
              </a>
              <a href="tel:+56912345678">
                📞
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <button 
                  className="footer-link"
                  onClick={() => scrollToSection('quienes-somos')}
                >
                  Quiénes Somos
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="footer-link"
                  onClick={() => scrollToSection('productos')}
                >
                  Productos
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="footer-link"
                  onClick={() => scrollToSection('servicios')}
                >
                  Servicios
                </button>
              </li>
              <li className="mb-2">
                <button 
                  className="footer-link"
                  onClick={() => scrollToSection('faq')}
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <h5 className="fw-semibold mb-3">Contacto</h5>
            <div className="mb-3" style={{color: '#d1d5db'}}>
              <p className="fw-medium text-white mb-1">Email:</p>
              <p className="mb-0">teje.lanas.vivi@gmail.com</p>
            </div>
            <div className="mb-3" style={{color: '#d1d5db'}}>
              <p className="fw-medium text-white mb-1">Teléfono:</p>
              <p className="mb-0">+56 9 1234 5678</p>
            </div>
            <div style={{color: '#d1d5db'}}>
              <p className="fw-medium text-white mb-1">Ubicación:</p>
              <p className="mb-0">Santiago, Chile</p>
            </div>
          </div>
        </div>

        <hr className="my-4" style={{borderColor: '#374151'}} />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="text-muted small mb-0">
              © 2024 Teje Lanas Vivi. Todos los derechos reservados.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="text-muted small mb-0">
              Hecho con ❤️ en Chile
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;