"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ isScrolledParam = false }) => {
  const [isScrolled, setScrolled] = useState(isScrolledParam);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");

    if (isScrolledParam) {
      setScrolled(true);
      elementId.classList.add("uk-sticky-fixed");
    } else {
      document.addEventListener("scroll", () => {
        if (window.scrollY > 170) {
          setScrolled(true);
          elementId.classList.add("uk-sticky-fixed");
        } else {
          setScrolled(false);
          elementId.classList.remove("uk-sticky-fixed");
        }
      });
    }
  });

  const [isActiveMobileNav, setActiveMobileNav] = useState("false");
  const handleToggleMobileNav = () => {
    setActiveMobileNav(!isActiveMobileNav);
  };

  return (
    <>
      {/* Start Navbar Area */}
      <header id="navbar" className="header-area uk-dark">
        <div className="uk-container">
          <div className="uk-navbar" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Link href="/">
              <img
                src={isScrolled ? "/images/logo2.png" : "/images/logo.png"}
                alt="Logo de Bitcode"
                style={{ width: 200, height: "auto", objectFit: "contain" }}
                className="logoHeader"
              />
            </Link>

            <div
              className="uk-navbar-toggle"
              id="navbar-toggle"
              onClick={handleToggleMobileNav}
              style={{ top: "unset", height: "100%" }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="navbar uk-navbar-right">
              <nav className="uk-navbar-container">
                <ul className="uk-navbar-nav">
                  <li>
                    <Link href="/">Inicio</Link>
                  </li>

                  <li>
                    <Link href="/services">Servicios</Link>
                  </li>

                  <li>
                    <Link href="/products">Productos</Link>
                  </li>

                  {/* <li
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                    style={{ position: 'relative' }}
                  >
                    <Link href="#">Sobre nosotros</Link>
                    <div style={{
                      display: isDropdownOpen ? 'block' : 'none',
                      position: 'absolute',
                      top: '100%',
                      left: '-25%',
                      right: '50%',
                      background: '#fff',
                      border: '1px solid #ccc',
                      boxShadow: '0 2px 4px rgba(0,0,0,.1)',
                      borderRadius: '5px',
                      width: 150,
                      zIndex: '100',
                      padding: "20px 10px",
                    }}>
                      <ul className="uk-nav uk-navbar-dropdown-nav">
                        <li>
                          <Link href="/mision" style={{ color: "black" }}>Misión</Link>
                        </li>
                        <li>
                          <Link href="/valores" style={{ color: "black" }}>Valores</Link>
                        </li>
                        <li>
                          <Link href="/vision" style={{ color: "black" }}>Visión</Link>
                        </li>
                      </ul>
                    </div>
                  </li> */}

                  <li>
                    <Link href="/about">Nosotros</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contacto</Link>
                  </li>

                  <li>
                  <a href="https://app.bitcode.com.co" target="_blank" rel="noopener noreferrer">Ir a Ecorex</a>
                  </li>

                </ul>
              </nav>

              {/* <div className="lang">
                <form>
                  <div>
                    <select>
                      <option value="eng">En</option>
                      <option value="ge">Ge</option>
                    </select>
                  </div>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </header>
      {/* End Navbar Area */}

      {/* Start Mobile Navbar */}
      <div
        className={`mobile-navbar uk-mobile-navbar ${isActiveMobileNav ? "" : "show"
          }`}
      >
        <div className="uk-offcanvas-bar">
          <button
            className="uk-offcanvas-close"
            type="button"
            uk-close="true"
            onClick={handleToggleMobileNav}
          >
            <i className="bx bx-x"></i>
          </button>

          <nav className="uk-navbar-container">
            <ul className="uk-navbar-nav">
              <li>
                <Link href="/" onClick={handleToggleMobileNav}>
                  Inicio
                </Link>
              </li>

              <li>
                <Link href="/services" onClick={handleToggleMobileNav}>Servicios</Link>
              </li>

              <li>
                <Link href="/products" onClick={handleToggleMobileNav}>Productos</Link>
              </li>

              <li>
                <Link href="/about" onClick={handleToggleMobileNav}>Sobre nosotros</Link>
              </li>

              <li>
                <Link href="/contact" onClick={handleToggleMobileNav}>Contacto</Link>
              </li>
              <li>
                <a href="https://app.bitcode.com.co" target="_blank" rel="noopener noreferrer" onClick={handleToggleMobileNav}>Ir a Ecorex</a>
              </li>
              
            </ul>
          </nav>
        </div>

        <div className="close-btn" onClick={handleToggleMobileNav}></div>
      </div>
      {/* End Mobile Navbar */}
    </>
  );
};

export default Navbar;
