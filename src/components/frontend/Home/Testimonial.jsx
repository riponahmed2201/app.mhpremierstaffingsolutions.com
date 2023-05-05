import React from "react";
import { useTranslation } from "react-i18next";

function Testimonial() {
  const { t } = useTranslation();

  return (
    <section className="testimonial">
      <div className="container-fluid custom_container_Testimonial">
        <div className="container">
          <div className="row">
            <div className="text-center testimonial_top col-lg-12">
              <div className="testimonialHEading">
                <span className="testimonialfirstSpan">
                  {t("home_testmonials")}:
                </span>
                <span> {t("home_testmonial_user_talking")}</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="testimonianSLiderImage">
                      <div className="row justify-content-center">
                        <img
                          className="w-25 img-fluid"
                          src="assets/frontend/images/indexImages/Group 117314.png"
                          alt
                        />
                      </div>
                      <div className="row justify-content-center">
                        <div className="w-50">
                          <p
                            className="text-white mt-3 mb-3"
                            style={{ fontSize: "16px" }}
                          >
                            This staff solutions company has been a great
                            partner for our business. They have provided us with
                            skilled workers that have helped us increase our
                            productivity and efficiency.
                          </p>
                          <hr style={{ border: "1px solid #ffffff" }} />

                          <div className="row">
                            <div className="col-9">
                              <div className="row justify-content-start align-items-start">
                                <img
                                  className="text-end mt-5"
                                  style={{
                                    width: "72px",
                                    // height: "72px",
                                    // borderRadius: "25px",
                                  }}
                                  src="assets/frontend/images/testmonial/Ellipse 9.png"
                                  alt="picture"
                                />
                                <div
                                  className="text-white mt-2"
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    fontSize: "22px",
                                  }}
                                >
                                  Logan
                                </div>
                                <div
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    color: "#c4c0be",
                                    fontSize: "18px",
                                  }}
                                >
                                  Assistant Restaurant Manager
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-3 text-white"
                              style={{
                                marginTop: "130px",
                              }}
                            >
                              <p className="text-end">12 Jun, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonianSLiderImage">
                      <div className="row justify-content-center">
                        <img
                          className="w-25 img-fluid"
                          src="assets/frontend/images/indexImages/Group 117314.png"
                          alt
                        />
                      </div>
                      <div className="row justify-content-center">
                        <div className="w-50">
                          <p
                            className="text-white mt-3 mb-3"
                            style={{ fontSize: "16px" }}
                          >
                            They take the time to understand our needs and
                            provide us with skilled and reliable workers that
                            fit our specific requirements. Their team is always
                            available to answer any questions or concerns we
                            have and they go above and beyond to ensure our
                            satisfaction. I heartily advise anyone looking for
                            staffing options to contact this organization.
                          </p>
                          <hr style={{ border: "1px solid #ffffff" }} />

                          <div className="row">
                            <div className="col-9">
                              <div className="row justify-content-start align-items-start">
                                <img
                                  className="text-end mt-5"
                                  style={{
                                    width: "72px",
                                  }}
                                  src="assets/frontend/images/testmonial/Ellipse 9.png"
                                  alt="picture"
                                />
                                <div
                                  className="text-white mt-2"
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    fontSize: "22px",
                                  }}
                                >
                                  Luis Archer
                                </div>
                                <div
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    color: "#c4c0be",
                                    fontSize: "18px",
                                  }}
                                >
                                  Managing Director
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-3 text-white"
                              style={{
                                marginTop: "130px",
                              }}
                            >
                              <p className="text-end">29 Dec, 2021</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonianSLiderImage">
                      <div className="row justify-content-center">
                        <img
                          className="w-25 img-fluid"
                          src="assets/frontend/images/indexImages/Group 117314.png"
                          alt
                        />
                      </div>
                      <div className="row justify-content-center">
                        <div className="w-50">
                          <p
                            className="text-white mt-3 mb-3"
                            style={{ fontSize: "16px" }}
                          >
                            Game-changing staffing solutions company! Seamless
                            process and excellent staff.
                          </p>
                          <hr style={{ border: "1px solid #ffffff" }} />

                          <div className="row">
                            <div className="col-9">
                              <div className="row justify-content-start align-items-start">
                                <img
                                  className="text-end mt-5"
                                  style={{
                                    width: "72px",
                                  }}
                                  src="assets/frontend/images/testmonial/Ellipse 9.png"
                                  alt="picture"
                                />
                                <div
                                  className="text-white mt-2"
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    fontSize: "22px",
                                  }}
                                >
                                  Braxton Zachary
                                </div>
                                <div
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    color: "#c4c0be",
                                    fontSize: "18px",
                                  }}
                                >
                                  Restaurant Chanin Executive
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-3 text-white"
                              style={{
                                marginTop: "130px",
                              }}
                            >
                              <p className="text-end">10 Aug, 2020</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonianSLiderImage">
                      <div className="row justify-content-center">
                        <img
                          className="w-25 img-fluid"
                          src="assets/frontend/images/indexImages/Group 117314.png"
                          alt
                        />
                      </div>
                      <div className="row justify-content-center">
                        <div className="w-50">
                          <p
                            className="text-white mt-3 mb-3"
                            style={{ fontSize: "16px" }}
                          >
                            I have been working with this staffing solutions
                            company for several years now, and I couldn't be
                            happier with their services. They always provide me
                            with top-quality candidates, and their staff is
                            friendly, professional, and efficient. I highly
                            recommend this company to any business in need of
                            staffing assistance.
                          </p>
                          <hr style={{ border: "1px solid #ffffff" }} />

                          <div className="row">
                            <div className="col-9">
                              <div className="row justify-content-start align-items-start">
                                <img
                                  className="text-end mt-5"
                                  style={{
                                    width: "72px",
                                  }}
                                  src="assets/frontend/images/testmonial/Ellipse 9.png"
                                  alt="picture"
                                />
                                <div
                                  className="text-white mt-2"
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    fontSize: "22px",
                                  }}
                                >
                                  Tucker Brandon
                                </div>
                                <div
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    color: "#c4c0be",
                                    fontSize: "18px",
                                  }}
                                >
                                  Head Chef
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-3 text-white"
                              style={{
                                marginTop: "130px",
                              }}
                            >
                              <p className="text-end">14 Jun, 2019</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonianSLiderImage">
                      <div className="row justify-content-center">
                        <img
                          className="w-25 img-fluid"
                          src="assets/frontend/images/indexImages/Group 117314.png"
                          alt
                        />
                      </div>
                      <div className="row justify-content-center">
                        <div className="w-50">
                          <p
                            className="text-white mt-3 mb-3"
                            style={{ fontSize: "16px" }}
                          >
                            This staffing solutions company is truly one of a
                            kind. They take the time to understand the unique
                            needs of their clients and candidates, and they
                            always go above and beyond to find the perfect
                            match. The staff is friendly, knowledgeable, and
                            always available to answer any questions I have. I
                            am very impressed highly recommend this company to
                            anyone in need of staffing solutions.
                          </p>
                          <hr style={{ border: "1px solid #ffffff" }} />

                          <div className="row">
                            <div className="col-9">
                              <div className="row justify-content-start align-items-start">
                                <img
                                  className="text-end mt-5"
                                  style={{
                                    width: "72px",
                                  }}
                                  src="assets/frontend/images/testmonial/Ellipse 9.png"
                                  alt="picture"
                                />
                                <div
                                  className="text-white mt-2"
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    fontSize: "22px",
                                  }}
                                >
                                  Arlo Max
                                </div>
                                <div
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    color: "#c4c0be",
                                    fontSize: "18px",
                                  }}
                                >
                                  Bar Manager
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-3 text-white"
                              style={{
                                marginTop: "130px",
                              }}
                            >
                              <p className="text-end">18 Jul, 2017</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonianSLiderImage">
                      <div className="row justify-content-center">
                        <img
                          className="w-25 img-fluid"
                          src="assets/frontend/images/indexImages/Group 117314.png"
                          alt
                        />
                      </div>
                      <div className="row justify-content-center">
                        <div className="w-50">
                          <p
                            className="text-white mt-3 mb-3"
                            style={{ fontSize: "16px" }}
                          >
                            Top-quality candidates and excellent service. Highly
                            recommend!
                          </p>
                          <hr style={{ border: "1px solid #ffffff" }} />

                          <div className="row">
                            <div className="col-9">
                              <div className="row justify-content-start align-items-start">
                                <img
                                  className="text-end mt-5"
                                  style={{
                                    width: "72px",
                                  }}
                                  src="assets/frontend/images/testmonial/Ellipse 9.png"
                                  alt="picture"
                                />
                                <div
                                  className="text-white mt-2"
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    fontSize: "22px",
                                  }}
                                >
                                  Eric Edward
                                </div>
                                <div
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    color: "#c4c0be",
                                    fontSize: "18px",
                                  }}
                                >
                                  Director
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-3 text-white"
                              style={{
                                marginTop: "130px",
                              }}
                            >
                              <p className="text-end">25 Jan, 2022</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonianSLiderImage">
                      <div className="row justify-content-center">
                        <img
                          className="w-25 img-fluid"
                          src="assets/frontend/images/indexImages/Group 117314.png"
                          alt
                        />
                      </div>
                      <div className="row justify-content-center">
                        <div className="w-50">
                          <p
                            className="text-white mt-3 mb-3"
                            style={{ fontSize: "16px" }}
                          >
                            One-of-a-kind staffing solutions company! Friendly,
                            knowledgeable, and always goes above and beyond.
                          </p>
                          <hr style={{ border: "1px solid #ffffff" }} />

                          <div className="row">
                            <div className="col-9">
                              <div className="row justify-content-start align-items-start">
                                <img
                                  className="text-end mt-5"
                                  style={{
                                    width: "72px",
                                  }}
                                  src="assets/frontend/images/testmonial/Ellipse 9.png"
                                  alt="picture"
                                />
                                <div
                                  className="text-white mt-2"
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    fontSize: "22px",
                                  }}
                                >
                                  Finley Colin
                                </div>
                                <div
                                  style={{
                                    fontFamily: "Montserrat",
                                    fontWeight: "500",
                                    color: "#c4c0be",
                                    fontSize: "18px",
                                  }}
                                >
                                  General Manager
                                </div>
                              </div>
                            </div>
                            <div
                              className="col-3 text-white"
                              style={{
                                marginTop: "130px",
                              }}
                            >
                              <p className="text-end">05 Nov, 2016</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="custom_testimonial_slider_button carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  >
                    <img
                      className="img-fluid"
                      src="assets/frontend/images/indexImages/sliderIconLeft.png"
                      alt
                    />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="custom_testimonial_slider_button carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  >
                    <img
                      className="img-fluid"
                      src="assets/frontend/images/indexImages/SliderIconRight.png"
                      alt
                    />
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
