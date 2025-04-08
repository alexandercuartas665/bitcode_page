import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faDesktop,
  faServer,
  faMicrochip,
  faNetworkWired,
  faKeyboard,
  faWind,
  faShieldAlt,
  faWindowMaximize
} from "@fortawesome/free-solid-svg-icons";

export const productsData: { name: string; desc: string; icon: IconDefinition; image: string; }[] = [
  {
    name: "Equipos de Escritorio",
    desc: "Ofrecemos una amplia gama de equipos de escritorio adaptados a las necesidades de tu empresa, con configuraciones personalizadas para optimizar el rendimiento y la productividad de tus empleados.",
    icon: faDesktop,
    image: "/images/products/equiposEscritorio.jpg"
  },
  {
    name: "Servidores",
    desc: "Proveemos servidores robustos y escalables que garantizan la seguridad y eficiencia en el manejo de datos y aplicaciones críticas, adaptados a las demandas de tu negocio.",
    icon: faServer,
    image: "/images/products/servidores.jpg"
  },
  {
    name: "Partes",
    desc: "Suministramos partes y componentes de alta calidad para la reparación y actualización de tus equipos, asegurando la continuidad operativa y el máximo rendimiento de tu infraestructura tecnológica.",
    icon: faMicrochip,
    image: "/images/products/partes.jpg"
  },
  {
    name: "Redes y Comunicaciones",
    desc: "Diseñamos e implementamos soluciones de redes y comunicaciones que aseguran una conectividad rápida y segura, facilitando la colaboración y el intercambio de información dentro de tu empresa.",
    icon: faNetworkWired,
    image: "/images/products/redes.jpg"
  },
  {
    name: "Periféricos",
    desc: "Ofrecemos una variedad de periféricos, desde impresoras hasta dispositivos de entrada, que complementan tus equipos y mejoran la eficiencia en las tareas diarias de tu personal.",
    icon: faKeyboard,
    image: "/images/products/perifericos.jpg"
  },
  {
    name: "Licencias de Windows",
    desc: "Gestionamos la adquisición y renovación de licencias de Windows, asegurando que tus sistemas operativos estén siempre actualizados y cumplan con las normativas de seguridad y legalidad.",
    icon: faWindowMaximize,
    image: "/images/products/licencias.jpg"
  },
  {
    name: "Licencia Antivirus",
    desc: "Proveemos licencias de antivirus de alta calidad para proteger tus sistemas contra amenazas y ataques, asegurando la seguridad de tus datos y la continuidad de tus operaciones.",
    icon: faShieldAlt,
    image: "/images/products/antivirus.jpg"
  }
];
