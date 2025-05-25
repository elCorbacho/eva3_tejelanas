import React, { useState, useEffect } from 'react';

const products = [
  {
    id: 1,
    name: "Suéter de Lana Merino",
    image: "https://espacioakasa.cl/wp-content/uploads/2024/08/DSC_4034-scaled.jpg",
    description: "Suéter artesanal de lana merino, perfecto para el invierno."
  },
  {
    id: 2,
    name: "Bufanda Multicolor",
    image: "https://i.pinimg.com/474x/e6/2e/00/e62e00dff058f6514a8682f1a007ba6d.jpg",
    description: "Bufanda tejida con patrones únicos y colores vibrantes."
  },
  {
    id: 3,
    name: "Gorro de Alpaca",
    image: "https://cdnx.jumpseller.com/alpakia/image/16807726/thumb/1079/1079?1635364739",
    description: "Gorro suave y cálido hecho con lana de alpaca premium."
  },
  {
    id: 4,
    name: "Chaleco Artesanal",
    image: "https://www.artesaniaschiloe.cl/wp-content/uploads/2024/08/chaleco-tierra.webp",
    description: "Chaleco elegante con diseños tradicionales únicos."
  },
  {
    id: 5,
    name: "Mantita de Bebé",
    image: "https://cdn.wallapop.com/images/10420/i8/bw/__/c10420p1102383147/i5415248941.jpg?pictureSize=W640",
    description: "Mantita suave y delicada, perfecta para los más pequeños."
  }
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setItemsPerView(1);
      } else if (window.innerWidth < 992) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
        if (productSelect) {
          productSelect.value = productName;
        }
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
          <p className="fs-5 text-muted-custom mx-auto" style={{maxWidth: '600px'}}>
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
                        src={product.image}
                        alt={product.name}
                        className="card-img-top"
                      />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="product-title">{product.name}</h5>
                      <p className="card-text text-muted-custom flex-grow-1">
                        {product.description}
                      </p>
                      <button 
                        onClick={() => scrollToContacto(product.name)}
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
          {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`carousel-dot ${
                Math.floor(currentIndex / itemsPerView) === index ? 'active' : ''
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;