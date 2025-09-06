import React from 'react';
import { ArrowRight, Hammer, Home } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent('¡Hola! Me interesa conocer más sobre sus servicios de carpintería. ¿Podrían proporcionarme información sobre sus productos y precios?');
    const phoneNumber = '525512345678'; // Reemplazar con el número real
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-6">
              <Hammer className="h-8 w-8 text-accent" />
              <span className="text-accent font-semibold text-lg">Carpintería Profesional</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Creamos 
              <span className="block text-accent">Muebles Únicos</span>
              para tu Hogar
            </h1>
            
            <p className="text-xl md:text-2xl text-cream/90 mb-8 leading-relaxed">
              Más de 15 años creando muebles artesanales y puertas de la más alta calidad. 
              Transformamos tu espacio con diseños personalizados que duran toda la vida.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                onClick={() => scrollToSection('productos')}
                className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 group"
              >
                Ver Productos
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button
                onClick={handleWhatsAppContact}
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary transition-all duration-300"
              >
                WhatsApp
              </button>
            </div>
          </div>

          {/* Features Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Home className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Diseño Personalizado</h3>
              <p className="text-cream/80">Cada pieza es única y hecha a medida según tus necesidades específicas.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <Hammer className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold mb-2">Calidad Premium</h3>
              <p className="text-cream/80">Utilizamos las mejores maderas y técnicas artesanales tradicionales.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button 
        onClick={() => scrollToSection('servicios')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform duration-300"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </button>
    </section>
  );
};

export default Hero;