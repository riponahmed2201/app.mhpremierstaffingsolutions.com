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
            MH premier staffing solutions represents the natural evolution of a
            path born in 2016 with Mirko Hospitality. <br />
            Mirko Picicco, an Italian bussiness man with a great connoisseur of
            the world of London restaurants and hotels, wanted to make his great
            experience in the world of restaurants and hotels available to the
            English market, making use of a highly qualified staff all with a
            DNA linked to the world of HOSPITALITY. <br />
            The company makes use of both active personnel research processes
            and processes matured through large European and global connections
            of qualified professionals such as EXECUTIVE CHEF, Restaurants and
            Hotels. <br />
            Why are we different from others? <br />
            The main feature is to consider the CUSTOMER a parther not only
            commercial because the success of our CUSTOMER is our success.
            <br />
            Our recruiters don't just examine CVs but actively interact with the
            candidate trying to grasp, through their great experience in the
            sector, those potential characteristics that are the distinctive
            elements of those who work in the world of restaurants and hotels.
            <br />
            Our vision projects us to look for the best technologies to reach
            the recruitment market also with the help of QR CODE - DASCHBOARD -
            APP typical elements of the ability to innovate. <br />
            Knowledge of our clients' problems represents a winning daily
            challenge in recruitment processes.
          </p>

          <p className="about_us_section_paragraph">
            Many of the leading hotels and restaurants in London have already
            placed their trust in us now we are just waiting for you!!! and if
            you are a junior or senior talent for us you are a person a human
            resource before being a name on a CV.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
