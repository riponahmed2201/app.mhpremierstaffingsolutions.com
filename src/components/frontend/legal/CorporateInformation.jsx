import React from "react";
import { useTranslation } from "react-i18next";

const CorporateInformation = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="banner-header section-padding valign bg-img bg-fixed img-fluid"
        style={{
          backgroundImage: `url('https://i.ibb.co/0FJ7nbC/corporate.jpg')`,
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
              <h5 style={{ color: "white", fontSize: "18px" }}>
                {t("meet_the_team_company_name")}
              </h5>
              <h1 style={{ color: "white", fontSize: "70px" }}>
                {t("corporate_information")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container " style={{ marginTop: "60px" }}>
        <p
          style={{ fontSize: "20px" }}
          className="about_us_section_sub_title my-3"
        >
          {t("meet_the_team_company_name")}
        </p>
        <p>
          <strong style={{ fontSize: "15px" }} className="my-5">
            {t("internal_standards_and_conditions_for_Clients")}
          </strong>
        </p>
        <p
          className="about_us_section_paragraph mt-4"
          style={{ marginBottom: "100px" }}
        >
          {t("corporate_information_description")}
        </p>
      </div>
    </div>
  );
};

export default CorporateInformation;
