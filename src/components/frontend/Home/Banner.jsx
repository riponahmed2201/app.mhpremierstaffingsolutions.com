import React from "react";

function Banner() {
  return (
    <section className="Indexbanner">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 Home_page_left_part">
            <img
              src="assets/frontend/images/indexImages/PERTICLE1 (2).png"
              className="img-fluid perticle1"
              alt
            />
            <div className="h1Wrapper">
              <h2>PREMIER STAFFING SOLUTIONS</h2>
            </div>
            <div className="pTextWrapper">
              <p>
                MH PREMIER STAFFING SOLUTIONS helps you hire great &amp;
                experienced workers at a moment's notice. You can Apply for Jobs
                as well
              </p>
            </div>
            <div className="bannerButtonWrapper">
              <button type="button" className="btn bannerButtonWrapper1">
                Hire a worker
              </button>
              <button type="button" style={{ marginLeft:'5px' }} className="btn bannerButtonWrapper2">
                Drop your CV, if Job Needed
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 Home_page_right_part">
            <img
              src="assets/frontend/images/indexImages/PERTICLE2.png"
              className="img-fluid perticle2"
              alt
            />
            <div className="bannerImageWrapper">
              <img
                src="assets/frontend/images/indexImages/Group 117293.png"
                className="img-fluid"
                alt
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
