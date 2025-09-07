import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ExternalLink } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images: GalleryImage[] = [
    // Muebles de Sala
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Sofá Artesanal Premium',
      category: 'sala',
      description: 'Sofá de tres plazas en madera de roble con tapizado en cuero genuino.'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Mesa de Centro Moderna',
      category: 'sala',
      description: 'Mesa de centro con diseño minimalista en madera de nogal.'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Estantería Flotante',
      category: 'sala',
      description: 'Sistema de estanterías flotantes con acabado natural.'
    },
    
    // Muebles de Dormitorio
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cama King Size Personalizada',
      category: 'dormitorio',
      description: 'Cama king size con cabecera tapizada y base en madera maciza.'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Closet Empotrado',
      category: 'dormitorio',
      description: 'Closet a medida con sistema de organización optimizado.'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Mesa de Noche Elegante',
      category: 'dormitorio',
      description: 'Mesa de noche con cajones y acabado en laca brillante.'
    },

    // Cocinas
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cocina Integral Moderna',
      category: 'cocina',
      description: 'Cocina integral con isla central y acabados premium.'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Mueble de Cocina Clásico',
      category: 'cocina',
      description: 'Gabinetes de cocina con diseño tradicional y herrajes de calidad.'
    },

    // Puertas
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Puerta de Entrada Principal',
      category: 'puertas',
      description: 'Puerta maciza con tallados artesanales y herrajes de seguridad.'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Puertas Interiores',
      category: 'puertas',
      description: 'Set de puertas interiores con acabado en madera natural.'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Puerta Corrediza',
      category: 'puertas',
      description: 'Puerta corrediza con sistema de rieles ocultos.'
    },

    // Proyectos Especiales
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Biblioteca Personalizada',
      category: 'especiales',
      description: 'Biblioteca de piso a techo con escalera incluida.'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos los Productos' },
    { id: 'sala', name: 'Muebles de Sala' },
    { id: 'dormitorio', name: 'Dormitorio' },
    { id: 'cocina', name: 'Cocinas' },
    { id: 'puertas', name: 'Puertas' },
    { id: 'especiales', name: 'Proyectos Especiales' }
  ];

  const filteredImages = selectedCategory === 'todos' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % filteredImages.length
      : (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const requestQuote = (imageTitle: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa obtener una cotización para: ${imageTitle}. Vi este diseño en su galería y me gustaría algo similar. ¿Podrían proporcionarme más información?`);
    const phoneNumber = '+57 316 3098801';
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mb-6">
            Galería de Trabajos
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Explora nuestra colección de muebles y puertas artesanales. 
            Cada pieza refleja nuestro compromiso con la calidad y el diseño excepcional.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary hover:text-white shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="h-12 w-12 text-white" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-primary-dark mb-2 line-clamp-2">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              {filteredImages.length > 1 && (
                <>
                  <button
                    onClick={() => navigateImage('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={() => navigateImage('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-colors duration-300"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </>
              )}

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">
                    {selectedImage.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {selectedImage.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => requestQuote(selectedImage.title)}
                      className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 flex items-center justify-center group"
                    >
                      Solicitar Cotización
                      <ExternalLink className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                    </button>
                    <button
                      onClick={closeModal}
                      className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Counter */}
              {filteredImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                  {currentImageIndex + 1} de {filteredImages.length}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;