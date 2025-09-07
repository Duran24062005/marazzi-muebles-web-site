import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Products = () => {
  const openProductGallery = (productTitle: string) => {
    // Navegar a la galería
    const element = document.getElementById('galeria');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const requestQuote = (productTitle: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa obtener una cotización para: ${productTitle}. ¿Podrían proporcionarme más información sobre precios y tiempos de entrega?`);
    const phoneNumber = '+57 316 3098801'; // Reemplazar con el número real
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };
  const products = [
    {
      category: 'Muebles de Sala',
      items: [
        {
          image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          title: 'Sofás Artesanales',
          description: 'Sofás cómodos y elegantes hechos con maderas nobles y tapizados premium.',
        },
        {
          image: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          title: 'Mesas de Centro',
          description: 'Diseños únicos que combinan funcionalidad y estética en cada detalle.',
        },
      ],
    },
    {
      category: 'Muebles de Dormitorio',
      items: [
        {
          image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          title: 'Camas Personalizadas',
          description: 'Camas diseñadas para brindar el máximo confort y elegancia a tu descanso.',
        },
        {
          image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          title: 'Closets a Medida',
          description: 'Soluciones de almacenamiento optimizadas para cada espacio.',
        },
      ],
    },
    {
      category: 'Puertas',
      items: [
        {
          image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          title: 'Puertas de Entrada',
          description: 'Puertas robustas y elegantes que dan la bienvenida a tu hogar.',
        },
        {
          image: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
          title: 'Puertas Interiores',
          description: 'Diseños modernos y clásicos para cada ambiente de tu casa.',
        },
      ],
    },
  ];

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Nuestros Productos
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra amplia gama de muebles y puertas, cada uno crafteado con pasión 
            y dedicación para crear piezas que trascienden el tiempo.
          </p>
        </div>

        <div className="space-y-16">
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-3xl font-bold text-primary mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <button 
                        onClick={() => openProductGallery(product.title)}
                        className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/30"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </button>
                    </div>
                    <div className="p-6">
                      <h4 className="text-2xl font-semibold text-primary-dark mb-3">
                        {product.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {product.description}
                      </p>
                      <div className="flex space-x-4">
                        <button 
                          onClick={() => openProductGallery(product.title)}
                          className="text-primary font-semibold hover:text-primary-light transition-colors duration-300 flex items-center group"
                        >
                          Ver Galería
                          <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                        </button>
                        <button 
                          onClick={() => requestQuote(product.title)}
                          className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 flex items-center group"
                        >
                          Cotizar
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;