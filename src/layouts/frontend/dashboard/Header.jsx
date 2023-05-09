import React, { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
import { fetchShortListHandler } from "../../../api/shortList";

import { AiOutlineLogout } from "react-icons/ai";

const changeLanguage = (e) => {
  return i18n.changeLanguage(e.target.value);
};

function Header() {
  const { t } = useTranslation();

  const [getShortList, setShortList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchShortListData = useCallback(async () => {
    setLoading(true);
    await fetchShortListHandler().then((res) => {
      if (res?.status === 201) {
        setShortList(res?.data);
      } else {
        setLoading(false);
      }
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchShortListData();
  }, []);

  return (
    <section className="Dashboardheader sticky-top">
      <div className="container header_container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar DashboardNavban navbar-expand-md navbar-light">
              <a className="navbar-brand " href="/">
                <img
                  className="img-fluid Dashboard_nav_logo"
                  src="assets/frontend/images/Dashboardimages/logo.png"
                  alt="image"
                />
              </a>
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
                className="Dash_navb_custom collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="Dashboard_navbar_custom navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="Dashboard_navbar_custom_hover nav-link"
                      aria-current="page"
                      to="/short-list"
                    >
                      <div className="navLinkImageTextWraper">
                        <img
                          src="assets/frontend/images/Dashboardimages/navbar/Rectangle 40265.png"
                          alt="image"
                        />
                        <span className="DashboardBookmarkNavSpan mx-1">
                          {getShortList ? getShortList?.total : 0}
                        </span>
                      </div>
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <a
                      className="Dashboard_navbar_custom_hover nav-link"
                      href="#"
                    >
                      <div className="navLinkImageTextWraper">
                        <img
                          src="assets/frontend/images/Dashboardimages/navbar/path113.png"
                          alt
                        />
                        <span className="DashboardNotificationNavSpan">3</span>
                      </div>
                    </a>
                  </li> */}
                  <li className="nav-item">
                    <a
                      className="Dashboard_navbar_custom_hover nav-link"
                      href="#"
                    >
                      <img
                        src="assets/frontend/images/Dashboardimages/navbar/CONTACT.png"
                        alt="image"
                      />
                    </a>
                  </li>
                  {/* Language Dropdown */}
                  <div className="DashboardlanguageFlagWrapper d-flex justify-content-center align-items-center">
                    <img
                      className="img-fluid"
                      src="assets/frontend/images/Dashboardimages/flag.png"
                      alt="image"
                    />
                  </div>

                  <select
                    onChange={(e) => changeLanguage(e)}
                    className="nav-item dropdown border-0 mx-1 navbar_custom_hover nav-link selectItem"
                  >
                    <option value={"en"}>English</option>
                    <option value={"ar"}>Arabic</option>
                  </select>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
