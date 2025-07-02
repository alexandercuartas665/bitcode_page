// src/app/services/Services.tsx
"use client";

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servicesData } from "./ServicesIcons";

const Services: FC = () => {
  return (
    <>
      <section id="services" className="services-area uk-section">
        <div className="uk-container">
          <div className="uk-section-title section-title">
            <h2>Nuestros Servicios</h2>
            <div className="bar"></div>
          </div>

          {/* Se mantiene la grilla de UIkit para la responsividad */}
          <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s" data-uk-grid>
            {
              // Iteramos sobre los datos de los servicios para crear cada tarjeta
              servicesData.map((service, index) => (
                <div key={index} className="uk-margin-bottom">

                  {/* -- NUEVA TARJETA DE SERVICIO -- */}
                  <div className="service-card">
                    <div className="icon">
                      <FontAwesomeIcon icon={service.icon} />
                    </div>
                    <h3>{service.name}</h3>
                    <p>{service.desc}</p>
                  </div>

                </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;