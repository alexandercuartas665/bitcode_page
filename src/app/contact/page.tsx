import React, { FC } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contacto - BITCODE",
  description: "Pagina contacto.",
  icons: {
    icon: "/favicon.png"
  }
};

const Contact: FC = () => {
  return (
    <>
      <Navbar isScrolledParam={true} />
      <div style={{ paddingTop: "3rem" }}>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
