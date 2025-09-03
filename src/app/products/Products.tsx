// src/app/products/Products.tsx
"use client";

import { FC } from "react";
import Image from "next/image";
import { productsData } from "./ProductsIcons";

const Products: FC = () => {
  const phoneNumber = "573155202090";
  const message = "Hola, estoy interesado en sus productos y me gustaría obtener más información.";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <>
      <section id="products" className="products-area uk-section bg-f9f9f9">
        <div className="uk-container">
          <div className="uk-section-title section-title uk-text-center">
            <h2>Nuestros Productos</h2>
            <div className="bar"></div>
            <p className="section-subtitle" style={{ marginTop: '15px' }}>
              Equipos, licenciamiento y soluciones de hardware para fortalecer tu infraestructura.
            </p>
          </div>
        </div>

        {/* --- INICIO DEL CARRUSEL DE PRODUCTOS --- */}
        <div className="uk-container">
            <div data-uk-slider="autoplay: true; autoplay-interval: 4000; pause-on-hover: true;">
                <div className="uk-position-relative uk-visible-toggle" tabIndex={-1}>
                    <ul className="uk-slider-items uk-child-width-1-2@s uk-child-width-1-3@m uk-grid" data-uk-grid>
                        {productsData.map((product, index) => (
                        <li key={`product-key-${index}`} className="uk-flex uk-flex-stretch">
                            <div className="product-card-simple">
                                <div className="product-image-container">
                                    <Image
                                    src={product.image}
                                    alt={`Imagen de ${product.name}`}
                                    width={380}
                                    height={250}
                                    />
                                </div>
                                <div className="product-content-simple">
                                    <h3>{product.name}</h3>
                                    <button className="uk-button uk-button-default" type="button" data-uk-toggle={`target: #modal-product-${index}`}>
                                    Ver Detalles
                                    </button>
                                </div>
                            </div>

                            {/* --- MODAL (SIN CAMBIOS) --- */}
                            <div id={`modal-product-${index}`} className="uk-flex-top" data-uk-modal>
                                <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical product-modal-content">
                                    <button className="uk-modal-close-default" type="button" data-uk-close></button>
                                    <Image
                                        src={product.image}
                                        alt={`Imagen de ${product.name}`}
                                        width={800}
                                        height={400}
                                        className="modal-image"
                                    />
                                    <h2 className="uk-modal-title">{product.name}</h2>
                                    <p>{product.desc}</p>
                                    <a 
                                        href={whatsappUrl} 
                                        className="cta-btn"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Solicitar Cotización
                                    </a>
                                </div>
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
        </div>
        {/* --- FIN DEL CARRUSEL DE PRODUCTOS --- */}
      </section>
    </>
  );
};

export default Products;