import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../image/67bdc9aa213636727abc5435_client_logo_2.jpg";

import "../css/Banner.css";
const Banner = () => {
  return (
    <>
      <section id="section-hero" className="section-hero">
        <div className="w-layout-blockcontainer container w-container">
          <div className="hero-wrapper">
            <a
              href="#section-cta"
              className="hero-badge-wrapper w-inline-block"
            >
              <div className="hero-badge-inner">
                <div className="hero-badge-text">Recruix 2025 Release</div>
              </div>
              <div className="hero-badge-text">Join to waitlist</div>
              <div className="hero-badge-icon-wrapper">
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bdd629beb4c3588da5f24c_icon_badge_tail.svg"
                  loading="lazy"
                  alt="Arrow right"
                  className="hero-badge-icon"
                />
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bdd629beb4c3588da5f24c_icon_badge_tail.svg"
                  loading="lazy"
                  alt="Arrow right"
                  className="hero-badge-icon"
                />
              </div>
            </a>
            <h1 className="hero-heading">
              Streamline Your Hiring and HR Processess
            </h1>
            <p className="hero-paragraph">
              Manage job postings, track applicants, and enhance employee
              experience—all in one place.
            </p>
            <div className="w-layout-hflex hero-button-wrapper">
              <a href="#section-cta" className="button primary w-inline-block">
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
