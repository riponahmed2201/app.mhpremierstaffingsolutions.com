import React from "react";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        className="banner-header section-padding valign bg-img bg-fixed img-fluid "
        data-background=""
        style={{
          backgroundImage: `url(assets/frontend/images/faq/faq.png)`,
          minHeight: "400px",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundColor: "white",
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
                {t("frequently_asked_questions")}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                {t("how_does_mh_agency_work")}
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {t("how_does_mh_agency_work_description")}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                {t("what_are_the_benefits_of_registering_with_mh_agency")}
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {t("what_are_the_benefits_of_registering_with_mh_agency_des")}
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                {t("what_type_of_vacancies_do_you_deal_with")}
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {t("what_type_of_vacancies_do_you_deal_with_des")}
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                {t("why_should_i_consider_temporary_work")}
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {t("why_should_i_consider_temporary_work_des")}
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                {t("how_much_does_it_cost_to_register")}
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {t("how_much_does_it_cost_to_register_des")}
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                {t("how_do_i_register")}
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">{t("how_do_i_register_des")}</div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSeven">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSeven"
                aria-expanded="false"
                aria-controls="flush-collapseSeven"
              >
                {t("what_do_i_need_to_register")}
              </button>
            </h2>
            <div
              id="flush-collapseSeven"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingSeven"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {t("what_do_i_need_to_register_des")}
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingEight">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseEight"
                aria-expanded="false"
                aria-controls="flush-collapseEight"
              >
                {t("what_does_registration_involve")}
              </button>
            </h2>
            <div
              id="flush-collapseEight"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingEight"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {t("what_does_registration_involve_des")}
              </div>
            </div>
          </div>

          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingNine">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseNine"
                aria-expanded="false"
                aria-controls="flush-collapseNine"
              >
                {t("what_are_your_opening_times")}
              </button>
            </h2>
            <div
              id="flush-collapseNine"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingNine"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {t("what_are_your_opening_times_des")}
              </div>
            </div>
          </div>

          <div class="accordion-item" style={{ marginBottom: "150px" }}>
            <h2 class="accordion-header" id="flush-headingTen">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTen"
                aria-expanded="false"
                aria-controls="flush-collapseTen"
              >
                {t("can_i_only_register_with_one_agency")}
              </button>
            </h2>
            <div
              id="flush-collapseTen"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTen"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                {t("can_i_only_register_with_one_agency_des")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
