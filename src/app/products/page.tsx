import React, { FC } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Products from "./Products";

export const metadata = {
  title: "Productos - BITCODE",
  description: "Pagina productos.",
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
