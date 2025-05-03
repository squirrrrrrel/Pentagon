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

                  <div className="eyebrow-text">Why Recruix?</div>
                </div>
              </div>
            </Fade>
            <Fade direction="up" delay={20} triggerOnce="true">
              <h2 className="section-heading">
                Everything You Need for Smarter HR Management
              </h2>
              <p className="section-description inverted">
                Our platform simplifies hiring, onboarding, and employee
                management—so you can focus on what truly matters: growing your
                team.
              </p>
            </Fade>
          </div>

          <div className="w-layout-grid usp-wrapper">
            <Fade direction="up" duration={400} triggerOnce="true">
              <div className="usp-card">
                <h3 className="usp-title">AI-Driven Candidate Matching</h3>
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67be9a3ab8698921ca015dcd_usp_1.webp"
                  loading="lazy"
                  alt=""
                  className="usp-image"
                />
              </div>
              <div className="usp-card">
                <h3 className="usp-title">Advanced Human Resource Analytics</h3>
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67be9a3a24e4d57b7bc30493_usp_2.webp"
                  loading="lazy"
                  alt=""
                  className="usp-image"
                />
              </div>
              <div className="usp-card">
                <h3 className="usp-title">Centralized Employee Hub</h3>
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
