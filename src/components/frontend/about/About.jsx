import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        class="banner-header section-padding valign bg-img bg-fixed img-fluid"
        style={{
          backgroundImage: `url('assets/frontend/images/aboutUs/about.png')`,
          minHeight: "400px",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="container">
          <div class="row">
            <div
              class="col-md-12 caption align-middle"
              style={{ marginTop: "150px" }}
            >
              <h5 style={{ color: "white", fontSize: "18px" }}>
                {t("meet_the_team_company_name")}
              </h5>
              <h1 style={{ color: "white", fontSize: "70px" }}>
                {t("home_navbar_about_us")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mt-5 mb-5">
          <div className="about_us_section_sub_title">
            <strong> {t("about_us_description_welcome")}</strong>
          </div>
          <br />
          <p className="about_us_section_paragraph">
            {t("about_us_description1")}{" "}
            {/* <a target="_blank" href="https://www.mirkohospitality.com/">
              Mirko Hospitality.
            </a> */}
          </p>
          <p className="about_us_section_paragraph">
            {t("about_us_description2")}
          </p>
          <p className="about_us_section_paragraph">
            {t("about_us_description3")}
          </p>

          <p className="about_us_section_paragraph">
            {t("about_us_description4")}
          </p>

          <p className="about_us_section_paragraph">
            {t("about_us_description5")}
          </p>
          <p className="about_us_section_paragraph">
            {t("about_us_description6")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
