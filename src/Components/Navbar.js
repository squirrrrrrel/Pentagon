import React from "react";

const Navbar = () => {
  return (
    <>
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
                src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67c12e6fe4a554a3012192a4_navbar_logo.svg"
                loading="eager"
                width="32"
                height="32"
                alt="Recruix"
                className="nav-image-logo-gram"
              />
              <img
                src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67c07e566d8e8be6771baf9f_footer_logo.svg"
                loading="eager"
                width="161"
                height="48"
                alt="Recruix"
                className="nav-image-logo-full"
              />
            </a>
            <nav role="navigation" className="nav-menu w-nav-menu">
              <a
                href="/"
                aria-current="page"
                className="nav-link w-nav-link w--current"
              >
                Discover
              </a>
              <a href="/" className="nav-link w-nav-link">
                For Companies
              </a>
              <a href="/pricing" className="nav-link w-nav-link">
                Pricing
              </a>
              <a href="/blog" className="nav-link w-nav-link">
                Blog
              </a>
              <a href="/" className="nav-link w-nav-link">
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
