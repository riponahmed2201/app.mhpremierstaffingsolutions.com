import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FindJobs() {
  const { t } = useTranslation();

  return (
    <section className="find_jobs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="col-lg-6">
              <div className="humanimgwrapper">
                <img
                  className="human"
                  src="assets/frontend/images/indexImages/Find job/kisspng-web-design-web-page-search-engine-optimization-web-5c63b3e4337f02 1.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="counterimgwrapper">
                <Link to="/login">
                  <img
                    className="img-fluid workers w-75"
                    src="assets/frontend/images/indexImages/Find job/Frame 39.png"
                    alt="image"
                  />
                </Link>
                <Link to="/employee-register">
                  <img
                    className="img-fluid jobs w-75"
                    src="assets/frontend/images/indexImages/Find job/Frame 38.png"
                    alt="image"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="jobsh1">
              <h1>
                {t("home_find_the_best")}

                <span className="customWorkerJobsText">
                   {t("home_workers")} &amp;
                </span>

                <span className="customWorkerJobsText"> {t("home_jobs")} </span>
                {t("home_in_here")}
              </h1>
            </div>
            <div className="jobsp">
              <p>{t("home_help_hire_great")}</p>
            </div>
            <div className="bannerButtonWrapper text-end">
              <Link to="/login">
                <button type="button" className="btn bannerButtonWrapper1">
                  {t("home_banner_hire_worker")}
                </button>
              </Link>
              <Link to="/employee-register">
                <button
                  type="button"
                  style={{ marginLeft: "5px" }}
                  className="btn bannerButtonWrapper2"
                >
                  {t("home_banner_drop_your_cv")}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindJobs;
