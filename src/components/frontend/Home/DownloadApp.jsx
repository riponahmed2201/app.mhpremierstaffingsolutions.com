import React from "react";
import { useTranslation } from "react-i18next";

function DownloadApp() {
  const { t } = useTranslation();
  return (
    <section className="downloadApp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="assets/frontend/images/indexImages/PERTICLE2.png"
              className="downloadPerticle img-fluid"
              alt="image"
            />
            <div className="appAvailableImage">
              <img
                className="img-fluid"
                src="assets/frontend/images/indexImages/lineImg.png"
                alt="image"
              />
            </div>
            <div className="h2DownloadWrapper">
              <h2>{t("home_footer_download_the_app")}</h2>
            </div>
            <div className="pDownloadWrapper">
              <p>
                 {t("home_help_hire_great")}
              </p>
            </div>
            <div className="buttonDownloadWrapper d-flex justify-content-around align-items-center">
              <a
                href="https://apps.apple.com/us/app/mh/id6446052294"
                target="_blank"
              >
                <img
                  className="img-fluid"
                  src="assets/frontend/images/indexImages/appleButton.png"
                  alt="the"
                />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.invain.mh"
                target="_blank"
              >
                <img
                  className="img-fluid"
                  src="assets/frontend/images/indexImages/Group 116147.png"
                  alt="the"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="assets/frontend/images/indexImages/PERTICLE1 (2).png"
              className="downloadPerticle2 img-fluid"
              alt="image"
            />
            <div className="phoneImgWrapper">
              <img
                className="img-fluid"
                src="assets/frontend/images/indexImages/phone.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
