import React from "react";

const Cta = () => {
  return (
    <>
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
                  Ready to Transform Your HR Process?
                </h2>
                <p className="cta-description">
                  Say goodbye to manual work and hello to effortless HR
                  management. From hiring to payroll, we’ve got you covered—all
                  in one powerful platform.
                </p>
                <div className="cta-form w-form">
                  <form id="email-form" className="cta-form-wrapper">
                    <input
                      className="cta-text-field "
                      maxlength="256"
                      placeholder="Enter your email"
                      type="email"
                    />
                    <input type="submit" className="button primary w-button" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
