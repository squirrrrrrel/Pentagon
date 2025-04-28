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
                  Simplify Hiring &amp; HR Management in Just a Few Steps
                </h2>
                <p className="section-description">
                  From posting jobs to managing employees—our platform makes
                  every step effortless.
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
                    <div className="timeline-title">Create Job Listing</div>
                    <div className="timeline-subtitle">
                      Post open positions and set hiring preferences.
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
                    <div className="timeline-title">Manage Applicantions</div>
                    <div className="timeline-subtitle">
                      Track candidate progress and schedule interviews.
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
                    <div className="timeline-title">
                      Streamline HR Operations
                    </div>
                    <div className="timeline-subtitle">
                      Maintain employee records and streamline payroll.
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
