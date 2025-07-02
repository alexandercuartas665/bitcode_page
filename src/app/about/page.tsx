// src/app/about/page.tsx
import React, { FC } from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

export const metadata = {
  title: "Sobre Nosotros - BITCODE",
  description: "Conoce nuestra misión, visión y los valores que nos impulsan a ofrecer soluciones tecnológicas de vanguardia.",
  icons: {
    icon: "/favicon.png"
  }
};

const valores = [
  {
    titulo: "Seguridad y Confiabilidad",
    descripcion: "Diseñamos soluciones con altos estándares de seguridad, garantizando la protección de datos y la continuidad operativa de nuestros clientes.",
  },
  {
    titulo: "Experticia Técnica",
    descripcion: "Contamos con profesionales altamente capacitados para ofrecer soporte técnico eficiente y de alto nivel.",
  },
  {
    titulo: "Eficiencia y Automatización",
    descripcion: "Impulsamos la automatización de procesos mediante tecnologías ágiles para optimizar recursos, tiempos y costos.",
  },
  {
    titulo: "Innovación Continua",
    descripcion: "Adoptamos tecnologías de vanguardia como cloud computing y virtualización para impulsar la transformación digital.",
  },
  {
    titulo: "Personalización y Escalabilidad",
    descripcion: "Cada solución es diseñada a medida, alineada con los objetivos de negocio y preparada para escalar a futuro.",
  },
  {
    titulo: "Compromiso con el Cliente",
    descripcion: "Nos integramos como socios estratégicos, colaborando activamente para garantizar resultados y retorno de inversión.",
  },
];

const About: FC = () => {
  return (
    <>
      <Navbar isScrolledParam={true} />

      {/* Contenedor principal para el padding superior general */}
      <div style={{ paddingTop: '6rem' }}>

        {/* ----- SECCIÓN MISIÓN (DISEÑO CORREGIDO) ----- */}
        <section id="mision" className="uk-section uk-section-small">
          <div className="uk-container">
            <div className="uk-grid uk-flex-middle" data-uk-grid>

              {/* Columna 1: Título y Texto juntos */}
              <div className="uk-width-expand@m">
                <div className="uk-section-title section-title">
                  <h2>Nuestra Misión</h2>
                  <div className="bar"></div>
                </div>
                <p className="uk-margin-medium-top" style={{ textAlign: 'justify' }}>
                  Proporcionar soluciones tecnológicas personalizadas y servicios de soporte confiables para ayudar a nuestros clientes a optimizar sus operaciones y alcanzar sus objetivos comerciales. Nos comprometemos a ser líderes en el campo del desarrollo a medida, brindando soluciones innovadoras y adaptadas a las necesidades específicas de cada cliente, garantizando la continuidad del negocio y su satisfacción.
                </p>
              </div>

              {/* Columna 2: Imagen */}
              <div className="uk-width-1-3@m uk-flex-first">
                <img 
                  src="/images/about3.jpg" 
                  alt="Imagen misión empresarial" 
                  className="uk-align-center"
                  style={{ borderRadius: '8px' }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ----- SECCIÓN VISIÓN (DISEÑO CORREGIDO Y CONSISTENTE) ----- */}
        <section id="vision" className="uk-section uk-section-small" style={{ backgroundColor: '#f9f9f9' }}>
          <div className="uk-container">
            <div className="uk-grid uk-flex-middle" data-uk-grid>

              {/* Columna 1: Imagen */}
              <div className="uk-width-1-3@m">
                <img 
                  src="/images/about2.jpg" 
                  alt="Imagen visión empresarial" 
                  className="uk-align-center"
                  style={{ borderRadius: '8px' }}
                />
              </div>

              {/* Columna 2: Título y Texto juntos */}
              <div className="uk-width-expand@m">
                <div className="uk-section-title section-title">
                  <h2>Nuestra Visión</h2>
                  <div className="bar"></div>
                </div>
                <p className="uk-margin-medium-top" style={{ textAlign: 'justify' }}>
                  Convertirnos en líderes reconocidos a nivel nacional e internacional en desarrollo a medida y soporte de infraestructura, siendo el socio tecnológico preferido por las empresas. Aspiramos a establecer relaciones a largo plazo basadas en la confianza, la transparencia y la excelencia, impulsando la transformación digital de nuestros clientes en un mundo cada vez más conectado.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ----- SECCIÓN VALORES (DISEÑO CONSISTENTE) ----- */}
        <section id="valores" className="uk-section uk-section-small">
          <div className="uk-container">
            {/* Título centrado para la sección de tarjetas */}
            <div className="uk-section-title section-title uk-text-center" style={{ marginBottom: '40px' }}>
              <h2>Nuestros Valores</h2>
              <div className="bar"></div>
            </div>
            <div className="uk-grid uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-match" data-uk-grid>
              {valores.map((valor, index) => (
                <div key={index} className="uk-margin-bottom">
                    <div className="uk-card uk-card-default uk-card-body" style={{ borderRadius: "10px", height: '100%' }}>
                        <h4 style={{ marginBottom: "10px", color: "#0a0a0a" }}>{valor.titulo}</h4>
                        <p style={{ textAlign: "justify", margin: 0 }}>{valor.descripcion}</p>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
};

export default About;