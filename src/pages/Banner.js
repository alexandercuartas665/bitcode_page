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
                  Trusted Digital <br /> agency
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  We have built trust by delivering the best results for
                  clients! Our team is focussed on meeting your online business
                  ultimate targets! Let’s try with us!
                </p>

                <div
                  style={{ display: "flex", alignItems: "center" }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-once="true"
                  data-aos-duration="1000"
                >
                  <Link href="#contact" className="uk-button uk-button-default">
                    Get Started
                  </Link>

                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    <i className="bx bx-play"></i> Watch Video
                  </div>
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
