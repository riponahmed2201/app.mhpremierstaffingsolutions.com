import React from "react";

function Services() {
  return (
    <div>
      <div
        class="banner-header section-padding valign bg-img bg-fixed img-fluid"
        style={{
          backgroundImage: `url('assets/frontend/images/services/service.png')`,
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
              <h1 style={{ color: "white", fontSize: "70px" }}>Our Services</h1>
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
            It represents the most intricate process for a company. Our client
            offers us their complete confidence in looking for a talent to hire
            as staff.
          </p>
          <p className="about_us_section_paragraph">
            The process begins with discussing and listening, gaining an
            understanding as to who would be the ideal candidate for them; we
            face this task with importance.
          </p>
          <p className="about_us_section_paragraph">
            Like all recruitment agencies, we use web portals and social media
            to intercept ideal candidates, but this may not be enough in the
            hospitality sector!
          </p>

          <p className="about_us_section_paragraph">
            A CV cannot tell the accurate skills of a chef or senior waiter.
          </p>
          <p className="about_us_section_paragraph">
            Our recruitment staff, with many years of operational experience in
            the hospitality world, can.
          </p>
          <p className="about_us_section_paragraph">
            Finally, we have a capillary network of global connections in the
            world of restaurants and hotels, allowing us to have reports of
            junior and senior talents looking for new challenges in the United
            Kingdom.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
