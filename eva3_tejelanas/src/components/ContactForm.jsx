import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    producto: '',
    servicio: '',
    mensaje: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');

    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      producto: '',
      servicio: '',
      mensaje: ''
    });

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="section-padding bg-light-gradient">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="font-display display-4 fw-bold mb-4">
            ¡Hablemos de tu <span className="text-gradient">proyecto!</span>
          </h2>
          <p className="fs-5 text-muted-custom mx-auto" style={{maxWidth: '600px'}}>
            Estamos aquí para ayudarte a crear la pieza perfecta. 
            Cuéntanos tu idea y hagámosla realidad juntos.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6 mb-5">
            <h3 className="font-display h3 fw-semibold mb-4">
              Información de Contacto
            </h3>
            
            <div className="d-flex align-items-center mb-4">
              <div className="contact-icon">
                📧
              </div>
              <div>
                <p className="fw-semibold mb-1">Email</p>
                <p className="text-muted-custom mb-0">teje.lanas.vivi@gmail.com</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div className="contact-icon">
                📞
              </div>
              <div>
                <p className="fw-semibold mb-1">Teléfono</p>
                <p className="text-muted-custom mb-0">+56 9 7632 2314</p>
              </div>
            </div>

            <div className="d-flex align-items-center mb-4">
              <div className="contact-icon">
                📍
              </div>
              <div>
                <p className="fw-semibold mb-1">Ubicación</p>
                <p className="text-muted-custom mb-0">Carlos Leon Briceño #1002 local 4, Laguna, Zapallar</p>
              </div>
            </div>

            <div className="contact-hours">
              <h4 className="fw-semibold mb-3">Horarios de Atención</h4>
              <p className="text-muted-custom mb-2">Lunes a Viernes: 9:00 - 18:00</p>
              <p className="text-muted-custom mb-2">Sábados: 10:00 - 14:00</p>
              <p className="text-muted-custom mb-0">Domingos: Solo emergencias</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card contact-card">
              <div className="contact-header">
                <h3>Envíanos un mensaje</h3>
              </div>
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="nombre" className="form-label">Nombre *</label>
                      <input
                        type="text"
                        className="form-control"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="telefono" className="form-label">Teléfono</label>
                      <input
                        type="tel"
                        className="form-control"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+56 9 1234 5678"
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="producto" className="form-label">Producto de Interés</label>
                      <select
                        className="form-select"
                        id="producto"
                        name="producto"
                        value={formData.producto}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona un producto</option>
                        <option value="Suéter de Lana Merino">Suéter de Lana Merino</option>
                        <option value="Bufanda Multicolor">Bufanda Multicolor</option>
                        <option value="Gorro de Alpaca">Gorro de Alpaca</option>
                        <option value="Chaleco Artesanal">Chaleco Artesanal</option>
                        <option value="Mantita de Bebé">Mantita de Bebé</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="servicio" className="form-label">Servicio</label>
                      <select
                        className="form-select"
                        id="servicio"
                        name="servicio"
                        value={formData.servicio}
                        onChange={handleChange}
                      >
                        <option value="">Selecciona un servicio</option>
                        <option value="Tejidos Personalizados">Tejidos Personalizados</option>
                        <option value="Diseños Exclusivos">Diseños Exclusivos</option>
                        <option value="Reparaciones">Reparaciones</option>
                        <option value="Regalos Especiales">Regalos Especiales</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="mensaje" className="form-label">Mensaje *</label>
                    <textarea
                      className="form-control"
                      id="mensaje"
                      name="mensaje"
                      rows="5"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      placeholder="Cuéntanos sobre tu proyecto, medidas, colores preferidos, fecha necesaria, etc."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary-custom w-100"
                  >
                    {isSubmitting ? (
                      <span>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Enviando...
                      </span>
                    ) : (
                      <span>
                        📤 Enviar Mensaje
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;