import React from "react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contactUs">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="contactUsText text-center">
              <span className="contactUsSpan">{t("home_contact_us")}</span>
              <span className="todaySpan">{t("home_contact_us_today")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container contactUsFormContainer">
        <div className="row">
          <div className="col-lg-12">
            <div className="row text-center">
              <div className="col-lg-6">
                <div className="inputLogoWrapper">
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/contactForm/Placeholder.png"
                    alt="image"
                  />
                </div>
                <input
                  placeholder={t("home_contact_form_name")}
                  type="text"
                  className="form-control custom_client_input mb-3"
                />
              </div>
              <div className="col-lg-6">
                <div className="inputLogoWrapper">
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/contactForm/Placeholder (1).png"
                    alt="image"
                  />
                </div>
                <input
                  placeholder={t("home_contact_form_email")}
                  type="email"
                  className="form-control custom_client_input mb-3"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="messageinputLogoWrapper">
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/contactForm/Placeholder (2).png"
                    alt="image"
                  />
                </div>
                <textarea
                  className="form-control contactUsMessage"
                  placeholder={t("home_contact_form_message")}
                  id="floatingTextarea2"
                  style={{ height: 100 }}
                  defaultValue={""}
                />
              </div>
              <div className="sendButtonWrapper text-center">
                <a
                  href="#"
                  className="btn"
                  style={{
                    width: "152px",
                    height: "40px",
                    backgroundColor: "#c6a34f",
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  {t("home_contact_form_send_button")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
