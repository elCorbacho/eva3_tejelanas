import Header from './components/Header';
import Hero from './components/Hero';
import QuienesSomos from './components/QuienesSomos';
import ProductCarousel from './components/ProductCarousel';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuienesSomos />
      <ProductCarousel />
      <Services />
      <ContactForm />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
