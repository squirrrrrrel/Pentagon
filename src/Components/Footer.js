import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="footer-upper">
          <div className="w-layout-blockcontainer container w-container">
            <div className="footer-upper-wrapper">
              <div className="footer-block main">
                <a href="#footer" className="footer-logo-link w-inline-block">
                  <img
                    src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67c07e566d8e8be6771baf9f_footer_logo.svg"
                    loading="lazy"
                    alt="Recruix logo"
                    className="footer-logo"
                  />
                </a>
                <p className="footer-description">
                  Manage job postings, track applicants, and enhance employee
                  experience—all in one place.
                </p>
                <div className="footer-social-block">
                  <a
                    aria-label="Facebook"
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="footer-social-link w-inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      app="ikonik"
                      className="social-icon"
                    >
                      <defs app="ikonik">
                        <clipPath app="ikonik">
                          <rect
                            width="24"
                            height="24"
                            fill="currentColor"
                            app="ikonik"
                            className="rect-4ej51l"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#clip0_405_248)" app="ikonik">
                        <path
                          d="M17.5845 13.5L18.2512 9.15673H14.0835V6.33823C14.0835 5.15023 14.6655 3.99148 16.5322 3.99148H18.4267V0.293982C18.4267 0.293982 16.7077 0.000732422 15.0637 0.000732422C11.6317 0.000732422 9.38849 2.08123 9.38849 5.84698V9.15748H5.57324V13.5007H9.38849V24.0007H14.0835V13.5007L17.5845 13.5Z"
                          fill="currentColor"
                          app="ikonik"
                          className="path-kcz0f"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <a
                    aria-label="Instagram"
                    href="https://www.instagram.com/"
                    className="footer-social-link w-inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      app="ikonik"
                      className="social-icon"
                    >
                      <defs app="ikonik">
                        <clipPath app="ikonik">
                          <rect
                            width="24"
                            height="24"
                            fill="currentColor"
                            app="ikonik"
                            className="rect-2y9zn"
                          ></rect>
                        </clipPath>
                      </defs>
                      <g clip-path="url(#clip0_405_371)" app="ikonik">
                        <path
                          d="M12.0005 0C8.7387 0 8.3322 0.01575 7.0557 0.06975C5.77395 0.13275 4.90695 0.3315 4.14195 0.6285C3.35295 0.9375 2.68095 1.34775 2.0172 2.01525C1.34895 2.679 0.934953 3.351 0.630453 4.14C0.333453 4.905 0.134703 5.772 0.0717031 7.05375C0.0139531 8.331 0.00195312 8.73675 0.00195312 11.9985C0.00195312 15.2603 0.0177031 15.6667 0.0717031 16.9432C0.134703 18.2212 0.333453 19.092 0.630453 19.857C0.939453 20.646 1.3497 21.318 2.0172 21.9818C2.68095 22.65 3.35295 23.064 4.14195 23.3685C4.90695 23.6618 5.7777 23.8642 7.0557 23.9272C8.33295 23.985 8.7387 23.997 12.0005 23.997C15.2622 23.997 15.6687 23.9812 16.9452 23.9272C18.2232 23.8642 19.094 23.661 19.859 23.3685C20.648 23.0595 21.32 22.6493 21.9837 21.9818C22.652 21.318 23.066 20.6497 23.3705 19.857C23.6637 19.092 23.8662 18.2212 23.9292 16.9432C23.987 15.666 23.999 15.2603 23.999 11.9985C23.999 8.73675 23.9832 8.33025 23.9292 7.05375C23.8662 5.77575 23.663 4.9005 23.3705 4.14C23.0615 3.351 22.6512 2.679 21.9837 2.01525C21.32 1.347 20.6517 0.933 19.859 0.6285C19.094 0.3315 18.2232 0.13275 16.9452 0.06975C15.668 0.012 15.2622 0 12.0005 0V0ZM12.0005 2.16C15.2037 2.16 15.5862 2.17575 16.8522 2.22975C18.02 2.2845 18.656 2.4795 19.0782 2.6445C19.6415 2.86275 20.0352 3.12075 20.4612 3.54225C20.879 3.96 21.137 4.35825 21.3552 4.9215C21.5202 5.34375 21.7152 5.97975 21.77 7.1475C21.824 8.4135 21.8397 8.79675 21.8397 11.9992C21.8397 15.2017 21.824 15.585 21.7655 16.851C21.7025 18.0188 21.5075 18.6548 21.3432 19.077C21.116 19.6403 20.8625 20.034 20.444 20.46C20.0217 20.8778 19.6197 21.1358 19.061 21.354C18.644 21.519 17.999 21.714 16.8267 21.7687C15.554 21.8227 15.179 21.8385 11.9675 21.8385C8.75595 21.8385 8.3817 21.8227 7.10745 21.7642C5.9397 21.7012 5.29545 21.5062 4.8732 21.342C4.3032 21.1147 3.91245 20.8612 3.49395 20.4427C3.0717 20.0205 2.8032 19.6185 2.5962 19.0598C2.4282 18.6428 2.2362 17.9977 2.17395 16.8255C2.1312 15.5677 2.11095 15.1778 2.11095 11.9813C2.11095 8.78625 2.1312 8.3955 2.17395 7.122C2.2362 5.94975 2.4282 5.30625 2.5962 4.88775C2.8032 4.317 3.07245 3.927 3.49395 3.50475C3.9117 3.087 4.3032 2.817 4.8732 2.6055C5.29545 2.44125 5.92395 2.24625 7.0962 2.18775C8.36895 2.142 8.74395 2.1255 11.951 2.1255L12.0005 2.16ZM12.0005 5.84025C8.5947 5.84025 5.8407 8.598 5.8407 12C5.8407 15.4057 8.59845 18.1597 12.0005 18.1597C15.4062 18.1597 18.1602 15.402 18.1602 12C18.1602 8.59425 15.4025 5.84025 12.0005 5.84025V5.84025ZM12.0005 15.9998C9.78945 15.9998 8.0007 14.211 8.0007 12C8.0007 9.789 9.78945 8.00025 12.0005 8.00025C14.2115 8.00025 16.0002 9.789 16.0002 12C16.0002 14.211 14.2115 15.9998 12.0005 15.9998V15.9998ZM19.8485 5.59425C19.8485 6.3915 19.1997 7.035 18.4062 7.035C17.609 7.035 16.9655 6.39075 16.9655 5.59425C16.9655 4.8015 17.6135 4.1565 18.4062 4.1565C19.199 4.1565 19.8485 4.8015 19.8485 5.59425V5.59425Z"
                          fill="currentColor"
                          app="ikonik"
                          className="path-qqml"
                        ></path>
                      </g>
                    </svg>
                  </a>
                  <a
                    aria-label="Twitter"
                    href="https://twitter.com/"
                    className="footer-social-link w-inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      app="ikonik"
                      className="social-icon"
                    >
                      <path
                        d="M21.8097 6.22724C21.8677 6.14647 21.7821 6.04218 21.6894 6.07811C21.0307 6.33344 20.3422 6.50571 19.64 6.5906C20.4219 6.12348 21.0253 5.4124 21.3599 4.57053C21.3939 4.48477 21.3003 4.40819 21.2195 4.4528C20.4928 4.85414 19.709 5.14313 18.8949 5.30957C18.8608 5.31654 18.8257 5.30494 18.8018 5.27969C18.1908 4.63502 17.3865 4.20578 16.5098 4.05745C15.6146 3.90601 14.6945 4.05596 13.8938 4.48379C13.093 4.91162 12.4569 5.59313 12.0852 6.42144C11.7318 7.209 11.6365 8.08691 11.8108 8.93003C11.8243 8.99545 11.7731 9.05721 11.7064 9.05307C10.1224 8.95469 8.57466 8.53336 7.15865 7.81446C5.74624 7.09739 4.49551 6.09983 3.48264 4.8833C3.43769 4.82931 3.35249 4.83629 3.31973 4.89845C3.00457 5.49651 2.83955 6.16311 2.84 6.8406C2.83872 7.51498 3.00421 8.17922 3.32175 8.77416C3.63929 9.36911 4.09902 9.87631 4.66 10.2506C4.06507 10.2344 3.48175 10.0873 2.95125 9.82067C2.88288 9.78631 2.80087 9.83524 2.80443 9.91167C2.8458 10.8009 3.17225 11.6936 3.73731 12.3786C4.33863 13.1074 5.17325 13.6062 6.1 13.7906C5.74325 13.8992 5.37287 13.9564 5 13.9606C4.79706 13.9582 4.59451 13.9433 4.39353 13.9158C4.31901 13.9056 4.25817 13.9764 4.28425 14.0469C4.56067 14.7944 5.04899 15.4467 5.69107 15.9228C6.37752 16.4318 7.20557 16.7142 8.06 16.7306C6.6172 17.8659 4.83588 18.4855 3 18.4906C2.81135 18.4912 2.62279 18.4851 2.43468 18.4723C2.32867 18.4651 2.27992 18.6063 2.37129 18.6605C4.16006 19.7221 6.20459 20.2831 8.29 20.2806C9.82969 20.2966 11.3571 20.0056 12.7831 19.4247C14.2091 18.8437 15.505 17.9845 16.5952 16.8971C17.6854 15.8097 18.548 14.516 19.1326 13.0915C19.7171 11.667 20.012 10.1403 20 8.6006V8.12077C20 8.0892 20.0149 8.05951 20.0401 8.04048C20.7184 7.52834 21.3149 6.91691 21.8097 6.22724Z"
                        fill="currentColor"
                        app="ikonik"
                        className="path-tkatz"
                      ></path>
                    </svg>
                  </a>
                  <a
                    aria-label="Tiktok"
                    href="https://tiktok.com/"
                    className="footer-social-link w-inline-block"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      app="ikonik"
                      className="social-icon"
                    >
                      <path
                        d="M12.5311 0.02025C13.8398 0 15.1411 0.012 16.4408 0C16.5196 1.53075 17.0701 3.09 18.1906 4.17225C19.3088 5.2815 20.8906 5.78925 22.4296 5.961V9.98775C20.9873 9.9405 19.5383 9.6405 18.2296 9.0195C17.6596 8.7615 17.1286 8.42925 16.6088 8.0895C16.6021 11.0115 16.6208 13.9297 16.5901 16.8397C16.5121 18.2377 16.0508 19.629 15.2378 20.781C13.9298 22.6988 11.6596 23.949 9.32781 23.988C7.89756 24.0697 6.46881 23.6797 5.25006 22.9612C3.23031 21.7702 1.80906 19.59 1.60206 17.25C1.57806 16.7498 1.56981 16.2503 1.59006 15.762C1.77006 13.8593 2.71131 12.039 4.17231 10.8008C5.82831 9.3585 8.14806 8.6715 10.3201 9.078C10.3403 10.5593 10.2811 12.039 10.2811 13.5203C9.28881 13.1993 8.12931 13.2892 7.26231 13.8915C6.62931 14.3017 6.14856 14.9302 5.89806 15.6412C5.69106 16.1482 5.75031 16.7115 5.76231 17.25C6.00006 18.891 7.57806 20.2702 9.26256 20.121C10.3793 20.109 11.4496 19.461 12.0316 18.5123C12.2198 18.18 12.4306 17.8403 12.4418 17.4495C12.5401 15.6608 12.5011 13.8795 12.5131 12.0908C12.5213 8.0595 12.5011 4.0395 12.5318 0.021L12.5311 0.02025Z"
                        fill="currentColor"
                        app="ikonik"
                        className="path-9boyn"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="footer-content">
                <div
                  id="w-node-_04f9ee46-57e2-b88e-5905-f6fff066b55c-f066b549"
                  className="footer-block"
                >
                  <div className="footer-row-title">For Candidates</div>
                  <a href="https://webflow.com/" className="footer-link">
                    Overview
                  </a>
                  <a href="https://webflow.com/" className="footer-link">
                    Startup Jobs
                  </a>
                  <a href="https://webflow.com/" className="footer-link">
                    Featured
                  </a>
                  <a href="https://webflow.com/" className="footer-link">
                    Salary Calculator
                  </a>
                  <a href="https://webflow.com/" className="footer-link">
                    Remote
                  </a>
                  <a href="https://webflow.com/" className="footer-link">
                    Tech Startup
                  </a>
                </div>
                <div
                  id="w-node-_04f9ee46-57e2-b88e-5905-f6fff066b569-f066b549"
                  className="footer-block"
                >
                  <div className="footer-row-title">For Recruiters</div>
                  <a href="https://webflow.com/" className="footer-link">
                    Overview
                  </a>
                  <a href="https://webflow.com/" className="footer-link">
                    Recruiter Pro
                  </a>
                  <a href="https://webflow.com/" className="footer-link">
                    Curated
                  </a>
                  <a href="https://webflow.com/" className="footer-link">
                    Hire Developers
                  </a>
                  <a href="https://webflow.com/" className="footer-link">
                    Pricing
                  </a>
                </div>
                <div
                  id="w-node-_04f9ee46-57e2-b88e-5905-f6fff066b574-f066b549"
                  className="footer-block"
                >
                  <div className="footer-row-title">Utilities</div>
                  <a href="/utilities/styleguide" className="footer-link">
                    Styleguide
                  </a>
                  <a href="/utilities/licenses" className="footer-link">
                    Licenses
                  </a>
                  <a href="/utilities/changelog" className="footer-link">
                    Changelog
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mega-logo-wrapper">
            <img
              src="https://cdn.prod.website-files.com/67bd99d3867006d39432f40c/67c086d57c2b0582c9b0ef20_footer_mega_logo.svg"
              loading="lazy"
              width="1397"
              height="212"
              alt="Recruix"
              className="mega-logo-image"
            />
          </div>
        </div>
        <div className="footer-lower">
          <div className="w-layout-blockcontainer container w-container">
            <div className="copyright-wrapper">
              <div className="copyright-text">
                © 2025 VR. Powered by
                <a href="https://webflow.com/" className="copyright-link">
                  Squirrel
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
