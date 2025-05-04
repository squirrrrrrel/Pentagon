import React from "react";

const SectionFlow = () => {
  return (
    <>
      <section className="section-flow">
        <div className="w-layout-blockcontainer container w-container">
          <div className="flow-outer-wrapper">
            <div className="flow-inner-wrapper">
              <div className="section-heading-wrapper">
                <div className="section-eyebrow">
                  <div className="eyebrow">
                    <img
                      src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67be8c3547bf35f8d56d2703_icon_section_flow.svg"
                      loading="lazy"
                      alt=""
                      className="eyebrow-icon"
                    />
                    <div className="eyebrow-text">How it Works</div>
                  </div>
                </div>
                <h2 className="section-heading">
                  Simplify Your Work in Just a Few Steps with Pentagon
                </h2>
                <p className="section-description">
                  Unlock efficiency and ease with Pentagon, designed to
                  streamline your workflow and boost productivity effortlessly.
                </p>
              </div>
              <div className="timeline-wrapper">
                <div className="timeline">
                  <div className="timeline-indicator-wrapper">
                    <div className="timeline-number-wrapper">
                      <div className="timeline-number">1</div>
                    </div>
                    <div className="timeline-path right"></div>
                    <div className="timeline-indicator-mask"></div>
                  </div>
                  <div className="timeline-content-wrapper">
                    <div className="timeline-title"> Upload Your Design</div>
                    <div className="timeline-subtitle">
                      Begin by easily uploading your 2D layouts or photos,
                      setting the stage for transformation.
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-indicator-wrapper">
                    <div className="timeline-number-wrapper">
                      <div className="timeline-number">2</div>
                    </div>
                    <div className="timeline-path left"></div>
                    <div className="timeline-path right"></div>
                    <div className="timeline-indicator-mask"></div>
                  </div>
                  <div className="timeline-content-wrapper">
                    <div className="timeline-title">Transform to 3D</div>
                    <div className="timeline-subtitle">
                      Pentagon converts your designs into vibrant, interactive
                      3D models, ready for exploration and enhancement.
                    </div>
                  </div>
                </div>
                <div className="timeline">
                  <div className="timeline-indicator-wrapper">
                    <div className="timeline-number-wrapper">
                      <div className="timeline-number">3</div>
                    </div>
                    <div className="timeline-path left"></div>
                    <div className="timeline-indicator-mask"></div>
                  </div>
                  <div className="timeline-content-wrapper">
                    <div className="timeline-title">Collaborate and Refine</div>
                    <div className="timeline-subtitle">
                      Engage with your team and clients through real-time
                      collaboration.
                    </div>
                  </div>
                </div>
                <div className="timeline-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionFlow;
