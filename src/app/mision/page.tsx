"use client";

import React, { FC } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";

const Mision: FC = () => {
  return (
    <>
      <Navbar isScrolledParam={true} />
      <div style={{ paddingTop: "3rem" }}>
        <section
          id="contact"
          className="contact-area uk-contact uk-section"
        >
          <div className="uk-container">
            <div className="uk-section-title section-title">
              <h2>Bitcode Misión</h2>
            </div>

            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
              <div className="item">
                <Image
                  src="/images/about3.jpg"
                  alt="Imagen misión empresarial"
                  width={380}
                  height={350}
                />
              </div>

              <div className="item">
                <p>
                  Nuestra misión es proporcionar soluciones tecnológicas personalizadas y servicios de soporte confiables para ayudar a nuestros clientes a optimizar sus operaciones y alcanzar sus objetivos comerciales. Nos comprometemos a ser líderes en el campo del desarrollo a medida, brindando soluciones innovadoras y adaptadas a las necesidades específicas de cada cliente.
                  Nos esforzamos por ofrecer un soporte de escritorio y una infraestructura robusta y eficiente que garantice la continuidad del negocio y la satisfacción del cliente. Nuestro objetivo principal es superar las expectativas de nuestros clientes al proporcionarles soluciones tecnológicas de alta calidad, a medida y escalables.
                  <br /> <br />
                  Valoramos la colaboración estrecha con nuestros clientes, comprendiendo sus desafíos y objetivos comerciales, para así ofrecer soluciones personalizadas que impulsen su éxito. Nos enorgullece ser un socio confiable y de confianza, brindando un servicio excepcional, conocimientos técnicos sólidos y una atención personalizada en todas las etapas del proceso.
                  <br /> <br />
                  Enfocados en la excelencia, nos mantenemos actualizados con las últimas tendencias tecnológicas y herramientas de desarrollo. Fomentamos un entorno de aprendizaje continuo y promovemos la creatividad y la innovación en cada proyecto que emprendemos.
                  <br /> <br />
                  Nuestro compromiso es ser una empresa de referencia en el sector, reconocida por nuestra ética empresarial, calidad de servicio y resultados excepcionales. Trabajamos incansablemente para ayudar a nuestros clientes a alcanzar el éxito a través de soluciones tecnológicas a medida, confiables y de vanguardia
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Mision;
