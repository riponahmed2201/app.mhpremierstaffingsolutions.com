import React from "react";
import { Link } from "react-router-dom";
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
              <Link to="/our-services">
                <span className="custom_span2">
                  {t("home_service_services")}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
