import { Scissors, Palette, Heart, Gift } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Tejidos Personalizados",
      description: "Creamos piezas únicas según tus medidas y preferencias. Elige colores, patrones y diseños especiales.",
      image: "https://images.unsplash.com/photo-1558618047-b2c4c3f0b9c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: Scissors
    },
    {
      title: "Diseños Exclusivos",
      description: "Desarrollamos patrones únicos y exclusivos para ti. Cada diseño es una obra de arte irrepetible.",
      image: "https://images.unsplash.com/photo-1571946590798-b9fb5fead24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: Palette
    },
    {
      title: "Reparaciones",
      description: "Reparamos y restauramos tus prendas favoritas con el mismo cuidado con que fueron creadas.",
      image: "https://images.unsplash.com/photo-1598301405924-d36b01fc3c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: Heart
    },
    {
      title: "Regalos Especiales",
      description: "Piezas perfectas para ocasiones especiales: baby shower, cumpleaños, navidad y más.",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: Gift
    }
  ];

  const scrollToContacto = (service) => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        const serviceSelect = document.getElementById('servicio');
        if (serviceSelect) {
          serviceSelect.value = service;
        }
      }, 500);
    }
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios de tejido artesanal, 
            desde piezas personalizadas hasta reparaciones especializadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              icon={service.icon}
              onContact={scrollToContacto}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
