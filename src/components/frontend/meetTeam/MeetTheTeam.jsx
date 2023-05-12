import React from "react";
import { useTranslation } from "react-i18next";

const MeetTheTeam = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="banner-header section-padding valign bg-img bg-fixed img-fluid"
        style={{
          backgroundImage: `url('assets/frontend/images/meetTeam/mission-vission.png')`,
          minHeight: "400px",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-12  caption align-middle"
              style={{ marginTop: "150px" }}
            >
              <h5 style={{ color: "white", fontSize: "20px" }}>
                {t("meet_the_team_company_name")}
              </h5>
              <h1 style={{ color: "white", fontSize: "70px" }}>
                {t("meet_the_team")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "50px", backgroundColor: "white" }}>
        <div className="container ">
          <div className="row justify-content-end">
            <div className="col-12 col-md-6 col-lg-6">
              <img
                src="assets/frontend/images/meetTeam/ceo.jpg"
                alt="the mission"
                className="img-fluid"
                style={{ height: "800px" }}
              />
            </div>
            <div
              className="col-12 col-md-6 col-lg-6 mt-5"
              style={{ backgroundColor: "#f8f5f0" }}
            >
              <h5 className="mt-5">{t("meet_the_team_mirko_picicco")}</h5>
              <h1>{t("meet_the_team_md_designation")}</h1>

              <p className="about_us_section_paragraph">
                {t("meet_the_team_md_description")}
              </p>
            </div>
          </div>

          {/* // */}
          <div className="row justify-content-end">
            <div
              className="col-12 col-md-6 col-lg-6 "
              style={{ backgroundColor: "#f8f5f0" }}
            >
              <h1 className=" mx-2" style={{ marginTop: "200px" }}>
                {t("meet_the_team_rose_picicco")}
              </h1>
              <h5 className="mx-2">{t("meet_the_team_rose_md_designation")}</h5>
              <p className=" mx-2">
                rose@mhpremierstaffingsolutions.com
                <br />
                +971 52 416 0552
              </p>
              <p className="mx-2 about_us_section_paragraph"></p>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-5">
              <img
                src="assets/frontend/images/meetTeam/ceo_dubai.jpg"
                alt="image"
                className="img-fluid"
                style={{ height: "800px", marginTop: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "150px", backgroundColor: "white" }}>
        <div className="container ">
          <div className="row justify-content-end">
            <div className="col-12 col-md-6 col-lg-6">
              <img
                src="assets/frontend/images/meetTeam/2.jpg"
                alt="the mission"
                className="img-fluid"
                style={{ height: "800px", marginTop: "20px" }}
              />
            </div>
            <div
              className="col-12 col-md-6 col-lg-6 mt-5"
              style={{ backgroundColor: "#f8f5f0" }}
            >
              <h1 className="mt-5 mx-2">
                {t("meet_the_team_filippo_becchino")}
              </h1>
              <h5 className="mx-2">
                {t("meet_the_team_recruitment_consultant")}
              </h5>
              <p className=" mx-2">
                filippo@mhpremierstaffingsolutions.com <br /> +44 7459 552887
              </p>
              <p className="about_us_section_paragraph mx-2">
                {t("meet_the_team_recruitment_consultant_designation")}
              </p>
            </div>
          </div>

          {/* // */}
          <div className="row justify-content-end">
            <div
              className="col-12 col-md-6 col-lg-6 "
              style={{ backgroundColor: "#f8f5f0" }}
            >
              <h1 className=" mx-2" style={{ marginTop: "200px" }}>
                {t('meet_the_team_manila_bartocci')}
              </h1>
              <h5 className="mx-2">{t("meet_the_team_recruitment_consultant")}</h5>
              <p className=" mx-2">
                manila@mhpremierstaffingsolutions.com <br />
                +44 7944 111197
              </p>
              <p className="mx-2 about_us_section_paragraph">

                {t('meet_the_team_manila_bartocci_description')}
                
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-6 mt-5">
              <img
                src="assets/frontend/images/meetTeam/1.jpg"
                alt="the mission"
                className="img-fluid"
                style={{ height: "800px", marginTop: "20px" }}
              />
            </div>
          </div>

          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
