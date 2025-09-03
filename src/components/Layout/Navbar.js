"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = ({ isScrolledParam = false }) => {
  const [isScrolled, setScrolled] = useState(isScrolledParam);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (isScrolledParam) {
      setScrolled(true);
      return;
    }

    const elementId = document.getElementById("navbar");
    if (!elementId) return;

    const handleScroll = () => {
      if (window.scrollY > 170) {
        setScrolled(true);
        elementId.classList.add("uk-sticky-fixed");
      } else {
        setScrolled(false);
        elementId.classList.remove("uk-sticky-fixed");
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolledParam]);


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
              <Image
                src={isScrolled ? "/images/logo2.png" : "/images/logo.png"}
                alt="Logo de Bitcode"
                width={200}
                height={45}
                style={{ objectFit: "contain" }}
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
                  <li>
                    <Link href="/about">Nosotros</Link>
                  </li>
                  <li>
                    <a href="https://app.bitcode.com.co" target="_blank" rel="noopener noreferrer">Ir a Ecorex</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* End Navbar Area */}

      {/* Start Mobile Navbar */}
      <div
        className={`mobile-navbar uk-mobile-navbar ${isActiveMobileNav ? "" : "show"}`}
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
              <li><Link href="/" onClick={handleToggleMobileNav}>Inicio</Link></li>
              <li><Link href="/services" onClick={handleToggleMobileNav}>Servicios</Link></li>
              <li><Link href="/products" onClick={handleToggleMobileNav}>Productos</Link></li>
              <li><Link href="/about" onClick={handleToggleMobileNav}>Sobre nosotros</Link></li>
              <li><a href="https://app.bitcode.com.co" target="_blank" rel="noopener noreferrer" onClick={handleToggleMobileNav}>Ir a Ecorex</a></li>
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