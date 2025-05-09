import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../image/67bdc9aa213636727abc5435_client_logo_2.jpg";

import "../css/Banner.css";
import { Fade } from "react-awesome-reveal";
const Banner = () => {
  return (
    <>
      <section id="section-hero" className="section-hero">
        <div className="w-layout-blockcontainer container w-container">
          <div className="hero-wrapper">
            <Fade direction="down">
              <div className="w-layout-blockcontainer container w-container">
                <div className="section-heading-wrapper">
                  <div className="section-eyebrow">
                    <Fade direction="up" triggerOnce="true">
                      <div className="eyebrow">
                        <img
                          src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bddd3e572a0851c9e7856b_icon_lightning_color.svg"
                          loading="lazy"
                          alt=""
                          className="eyebrow-icon"
                        />
                        <div className="eyebrow-text">Pentagon</div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
              <h1 className="hero-heading" id="heading">
                Pentagon: Experience Space Like Never Before
              </h1>
            </Fade>
            <Fade direction="up" delay={15}>
              <p className="hero-paragraph">
                Our platform utilizes cutting-edge virtual reality technology to
                transform 2D images into breathtaking 3D models, offering
                clients a truly immersive preview of their envisioned spaces.
              </p>
            </Fade>

            <Fade direction="up">
              <div className="w-layout-hflex hero-button-wrapper">
                <a
                  href="#section-cta"
                  className="button primary w-inline-block"
                >
                  <div className="button-inner">
                    <img
                      src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bddd3f687ef86c98ec3d14_icon_lightning_white.svg"
                      loading="lazy"
                      alt=""
                      className="button-image"
                    />
                    <div className="button-text">Find your next hire</div>
                  </div>
                </a>
                <a
                  href="#section-cta"
                  className="button secondary w-inline-block"
                >
                  <div className="button-inner">
                    <div className="button-text secondary">
                      Find your next job
                    </div>
                  </div>
                </a>
              </div>
            </Fade>
            <Fade direction="up" triggerOnce="true">
              <div className="hero-image-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67cf82ac56ca9dcf0b916365_hero_main_image.webp"
                  loading="eager"
                  width="1128"
                  height="756"
                  alt="Hero dashboard"
                  className="hero-image"
                />
              </div>
            </Fade>
          </div>
        </div>

        <div>
          <Marquee speed={100} direction="left" className="banner-img">
            <img src={img1} alt="error" />
            <img src={img1} alt="error" />
            <img src={img1} alt="error" />
            <img src={img1} alt="error" />
            <img src={img1} alt="error" />
            <img src={img1} alt="error" />
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default Banner;
