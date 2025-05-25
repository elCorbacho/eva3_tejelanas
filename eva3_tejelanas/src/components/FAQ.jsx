import React, { useState } from 'react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);

  const faqs = [
    {
      question: "¿Cuánto tiempo toma hacer un tejido personalizado?",
      answer: "El tiempo depende de la complejidad de la pieza. Un gorro simple puede tomar 3-5 días, mientras que un suéter completo puede requerir 2-3 semanas. Siempre te daremos un tiempo estimado al confirmar tu pedido."
    },
    {
      question: "¿Qué tipos de lana utilizas?",
      answer: "Trabajamos con lanas de alta calidad incluyendo lana merino, alpaca, algodón orgánico y mezclas especiales. Todas nuestras lanas son seleccionadas por su suavidad, durabilidad y colores vibrantes."
    },
    {
      question: "¿Haces envíos a todo Chile?",
      answer: "Sí, realizamos envíos a todo Chile a través de Chilexpress y Starken. Los envíos dentro de Santiago tienen un costo de $3.000 y a regiones desde $5.000, dependiendo del tamaño y peso del paquete."
    },
    {
      question: "¿Puedo elegir los colores y diseños?",
      answer: "¡Por supuesto! Nos especializamos en piezas personalizadas. Puedes elegir colores, patrones y hasta enviar referencias de diseños que te gusten. Trabajamos contigo para crear exactamente lo que imaginas."
    },
    {
      question: "¿Ofreces garantía en tus productos?",
      answer: "Todos nuestros productos tienen garantía de 30 días por defectos de fabricación. Si hay algún problema con las costuras o la calidad del tejido, lo reparamos sin costo adicional."
    },
    {
      question: "¿Cómo puedo cuidar mi prenda tejida?",
      answer: "Te entregamos instrucciones específicas de cuidado con cada prenda. Generalmente recomendamos lavado a mano con agua fría y secar en horizontal. Algunas piezas pueden lavarse en máquina en ciclo delicado."
    },
    {
      question: "¿Aceptas cambios o devoluciones?",
      answer: "Para piezas personalizadas no aceptamos devoluciones, pero sí ofrecemos ajustes si las medidas no son correctas. Para productos estándar, aceptamos cambios dentro de 7 días si están en perfectas condiciones."
    },
    {
      question: "¿Qué formas de pago aceptas?",
      answer: "Aceptamos transferencia bancaria, Mercado Pago, y efectivo en entregas presenciales en Santiago. Para pedidos personalizados solicitamos un 50% de adelanto para comenzar el trabajo."
    }
  ];

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-light-gradient">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="font-display display-4 fw-bold mb-4">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="fs-5 text-muted-custom mx-auto" style={{maxWidth: '600px'}}>
            Resolvemos las dudas más comunes sobre nuestros productos y servicios. 
            Si no encuentras tu respuesta, ¡contáctanos!
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button 
                  className="faq-button"
                  onClick={() => handleToggle(index)}
                >
                  {faq.question}
                  <span className={`ms-2 ${openItem === index ? 'rotate-180' : ''}`}>
                    {openItem === index ? '▲' : '▼'}
                  </span>
                </button>
                {openItem === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-5">
          <p className="text-muted-custom mb-3">¿No encontraste lo que buscabas?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn btn-primary-custom btn-lg"
          >
            Pregúntanos directamente
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;