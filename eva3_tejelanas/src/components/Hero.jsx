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
    <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-rose-50 via-white to-blush-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tejidos únicos, 
              <span className="text-gradient"> hechos con amor</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubre nuestra colección exclusiva de productos tejidos a mano. 
              Cada pieza cuenta una historia de dedicación, calidad y estilo único 
              que solo las manos expertas pueden crear.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProductos}
                className="bg-gradient-to-r from-rose-500 to-blush-500 hover:from-rose-600 hover:to-blush-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Ver Productos
              </button>
              <button 
                onClick={scrollToContacto}
                className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Contactanos
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Productos tejidos artesanales"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-rose-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blush-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
