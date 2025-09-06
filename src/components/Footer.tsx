import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
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

  const openSocialMedia = (platform: string) => {
    const urls = {
      facebook: 'https://facebook.com/maderacraft',
      instagram: 'https://instagram.com/maderacraft'
    };
    window.open(urls[platform as keyof typeof urls], '_blank');
  };
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://instagram.fbga1-3.fna.fbcdn.net/v/t51.2885-19/118230043_969827806856501_6884968072695689801_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fbga1-3.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QFKxKvUXjE6uj031six_5AS_YjJyPPQaFbOx_0alZas6SucqLoXlFbPecESFUSPKDo&_nc_ohc=-oNMPkRf9d0Q7kNvwHf3JYu&_nc_gid=9eMUI3zF7Iq5uw5d9VohTA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfW861FkHnUVaxO9sawaihT42Gcv07CfVXJCO1RLsVMMkw&oe=68B82E32&_nc_sid=7a9f4b"
                alt="Logo MaderaCraft"
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="text-2xl font-bold">MaderaCraft</span>
            </div>
            <p className="text-cream/90 text-lg leading-relaxed mb-6">
              Somos una empresa familiar con más de 15 años de experiencia en carpintería artesanal. 
              Nos especializamos en crear muebles únicos y puertas de la más alta calidad, 
              combinando técnicas tradicionales con diseños contemporáneos.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => openSocialMedia('facebook')}
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </button>
              <button 
                onClick={() => openSocialMedia('instagram')}
                className="bg-white/10 p-3 rounded-full hover:bg-accent transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Inicio', id: 'inicio' },
                { name: 'Servicios', id: 'servicios' },
                { name: 'Productos', id: 'productos' },
                { name: 'Testimonios', id: 'testimonios' },
                { name: 'Contacto', id: 'contacto' }
              ].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-cream/90 hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-cream/90">
                  Av. Industrial 123<br />
                  Zona Norte, Ciudad
                </span>
              </div>
              <button 
                onClick={() => window.open('tel:+525512345678', '_self')}
                className="flex items-center space-x-3 hover:text-accent transition-colors duration-300"
              >
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-cream/90">+52 (55) 1234-5678</span>
              </button>
              <button 
                onClick={() => {
                  const subject = encodeURIComponent('Consulta sobre servicios');
                  window.open(`mailto:info@maderacraft.com?subject=${subject}`, '_self');
                }}
                className="flex items-center space-x-3 hover:text-accent transition-colors duration-300"
              >
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-cream/90">info@maderacraft.com</span>
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-cream/70">
            © 2025 MaderaCraft. Todos los derechos reservados. 
            Diseñado con pasión para crear espacios únicos.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;