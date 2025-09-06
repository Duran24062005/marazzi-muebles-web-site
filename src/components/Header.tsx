import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };
  const navItems = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#servicios', label: 'Servicios' },
    { href: '#productos', label: 'Productos' },
    { href: '#testimonios', label: 'Testimonios' },
    { href: '#contacto', label: 'Contacto' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg backdrop-blur-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('inicio')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src="https://instagram.fbga1-3.fna.fbcdn.net/v/t51.2885-19/118230043_969827806856501_6884968072695689801_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41MDAuYzIifQ&_nc_ht=instagram.fbga1-3.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QFKxKvUXjE6uj031six_5AS_YjJyPPQaFbOx_0alZas6SucqLoXlFbPecESFUSPKDo&_nc_ohc=-oNMPkRf9d0Q7kNvwHf3JYu&_nc_gid=9eMUI3zF7Iq5uw5d9VohTA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfW861FkHnUVaxO9sawaihT42Gcv07CfVXJCO1RLsVMMkw&oe=68B82E32&_nc_sid=7a9f4b"
              alt="Logo Carpintería"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
            />
            <span className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              MaderaCraft
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href.substring(1))}
                className={`font-medium transition-colors duration-300 hover:text-primary-light ${
                  isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-cream'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              Cotizar Proyecto
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="block w-full text-left text-gray-700 font-medium hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300"
              >
                Cotizar Proyecto
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;