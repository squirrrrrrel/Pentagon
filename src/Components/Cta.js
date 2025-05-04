import React from "react";
import { Fade } from "react-awesome-reveal";

const Cta = () => {
  return (
    <>
      <Fade duration={1500}>
        <section id="section-cta">
          <div className="w-layout-blockcontainer container full w-container">
            <div className="cta-wrapper">
              <div className="cta-card">
                <div className="section-heading-wrapper">
                  <img
                    src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bf0fe3829be43edd994cde_cta_logo.svg"
                    loading="lazy"
                    alt="Recruix logo"
                    className="cta-logo"
                  />
                  <h2 className="cta-heading">
                    Ready to Transform Your Design Process with Pentagon?
                  </h2>
                  <p className="cta-description">
                    Discover how Pentagon can revolutionize the way you approach
                    interior design. Our platform integrates cutting-edge
                    technology to elevate your projects and streamline your
                    workflows.
                  </p>
                  <div className="cta-form ">
                    <form className="cta-form-wrapper">
                      <input
                        className="cta-text-field "
                        maxlength="256"
                        placeholder="Enter your email"
                        type="email"
                      />
                      <input
                        type="submit"
                        data-wait="Please wait..."
                        class="button primary w-button"
                        value="Register Now"
                      />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default Cta;
