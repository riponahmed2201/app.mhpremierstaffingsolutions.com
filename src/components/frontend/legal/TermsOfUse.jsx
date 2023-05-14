import React from "react";
import { useTranslation } from "react-i18next";

const TermsOfUse = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="banner-header section-padding valign bg-img bg-fixed img-fluid"
        style={{
          backgroundImage: `url('https://i.ibb.co/Ln4H0SZ/term.jpg')`,
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
                {t("terms_Of_use")}
              </h5>
              <h1 style={{ color: "white", fontSize: "70px" }}>
                {t("meet_the_team_company_name")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container " style={{ marginTop: "60px" }}>
        <h1 className="mt-5">MH</h1>
        <p style={{ fontSize: "20px" }} className="my-3">
          {t("meet_the_team_company_name")}
        </p>
        <p>
          <strong style={{ fontSize: "15px" }} className="my-5">
            {t("internal_standards_and_conditions_for_Clients")}
          </strong>
        </p>
        <p
          className="about_us_section_paragraph mt-4"
          style={{ marginBottom: "60px" }}
        >
          {t("terms_Of_use_description")}
          <strong>info@mhpremierstaffingsolutions.com</strong>
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
