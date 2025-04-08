"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer-area uk-dark uk-footer">
        <div className="uk-container">
          <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-4@m uk-child-width-1-2@s">
            <div className="item">
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image
                      src="/images/logo2.png"
                      alt="logo"
                      width={180}
                      height={20}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="single-footer-widget">
                <h3>Cali, Valle</h3>
                <div className="bar"></div>

                <ul className="contact-info">
                  <li>
                    <a href="mailto:info@gunter.com">comercial@bitcode.com.co</a>
                  </li>
                  <li>
                    <a href="tel:+573155202090 ">+57 315-5202090</a>
                  </li>
                  <li>
                    <a href="tel:+573217626882">+57 321-7626882</a>
                  </li>
                </ul>

                <ul className="social">
                  <li>
                    <a
                      href="https://www.facebook.com/bitcodesas"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="flaticon-logo"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a
                      href="https://twitter.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="flaticon-youtube"></i>
                    </a>
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/company/bitcodesas/posts/?feedView=all"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="flaticon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/bitcodesas/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="flaticon-logo-1"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="copyright-area">
            <div className="uk-grid uk-grid-match uk-grid-medium uk-child-width-1-2@m uk-child-width-1-2@s">
              <div className="item">
                <p>© BitCode. Todos los derechos reservados</p>
              </div>

              <div className="item">
                <ul>
                  <li>
                    <Link href="/terms-conditions">Terminos y Condiciones</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Politicas de privacidad</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="br-line"></div>
        <div className="footer-shape1">
          <Image
            src="/images/footer-shape1.png"
            alt="shape"
            width={140}
            height={173}
          />
        </div>
        <div className="footer-shape2">
          <Image
            src="/images/footer-shape2.png"
            alt="shape"
            width={188}
            height={182}
          />
        </div>
      </footer>
    </>
  );
};

export default Footer;
