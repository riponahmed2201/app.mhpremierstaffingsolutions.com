import React from "react";

function FindJobs() {
  return (
    <section className="find_jobs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="col-lg-6">
              <div className="humanimgwrapper">
                <img
                  className="human"
                  src="assets/frontend/images/indexImages/Find job/kisspng-web-design-web-page-search-engine-optimization-web-5c63b3e4337f02 1.png"
                  alt="image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="counterimgwrapper">
                <img
                  className="img-fluid workers w-75"
                  src="assets/frontend/images/indexImages/Find job/Frame 39.png"
                  alt="image"
                />
                <img
                  className="img-fluid jobs w-75"
                  src="assets/frontend/images/indexImages/Find job/Frame 38.png"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="jobsh1">
              <h1>
                Find The Best
                <span className="customWorkerJobsText">Workers</span> &amp;
                <span className="customWorkerJobsText">Jobs</span> In here
              </h1>
            </div>
            <div className="jobsp">
              <p>
                MH PREMIER STAFFING SOLUTIONS helps you hire great &amp;
                experienced workers at a moment's notice. You can Apply for Jobs
                as well
              </p>
            </div>
            <div className="bannerButtonWrapper text-end">
              <button type="button" className="btn bannerButtonWrapper1">
                Hire a worker
              </button>
              <button
                type="button"
                style={{ marginLeft: "5px" }}
                className="btn bannerButtonWrapper2"
              >
                Drop your CV, if Job Needed
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindJobs;
