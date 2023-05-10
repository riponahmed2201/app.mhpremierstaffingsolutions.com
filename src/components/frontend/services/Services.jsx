import React from "react";
import ServicePosition from "./ServicePosition";

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
          <div className="about_us_section_title"> RECRUITING </div>
          <p className="about_us_section_paragraph">
            It represents the most delicate process for a company. Our client
            offers us his complete confidence in looking for a talent to hire in
            his staff. <br />
            The process begins with discussing and listening to our client to
            understand exactly who is the ideal candidate they want. <br />
            We face this task with great seriousness and with a skill that is
            not only technological but also human. Like all recruitment
            agencies, we use web portals and social media to intercept the ideal
            candidates, but in the HOSPITALITY sector this may not be enough!
            <br />
            A CV. it cannot tell the true skills of a CHEF or a senior waiter or
            a PIZZA CHEF. <br />
            Our recruitment staff all with many years of operational experience
            in the world of hospitality make use of their experience to select
            the ideal candidates. <br />
            Finally, we have a capillary network of European and global
            connections in the world of restaurants and hotels which allows us
            to have reports of junior and senior TALENTs looking for new
            challenges in London and the UK. <br />
          </p>
        </div>
      </div>

      <div className="container">
        <div className="mt-5 mb-5">
          <div className="about_us_section_title"> PAY ROLL - RENT STAFF</div>
          <p className="about_us_section_paragraph">
            We have highly qualified personnel able to support hotels and
            restaurants for work peaks and to fill vacant roles from a few hours
            to medium-long periods. <br />
            The advantage for the CUSTOMER is to have personnel without any type
            of direct recruitment and to save on expensive selection processes
            by making use of the constant support of a dedicated consultant.{" "}
            <br />
            The savings for the customer also includes the costs relating to a
            direct employee and the obvious advantage of being able to
            remodulate his staff by requesting different figures day by day.{" "}
            <br />
            All our staff is selected on the basis of active research processes
            and before being sent on a mission to our customers, they are chosen
            on the basis of the requests of the RESTAURANT or HOTEL. <br />
            The selection processes always include interviews to understand if
            the skills present in the candidate are the ideal ones for our
            client. <br />
            The goal is to determine the perfect match between the COMPANIES of
            the HOSPITALITY world and the STAFF.
          </p>
        </div>
      </div>
      <div className="container">
        <ServicePosition />
      </div>
    </div>
  );
}

export default Services;
