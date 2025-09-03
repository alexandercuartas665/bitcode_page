"use client";
import React from "react";

const FinalCTA = () => {
  // Usamos el mismo enlace de WhatsApp para mantener la coherencia
  const phoneNumber = "573155202090";
  const message = "Hola, estoy listo para llevar mi empresa al siguiente nivel y me gustaría una asesoría.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section className="final-cta-area uk-section">
      <div className="uk-container">
        <div className="uk-grid uk-flex-center">
          <div className="uk-width-3-4@m uk-text-center">
            <div className="cta-content">
              <h2>¿Listo para llevar tu empresa al siguiente nivel?</h2>
              <p>
                Hablemos de tus ideas y de cómo nuestra tecnología puede ayudarte a alcanzar tus objetivos. <br />
                La primera asesoría no tiene costo.
              </p>
              <a 
                href={whatsappUrl} 
                className="uk-button uk-button-primary uk-button-large"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Contactar a un Asesor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;