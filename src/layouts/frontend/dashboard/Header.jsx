import React, { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { fetchShortListHandler } from "../../../api/shortList";
import { jwtTokenDecode } from "../../../utils/jwtDecode";

function Header() {

  const navigate = useNavigate();

  const jwtDecode = jwtTokenDecode();

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

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("loginData");

    navigate("/");

    window.location.reload();
  };

  return (
    <section className="Dashboardheader sticky-top">
      <div className="container header_container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar DashboardNavban navbar-expand-md navbar-light">
              <a className="navbar-brand " href="/">
                <img
                  className="img-fluid Dashboard_nav_logo"
                  src="/assets/frontend/images/Dashboardimages/logo.png"
                  alt="Default"
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
                          src="/assets/frontend/images/Dashboardimages/navbar/Rectangle 40265.png"
                          alt="Default"
                        />
                        <span className="DashboardBookmarkNavSpan mx-1">
                          {getShortList ? getShortList?.total : 0}
                        </span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a
                      className="Dashboard_navbar_custom_hover nav-link"
                      href="#"
                    >
                      <div className="navLinkImageTextWraper">
                        <img
                          src="/assets/frontend/images/Dashboardimages/navbar/path113.png"
                          alt="Default"
                        />
                        <span className="DashboardNotificationNavSpan">3</span>
                      </div>
                    </a>
                  </li>
                  <li className="nav-item">
                    {!jwtDecode ? (
                      <a
                        className="Dashboard_navbar_custom_hover nav-link"
                        href="#"
                      >
                        <img
                          src="/assets/frontend/images/Dashboardimages/navbar/CONTACT.png"
                          alt="Default"
                        />
                      </a>
                    ) : (
                      <button
                      style={{ color:"#ffffff" }}
                        className=" btn btn-sm btn-danger nav-link"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    )}
                  </li>
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
