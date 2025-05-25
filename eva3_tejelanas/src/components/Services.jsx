import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      title: "Tejidos Personalizados",
      description: "Creamos piezas únicas según tus medidas y preferencias. Elige colores, patrones y diseños especiales.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpo8vnzbrWM4iqkQXakoxXogK6pOA08mV0dA&s",
      icon: "✂️"
    },
    {
      title: "Diseños Exclusivos",
      description: "Desarrollamos patrones únicos y exclusivos para ti. Cada diseño es una obra de arte irrepetible.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwxjo3PCM80bIWSGkgMMKzxq5FXKA6dRtynt8Skm5KX99za3XK02lX21tSqIgdNK0B20&usqp=CAU",
      icon: "🎨"
    },
    {
      title: "Reparaciones",
      description: "Reparamos y restauramos tus prendas favoritas con el mismo cuidado con que fueron creadas.",
      image: "https://scontent.fscl8-1.fna.fbcdn.net/v/t1.6435-9/79311700_941104186289696_8447221861070143488_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFo2BIPaZzqbGbSy1C0uL1NoGKqpwyrd5ugYqqnDKt3m8Hc7XQ-6OG3edghaR0m0ZU&_nc_ohc=OviEqdl7i4EQ7kNvwGPnk83&_nc_oc=AdnhCL0WFWeMZ99n9Ja5TvYkkxaTZI1OVrGpN68593QojjLCl4FjrhHVt_GioAgVlFI&_nc_zt=23&_nc_ht=scontent.fscl8-1.fna&_nc_gid=8sqTIP-6qXeaGjQAfynHVg&oh=00_AfJ-twB6vEzA7N6Dn4WlLXRYWIkMm6hjzby0suTQE1zPUQ&oe=685A1551",
      icon: "❤️"
    },
    {
      title: "Regalos Especiales",
      description: "Piezas perfectas para ocasiones especiales: baby shower, cumpleaños, navidad y más.",
      image: "https://scontent.fscl8-1.fna.fbcdn.net/v/t39.30808-6/471195548_1123067096488748_7374565049195408993_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHEm33UsM2gJ1EPCjQbJXjq-I5B8BpsLQL4jkHwGmwtAvJqPdyeXZtcc8Ledks_Jxs&_nc_ohc=QYS6E4JqzMgQ7kNvwFyXuIV&_nc_oc=AdlPAFl8PZhi2qnsfxxbSLMD4QiqFrTTHwk05IAfVC2S9r9SHGgkAhCpFG_hg1iha4Q&_nc_zt=23&_nc_ht=scontent.fscl8-1.fna&_nc_gid=L-mKoVxQeEx_8hPTkmkInA&oh=00_AfK6BuIQJmoT-d4QfjaiuZ8gbzNOSUw42SaA2Xxu-IjUkA&oe=68385CCA",
      icon: "🎁"
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
    <section id="servicios" className="section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="font-display display-4 fw-bold mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="fs-5 text-muted-custom mx-auto" style={{maxWidth: '600px'}}>
            Ofrecemos una amplia gama de servicios de tejido artesanal, 
            desde piezas personalizadas hasta reparaciones especializadas.
          </p>
        </div>

        <div className="row">
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