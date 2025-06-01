import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [openItem, setOpenItem] = useState(null);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleToggle = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  useEffect(() => {
    fetch('https://www.clinicatecnologica.cl/ipss/tejelanasVivi/api/v1/faq/', {
      headers: {
        'Authorization': 'Bearer ipss.get',
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Error al obtener datos');
        return res.json();
      })
      .then((json) => {
        // Filtrar solo los que están activos
        const activeFaqs = json.data.filter(faq => faq.activo);
        // Mapear para ajustar nombres a los que usa el componente
        const formattedFaqs = activeFaqs.map(({ id, titulo, respuesta }) => ({
          id,
          question: titulo,
          answer: respuesta,
        }));
        setFaqs(formattedFaqs);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('No se pudo cargar la información. Por favor, intente más tarde.');
        setLoading(false);
      });
  }, []);

  return (
    <section id="faq" className="section-padding bg-light-gradient">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="font-display display-4 fw-bold mb-4">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="fs-5 text-muted-custom mx-auto" style={{ maxWidth: '600px' }}>
            Resolvemos las dudas más comunes sobre nuestros productos y servicios. 
            Si no encuentras tu respuesta, ¡contáctanos!
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {loading && <p>Cargando preguntas frecuentes...</p>}
            {error && <p className="text-danger">{error}</p>}
            {!loading && !error && faqs.map((faq, index) => (
              <div key={faq.id} className="faq-item">
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
