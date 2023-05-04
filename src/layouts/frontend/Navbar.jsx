import React from "react";
import { Link, NavLink } from "react-router-dom";
import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

import "./select.css";

const changeLanguage = (e) => {
  // console.log(`Language change to ${e.target.value}`);
  return i18n.changeLanguage(e.target.value);
};

function Navbar() {
  const { t } = useTranslation();

  return (
    <section className="header sticky-top">
      <div className="container Index_header_container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link className="navbar-brand customNav320" to="/">
                <img
                  className="img-fluid nav_logo"
                  src="assets/frontend/images/indexImages/logo.png"
                  alt="image"
                />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="home_navbar_custom collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className="navbar_custom_hover nav-link"
                      aria-current="page"
                      to="/"
                    >
                      {t("home_navbar_home")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="navbar_custom_hover nav-link"
                      to="/about"
                    >
                      {t("home_navbar_about_us")}
                    </NavLink>
                  </li>

                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link navbar_custom_hover"
                      to="/our-services"
                    >
                      {t("home_navbar_our_services")}
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link navbar_custom_hover"
                      to="/our-mission"
                    >
                      {t("home_navbar_our_mission_vision")}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link navbar_custom_hover"
                      to="/career"
                    >
                      {t("home_navbar_career")}
                    </NavLink>
                  </li>
                  <div className="languageFlagWrapper d-flex justify-content-center align-items-center">
                    <img
                      className="img-fluid"
                      src="assets/frontend/images/indexImages/flag.png"
                      alt="image"
                    />
                  </div>
                  {/* <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="javascript:void(0)"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Eng
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li> */}

                  <select
                    onChange={(e) => changeLanguage(e)}
                    className="nav-item dropdown border-0 mx-1 navbar_custom_hover nav-link selectItem"
                  >
                    {/* <option>En</option> */}
                    <option value={"en"}>English</option>
                    <option value={"ar"}>Arabic</option>
                  </select>
                  <button type="button" className="navButton btn">
                    <Link to="/login">
                      <img
                        src="assets/frontend/images/indexImages/person.png"
                        alt="image"
                      />
                      {t("home_navbar_sign_in")}
                    </Link>
                  </button>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
