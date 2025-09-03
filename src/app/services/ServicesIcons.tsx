import { faAtom, faClock, faCloud, faCode, faDatabase, faDesktop, faFileShield, faHeadset, faHouse, faHouseLaptop, faShieldAlt, faSackXmark, faServer, faTicketSimple, IconDefinition } from "@fortawesome/free-solid-svg-icons";

export const servicesData: {name: string; desc: string; icon: IconDefinition; image: string; subservices: string[];}[]= 
[

   {
    name: "Infraestructura de TI",
    desc: "Infraestructura robusta y escalable que garantiza el rendimiento óptimo de tu negocio.",
    icon: faDesktop,
    image: "/images/services/equiposEscritorio.jpg",
    subservices: [
      "Asesorías especializadas",
      "Hosting empresarial",
      "Redes y seguridad",
      "Copias de seguridad"
    ]
  },
  
  {
    name: "Desarrollo de Software",
    desc: "Soluciones de software que impulsan la innovación y el crecimiento de tu empresa.",
    icon: faCode,
    image: "/images/services/software.jpg",
    subservices: [
      "Software a medida",
      "Aplicaciones Web & Móviles",
      "E-commerce",
      "Servicios de integración"
    ]
  },
  {
    name: "Soporte Técnico",
    desc: "Atención ágil y confiable para mantener la continuidad operativa de tu negocio.",
    icon: faHeadset,
    image: "/images/services/soporte.jpg",
    subservices: [
      "Help Desk",
      "Soporte corporativo",
      "Mantenimiento preventivo",
      "Soporte por horas"
    ]
  },
  {
    name: "Seguridad Informática",
    desc: "Protege tu información con soluciones avanzadas de ciberseguridad.",
    icon: faFileShield,
    image: "/images/services/seguridad.jpg",
    subservices: [
      "Gestión de accesos",
      "Backups automatizados",
      "Protección perimetral",
      "Pruebas de resiliencia"
    ]
  },
  {
    name: "Cloud & Virtualización",
    desc: "Optimiza recursos y paga solo lo que usas con soluciones en la nube.",
    icon: faAtom,
    image: "/images/services/cloud.jpg",
    subservices: [
      "Migración a la nube",
      "Servidores virtuales",
      "Escalabilidad on demand",
      "Optimización de costos"
    ]
  },
  {
    name: "Centros de Datos",
    desc: "Diseño y gestión de data centers seguros y eficientes.",
    icon: faDatabase,
    image: "/images/services/datacenter.jpg",
    subservices: [
      "Diseño de infraestructura",
      "Gestión de servidores",
      "Climatización y energía",
      "Monitoreo 24/7"
    ]
  }
/*
  {
    name: "Soporte Horas",
    desc: "Proveemos servicios de soporte técnico por horas, adaptándonos a tus necesidades específicas y ofreciendo asistencia puntual para resolver cualquier inconveniente tecnológico.",
    icon: faClock,
    image: "/images/services/equiposEscritorio.jpg"
  },
  {
    name: "Alquiler de Equipos",
    desc: "Brindamos servicios de alquiler de equipos tecnológicos, permitiéndote acceder a la última tecnología sin necesidad de una inversión inicial significativa, ideal para proyectos temporales o eventos especiales.",
    icon: faHouseLaptop,
    image: "/images/services/equiposEscritorio.jpg"
  }*/
];