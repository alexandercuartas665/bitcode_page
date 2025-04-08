
import React, { FC } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Services from "./Services";

export const metadata = {
  title: "Servicios - BITCODE",
  description: "Pagina servicios.",
  icons: {
    icon: "/favicon.png"
  }
};

const pageServices: FC = () => {
  return (
    <>
      <Navbar isScrolledParam={true} />
      <div style={{ paddingTop: "3rem" }}>
        <Services />
      </div>
      <Footer />
    </>
  );
};

export default pageServices;
