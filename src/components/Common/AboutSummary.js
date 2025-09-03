"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const AboutSummary = () => {
  return (
    <section className="about-summary-area uk-section">
      <div className="uk-container">
        <div className="uk-grid uk-grid-large uk-flex-middle" data-uk-grid>
          
          {/* Columna de la Imagen */}
          <div className="uk-width-1-2@m">
            <div className="about-summary-image">
              <Image
                src="/images/about2.jpg" // Puedes cambiar esta imagen por una de tu equipo u oficina
                alt="Equipo de Bitcode IT Services"
                width={600}
                height={450}
              />
            </div>
          </div>

          {/* Columna del Texto */}
          <div className="uk-width-1-2@m">
            <div className="about-summary-content">
              <div className="section-title">
                <h2>Más que una empresa, somos tu aliado estrategico</h2>
                <div className="bar"></div>
              </div>
              <p className="about-text-highlight">
                Somos un equipo apasionado y dedicado a resolver los desafíos tecnológicos de las PyMEs en la region.
              </p>
              <p>
                Entendemos que cada negocio es único. Por eso, no ofrecemos soluciones genéricas, sino que diseñamos y desarrollamos tecnología a la medida de tus objetivos, optimizando tus procesos e impulsando tu crecimiento.
              </p>
              <Link href="/about" className="uk-button uk-button-default">
                Conoce más
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSummary;