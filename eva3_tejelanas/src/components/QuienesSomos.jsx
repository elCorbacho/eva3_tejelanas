import React, { useState, useEffect } from 'react';

const QuienesSomos = () => {
  const [aboutText, setAboutText] = useState('');

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/about-us/', {
      headers: {
        'Authorization': `Bearer ipss.get`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener datos');
        return res.json();
      })
      .then((json) => {
        setAboutText(json.data);
      })
      .catch((err) => {
        console.error(err);
        setAboutText('No se pudo cargar la información. Por favor, intente más tarde.');
      });
  }, []);

  return (
    <section id="quienes-somos" className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="about-image">
                <img
                  src="2.jpg"
                  alt="Vivi tejiendo"
                  className="img-fluid"
                />
              </div>
              <div className="about-badge">
                <p className="about-badge-number">5+</p>
                <p className="about-badge-text">Años de experiencia</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-5 mt-lg-0">
            <h2 className="font-display display-4 fw-bold mb-4">
              Conoce a <span className="text-gradient">Vivi</span>
            </h2>
            <p className="fs-5 text-muted-custom mb-4">
              {aboutText || 'Cargando información...'}
            </p>

            <div className="row text-center">
              <div className="col-4">
                <p className="stat-number">200+</p>
                <p className="stat-label">Productos creados</p>
              </div>
              <div className="col-4">
                <p className="stat-number">150+</p>
                <p className="stat-label">Clientes felices</p>
              </div>
              <div className="col-4">
                <p className="stat-number">100%</p>
                <p className="stat-label">Artesanal</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
