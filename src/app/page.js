import SeperatedBar from "@/components/Common/SeperatedBar";
import Banner from "@/pages/Banner";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
//import ContactForm from "./contact/ContactForm";
import Services from "./services/Services";
import Products from "./products/Products";
import Clients from "@/components/Common/Clients";
import Process from "@/components/Common/Process";
import AboutSummary from "@/components/Common/AboutSummary";
import FinalCTA from "@/components/Common/FinalCTA";

export const metadata = {
  title: "Bitcode IT Services - Soluciones Tecnológicas a Medida",
  description: "Transformamos tu negocio con desarrollo de software a medida, soporte TI, infraestructura y soluciones de ciberseguridad. Potencia tu crecimiento con Bitcode.",
  keywords: "desarrollo de software, soporte TI, servidores, software a medida, Infraestructura de TI, Sistemas, Cali, Valle del cauca, Colombia, Bitcode, Bitcode IT",
};

export default function Home() {
  return (
    <>
      <Navbar />

      <Banner />

      <Clients />
      
      <Services />

      <Process />

      <Products />

      <AboutSummary />

      <FinalCTA />

      {/* <Patrocinadores /> */}

      <Footer />
    </>
  );
}
