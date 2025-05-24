import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-rose-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="font-display text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Teje Lanas Vivi
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('quienes-somos')}
              className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium"
            >
              Quiénes Somos
            </button>
            <button 
              onClick={() => scrollToSection('productos')}
              className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium"
            >
              Productos
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-rose-500 to-blush-500 hover:from-rose-600 hover:to-blush-600 text-white font-medium px-6 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-rose-50 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-rose-100 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('quienes-somos')}
                className="text-left text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium py-2"
              >
                Quiénes Somos
              </button>
              <button 
                onClick={() => scrollToSection('productos')}
                className="text-left text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium py-2"
              >
                Productos
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium py-2"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-left text-gray-700 hover:text-rose-600 transition-colors duration-200 font-medium py-2"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-to-r from-rose-500 to-blush-500 hover:from-rose-600 hover:to-blush-600 text-white font-medium w-full py-2 rounded-full transition-all duration-200"
              >
                Contacto
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
