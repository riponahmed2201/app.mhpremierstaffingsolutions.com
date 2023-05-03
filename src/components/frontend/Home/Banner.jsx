import React from "react";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t, i18n } = useTranslation();

  return (
    <section className="Indexbanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 Home_page_left_part">
            <img
              src="assets/frontend/images/indexImages/PERTICLE1 (2).png"
              className="img-fluid perticle1"
              alt
            />
            <div className="h1Wrapper">
              <h2>{t("home_banner_heading")}</h2>
            </div>
            <div className="pTextWrapper">
              <p>{t("home_banner_description")}</p>
            </div>
            <div className="bannerButtonWrapper">
              <a href="/login">
                <button
                  style={{ cursor: "pointer" }}
                  className="btn bannerButtonWrapper1"
                >
                  {t("home_banner_hire_worker")}
                </button>
              </a>
              <a href="/employee-register">
                <button
                  type="button"
                  style={{ marginLeft: "5px" }}
                  className="btn bannerButtonWrapper2"
                >
                  {t("home_banner_drop_your_cv")}
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 Home_page_right_part">
            <a href="/login">
              <img
                src="assets/frontend/images/indexImages/PERTICLE2.png"
                className="img-fluid perticle2"
                alt
              />
            </a>
            <div className="bannerImageWrapper">
              <img
                src="assets/frontend/images/indexImages/Group 117293.png"
                className="img-fluid"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
