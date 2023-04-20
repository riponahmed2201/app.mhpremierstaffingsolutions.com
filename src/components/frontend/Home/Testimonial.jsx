import React from "react";

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container-fluid custom_container_Testimonial">
        <div className="container">
          <div className="row">
            <div className="text-center testimonial_top col-lg-12">
              <div className="testimonialHEading">
                <span className="testimonialfirstSpan">Testimonials :</span>
                <span>Users talking about us</span>
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
                    <div className="testimonianSLiderImage mt-4">
                      <div className="row justify-content-center">
                        <img
                          className="w-25 img-fluid"
                          src="assets/frontend/images/indexImages/Group 117314.png"
                          alt
                        />
                      </div>
                      <div className="row justify-content-center">
                        <img
                          className="w-50 img-fluid"
                          src="assets/frontend/images/indexImages/Group 116181.png"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="testimonianSLiderImage mt-4">
                      <div className="row justify-content-center">
                        <img
                          className="w-25 img-fluid"
                          src="assets/frontend/images/indexImages/Group 117314.png"
                          alt
                        />
                      </div>
                      <div className="row justify-content-center">
                        <img
                          className="w-50 img-fluid"
                          src="assets/frontend/images/indexImages/Group 116181.png"
                          alt
                        />
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
