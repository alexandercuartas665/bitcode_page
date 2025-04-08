import React, { FC } from "react";
import Image from "next/image";

const Valores: FC = () => {
  return (
    <section
      id="contact"
      className="contact-area uk-contact uk-section"
    >
      <div className="uk-container">
        <div className="uk-section-title section-title">
          <h2>Bitcode Valores</h2>
        </div>

        <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-1@s">
          <div className="item">
            <img src="/images/about2.jpg" alt="Imagen valor empresarial" style={{ width: 380, height: "auto", objectFit: "contain" }} />
          </div>

          <div className="item">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsam eveniet ullam cumque provident, minus id? Iusto animi, at expedita alias odit porro deserunt minima rem a voluptas dignissimos incidunt?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Valores;
