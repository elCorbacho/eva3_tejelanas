import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md border-0 overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-rose-50 transition-colors duration-200 flex justify-between items-center"
      >
        {question}
        <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-4 text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

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
    <section id="faq" className="py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros productos y servicios. 
            Si no encuentras tu respuesta, ¡contáctanos!
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItem === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">¿No encontraste lo que buscabas?</p>
          <button 
            onClick={() => {
              const element = document.getElementById('contacto');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-rose-500 to-blush-500 hover:from-rose-600 hover:to-blush-600 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Pregúntanos directamente
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
