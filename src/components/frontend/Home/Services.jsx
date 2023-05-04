import React from "react";
import { useTranslation } from "react-i18next";

function Services() {
  const { t } = useTranslation();

  return (
    <section className="our_services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="ourServicesSpan">
              <span className="custom_span1">{t("home_service_our")}</span>
              <span className="custom_span2">
                {t("home_service_services")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
