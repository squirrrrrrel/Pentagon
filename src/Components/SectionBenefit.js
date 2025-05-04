import React from "react";
import { Fade } from "react-awesome-reveal";

const SectionBenefit = () => {
  return (
    <>
      <section className="section-benefit">
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
                  <div className="eyebrow-text">Key Benefits</div>
                </div>
              </Fade>
            </div>
            <Fade direction="up" triggerOnce="true">
              <h2 className="section-heading">
                Experience Cutting-Edge Design with Pentago
              </h2>
              <p className="section-description">
                Welcome to Pentagon, where design meets immersive 3D reality.
                Empower architects and clients with seamless, collaborative
                tools for reimagining spaces.
              </p>
            </Fade>
          </div>

          <div className="w-layout-grid benefit-grid">
            <Fade direction="up">
              <div className="benefit-card">
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bde1f82aa014b6c07f624c_icon_benefit_1.svg"
                  loading="lazy"
                  alt=""
                  className="benefit-icon"
                />
                <h3 className="benefit-card-title">
                  Seamless Image to 3D Conversion
                </h3>
                <p className="benefit-description">
                  Effortlessly upload your 2D layouts or photos. Watch as
                  Pentagon's advanced technology transforms them into
                  breathtaking 3D environments, fully interactive and ready for
                  exploration.
                </p>
              </div>
              <div className="benefit-card">
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bde1f8bb8ed51e14598128_icon_benefit_2.svg"
                  loading="lazy"
                  alt=""
                  className="benefit-icon"
                />
                <h3 className="benefit-card-title">
                  Customization and Flexibility
                </h3>
                <p className="benefit-description">
                  Personalize every aspect of the design. Experiment with
                  diverse materials, color palettes, and furniture placements to
                  craft spaces that align perfectly with individual tastes and
                  visions.
                </p>
              </div>
              <div className="benefit-card">
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bde1f8de806ff7538712b1_icon_benefit_3.svg"
                  loading="lazy"
                  alt=""
                  className="benefit-icon"
                />
                <h3 className="benefit-card-title">Multi-Device Access</h3>
                <p className="benefit-description">
                  Maintain project momentum wherever you are. Access design
                  projects with ease, whether you're on a desktop or mobile
                  device, ensuring ultimate flexibility and convenience.
                </p>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="benefit-card">
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bde1f83ad5b4a19101931c_icon_benefit_4.svg"
                  loading="lazy"
                  alt=""
                  className="benefit-icon"
                />
                <h3 className="benefit-card-title">
                  Client-Centric Visualization
                </h3>
                <p className="benefit-description">
                  Deliver true-to-life virtual experiences. Allow clients to
                  walk through potential designs of their homes or office
                  interiors in virtual reality, simplifying comprehension and
                  enhancing appreciation of your creative concepts.
                </p>
              </div>
              <div className="benefit-card">
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bde1f8026c0289139606cb_icon_benefit_5.svg"
                  loading="lazy"
                  alt=""
                  className="benefit-icon"
                />
                <h3 className="benefit-card-title">
                  Collaboration and Sharing
                </h3>
                <p className="benefit-description">
                  Boost teamwork and client engagement. Utilize tools designed
                  for real-time design reviews and modifications. Share projects
                  with clients and stakeholders seamlessly for instant feedback
                  and streamlined approvals.
                </p>
              </div>

              <div className="benefit-card">
                <img
                  src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67bde1f85e5ea08634318204_icon_benefit_6.svg"
                  loading="lazy"
                  alt=""
                  className="benefit-icon"
                />
                <h3 className="benefit-card-title">Secure and Private</h3>
                <p className="benefit-description">
                  Trust in Pentagon’s commitment to security. Our robust
                  measures protect sensitive information and guarantee
                  confidentiality in all client interactions, keeping your data
                  safe.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionBenefit;
