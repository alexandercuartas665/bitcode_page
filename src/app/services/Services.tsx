// src/app/services/Services.tsx
"use client";

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servicesData } from "./ServicesIcons";
import Link from "next/link";

const Services: FC = () => {
  // --- NEW: Define WhatsApp URL and message ---
  const phoneNumber = "573155202090"; // Your WhatsApp number
  const message = "Hola, estoy interesado en sus servicios y me gustaría obtener más información."; // Pre-filled message
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <>
      <section id="services" className="services-area uk-section">
        <div className="uk-container">
          <div className="uk-section-title section-title uk-text-center">
            <h2>Nuestros Servicios</h2>
            <div className="bar"></div>
            <p className="section-subtitle" style={{ marginTop: '15px' }}>
              Soluciones integrales diseñadas para potenciar cada área de tu negocio.
            </p>
          </div>

          <div className="uk-grid uk-grid-match uk-grid-large uk-child-width-1-3@m uk-child-width-1-2@s" data-uk-grid>
            {
              servicesData.map((service, index) => (
                <div key={index}>
                  <div className="service-card-improved">
                    <div className="service-content">
                        <div className="icon">
                        <FontAwesomeIcon icon={service.icon} />
                        </div>
                        <h3>{service.name}</h3>
                        <p>{service.desc}</p>
                        
                        <ul className="subservices-list">
                        {service.subservices.map((subservice, subIndex) => (
                            <li key={subIndex}>{subservice}</li>
                        ))}
                        </ul>

                        {/* --- UPDATED: CTA now links to WhatsApp --- */}
                        <a 
                          href={whatsappUrl} 
                          className="cta-btn"
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                            ¡Cotiza ahora!
                        </a>
                    </div>
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