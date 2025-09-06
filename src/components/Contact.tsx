import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar campos requeridos
    if (!formData.name || !formData.email || !formData.message) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    // Crear mensaje para WhatsApp
    const whatsappMessage = `
*Nueva Solicitud de Cotización*

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone || 'No proporcionado'}
*Tipo de Proyecto:* ${formData.project || 'No especificado'}

*Descripción del Proyecto:*
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = '+57 316 3098801'; // Reemplazar con el número real
    
    // Abrir WhatsApp con el mensaje
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Mostrar confirmación y limpiar formulario
    alert('¡Gracias por tu solicitud! Te hemos redirigido a WhatsApp para completar el contacto.');
    setFormData({ name: '', email: '', phone: '', project: '', message: '' });
  };

  const handleDirectCall = () => {
    window.open('tel:+57 316 3098801', '_self');
  };

  const handleEmailContact = () => {
    const subject = encodeURIComponent('Consulta sobre servicios de carpintería');
    const body = encodeURIComponent('Hola, me interesa conocer más sobre sus servicios de carpintería. Por favor contáctenme para discutir mi proyecto.');
    window.open(`mailto:alexisdurangomez588@gmail.com?subject=${subject}&body=${body}`, '_self');
  };

  const openGoogleMaps = () => {
    // Coordenadas de ejemplo - reemplazar con la ubicación real
    const address = encodeURIComponent('Calle 29 no.3-17 barrio Girardot Bucaramanga Santander Colombia');
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      content: 'Calle 29 no.3-17 barrio Girardot Bucaramanga Santander Colombia',
      action: openGoogleMaps,
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '+57 316 3098801',
      action: handleDirectCall,
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@maderacraft.com',
      action: handleEmailContact,
    },
    {
      icon: Clock,
      title: 'Horarios',
      content: 'Lun - Vie: 8:00 AM - 6:00 PM\nSáb: 9:00 AM - 2:00 PM',
      action: undefined,
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Comencemos tu Proyecto
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes una idea en mente? Nos encantaría escucharla y ayudarte a hacerla realidad. 
            Contacta con nosotros para una consulta gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-primary-dark mb-8">
              Información de Contacto
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className={`flex items-start space-x-4 ${info.action ? 'cursor-pointer hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300' : 'p-4'}`}
                  onClick={info.action}
                >
                  <div className="bg-gradient-primary rounded-lg p-3 flex-shrink-0">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-dark mb-1">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {info.content}
                    </p>
                    {info.action && (
                      <p className="text-sm text-primary mt-1">Haz clic para contactar</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Workshop Image */}
            <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop"
                alt="Taller de carpintería"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-primary-dark mb-6">
              Solicita tu Cotización
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Proyecto
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecciona un tipo</option>
                    <option value="muebles-sala">Muebles de Sala</option>
                    <option value="muebles-dormitorio">Muebles de Dormitorio</option>
                    <option value="cocina">Cocina Integral</option>
                    <option value="puertas">Puertas</option>
                    <option value="proyecto-completo">Proyecto Completo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe tu Proyecto *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos sobre tu proyecto, dimensiones aproximadas, estilo preferido, presupuesto estimado, etc."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center group"
              >
                Enviar Solicitud
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;