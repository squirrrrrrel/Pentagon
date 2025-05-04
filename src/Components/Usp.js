import React from "react";
import { Fade } from "react-awesome-reveal";

const Usp = () => {
  return (
    <>
      <section className="section-usp">
        <div className="w-layout-blockcontainer container w-container">
          <div className="section-heading-wrapper">
            <Fade direction="up" triggerOnce="true">
              <div className="section-eyebrow">
                <div className="eyebrow dark">
                  <img
                    alt=""
                    src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67be9d8dc6d168040493a80a_icon_section_usp.svg"
                    loading="lazy"
                    className="eyebrow-icon"
                  />

                  <div className="eyebrow-text">Why Pentagon?</div>
                </div>
              </div>
            </Fade>
            <Fade direction="up" delay={20} triggerOnce="true">
              <h2 className="section-heading">
                Everything You Need to Transform Your Designs
              </h2>
              <p className="section-description inverted">
                With Pentagon, you have access to all the tools necessary to
                revolutionize your design process, from initial concept to final
                execution.
              </p>
            </Fade>
          </div>

          <div className="w-layout-grid usp-wrapper">
            <Fade direction="up" duration={400} triggerOnce="true">
              <div className="usp-card">
                <h3 className="usp-title">Seamless Collaboration</h3>
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67be9a3ab8698921ca015dcd_usp_1.webp"
                  loading="lazy"
                  alt=""
                  className="usp-image"
                />
              </div>
              <div className="usp-card">
                <h3 className="usp-title">Comprehensive Data Visualization</h3>
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67be9a3a24e4d57b7bc30493_usp_2.webp"
                  loading="lazy"
                  alt=""
                  className="usp-image"
                />
              </div>
              <div className="usp-card">
                <h3 className="usp-title">Customization Options</h3>
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67be9a3ae6c9fd615bd727d1_usp_3.webp"
                  loading="lazy"
                  alt=""
                  className="usp-image"
                />
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default Usp;
