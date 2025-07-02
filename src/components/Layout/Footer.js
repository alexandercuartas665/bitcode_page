// src/components/Layout/Footer.js
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  // Obtenemos el año actual para el copyright
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area uk-dark uk-footer">
        <div className="uk-container">
          {/* -- NUEVA ESTRUCTURA DE 4 COLUMNAS -- */}
          <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">

            {/* Columna 1: Acerca de Bitcode */}
            <div className="item">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo2.png"
                      alt="Bitcode Logo"
                      width={180}
                      height={20}
                    />
                  </Link>
                </div>
                <p className="uk-margin-top" style={{ color: '#ccc' }}>
                  Tu aliado estratégico en transformación digital 🚀
                </p>
              </div>
            </div>

            {/* Columna 2: Enlaces Rápidos */}
            <div className="item">
              <div className="single-footer-widget">
                <h3>Enlaces Rápidos</h3>
                <div className="bar"></div>
                <ul className="footer-quick-links">
                  <li><Link href="/">Inicio</Link></li>
                  <li><Link href="/services">Servicios</Link></li>
                  <li><Link href="/products">Productos</Link></li>
                  <li><Link href="/about">Nosotros</Link></li>
                </ul>
              </div>
            </div>

            {/* Columna 3: Contacto */}
            <div className="item">
              <div className="single-footer-widget">
                <h3>Contacto</h3>
                <div className="bar"></div>
                <ul className="contact-info">
                  <li>Cali, Valle del Cauca</li>
                  <li><a href="mailto:comercial@bitcode.com.co">comercial@bitcode.com.co</a></li>
                  <li><a href="tel:+573155202090">+57 315-520-2090</a></li>
                  <li><a href="tel:+573217626882">+57 321-762-6882</a></li>
                </ul>
              </div>
            </div>

            {/* Columna 4: Redes Sociales */}
            <div className="item">
              <div className="single-footer-widget">
                <h3>Síguenos</h3>
                <div className="bar"></div>
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/bitcodesas" rel="noopener noreferrer" target="_blank" aria-label="Facebook">
                      <i className="flaticon-logo"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/bitcodesas/" rel="noopener noreferrer" target="_blank" aria-label="LinkedIn">
                      <i className="flaticon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/bitcodesas/" rel="noopener noreferrer" target="_blank" aria-label="Instagram">
                      <i className="flaticon-logo-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* -- COPYRIGHT AREA MEJORADA -- */}
          <div className="copyright-area">
            <p className="uk-text-center">
              © {currentYear} BitCode. Todos los derechos reservados. | <Link href="/privacy-policy">Políticas de Privacidad</Link>
            </p>
          </div>
        </div>

        {/* Formas decorativas del footer (se mantienen) */}
        <div className="br-line"></div>
        <div className="footer-shape1">
          <Image src="/images/footer-shape1.png" alt="shape" width={140} height={173} />
        </div>
        <div className="footer-shape2">
          <Image src="/images/footer-shape2.png" alt="shape" width={188} height={182} />
        </div>
      </footer>
    </>
  );
};

export default Footer;