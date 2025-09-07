import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ExternalLink, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images: GalleryImage[] = [
    // Muebles de Sala
    {
      id: 1,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file1.jpeg',
      title: 'Sofá Artesanal Premium',
      category: 'sala',
      description: 'Sofá de tres plazas en madera de roble con tapizado en cuero genuino. Diseño ergonómico que combina comodidad y elegancia.'
    },
    {
      id: 2,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file2.jpeg',
      title: 'Mesa de Centro Moderna',
      category: 'sala',
      description: 'Mesa de centro con diseño minimalista en madera de nogal. Perfecta para espacios contemporáneos.'
    },
    {
      id: 3,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file3.jpeg',
      title: 'Estantería Flotante',
      category: 'sala',
      description: 'Sistema de estanterías flotantes con acabado natural. Maximiza el espacio y añade funcionalidad.'
    },
    {
      id: 4,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file4.jpeg',
      title: 'Sillón Individual de Diseño',
      category: 'sala',
      description: 'Sillón individual con estructura de madera maciza y tapizado premium. Ideal para rincones de lectura.'
    },
    
    // Muebles de Dormitorio
    {
      id: 5,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file5.jpeg',
      title: 'Cama King Size Personalizada',
      category: 'dormitorio',
      description: 'Cama king size con cabecera tapizada y base en madera maciza. Diseño exclusivo adaptado a tus necesidades.'
    },
    {
      id: 6,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file6.jpeg',
      title: 'Closet Empotrado',
      category: 'dormitorio',
      description: 'Closet a medida con sistema de organización optimizado. Aprovecha cada centímetro de tu espacio.'
    },
    {
      id: 7,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file7.jpeg',
      title: 'Mesa de Noche Elegante',
      category: 'dormitorio',
      description: 'Mesa de noche con cajones y acabado en laca brillante. Funcionalidad y estilo en perfecta armonía.'
    },
    {
      id: 8,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file8.jpeg',
      title: 'Cómoda Vintage',
      category: 'dormitorio',
      description: 'Cómoda con estilo vintage restaurado. Piezas únicas con historia y carácter.'
    },

    // Cocinas
    {
      id: 9,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file9.jpeg',
      title: 'Cocina Integral Moderna',
      category: 'cocina',
      description: 'Cocina integral con isla central y acabados premium. Diseño funcional para el chef moderno.'
    },
    {
      id: 10,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file10.jpeg',
      title: 'Mueble de Cocina Clásico',
      category: 'cocina',
      description: 'Gabinetes de cocina con diseño tradicional y herrajes de calidad. Elegancia atemporal.'
    },
    {
      id: 11,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file11.jpeg',
      title: 'Isla de Cocina Premium',
      category: 'cocina',
      description: 'Isla de cocina con superficie de trabajo amplia y almacenamiento integrado.'
    },

    // Puertas
    {
      id: 12,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file12.jpeg',
      title: 'Puerta de Entrada Principal',
      category: 'puertas',
      description: 'Puerta maciza con tallados artesanales y herrajes de seguridad. Primera impresión memorable.'
    },
    {
      id: 13,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file13.jpeg',
      title: 'Puertas Interiores',
      category: 'puertas',
      description: 'Set de puertas interiores con acabado en madera natural. Continuidad de estilo en todo el hogar.'
    },
    {
      id: 14,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file14.jpeg',
      title: 'Puerta Corrediza',
      category: 'puertas',
      description: 'Puerta corrediza con sistema de rieles ocultos. Solución elegante para espacios reducidos.'
    },
    {
      id: 15,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file15.jpeg',
      title: 'Puerta de Vidrio Templado',
      category: 'puertas',
      description: 'Puerta con paneles de vidrio templado y marco de madera. Luminosidad y privacidad balanceadas.'
    },

    // Proyectos Especiales
    {
      id: 16,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file16.jpeg',
      title: 'Biblioteca Personalizada',
      category: 'especiales',
      description: 'Biblioteca de piso a techo con escalera incluida. El sueño de todo amante de los libros.'
    },
    {
      id: 17,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file17.jpeg',
      title: 'Oficina en Casa',
      category: 'especiales',
      description: 'Escritorio y estanterías integradas para home office. Productividad y estilo en tu hogar.'
    },
    {
      id: 18,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file18.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 19,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file19.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 20,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file20.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 21,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file21.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 22,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file22.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 23,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file23.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 24,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file24.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 25,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file25.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 26,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file26.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 27,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file27.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 28,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file28.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 29,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file29.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 30,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file30.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 31,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file31.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 32,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file32.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 33,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file33.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 34,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file34.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 35,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file35.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 36,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file36.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 37,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file37.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 38,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file38.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 39,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file39.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 40,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file40.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 41,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file41.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 42,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file42.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    },
    {
      id: 43,
      src: 'https://raw.githubusercontent.com/Duran24062005/marazzi-muebles-web-site/refs/heads/main/marazzi-works/file43.jpeg',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors duration-300"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-semibold">Volver al Inicio</span>
            </Link>
            <h1 className="text-2xl md:text-3xl font-bold text-primary-dark">
              Galería de Trabajos
            </h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="text-center mb-12">
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explora nuestra colección completa de muebles y puertas artesanales. 
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

          {/* Results Counter */}
          <div className="text-center mb-8">
            <p className="text-gray-600">
              Mostrando {filteredImages.length} {filteredImages.length === 1 ? 'producto' : 'productos'}
              {selectedCategory !== 'todos' && (
                <span> en {categories.find(cat => cat.id === selectedCategory)?.name}</span>
              )}
            </p>
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
                    <ZoomIn className="h-12 w-12 text-slate-400" />
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white-200 px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver Detalles
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-primary-dark mb-2 line-clamp-2">
                    {image.id + ' - ' + image.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {image.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </main>

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
            <div className="bg-slate-200 rounded-lg overflow-hidden">
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
  );
};

export default GalleryPage;