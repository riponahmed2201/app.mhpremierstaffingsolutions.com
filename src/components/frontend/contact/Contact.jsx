import React from "react";

import { FiPhoneOutgoing } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { MdPlace } from "react-icons/md";

const Contact = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        className="banner-header section-padding valign bg-img bg-fixed img-fluid "
        style={{
          backgroundImage: `url('assets/frontend/images/contact/contact.png')`,
          minHeight: "400px",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundColor: "white",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-12  caption align-middle"
              style={{ marginTop: "150px" }}
            >
              <h5 style={{ color: "white", fontSize: "18px" }}>
                MH PREMIER STAFFING SOLUTIONS
              </h5>
              <h1 style={{ color: "white", fontSize: "70px" }}>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container " style={{ marginTop: "60px" }}>
        <div className="row justify-content-end">
          <div className="col-12 col-md-6 col-lg-6 ">
            <h1 style={{ fontSize: "25px" }}>MH</h1>
            <h5 style={{ fontSize: "16px" }}>
              MH is a premium staffing solution with years of hospitality
              industry experience. we understand the challenges our clients have
              in recruiting competent and experienced staff.
            </h5>

            <div className="d-flex mt-4">
              <FiPhoneOutgoing
                style={{
                  fontSize: "45px",
                  color: "#8e6d45",
                  marginTop: "15px",
                }}
              />
              <div className="mx-5">
                <p>Reservation</p>
                <h5 style={{ fontSize: "20px", color: "#8e6d45" }}>
                  075 001 46699
                </h5>
              </div>
            </div>
            <div className="d-flex mt-4">
              <TfiEmail
                style={{
                  fontSize: "45px",
                  color: "#8e6d45",
                  marginTop: "15px",
                }}
              />
              <div className="mx-5">
                <p>Email Info</p>
                <h5 style={{ fontSize: "15px", color: "#8e6d45" }}>
                  info@mhpremierstaffingsolutions.com
                </h5>
              </div>
            </div>

            <div className="d-flex mt-4">
              <MdPlace
                style={{
                  fontSize: "45px",
                  color: "#8e6d45",
                  marginTop: "15px",
                }}
              />
              <div className="mx-5">
                <p>Address</p>
                <h5 style={{ fontSize: "15px", color: "#8e6d45" }}>
                  48 Warwick St Regent Street W1B 5AW London
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-5">
            {/* <div className="col-md-5 mb-30 offset-md-1"> */}
            <h3>Get in touch</h3>
            <form method="post" className="contact__form" action="#">
              <div className="row">
                <div className="col-12">
                  <div
                    className="alert alert-success contact__msg"
                    style={{ display: "none" }}
                    role="alert"
                  >
                    Your message was sent successfully.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-6 col-lg-6  form-group">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name *"
                    required=""
                    className="border-bottom border-0 px-2 py-2 mb-5 "
                    style={{ outline: "none" }}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6 form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email *"
                    required=""
                    className="border-bottom border-0 px-2 py-2 mb-2 "
                    style={{ outline: "none" }}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6 form-group">
                  <input
                    name="phone"
                    type="text"
                    placeholder="Your Number *"
                    required=""
                    className="border-bottom border-0 px-2 py-2 mb-2 "
                    style={{ outline: "none" }}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6  form-group">
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject *"
                    required=""
                    className="border-bottom border-0 px-2 py-2 mb-5 "
                    style={{ outline: "none" }}
                  />
                </div>
                <div className="col-12 col-md-6 col-lg-6  form-group">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder="Message *"
                    required=""
                    className="border-bottom border-0 px-5 py-2 mb-2 "
                    style={{ outline: "none" }}
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <button
                    style={{
                      backgroundColor: "#C6A34F",
                      outline: "none",
                      marginBottom: "50px",
                    }}
                    className="border-0 px-5 py-3"
                  >
                    <a
                      href="#0"
                      style={{
                        backgroundColor: "#C6A34F",
                        outline: "none",
                        color: "white",
                        fontSize: "20px",
                      }}
                      className="text-decoration-none"
                    >
                      <span>Send Message</span>
                    </a>
                  </button>
                </div>
              </div>
            </form>
            {/* </div> */}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="500px"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=48 Warwick St Regent Street W1B 5AW London&t=&z=14&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
