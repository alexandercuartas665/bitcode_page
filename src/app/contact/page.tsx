"use client";

import React, { FC } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ContactForm from "./ContactForm";

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
