import React, { FC } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Products from "./Products";

export const metadata = {
  title: "Venta de Servicios de Infraestructura en TI, Equipos y Licencias - Bitcode",
  description: "Suministramos infraestructura de TI, servidores, partes, periféricos y licenciamiento de software como Windows y Antivirus para tu empresa.",
  icons: {
    icon: "/favicon.png"
  }
};

const Contact: FC = () => {
  return (
    <>
      <Navbar isScrolledParam={true} />
      <div style={{ paddingTop: "3rem" }}>
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
