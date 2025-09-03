"use client";
import React from "react";
import Image from "next/image";

const clientLogos = [
  { src: "/images/clients/client-logo-1.png", alt: "Logo Cliente 1" },
  { src: "/images/clients/client-logo-2.png", alt: "Logo Cliente 2" },
  { src: "/images/clients/client-logo-3.png", alt: "Logo Cliente 3" },
  { src: "/images/clients/client-logo-4.png", alt: "Logo Cliente 4" },
  { src: "/images/clients/client-logo-5.png", alt: "Logo Cliente 5" },
  { src: "/images/clients/client-logo-6.png", alt: "Logo Cliente 6" },
  { src: "/images/clients/client-logo-7.png", alt: "Logo Cliente 7" },
  { src: "/images/clients/client-logo-8.png", alt: "Logo Cliente 8" },
  { src: "/images/clients/client-logo-9.png", alt: "Logo Cliente 9" },
  { src: "/images/clients/client-logo-10.png", alt: "Logo Cliente 10"},
];

const Clients = () => {
  return (
    <div className="clients-area-dynamic uk-section">
      <div className="uk-container">
        <div className="uk-section-title section-title uk-text-center">
          <h2>Confían en Nosotros</h2>
          <div className="bar"></div>
        </div>

        {/* --- INICIO DEL CARRUSEL DE CLIENTES MEJORADO --- */}
        <div data-uk-slider="autoplay: true; autoplay-interval: 3000; pause-on-hover: true;">
            <div className="uk-position-relative uk-visible-toggle" tabIndex="-1">
                <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-5@m uk-grid" data-uk-grid>
                  {clientLogos.map((logo, index) => (
                  <li key={index} className="uk-flex uk-flex-center">
                      <div className="client-logo-carousel-item">
                      <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={150}
                          height={60}
                          style={{ objectFit: 'contain' }}
                      />
                      </div>
                  </li>
                  ))}
              </ul>

                {/* Flechas de navegación del carrusel */}
                <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
                <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
            </div>
            
            {/* Puntos de navegación del carrusel */}
            <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
        {/* --- FIN DEL CARRUSEL DE CLIENTES MEJORADO --- */}
      </div>
    </div>
  );
};

export default Clients;