// src/app/products/Products.tsx
"use client";

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { productsData } from "./ProductsIcons";

const Products: FC = () => {
  return (
    <>
      {/* CAMBIO: Se ajusta el id y la clase para mayor claridad */}
      <section id="products" className="products-area uk-section">
        <div className="uk-container">
          <div className="uk-section-title section-title">
            <h2>Nuestros Productos</h2>
            <div className="bar"></div>
          </div>

          <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s" data-uk-grid>
            {
              productsData.map((product, index) => (
                <div
                  key={`product-key-${index}`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  {/* -- NUEVA TARJETA DE PRODUCTO -- */}
                  <div className="product-card">
                    <div className="product-card-image">
                      <Image
                        src={product.image}
                        alt={`Imagen de ${product.name}`}
                        width={380}
                        height={207}
                      />
                    </div>
                    <div className="product-card-content">
                      <div className="icon">
                        <FontAwesomeIcon icon={product.icon} />
                      </div>
                      <h3>{product.name}</h3>
                      <p>{product.desc}</p>
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

export default Products;