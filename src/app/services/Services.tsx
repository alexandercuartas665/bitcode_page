"use client";

import { FC } from "react";
import { Modal } from "@/components/Common/alerts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { servicesData } from "./ServicesIcons";
import Image from "next/image";

const Services: FC = () => {

  const openModalServices = (title: string, description: string, image: string) => {
    Modal(
      <>
        <h3>{title}</h3>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "fit-content", gap: 20 }}>
          <div style={{ width: "40%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src={image}
              alt={`Imagen del servicio ${title}`}
              style={{ width: "100%", height: "auto", objectFit: "contain" }} />
          </div>
          <div style={{ width: "60%" }}>
            <p style={{ textAlign: "left" }}>{description}</p>
          </div>
        </div>
      </>,
      {
        title: "",
        width: "700",
        showCloseButton: true,
        showConfirmButton: false,
      }
    );
  }

  return (
    <>
      <section id="services" className="services-area  uk-services uk-section">
        <div className="uk-container">
          <div className="uk-section-title section-title">
            <h2>Nuestros servicios</h2>
            <div className="bar"></div>
          </div>

          <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-3@m uk-child-width-1-2@s">

            {
              servicesData.map((service, index) => (
                <div key={index} className="item" onClick={() => openModalServices(service.name, service.desc, service.image)} style={{ cursor: "pointer" }}>
                  <div className="single-services" style={{ display: "flex", alignItems: "center" }}>
                    <div className="icon">
                      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                        <FontAwesomeIcon icon={service.icon} style={{ width: 40, height: 40 }} />
                      </div>
                    </div>
                    <h3>{service.name}</h3>

                    <i className="flaticon-right link-btn"></i>
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
