import React, { useState, useEffect } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) setItemsPerView(1);
      else if (window.innerWidth < 992) setItemsPerView(2);
      else setItemsPerView(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          'https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/products-services/',
          {
            headers: {
              'Authorization': 'Bearer ipss.get'
            }
          }
        );
        const json = await response.json();
        setServices(json.data.servicios);
        setCurrentIndex(0);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= services.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, services.length - itemsPerView) : prev - 1
    );
  };

  const scrollToContacto = (serviceName) => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const serviceSelect = document.getElementById('servicio');
        if (serviceSelect) serviceSelect.value = serviceName;
      }, 500);
    }
  };

  return (
    <section id="servicios" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="font-display display-4 fw-bold mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="fs-5 text-muted-custom mx-auto" style={{ maxWidth: '600px' }}>
            Ofrecemos una amplia gama de servicios de tejido artesanal, además de talleres de confección para que cualquier persona pueda entrar en este maravilloso mundo del tejido.
          </p>
        </div>

        <div className="position-relative">
          <div className="overflow-hidden">
            <div
              className="d-flex transition-all"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(services.length / itemsPerView) * 100}%`
              }}
            >
              {services.map((service) => (
                <div
                  key={service.id}
                  className="px-2"
                  style={{ width: `${100 / services.length}%` }}
                >
                  <div className="card service-card h-100">
                    <div className="service-image">
                      <img
                        src={service.imgs[0]}
                        alt={service.nombre}
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="service-title">{service.nombre}</h5>
                      <p className="card-text text-muted-custom flex-grow-1">
                        Ubicación: {service.ubicacion}<br />
                        Fecha: {service.fecha}<br />
                        Cupos: {service.cupos}
                      </p>
                      <button
                        onClick={() => scrollToContacto(service.nombre)}
                        className="btn btn-primary-custom mt-auto"
                      >
                        Consultar Disponibilidad
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="carousel-nav-btn carousel-nav-prev"
            disabled={currentIndex === 0}
          >
            &#8249;
          </button>

          <button
            onClick={nextSlide}
            className="carousel-nav-btn carousel-nav-next"
            disabled={currentIndex + itemsPerView >= services.length}
          >
            &#8250;
          </button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: Math.ceil(services.length / itemsPerView) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`carousel-dot ${
                  Math.floor(currentIndex / itemsPerView) === index ? 'active' : ''
                }`}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
