import React from 'react';

const Hero = () => {
  const scrollToContacto = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProductos = () => {
    const element = document.getElementById('productos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 animate-fade-in">
            <h1 className="hero-title">
              Tejidos únicos, 
              <span className="text-gradient"> hechos con amor</span>
            </h1>
            <p className="hero-description">
              Descubre nuestra colección exclusiva de productos tejidos a mano. 
              Cada pieza cuenta una historia de dedicación, calidad y estilo único 
              que solo las manos expertas pueden crear.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <button 
                onClick={scrollToProductos}
                className="btn btn-primary-custom btn-lg"
              >
                Ver Productos
              </button>
              <button 
                onClick={scrollToContacto}
                className="btn btn-outline-custom btn-lg"
              >
                Contáctanos
              </button>
            </div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="position-relative">
              <div className="hero-image">
                <img 
                  src="1.jpg"
                  alt="Productos tejidos artesanales"
                  className="img-fluid"
                />
              </div>
              <div className="decorative-circle decorative-1"></div>
              <div className="decorative-circle decorative-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;