import React, { FC } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";
import Mision from "../mision/page";
import Vision from "../vision/page";
import Valores from "../valores/page";
import SeperatedBar from "@/components/Common/SeperatedBar";

export const metadata = {
  title: "Sobre nosotros - BITCODE",
  description: "Pagina sobre nosotros.",
  icons: {
    icon: "/favicon.png"
  }
};

const About: FC = () => {
  return (
    <>
      <Navbar isScrolledParam={true} />
      <div style={{ paddingTop: "5rem" }}>
        <Mision />
        <SeperatedBar />
        <Valores />
        <SeperatedBar />
        <Vision />
      </div>
      <Footer />
    </>
  );
};

export default About;
