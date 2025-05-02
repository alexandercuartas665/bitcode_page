import React, { FC } from "react";

const valores = [
  {
    titulo: "Seguridad y Confiabilidad Tecnológica",
    descripcion:
      "Diseñamos soluciones con altos estándares de seguridad informática, garantizando la protección de datos, la estabilidad de los sistemas y la continuidad operativa de nuestros clientes.",
  },
  {
    titulo: "Experticia Técnica Especializada",
    descripcion:
      "Contamos con profesionales altamente capacitados en desarrollo de software, infraestructura TI y arquitecturas escalables para ofrecer soporte técnico eficiente y de alto nivel.",
  },
  {
    titulo: "Eficiencia Operativa y Automatización",
    descripcion:
      "Impulsamos la automatización de procesos empresariales mediante tecnologías ágiles, optimizando recursos, tiempos y costos para una mayor productividad digital.",
  },
  {
    titulo: "Innovación Continua",
    descripcion:
      "Adoptamos tecnologías de vanguardia como cloud computing, virtualización e integración de sistemas para impulsar la transformación digital de nuestros clientes.",
  },
  {
    titulo: "Personalización y Escalabilidad",
    descripcion:
      "Cada solución es diseñada a medida, alineada con los objetivos de negocio y preparada para escalar según las necesidades futuras del cliente.",
  },
  {
    titulo: "Compromiso con el Éxito del Cliente",
    descripcion:
      "Nos integramos como socios estratégicos, colaborando activamente para garantizar resultados concretos y retorno de inversión en tecnología.",
  },
  {
    titulo: "Cumplimiento, Ética y Transparencia",
    descripcion:
      "Operamos con integridad y responsabilidad, cumpliendo con las mejores prácticas del sector tecnológico y las normativas en protección de datos.",
  },
];

const Valores: FC = () => {
  return (
    <section id="valores" className="valores-area uk-section">
      <div className="uk-container">
        <div className="uk-section-title section-title">
          <h2>Valores Corporativos de Bitcode</h2>
          <div className="bar"></div>
        </div>

        <div className="uk-grid uk-child-width-1-2@m uk-child-width-1-1@s uk-grid-match" data-uk-grid>
          {valores.map((valor, index) => (
            <div key={index} className="uk-card uk-card-default uk-card-body" style={{ borderRadius: "10px" }}>
              <h4 style={{ marginBottom: "10px", color: "#0a0a0a" }}>
                <span style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: "#0052cc",
                  borderRadius: "50%",
                  marginRight: "10px",
                }}></span>
                {valor.titulo}
              </h4>
              <p style={{ textAlign: "justify", margin: 0 }}>{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valores;
