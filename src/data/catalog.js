import {
  Footprints,
  Eye,
  Hand,
  Zap,
  HardHat,
  Award,
  Sparkles,
  Droplets,
  Truck
} from 'lucide-react';

export const CATEGORIES = [
  {
    id: 'calzado',
    title: 'Calzado de Seguridad',
    description: 'Botas dieléctricas con puntera composite y suela antideslizante.',
    icon: Footprints,
  },
  {
    id: 'visual',
    title: 'Protección Visual',
    description: 'Lentes tipo supervisor claros y oscuros resistentes a impactos.',
    icon: Eye,
  },
  {
    id: 'guantes',
    title: 'Guantes Anticortes',
    description: 'Líneas Light Flex y Rayo Flex para máximo agarre y destreza.',
    icon: Hand,
  },
  {
    id: 'dielectrico',
    title: 'Protección Dieléctrica',
    description: 'Aislamiento certificado hasta 18 kV para trabajos eléctricos.',
    icon: Zap,
  },
  {
    id: 'dotacion',
    title: 'Dotación Industrial',
    description: 'Equipamiento integral certificado para empresas y contratistas.',
    icon: HardHat,
  },
  {
    id: 'marcas',
    title: 'Marcas Aliadas (SAGA)',
    description: 'Importadores directos de líneas de alto rendimiento industrial.',
    icon: Award,
  },
];

export const PRODUCTS = [
  {
    id: 'saga-7313',
    name: 'Bota Saga Deportiva 7313',
    category: 'Calzado de Seguridad',
    specs: 'Dieléctrica 18 kV • Puntera Composite',
    image: '/assets/isolated-bota-7313.png',
    badge: 'Más Vendido',
  },
  {
    id: 'saga-7016',
    name: 'Bota Saga Deportiva 7016',
    category: 'Calzado de Seguridad',
    specs: 'Antiperforación • Suela ETPU',
    image: '/assets/isolated-bota-7016.png',
    badge: 'Nuevo Ingreso',
  },
  {
    id: 'lentes-supervisor',
    name: 'Lentes Tipo Supervisor',
    category: 'Protección Visual',
    specs: 'Visión Segura • Anti-impacto',
    image: '/assets/isolated-lentes.png',
    badge: 'Stock Inmediato',
  },
  {
    id: 'guantes-flex',
    name: 'Guantes Anticortes Flex',
    category: 'Guantes Anticortes',
    specs: 'Light Flex & Rayo Flex',
    image: '/assets/isolated-guantes.png',
    badge: 'Mayoristas',
  },
  {
    id: 'saga-7007',
    name: 'Bota Saga Deportiva 7007',
    category: 'Calzado de Seguridad',
    specs: 'Dieléctrica 18 kV • Caña Baja',
    image: '/assets/isolated-bota-7007.png',
    badge: 'Destacado',
  },
  {
    id: 'saga-7516',
    name: 'Bota Saga Deportiva 7516',
    category: 'Calzado de Seguridad',
    specs: 'Línea Dama • 18 kV',
    image: '/assets/isolated-bota-7516.png',
    badge: 'Línea Femenina',
  },
];

export const BENEFITS = [
  {
    title: 'Certificación 18 kV',
    description: 'Garantía de máxima seguridad dieléctrica.',
    icon: Zap,
  },
  {
    title: 'Diseño Ergonómico',
    description: 'Confort en cada paso.',
    icon: Sparkles,
  },
  {
    title: 'Resistencia a Hidrocarburos',
    description: 'Suela ETPU + caucho resistente.',
    icon: Droplets,
  },
  {
    title: 'Entrega Inmediata',
    description: 'Despacho inmediato a nivel nacional.',
    icon: Truck,
  },
];

export const STEPS = [
  {
    number: '01',
    title: 'Asesoría Técnica',
    desc: 'Evaluamos los riesgos de tu operación para recomendar el EPP exacto.'
  },
  {
    number: '02',
    title: 'Selección de Tallas y Modelos',
    desc: 'Definimos curvas de tallas y referencias según tu equipo de trabajo.'
  },
  {
    number: '03',
    title: 'Cotización Corporativa',
    desc: 'Precios competitivos al mayor y detal con atención personalizada.'
  },
  {
    number: '04',
    title: 'Despacho Nacional',
    desc: 'Logística rápida y segura directo a tus instalaciones.'
  },
];

export const CONTACT_INFO = {
  phone: '+1(317) 355-6789',
  whatsappNumber: '13173556789',
  email: 'm@securityimport.com',
  address: 'Maracaibo/International Office\n280° 57\' N, 390° 47\' W',
  instagramUrl: 'https://www.instagram.com/securityimport/',
  instagramHandle: '@securityimport',
};
