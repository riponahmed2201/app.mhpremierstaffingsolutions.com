import React from "react";
import ServicePosition from "./ServicePosition";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  return (
    <div>
      <div
        class="banner-header section-padding valign bg-img bg-fixed img-fluid"
        style={{
          backgroundImage: `url('assets/frontend/images/services/service.png')`,
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
                {t("our_services")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mt-5 mb-5">
          <div className="about_us_section_title"> {t("recruiting")} </div>
          <p className="about_us_section_paragraph">
            {t("recruiting_description")}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="mt-5 mb-5">
          <div className="about_us_section_title">
            {t("pay_roll_rent_staff")}
          </div>
          <p className="about_us_section_paragraph">
            {t("pay_roll_rent_staff_description")}
          </p>
        </div>
      </div>
      <div className="container">
        <ServicePosition />
      </div>
    </div>
  );
}

export default Services;
