import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'María González',
      role: 'Propietaria de Casa',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      content: 'El trabajo de MaderaCraft superó todas mis expectativas. Mi nueva cocina integral es simplemente perfecta, cada detalle fue cuidadosamente elaborado.',
      rating: 5,
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Arquitecto',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      content: 'Como arquitecto, valoro mucho la calidad artesanal. MaderaCraft ha sido nuestro proveedor de confianza para proyectos residenciales exclusivos.',
      rating: 5,
    },
    {
      name: 'Ana Martínez',
      role: 'Diseñadora de Interiores',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      content: 'La atención al detalle y la capacidad de materializar ideas complejas hace de MaderaCraft el mejor taller de carpintería con el que he trabajado.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            La satisfacción de nuestros clientes es nuestra mayor recompensa. 
            Lee lo que opinan sobre nuestro trabajo y atención personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-accent/20" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-16 w-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-primary-dark">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;