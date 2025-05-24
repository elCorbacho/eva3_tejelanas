import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
    <section id="contacto" className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
            ¡Hablemos de tu <span className="text-gradient">proyecto!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para ayudarte a crear la pieza perfecta. 
            Cuéntanos tu idea y hagámosla realidad juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-gray-900 mb-8">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-600">teje.lanas.vivi@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <p className="text-gray-600">+56 9 1234 5678</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-rose-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ubicación</p>
                  <p className="text-gray-600">Santiago, Chile</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-rose-100 to-blush-100 rounded-2xl">
              <h4 className="font-semibold text-gray-900 mb-2">Horarios de Atención</h4>
              <p className="text-gray-600">Lunes a Viernes: 9:00 - 18:00</p>
              <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
              <p className="text-gray-600">Domingos: Solo emergencias</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-xl border-0 overflow-hidden">
            <div className="bg-gradient-to-r from-rose-500 to-blush-500 text-white p-6">
              <h3 className="text-2xl font-display">Envíanos un mensaje</h3>
            </div>
            <div className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium mb-2">Nombre *</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium mb-2">Teléfono</label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="tel"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="producto" className="block text-sm font-medium mb-2">Producto de Interés</label>
                    <select
                      id="producto"
                      name="producto"
                      value={formData.producto}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
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
                  <div>
                    <label htmlFor="servicio" className="block text-sm font-medium mb-2">Servicio</label>
                    <select
                      id="servicio"
                      name="servicio"
                      value={formData.servicio}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Tejidos Personalizados">Tejidos Personalizados</option>
                      <option value="Diseños Exclusivos">Diseños Exclusivos</option>
                      <option value="Reparaciones">Reparaciones</option>
                      <option value="Regalos Especiales">Regalos Especiales</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium mb-2">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    rows={5}
                    placeholder="Cuéntanos sobre tu proyecto, medidas, colores preferidos, fecha necesaria, etc."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-rose-500 to-blush-500 hover:from-rose-600 hover:to-blush-600 text-white font-semibold py-3 rounded-full transition-all duration-200 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensaje
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
