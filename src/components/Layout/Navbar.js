"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = ({ isScrolledParam = false }) => {
  const pathname = usePathname();
  const [isScrolled, setScrolled] = useState(isScrolledParam);

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
          <div className="uk-navbar">
            <div className="logo uk-navbar-left">
              <Link href="/">
                <Image
                  src={isScrolled ? "/images/logo2.png" : "/images/logo.png"}
                  alt="logo"
                  width={130}
                  height={27}
                />
              </Link>
            </div>

            <div
              className="uk-navbar-toggle"
              id="navbar-toggle"
              onClick={handleToggleMobileNav}
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
                    <AnchorLink offset={() => 100} href="#about">
                      About
                    </AnchorLink>
                  </li>

                  <li>
                    <AnchorLink href="#services" offset={() => 100}>
                      Services
                    </AnchorLink>
                  </li>

                  <li>
                    <AnchorLink href="#project" offset={() => 100}>
                      Project
                    </AnchorLink>
                  </li>

                  <li>
                    <AnchorLink href="#clients" offset={() => 100}>
                      Clients
                    </AnchorLink>
                  </li>

                  <li>
                    <Link href="/mision">Misión</Link>
                  </li>

                  <li>
                    <Link href="/vision">Visión</Link>
                  </li>

                  <li>
                    <Link href="/contact">Contacto</Link>
                  </li>
                </ul>
              </nav>

              <div className="lang">
                <form>
                  <div>
                    <select>
                      <option value="eng">En</option>
                      <option value="ge">Ge</option>
                    </select>
                  </div>
                </form>
              </div>
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
                <AnchorLink
                  offset={() => 100}
                  href="#about"
                  onClick={handleToggleMobileNav}
                >
                  About
                </AnchorLink>
              </li>

              <li>
                <AnchorLink
                  offset={() => 100}
                  href="#services"
                  onClick={handleToggleMobileNav}
                >
                  Services
                </AnchorLink>
              </li>

              <li>
                <AnchorLink
                  offset={() => 100}
                  href="#project"
                  onClick={handleToggleMobileNav}
                >
                  Project
                </AnchorLink>
              </li>

              <li>
                <AnchorLink
                  offset={() => 100}
                  href="#clients"
                  onClick={handleToggleMobileNav}
                >
                  Clients
                </AnchorLink>
              </li>

              <li>
                <Link href="/mision" onClick={handleToggleMobileNav}>Misión</Link>
              </li>

              <li>
                <Link href="/vision" onClick={handleToggleMobileNav}>Visión</Link>
              </li>

              <li>
                <Link href="/contact" onClick={handleToggleMobileNav}>Contacto</Link>
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
