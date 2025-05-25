import React from 'react';

const QuienesSomos = () => {
  return (
    <section id="quienes-somos" className="section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="about-image">
                <img 
                  src="https://scontent.fscl8-1.fna.fbcdn.net/v/t39.30808-6/468497018_1104329051695886_2122611103586783923_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFfvt0WxJoNlLwlNRMSzdbXWbXY_mRE6_JZtdj-ZETr8igicKD1GpaaOr7YghoNPeE&_nc_ohc=GTHHBK_LYVwQ7kNvwEueI5l&_nc_oc=AdkLTTKzMmRILSWVsSr7WEQhnzK5HDpiKgEMF7ZstCFEGZsbBTmdLhL3y09XB3j6DwY&_nc_zt=23&_nc_ht=scontent.fscl8-1.fna&_nc_gid=Entk2y7TFVAPxLZR6A7hMA&oh=00_AfJL6F1_6UM3xfQmXj8m5c9DayufhXHYf575ECDjWV6kBw&oe=68387A79"
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
              Soy Vivi, una apasionada artesana del tejido con más de 5 años de experiencia 
              creando piezas únicas. Mi amor por los hilos y las agujas nació desde pequeña, 
              inspirada por las tradiciones familiares.
            </p>
            <p className="fs-5 text-muted-custom mb-5">
              Cada producto que creo lleva un pedacito de mi corazón. Utilizo solo materiales 
              de la más alta calidad y técnicas tradicionales que he perfeccionado a lo largo 
              de los años. Mi objetivo es que cada cliente se sienta especial con una pieza 
              única y llena de amor.
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