import React from "react";

function DownloadApp() {
  return (
    <section className="downloadApp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="assets/frontend/images/indexImages/PERTICLE2.png"
              className="downloadPerticle img-fluid"
              alt="image"
            />
            <div className="appAvailableImage">
              <img
                className="img-fluid"
                src="assets/frontend/images/indexImages/lineImg.png"
                alt="image"
              />
            </div>
            <div className="h2DownloadWrapper">
              <h2>Download The App</h2>
            </div>
            <div className="pDownloadWrapper">
              <p>
                MH PREMIER STAFFING SOLUTIONS helps you hire great &amp;
                experienced workers at a moment's notice. You can Apply for Jobs
                as well
              </p>
            </div>
            <div className="buttonDownloadWrapper d-flex justify-content-around align-items-center">
              <a href>
                <img
                  className="img-fluid"
                  src="assets/frontend/images/indexImages/appleButton.png"
                  alt="image"
                />
              </a>
              <a href>
                <img
                  className="img-fluid"
                  src="assets/frontend/images/indexImages/Group 116147.png"
                  alt="image"
                />
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src="images/indexImages/PERTICLE1 (2).png"
              className="downloadPerticle2 img-fluid"
              alt="image"
            />
            <div className="phoneImgWrapper">
              <img
                className="img-fluid"
                src="assets/frontend/images/indexImages/phone.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DownloadApp;
