"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const Patrocinadores = () => {
  return (
    <>
      <div className="partner-area uk-section">
        <div className="uk-container">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 6500,
              pauseOnMouseEnter: true,
              disableOnInteraction: true,
            }}
            modules={[Autoplay]}
            className="partner-slides"
          >
            <SwiperSlide className="item">
              <Image
                src="/images/partner-white-one.png"
                alt="Partner"
                width={140}
                height={30}
              />
            </SwiperSlide>

            <SwiperSlide className="item">
              <Image
                src="/images/partner-white-two.png"
                alt="Partner"
                width={140}
                height={30}
              />
            </SwiperSlide>

            <SwiperSlide className="item">
              <Image
                src="/images/partner-white-three.png"
                alt="Partner"
                width={140}
                height={30}
              />
            </SwiperSlide>

            <SwiperSlide className="item">
              <Image
                src="/images/partner-white-four.png"
                alt="Partner"
                width={140}
                height={30}
              />
            </SwiperSlide>

            <SwiperSlide className="item">
              <Image
                src="/images/partner-white-five.png"
                alt="Partner"
                width={140}
                height={30}
              />
            </SwiperSlide>

            <SwiperSlide className="item">
              <Image
                src="/images/partner-white-six.png"
                alt="Partner"
                width={140}
                height={30}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Patrocinadores;
