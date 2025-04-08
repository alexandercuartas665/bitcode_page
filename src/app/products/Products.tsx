"use client";

import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { productsData } from "./ProductsIcons";

const Products: FC = () => {

  return (
    <>
      <section id="services" className="services-area  uk-services uk-section">
        <div className="uk-container">
          <div className="uk-section-title section-title">
            <h2>Nuestros productos</h2>
            <div className="bar"></div>
          </div>

          <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">
            {
              productsData.map((product, index) => (
                <div
                  key={`product-key-${index}`}
                  className="item"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <div className="services-box">
                    <Image
                      src={product.image}
                      alt="image"
                      width={380}
                      height={207}
                      style={{ minWidth: 380, minHeight: 207, width: 380, height: 207 }}
                    />

                    <div className="content">
                      <div className="icon">
                        <FontAwesomeIcon icon={product.icon} />
                      </div>
                      <h3>{product.name}</h3>
                    </div>

                    <div className="hover-content">
                      <div className="d-table">
                        <div className="d-table-cell">
                          <div className="inner">
                            <div className="icon">
                              <FontAwesomeIcon icon={product.icon} />
                            </div>
                            <h3>{product.name}</h3>
                            <p style={{ lineHeight: 1.2 }}>{product.desc}</p>
                          </div>
                        </div>
                      </div>
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
