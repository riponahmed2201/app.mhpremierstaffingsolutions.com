import React from "react";
import { useTranslation } from "react-i18next";

const Mission = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        class="banner-header section-padding valign bg-img bg-fixed img-fluid"
        style={{
          backgroundImage: `url('assets/frontend/images/mission/mission-vission.png')`,
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
              <h5 style={{ color: "white", fontSize: "20px" }}>
                {t("meet_the_team_company_name")}
              </h5>
              <h1 style={{ color: "white", fontSize: "70px" }}>
                {t("mission_and_values")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="container" style={{ marginTop: "60px" }}>
        <div class="row justify-content-end">
          <div class="col-12 col-md-6 col-lg-6">
            <h2 class="my-5">{t("our_mission")} </h2>
            <p className="about_us_section_paragraph">
              {t("our_mission_description")}
            </p>
          </div>
          <div class="col-12 col-md-6 col-lg-6 mt-5">
            <img
              src="assets/frontend/images/mission/mission.jpg"
              alt="the mission"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="row justify-content-end mt-5">
          <div class="col-12 col-md-6 col-lg-6 mt-5">
            <img
              src="assets/frontend/images/mission/vission.jpg"
              alt="the mission"
              class="img-fluid"
            />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <h2 class="my-5">{t("our_vision")}</h2>
            <p className="about_us_section_paragraph">
              {t("our_vision_description")}
            </p>
          </div>
        </div>{" "}
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Mission;
