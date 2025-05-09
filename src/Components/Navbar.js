import React from "react";
import Marquee from "react-fast-marquee";
import "../css/Banner.css";
import logo from "../image/1.png";

const Navbar = () => {
  return (
    <>
      <Marquee className="top-navbar" speed={160}>
        <h6>Simplify Your Work in Just a Few Steps with Pentagon</h6>
        <h6>It is Best for you and your work</h6>
        <h6>Simplify Your Work in Just a Few Steps with Pentagon</h6>
        <h6>It is Best for you and your work</h6>
        <h6>Simplify Your Work in Just a Few Steps with Pentagon</h6>
        <h6>It is Best for you and your work</h6>
      </Marquee>
      <div
        data-animation="default"
        className="navbar w-nav"
        data-easing2="ease"
        data-easing="ease"
        data-collapse="small"
        role="banner"
        data-no-scroll="1"
        data-duration="400"
        data-doc-height="1"
      >
        <div className="container auto w-container">
          <div className="nav-island">
            <a
              href="/"
              aria-current="page"
              className="nav-brand-link w-nav-brand w--current"
            >
              <img
                src={logo}
                loading="eager"
                width="32"
                height="32"
                alt="Recruix"
                className="nav-image-logo-gram"
              />
              <img
                src={logo}
                loading="eager"
                width="161"
                height="48"
                alt="Recruix"
                className="nav-image-logo-full"
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a href="/" className="nav-link w-nav-link">
                Home
              </a>
              <a href="/pricing" className="nav-link w-nav-link">
                Pricing
              </a>
              <a href="/blog" className="nav-link w-nav-link">
                Blog
              </a>
              <a href="/signin" className="nav-link w-nav-link">
                Sign In
              </a>
              <div className="nav-button-wrapper">
                <a
                  href="#section-cta"
                  className="button primary small w-inline-block"
                >
                  <div className="button-inner">
                    <div className="button-text">Start for free</div>
                  </div>
                </a>
              </div>
            </nav>
            <div className="nav-menu-button w-nav-button">
              <div className="hamburger-wrapper">
                <div className="hamburger-line line-1"></div>
                <div className="hamburger-line line-2"></div>
                <div className="hamburger-line line-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
