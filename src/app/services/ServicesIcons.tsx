import { faAtom, faClock, faCloud, faCode, faDatabase, faDesktop, faFileShield, faHeadset, faHouse, faHouseLaptop, faSackXmark, faServer, faTicketSimple, IconDefinition } from "@fortawesome/free-solid-svg-icons";



export const servicesData: { name: string; desc: string; icon: IconDefinition; image: string; }[] = [
  {
    name: "Alquiler de Equipos",
    desc: "Brindamos servicios de alquiler de equipos tecnológicos, permitiéndote acceder a la última tecnología sin necesidad de una inversión inicial significativa, ideal para proyectos temporales o eventos especiales.",
    icon: faHouseLaptop,
    image: "/images/services/equiposEscritorio.jpg"
  },
  {
    name: "Soporte Corporativo",
    desc: "Ofrecemos soporte técnico integral para empresas, con soluciones rápidas y efectivas para cualquier problema tecnológico, garantizando la continuidad operativa de tu negocio.",
    icon: faHeadset,
    image: "/images/services/equiposEscritorio.jpg"
  },
  {
    name: "Soporte Horas",
    desc: "Proveemos servicios de soporte técnico por horas, adaptándonos a tus necesidades específicas y ofreciendo asistencia puntual para resolver cualquier inconveniente tecnológico.",
    icon: faClock,
    image: "/images/services/equiposEscritorio.jpg"
  },
  {
    name: "Bolsa de Soporte",
    desc: "Ofrecemos paquetes de horas de soporte técnico que puedes utilizar según tus necesidades, proporcionando flexibilidad y asegurando que siempre tengas acceso a asistencia especializada.",
    icon: faSackXmark,
    image: "/images/services/equiposEscritorio.jpg"
  },
  {
    name: "Sistemas de Backups",
    desc: "Implementamos sistemas de backup automatizados y seguros que garantizan la protección y recuperación de tus datos en caso de pérdida o fallo, asegurando la integridad de tu información.",
    icon: faCloud,
    image: "/images/services/equiposEscritorio.jpg"
  },
  {
    name: "Hosting Local",
    desc: "Ofrecemos servicios de hosting local con servidores dedicados, asegurando un rendimiento óptimo y una alta disponibilidad para tus aplicaciones y sitios web.",
    icon: faServer,
    image: "/images/services/equiposEscritorio.jpg"
  },
  {
    name: "Virtualización",
    desc: "Proveemos soluciones de virtualización que optimizan el uso de tus recursos tecnológicos, permitiendo la ejecución de múltiples sistemas operativos y aplicaciones en un solo servidor físico.",
    icon: faAtom,
    image: "/images/services/equiposEscritorio.jpg"
  },
  {
    name: "Almacenamiento",
    desc: "Ofrecemos soluciones de almacenamiento escalables y seguras, adaptadas a las necesidades de tu empresa, garantizando la disponibilidad y protección de tus datos críticos.",
    icon: faDatabase,
    image: "/images/services/equiposEscritorio.jpg"
  },
  {
    name: "Centro de Datos",
    desc: "Diseñamos y gestionamos centros de datos que aseguran la eficiencia, seguridad y escalabilidad de tu infraestructura tecnológica, adaptados a las demandas de tu negocio.",
    icon: faFileShield,
    image: "/images/services/equiposEscritorio.jpg"
  },
  {
    name: "Implementación de Servidores",
    desc: "Nos encargamos de la instalación y configuración de servidores, asegurando que estén optimizados para el rendimiento y la seguridad, adaptados a las necesidades específicas de tu empresa.",
    icon: faDesktop,
    image: "/images/services/equiposEscritorio.jpg"
  },
  {
    name: "Desarrollo a Medida",
    desc: "Ofrecemos servicios de desarrollo de software a medida, creando soluciones tecnológicas personalizadas que se adaptan perfectamente a los procesos y objetivos de tu negocio.",
    icon: faCode,
    image: "/images/services/equiposEscritorio.jpg"
  }
];