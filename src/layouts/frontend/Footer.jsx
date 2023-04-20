import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2">
            <div className="leftPartLinks">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                  <Link to="/customer">Customers</Link>
                  <Link to="/career">Career</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/payroll-services">Services</Link>
                  <Link to="/">Meet The Team</Link>
                  <Link to="/">Faq</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="middlePart">
              <h3>Need Help? Contact Us</h3>
              <h4>+44 20 3980 9360</h4>
              <h5>info@mhpremierstaffingsolutions.com</h5>
              <div className="placeImg">
                <h6>
                  <img
                    src="assets/frontend/images/indexImages/place.png"
                    alt="image"
                  />
                  48 Warwick St Regent Street W1B 5AW London
                </h6>
              </div>
              <span>Follow us on</span>
              <div className="socialMediaIcons">
                <a href>
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/socialMedia/Group 116168.png"
                    alt="image"
                  />
                </a>
                <a href>
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/socialMedia/Group 116169.png"
                    alt="image"
                  />
                </a>
                <a href>
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/socialMedia/Group 116170.png"
                    alt="image"
                  />
                </a>
                <a href>
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/socialMedia/Group 116171.png"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2">
            <div className="rightPartLinks">
              <ul>
                <li>
                  <a href>CORPORATE INFORMATION</a>
                  <a href>WEBSITE TERM OF USE</a>
                  <a href>PRIVACY NOTICE</a>
                  <a href>COOKIES</a>
                  <a href>DOWNLOAD THE APP</a>
                </li>
              </ul>
              <div className="rightPartLogoWrapper text-end">
                <a href>
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/socialMedia/Group 117303.png"
                    alt="image"
                  />
                </a>
                <a href>
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/socialMedia/Group 117304.png"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 footerFinal">
            <div className="footerTextWrpper d-flex justify-content-between">
              <span>
                © 2023 MH Premier Staffing Solutions. All rights reserved.
              </span>
              <img
                className="img-fluid footerFinalLogo"
                src="assets/frontend/images/indexImages/footerLogo.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
