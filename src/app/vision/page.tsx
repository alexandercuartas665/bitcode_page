"use client";

import React, { FC } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Image from "next/image";

const Vision: FC = () => {
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
              <h2>Bitcode Visión</h2>
            </div>

            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
              <div className="item">
                <Image
                  src="/images/about2.jpg"
                  alt="Imagen visión empresarial"
                  width={380}
                  height={350}
                />
              </div>

              <div className="item">
                <p>
                  Nuestra visión es convertirnos en líderes reconocidos a nivel nacional e internacional en el desarrollo a medida y el soporte de escritorio e infraestructura. Buscamos ser el socio preferido de las empresas que buscan soluciones tecnológicas personalizadas y confiables.
                  <br /> <br />
                  Nos esforzamos por mantenernos a la vanguardia de la innovación tecnológica y ser pioneros en la adopción de nuevas tendencias y herramientas en el desarrollo de software y la gestión de infraestructura. Queremos ser reconocidos como expertos en el diseño y entrega de soluciones escalables y eficientes que impulsen el crecimiento y la transformación digital de nuestros clientes.
                  <br /> <br />
                  Buscamos ampliar nuestra presencia en diferentes sectores de la industria, brindando servicios de alta calidad que satisfagan las necesidades específicas de cada cliente. Aspiramos a establecer relaciones a largo plazo con nuestros clientes, basadas en la confianza, la transparencia y la excelencia en el servicio.
                  <br /> <br />
                  Como equipo, nos esforzamos por cultivar un entorno de trabajo colaborativo, impulsado por el talento y la pasión por la tecnología. Fomentamos el aprendizaje continuo y el desarrollo profesional de nuestro personal, permitiéndoles alcanzar su máximo potencial y ofrecer soluciones innovadoras a nuestros clientes.
                  <br /> <br />
                  En resumen, nuestra visión es ser reconocidos como líderes en el desarrollo a medida y el soporte de escritorio e infraestructura, brindando soluciones tecnológicas excepcionales que impulsen el éxito y la transformación digital de nuestros clientes en un mundo cada vez más conectado.”
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

export default Vision;
