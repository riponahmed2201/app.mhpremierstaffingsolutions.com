import React from "react";

function Contact() {
  return (
    <section className="contactUs">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="contactUsText text-center">
              <span className="contactUsSpan">Contact Us</span>
              <span className="todaySpan">Today</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container contactUsFormContainer">
        <div className="row">
          <div className="col-lg-12">
            <div className="row text-center">
              <div className="col-lg-6">
                <div className="inputLogoWrapper">
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/contactForm/Placeholder.png"
                    alt="image"
                  />
                </div>
                <input
                  placeholder="Name"
                  type="text"
                  className="form-control custom_client_input mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="col-lg-6">
                <div className="inputLogoWrapper">
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/contactForm/Placeholder (1).png"
                    alt="image"
                  />
                </div>
                <input
                  placeholder="Enter your email"
                  type="email"
                  className="form-control custom_client_input mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="messageinputLogoWrapper">
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/contactForm/Placeholder (2).png"
                    alt="image"
                  />
                </div>
                <textarea
                  className="form-control contactUsMessage"
                  placeholder="Messages"
                  id="floatingTextarea2"
                  style={{ height: 100 }}
                  defaultValue={""}
                />
              </div>
              <div className="sendButtonWrapper text-center">
                <a href>
                  <img
                    src="assets/frontend/images/indexImages/contactForm/Group 821.png"
                    className="img-fluid"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
