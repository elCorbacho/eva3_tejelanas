import { Heart, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-bold mb-4">
              <span className="text-transparent bg-gradient-to-r from-rose-400 to-blush-400 bg-clip-text">
                Teje Lanas Vivi
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Creamos piezas únicas tejidas a mano con amor y dedicación. 
              Cada producto cuenta una historia de tradición, calidad y estilo artesanal.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/teje_lanas.vivi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-rose-600 p-3 rounded-full transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="mailto:teje.lanas.vivi@gmail.com"
                className="bg-gray-800 hover:bg-rose-600 p-3 rounded-full transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
              <a 
                href="tel:+56912345678"
                className="bg-gray-800 hover:bg-rose-600 p-3 rounded-full transition-colors duration-200"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('quienes-somos')}
                  className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                >
                  Quiénes Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('productos')}
                  className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                >
                  Productos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="text-gray-300 hover:text-rose-400 transition-colors duration-200"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="text-gray-300">
                <p className="font-medium">Email:</p>
                <p>teje.lanas.vivi@gmail.com</p>
              </div>
              <div className="text-gray-300">
                <p className="font-medium">Teléfono:</p>
                <p>+56 9 1234 5678</p>
              </div>
              <div className="text-gray-300">
                <p className="font-medium">Ubicación:</p>
                <p>Santiago, Chile</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Teje Lanas Vivi. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Hecho con <Heart size={16} className="mx-1 text-rose-500" /> en Chile
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
