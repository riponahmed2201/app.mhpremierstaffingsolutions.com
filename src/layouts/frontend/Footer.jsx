import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2">
            <div className="leftPartLinks">
              <ul>
                <li>
                  <Link to="/"> {t("home_footer_home")} </Link>
                  <Link to="/contact-us">{t("home_footer_contact")}</Link>
                  <Link to="/career">{t("home_footer_career")}</Link>
                  <Link to="/about">{t("home_footer_about_us")}</Link>
                  <Link to="/our-services">
                    {t("home_footer_our_services")}
                  </Link>
                  <Link to="/meet-the-team">
                    {t("home_footer_meet_the_team")}
                  </Link>
                  <Link to="/faq">{t("home_footer_faq")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-8">
            <div className="middlePart">
              <h3>{t("home_footer_need_help_contact_us")}</h3>
              <h4> {t("home_footer_phone_number")}</h4>
              <h5>{t("home_footer_email")}</h5>
              <div className="placeImg">
                <h6>
                  <img
                    src="assets/frontend/images/indexImages/place.png"
                    alt="image"
                  />
                  {t("home_footer_company_address")}
                </h6>
              </div>
              <span>{t("home_footer_follow_us_on")}</span>
              <div className="socialMediaIcons">
                <a
                  target="_blank"
                  href="https://www.facebook.com/RecruitmentMirkoHospitality/"
                >
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/socialMedia/Group 116168.png"
                    alt="image"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/recruitmentmirkohospitality/"
                >
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/socialMedia/Group 116169.png"
                    alt="image"
                  />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/mirko-hospitality/mycompany/?viewAsMember=true"
                >
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/socialMedia/Group 116170.png"
                    alt="image"
                  />
                </a>
                <a href="https://vm.tiktok.com/ZGJmndX98/" target="_blank">
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/socialMedia/Group 116171.png"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-2">
            <div className="rightPartLinks">
              <ul>
                <li>
                  <Link to="/corporate-information">
                    {t("home_footer_corporate_information")}
                  </Link>
                  <Link to="/terms-of-use">
                    {" "}
                    {t("home_footer_website_term_of_use")}
                  </Link>
                  <Link to="/privacy">{t("home_footer_privacy_notice")}</Link>
                  <Link to="/"> {t("home_footer_cookies")}</Link>
                  <a href="#">
                
                    {t("home_footer_download_the_app")}
                  </a>
                </li>
              </ul>
              <div className="rightPartLogoWrapper text-end">
                <a
                  href="https://apps.apple.com/us/app/mh/id6446052294"
                  target="_blank"
                >
                  <img
                    className="img-fluid me-2"
                    src="assets/frontend/images/indexImages/socialMedia/Group 117303.png"
                    alt="image"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.invain.mh"
                  target="_blank"
                >
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/indexImages/socialMedia/Group 117304.png"
                    alt="image"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 footerFinal">
            <div className="footerTextWrpper d-flex justify-content-between">
              <span>{t("home_footer_copy_right_all_reserved")}</span>
              <img
                className="img-fluid footerFinalLogo"
                src="assets/frontend/images/indexImages/footerLogo.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
