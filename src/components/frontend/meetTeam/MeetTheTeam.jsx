import React from "react";
import { useTranslation } from "react-i18next";
import { FiPhoneOutgoing } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { AiFillLinkedin } from "react-icons/ai";

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
            <div className="col-12 col-md-3 col-lg-3 mt-5">
              <img
                src="assets/frontend/images/meetTeam/ceo.jpg"
                alt="custom"
                className="img-fluid"
                style={{ height: "420px" }}
              />
            </div>
            <div
              className="col-12 col-md-9 col-lg-9 mt-5"
              style={{ backgroundColor: "#f8f5f0" }}
            >
              <h5 className="mt-5 mx-4">{t("meet_the_team_mirko_picicco")}</h5>
              <h1 className="mx-4">{t("meet_the_team_md_designation")}</h1>
              <p className=" mx-4">
                <a
                  style={{
                    fontSize: "16px",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                  target="_blank"
                  href="https://www.linkedin.com/in/mirko-picicco-25b6b266"
                >
                  <AiFillLinkedin
                    style={{
                      color: "#8e6d45",
                      marginRight: "5px",
                    }}
                  />
                  Linkedin
                </a>
              </p>
              <p className="mx-4 about_us_section_paragraph">
                {t("meet_the_team_md_description")}
              </p>
            </div>
          </div>

          {/* // */}
          <div className="row justify-content-end">
            <div
              className="col-12 col-md-9 col-lg-9"
              style={{ backgroundColor: "#f8f5f0" }}
            >
              <h1 className="mx-4" style={{ marginTop: "70px" }}>
                {t("meet_the_team_rose_picicco")}
              </h1>
              <h5 className="mx-4">{t("meet_the_team_rose_md_designation")}</h5>
              <p className=" mx-4">
                <a href="mailto:rose@mhpremierstaffingsolutions.com">
                  <TfiEmail
                    style={{
                      color: "#8e6d45",
                      marginRight: "5px",
                    }}
                  />
                </a>
                rose@mhpremierstaffingsolutions.com
                <br />
                <a href="tel:+971524160552">
                  <FiPhoneOutgoing
                    style={{
                      color: "#8e6d45",
                      marginRight: "5px",
                    }}
                  />
                </a>
                +971 52 416 0552
                <br />
                <a
                  style={{
                    fontSize: "16px",
                    textDecoration: "none",
                    color: "#212529",
                  }}
                  target="_blank"
                  href="https://www.linkedin.com/in/rose-picicco-059b1026a"
                >
                  <AiFillLinkedin
                    style={{
                      color: "#8e6d45",
                      marginRight: "5px",
                    }}
                  />
                  Linkedin
                </a>
              </p>
              <p className="mx-4 about_us_section_paragraph">
                {t("meet_the_team_md_for_dubai_desc")}
              </p>
            </div>
            <div className="col-12 col-md-3 col-lg-3 mt-5">
              <img
                src="assets/frontend/images/meetTeam/ceo_dubai.jpg"
                alt="custom"
                className="img-fluid"
                style={{ height: "420px", marginTop: "20px" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: "white" }}>
        <div className="container ">
          <div className="row justify-content-end">
            <div className="col-12 col-md-3 col-lg-3">
              <img
                src="assets/frontend/images/meetTeam/2.jpg"
                alt="custom"
                className="img-fluid"
                style={{ height: "420px", marginTop: "20px" }}
              />
            </div>
            <div
              className="col-12 col-md-9 col-lg-9"
              style={{ backgroundColor: "#f8f5f0" }}
            >
              <h1 className="mt-5 mx-4">
                {t("meet_the_team_filippo_becchino")}
              </h1>
              <h5 className="mx-4">
                {t("meet_the_team_recruitment_consultant")}
              </h5>
              <p className=" mx-4">
                <a href="mailto:filippo@mhpremierstaffingsolutions.com">
                  <TfiEmail
                    style={{
                      color: "#8e6d45",
                      marginRight: "5px",
                    }}
                  />
                </a>{" "}
                filippo@mhpremierstaffingsolutions.com <br />
                <a href="tel:+44 7459 552887">
                  <FiPhoneOutgoing
                    style={{
                      color: "#8e6d45",
                      marginRight: "5px",
                    }}
                  />
                </a>
                +44 7459 552887
              </p>
              <p className="about_us_section_paragraph mx-4">
                {t("meet_the_team_recruitment_consultant_designation")}
              </p>
            </div>
          </div>

          {/* // */}
          <div className="row justify-content-end">
            <div
              className="col-12 col-md-9 col-lg-9"
              style={{ backgroundColor: "#f8f5f0" }}
            >
              <h1 className=" mx-4" style={{ marginTop: "70px" }}>
                {t("meet_the_team_manila_bartocci")}
              </h1>
              <h5 className="mx-4">
                {t("meet_the_team_recruitment_consultant")}
              </h5>
              <p className=" mx-4">
                <a href="mailto:manila@mhpremierstaffingsolutions.com">
                  <TfiEmail
                    style={{
                      color: "#8e6d45",
                      marginRight: "5px",
                    }}
                  />
                </a>
                manila@mhpremierstaffingsolutions.com <br />
                <a href="tel:+447944111197">
                  <FiPhoneOutgoing
                    style={{
                      color: "#8e6d45",
                      marginRight: "5px",
                    }}
                  />
                </a>
                +44 7944 111197
              </p>
              <p className="mx-4 about_us_section_paragraph">
                {t("meet_the_team_manila_bartocci_description")}
              </p>
            </div>
            <div className="col-12 col-md-3 col-lg-3 mt-5">
              <img
                src="assets/frontend/images/meetTeam/1.jpg"
                alt="custom"
                className="img-fluid"
                style={{ height: "420px", marginTop: "20px" }}
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
