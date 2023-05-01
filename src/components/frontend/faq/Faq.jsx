import React from "react";

const Faq = () => {
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
                MH PREMIER STAFFING SOLUTIONS
              </h5>
              <h1 style={{ color: "white", fontSize: "70px" }}>
                Frequently Asked Questions
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
                HOW DOES MH AGENCY WORK?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                We are a recruitment company that offers hospitality services to
                local businesses. We deal with many local employers who approach
                us to recruit for them. Once our clients have placed a vacancy
                with us and we have a full understanding of the job description
                and person specification, we then match this up with a
                candidate’s requirements, skills and experience.
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
                WHAT ARE THE BENEFITS OF REGISTERING WITH MH AGENCY?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                More and more employers are choosing to use us, and many of our
                clients use our services on a sole agency basis. This means that
                some of the jobs we recruit into are exclusive to us and not
                advertised elsewhere. You’ll also receive the benefit of our
                expert consultants’ career advice and local Knowledge.
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
                WHAT TYPE OF VACANCIES DO YOU DEAL WITH?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                We recruit for temporary and permanent roles at all levels
                within the Catering Industry. WHAT IS 'TEMPING'? 'Temping' is a
                commonly used term, used to describe the undertaking of
                temporary work!
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
                WHY SHOULD I CONSIDER TEMPORARY WORK?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Temping actually has many, many benefits! First and foremost,
                it's flexible; you can choose where and when you work. Often,
                you can start work quickly as temporary assignments are usually
                available immediately and paid fortnightly. It's also a great
                way to experience different environments, whilst gaining
                experience, building your network of contacts and having
                something positive to fill any employment gaps on your CV. You
                might even find that it's a route to a permanent role; we've
                lost count of the times we've placed a temporary worker into a
                short-term role and they've ended up being offered a role
                directly with the client. We must also point out that temporary
                work isn't for everyone, as the same flexibility which could be
                a benefit to some, might be outweighed by the need for a
                guaranteed, stable income to others. We'd certainly never
                recommend that anyone should leave a permanent role to take up a
                temporary assignment.
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
                HOW MUCH DOES IT COST TO REGISTER?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Registration and all of our services are 100% free to
                candidates. In fact, it is illegal for a recruitment agency to
                charge work-seekers for their services.
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
                HOW DO I REGISTER?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                You can register via our website www.mhpremiersolution.com, or
                through our app mhpremiersolution
              </div>
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
                WHAT DO I NEED TO REGISTER?
              </button>
            </h2>
            <div
              id="flush-collapseSeven"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingSeven"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                You will need to provide proof of your right to work in the UK,
                such as a Passport. For a list of acceptable documents look at
                our website www.mhpremiersolution.com
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
                WHAT DOES REGISTRATION INVOLVE?
              </button>
            </h2>
            <div
              id="flush-collapseEight"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingEight"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                We will arrange a mutually convenient registration appointment
                where you will meet with one of our consultants, which normally
                takes around half an hour. During the meeting, we will go
                through your experience to date, review your job search
                requirements and discuss any current job vacancies.
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
                WHAT ARE YOUR OPENING TIMES?
              </button>
            </h2>
            <div
              id="flush-collapseNine"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingNine"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Our offices are open Monday to Friday 9:00am to 5:00pm,
                excluding UK Bank Holidays.
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
                CAN I ONLY REGISTER WITH ONE AGENCY?
              </button>
            </h2>
            <div
              id="flush-collapseTen"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTen"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                No. You can choose to register with as many agencies as you
                wish. However, we believe that our excellent reputation sets us
                apart from our competitors and we would love for you to choose
                us as your sole agency.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
