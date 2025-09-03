"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const Banner = () => {
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[
          "https://www.youtube.com/embed/bk7McNUjWgw?si=Lm-1mWF6GZoBgWL5",
        ]}
      />

      <div
        id="home"
        className="uk-banner main-banner"
        style={{ backgroundImage: `url(/images/man1.png)` }}
      >
        {/* La capa de superposición ha sido eliminada */}
        
        <div className="d-table">
          <div className="d-table-cell">
            <div className="uk-container">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  Innovación Tecnológica para Impulsar tu Negocio
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  Tu aliado estratégico en transformación digital, brindadote soluciones de software e infraestructura TI innovadoras y escalables 📈
                  <br></br> 
                  Optimizamos procesos y potenciamos el crecimiento de tu empresa 🚀
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <Link href="/contact" className="uk-button uk-button-primary">
                    Solicita una Asesoría
                  </Link>
                  <Link href="/services" className="uk-button uk-button-default" style={{ marginLeft: '10px' }}>
                    Nuestros Servicios
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;