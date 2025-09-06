import React from 'react';
import { Wrench, Ruler, Truck, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: 'Fabricación Artesanal',
      description: 'Creamos cada pieza con técnicas tradicionales y herramientas de precisión para garantizar la máxima calidad.',
    },
    {
      icon: Ruler,
      title: 'Diseño Personalizado',
      description: 'Trabajamos contigo para crear diseños únicos que se adapten perfectamente a tu espacio y estilo.',
    },
    {
      icon: Truck,
      title: 'Entrega e Instalación',
      description: 'Nos encargamos de todo el proceso, desde la entrega hasta la instalación profesional en tu hogar.',
    },
    {
      icon: Shield,
      title: 'Garantía de Calidad',
      description: 'Ofrecemos garantía completa en todos nuestros productos y servicios por tu tranquilidad.',
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios integrales de carpintería, desde el diseño inicial hasta la instalación final, 
            garantizando la máxima calidad en cada etapa del proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="bg-gradient-primary rounded-lg p-4 w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-dark mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;