"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faPaintBrush, faCode, faRocket } from "@fortawesome/free-solid-svg-icons";

const Process = () => {
  return (
    <section className="process-section uk-section">
      <div className="uk-container">
        <div className="uk-section-title section-title uk-text-center">
          <h2>Nuestro Proceso</h2>
          <div className="bar"></div>
          <p className="section-subtitle" style={{ marginTop: '15px' }}>
            Una metodología clara y eficiente para garantizar el éxito de tu proyecto.
          </p>
        </div>

        <div className="uk-grid uk-grid-match uk-child-width-1-4@m uk-child-width-1-2@s" data-uk-grid>
          
          {/* Paso 1 */}
          <div className="uk-text-center">
            <div className="process-card">
              <div className="process-icon">
                <FontAwesomeIcon icon={faComments} />
                <span className="process-step">1</span>
              </div>
              <h3>Diagnóstico y Consultoría</h3>
              <p>Escuchamos y entendemos tus necesidades para definir juntos los objetivos del proyecto.</p>
            </div>
          </div>

          {/* Paso 2 */}
          <div className="uk-text-center">
            <div className="process-card">
              <div className="process-icon">
                <FontAwesomeIcon icon={faPaintBrush} />
                <span className="process-step">2</span>
              </div>
              <h3>Diseño y Desarrollo</h3>
              <p>Creamos la solución a medida, enfocados en una experiencia de usuario intuitiva y funcional.</p>
            </div>
          </div>

          {/* Paso 3 */}
          <div className="uk-text-center">
            <div className="process-card">
              <div className="process-icon">
                <FontAwesomeIcon icon={faCode} />
                <span className="process-step">3</span>
              </div>
              <h3>Implementación</h3>
              <p>Integramos la nueva solución en tu operación, asegurando una transición fluida y sin interrupciones.</p>
            </div>
          </div>

          {/* Paso 4 */}
          <div className="uk-text-center">
            <div className="process-card">
              <div className="process-icon">
                <FontAwesomeIcon icon={faRocket} />
                <span className="process-step">4</span>
              </div>
              <h3>Soporte y Crecimiento</h3>
              <p>Te acompañamos después del lanzamiento con soporte continuo y mejoras evolutivas.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;