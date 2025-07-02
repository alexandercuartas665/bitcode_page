// src/components/Common/WhatsAppButton.tsx
"use client";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const phoneNumber = "573155202090";
  const message = "Hola, estoy interesado en sus servicios y quisiera más información.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    // Contenedor principal para posicionar todo el conjunto
    <div className="whatsapp-container">

      {/* La burbuja de texto ahora es persistente */}
      <div className="whatsapp-persistent-tooltip">
        ¿Dudas? ¡Escríbenos!
      </div>

      {/* El botón de WhatsApp como tal */}
      <a
        href={whatsappUrl}
        className="whatsapp-float-button"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      </a>

    </div>
  );
};

export default WhatsAppButton;