interface GalleryImage {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

const images: GalleryImage[] = [
    // Muebles de Sala
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Sofá Artesanal Premium',
      category: 'sala',
      description: 'Sofá de tres plazas en madera de roble con tapizado en cuero genuino. Diseño ergonómico que combina comodidad y elegancia.'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Mesa de Centro Moderna',
      category: 'sala',
      description: 'Mesa de centro con diseño minimalista en madera de nogal. Perfecta para espacios contemporáneos.'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Estantería Flotante',
      category: 'sala',
      description: 'Sistema de estanterías flotantes con acabado natural. Maximiza el espacio y añade funcionalidad.'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1571475/pexels-photo-1571475.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Sillón Individual de Diseño',
      category: 'sala',
      description: 'Sillón individual con estructura de madera maciza y tapizado premium. Ideal para rincones de lectura.'
    },
    
    // Muebles de Dormitorio
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cama King Size Personalizada',
      category: 'dormitorio',
      description: 'Cama king size con cabecera tapizada y base en madera maciza. Diseño exclusivo adaptado a tus necesidades.'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Closet Empotrado',
      category: 'dormitorio',
      description: 'Closet a medida con sistema de organización optimizado. Aprovecha cada centímetro de tu espacio.'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Mesa de Noche Elegante',
      category: 'dormitorio',
      description: 'Mesa de noche con cajones y acabado en laca brillante. Funcionalidad y estilo en perfecta armonía.'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cómoda Vintage',
      category: 'dormitorio',
      description: 'Cómoda con estilo vintage restaurado. Piezas únicas con historia y carácter.'
    },

    // Cocinas
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cocina Integral Moderna',
      category: 'cocina',
      description: 'Cocina integral con isla central y acabados premium. Diseño funcional para el chef moderno.'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Mueble de Cocina Clásico',
      category: 'cocina',
      description: 'Gabinetes de cocina con diseño tradicional y herrajes de calidad. Elegancia atemporal.'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Isla de Cocina Premium',
      category: 'cocina',
      description: 'Isla de cocina con superficie de trabajo amplia y almacenamiento integrado.'
    },

    // Puertas
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Puerta de Entrada Principal',
      category: 'puertas',
      description: 'Puerta maciza con tallados artesanales y herrajes de seguridad. Primera impresión memorable.'
    },
    {
      id: 13,
      src: 'https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Puertas Interiores',
      category: 'puertas',
      description: 'Set de puertas interiores con acabado en madera natural. Continuidad de estilo en todo el hogar.'
    },
    {
      id: 14,
      src: 'https://images.pexels.com/photos/1571449/pexels-photo-1571449.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Puerta Corrediza',
      category: 'puertas',
      description: 'Puerta corrediza con sistema de rieles ocultos. Solución elegante para espacios reducidos.'
    },
    {
      id: 15,
      src: 'https://images.pexels.com/photos/1571464/pexels-photo-1571464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Puerta de Vidrio Templado',
      category: 'puertas',
      description: 'Puerta con paneles de vidrio templado y marco de madera. Luminosidad y privacidad balanceadas.'
    },

    // Proyectos Especiales
    {
      id: 16,
      src: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Biblioteca Personalizada',
      category: 'especiales',
      description: 'Biblioteca de piso a techo con escalera incluida. El sueño de todo amante de los libros.'
    },
    {
      id: 17,
      src: 'https://images.pexels.com/photos/1571472/pexels-photo-1571472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Oficina en Casa',
      category: 'especiales',
      description: 'Escritorio y estanterías integradas para home office. Productividad y estilo en tu hogar.'
    },
    {
      id: 18,
      src: 'https://images.pexels.com/photos/1571474/pexels-photo-1571474.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Bar Personalizado',
      category: 'especiales',
      description: 'Bar de entretenimiento con almacenamiento para licores y cristalería. Perfecto para reuniones.'
    }
  ];

export default images;