const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Vivi tejiendo"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-rose-100 rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-rose-600">5+</div>
                <div className="text-sm text-gray-600">Años de experiencia</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-4xl font-bold text-gray-900 mb-6">
              Conoce a <span className="text-gradient">Vivi</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Soy Vivi, una apasionada artesana del tejido con más de 5 años de experiencia 
              creando piezas únicas. Mi amor por los hilos y las agujas nació desde pequeña, 
              inspirada por las tradiciones familiares.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Cada producto que creo lleva un pedacito de mi corazón. Utilizo solo materiales 
              de la más alta calidad y técnicas tradicionales que he perfeccionado a lo largo 
              de los años. Mi objetivo es que cada cliente se sienta especial con una pieza 
              única y llena de amor.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-rose-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Productos creados</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-rose-600 mb-2">150+</div>
                <div className="text-sm text-gray-600">Clientes felices</div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl font-bold text-rose-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Artesanal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
