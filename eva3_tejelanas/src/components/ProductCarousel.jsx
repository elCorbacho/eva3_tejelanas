import React, { useState, useEffect } from 'react';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    // Manejo responsive
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
    const fetchProducts = async () => {
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
        // Seteamos solo los productos
        setProducts(json.data.productos);
        setCurrentIndex(0);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= products.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, products.length - itemsPerView) : prev - 1
    );
  };

  const scrollToContacto = (productName) => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const productSelect = document.getElementById('producto');
        if (productSelect) productSelect.value = productName;
      }, 500);
    }
  };

  return (
    <section id="productos" className="section-padding bg-light-gradient">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="font-display display-4 fw-bold mb-4">
            Nuestros <span className="text-gradient">Productos</span>
          </h2>
          <p className="fs-5 text-muted-custom mx-auto" style={{ maxWidth: '600px' }}>
            Cada pieza es única y está tejida con amor y dedicación. 
            Descubre nuestra colección de productos artesanales.
          </p>
        </div>

        <div className="position-relative">
          <div className="overflow-hidden">
            <div
              className="d-flex transition-all"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(products.length / itemsPerView) * 100}%`
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="px-2"
                  style={{ width: `${100 / products.length}%` }}
                >
                  <div className="card product-card h-100">
                    <div className="product-image">
                      <img
                        src={product.imgs[0]}
                        alt={product.nombre}
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="product-title">{product.nombre}</h5>
                      <p className="card-text text-muted-custom flex-grow-1">
                        {product.descripcion}
                      </p>
                      <button
                        onClick={() => scrollToContacto(product.nombre)}
                        className="btn btn-primary-custom mt-auto"
                      >
                        Consultar Precio
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
            disabled={currentIndex + itemsPerView >= products.length}
          >
            &#8250;
          </button>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map(
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

export default ProductCarousel;
