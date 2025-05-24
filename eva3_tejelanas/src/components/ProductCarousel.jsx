import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Suéter de Lana Merino",
    image: "https://images.unsplash.com/photo-1551893750-5c4e64f7af71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Suéter artesanal de lana merino, perfecto para el invierno."
  },
  {
    id: 2,
    name: "Bufanda Multicolor",
    image: "https://images.unsplash.com/photo-1601924333706-4f4cce3c8da6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Bufanda tejida con patrones únicos y colores vibrantes."
  },
  {
    id: 3,
    name: "Gorro de Alpaca",
    image: "https://images.unsplash.com/photo-1578909186962-fd3c7b6d3dec?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Gorro suave y cálido hecho con lana de alpaca premium."
  },
  {
    id: 4,
    name: "Chaleco Artesanal",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Chaleco elegante con diseños tradicionales únicos."
  },
  {
    id: 5,
    name: "Mantita de Bebé",
    image: "https://images.unsplash.com/photo-1519069792167-26c1b7b43d45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    description: "Mantita suave y delicada, perfecta para los más pequeños."
  }
];

const ProductCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
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
    <section id="productos" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-gradient">Productos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada pieza es única y está tejida con amor y dedicación. 
            Descubre nuestra colección de productos artesanales.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(products.length / itemsPerView) * 100}%`
              }}
            >
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / products.length}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl font-semibold text-gray-900 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <button 
                        onClick={() => scrollToContacto(product.name)}
                        className="w-full bg-gradient-to-r from-rose-500 to-blush-500 hover:from-rose-600 hover:to-blush-600 text-white font-medium py-2 rounded-full transition-all duration-200"
                      >
                        Consultar Precio
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-rose-600 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
            disabled={currentIndex === 0}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-600 hover:text-rose-600 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
            disabled={currentIndex + itemsPerView >= products.length}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                Math.floor(currentIndex / itemsPerView) === index 
                  ? 'bg-rose-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
