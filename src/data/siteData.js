// Sustituye estos valores cuando los proyectos estén publicados en Vercel.
export const projectUrls = {
  casaSazon: 'PEGAR_URL_AQUI',
  auraStudio: 'PEGAR_URL_AQUI',
  novaPack: 'PEGAR_URL_AQUI',
}

// Escribe solo dígitos con código de país, por ejemplo: 5212220000000.
export const WHATSAPP_NUMBER = 'PEGAR_NUMERO_AQUI'

export const projects = [
  { id: 'casaSazon', name: 'Casa Sazón', category: 'Restaurante', description: 'Sitio web DEMO para un restaurante, con menú, galería, información del negocio y contacto.', accent: 'coral', url: projectUrls.casaSazon },
  { id: 'auraStudio', name: 'Aura Studio', category: 'Estética', description: 'Sitio web DEMO para una estética, con servicios, galería, información y contacto.', accent: 'lilac', url: projectUrls.auraStudio },
  { id: 'novaPack', name: 'NovaPack', category: 'Empresa industrial', description: 'Sitio web DEMO para una empresa de soluciones de empaque, con productos, procesos y formulario de contacto.', accent: 'amber', url: projectUrls.novaPack },
]

export const packages = [
  { name: 'Página Básica', price: '$1,500 MXN', description: 'Ideal para emprendedores y pequeños negocios que necesitan comenzar su presencia profesional en internet.', features: ['Página principal', 'Información del negocio', 'Servicios o productos', 'Diseño adaptable a celular', 'Botón de WhatsApp', 'Publicación en internet'] },
  { name: 'Página Profesional', price: '$2,500 MXN', featured: true, description: 'Una opción completa para negocios que quieren presentar sus servicios de forma profesional.', features: ['Varias secciones', 'Servicios o catálogo', 'Galería de imágenes', 'Formulario de contacto', 'Botón de WhatsApp', 'Diseño personalizado', 'Adaptación para celular', 'Publicación en internet'] },
  { name: 'Página Empresarial', price: '$4,000 MXN', description: 'Para empresas que necesitan un sitio web más completo y personalizado.', features: ['Sitio web de varias páginas', 'Catálogo de productos o servicios', 'Galería', 'Formularios', 'Diseño personalizado', 'Adaptación para celular', 'Integraciones según necesidades', 'Publicación en internet'] },
]

export const services = [
  ['◫', 'Desarrollo de páginas web', 'Sitios claros y funcionales para presentar tu negocio en internet.'],
  ['↗', 'Landing pages', 'Páginas enfocadas en comunicar una oferta y facilitar el contacto.'],
  ['▦', 'Sitios web empresariales', 'Una presencia digital sólida para servicios, procesos e información.'],
  ['□', 'Catálogos de productos y servicios', 'Organiza y presenta lo que ofreces de forma fácil de consultar.'],
  ['◌', 'Integración con WhatsApp', 'Haz que tus visitantes puedan escribirte en el momento correcto.'],
  ['↻', 'Mantenimiento y actualización', 'Mantén tu contenido actual y tu sitio listo para seguir creciendo.'],
]

export const steps = [
  ['01', 'Conocemos tu negocio', 'Escucho tu idea, necesidades y el objetivo de tu sitio.'],
  ['02', 'Definimos la estructura', 'Organizamos la información para que sea clara para tus clientes.'],
  ['03', 'Diseño y desarrollo', 'Creo una experiencia visual moderna, rápida y adaptable.'],
  ['04', 'Revisión', 'Revisamos los detalles y hacemos los ajustes necesarios.'],
  ['05', 'Publicación', 'Dejamos tu página lista para que puedas compartirla.'],
]
