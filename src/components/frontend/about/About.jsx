import React from "react";

function About() {
  return (
    <div>
      <div
        class="banner-header section-padding valign bg-img bg-fixed img-fluid"
        style={{
          backgroundImage: `url('assets/frontend/images/aboutUs/about.png')`,
          minHeight: "400px",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div class="container">
          <div class="row">
            <div
              class="col-md-12 caption align-middle"
              style={{ marginTop: "150px" }}
            >
              <h5 style={{ color: "white", fontSize: "18px" }}>
                MH PREMIER STAFFING SOLUTIONS
              </h5>
              <h1 style={{ color: "white", fontSize: "70px" }}>About Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="mt-5 mb-5">
          <div className="about_us_section_title">MH</div>
          <div className="about_us_section_sub_title">
            <strong>PREMIER STAFFING SOLUTIONS</strong>
          </div>
          <br />
          <p className="about_us_section_paragraph">
            MH premier staffing solutions represents the natural progression of
            a path born in 2016 with Mirko Hospitality.
          </p>
          <p className="about_us_section_paragraph">
            Mirko Picicco, an Italian businessman with excellent knowledge
            surrounding London restaurants and hotels, wanted to make his
            notable experience in the world of restaurants and hotels available
            to the English market, making use of a highly qualified staff all
            with DNA linked to the world of hospitality.
          </p>
          <p className="about_us_section_paragraph">
            The company uses active personnel research matured through extensive
            European and global connections of qualified professionals such as:
            executive chef, restaurants, and hotels.
          </p>
          <p>
            <strong>Why are we different from others?</strong>
          </p>
          <p className="about_us_section_paragraph">
            Our main feature is to consider the customer a partner, not just a
            patron; our customer’s success is our success. Our recruiters don’t
            just examine CVs, but actively interact with the candidate with the
            objective of grasping those potential characteristics that are
            distinctive elements of those who work in the world of restaurants
            and hotels. Our vision projects us to look for the best technologies
            in order to reach the recruitment market, the help of QR CODE -
            DASHBOARD - APP being typical elements of the ability to innovate.
            Knowing our clients’ problems represents a daily success in
            recruitment processes, despite the challenge it brings.
          </p>
          <p className="about_us_section_paragraph">
            Many of London’s leading hotels and restaurants already have their
            trust in us; we are just waiting for you. No matter if you are a
            junior or senior talent for us, you are a person and a human
            resource before being a name on a CV.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
