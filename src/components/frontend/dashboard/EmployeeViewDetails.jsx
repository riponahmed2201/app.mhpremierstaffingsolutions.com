import React from "react";
import { useParams } from "react-router-dom";

function EmployeeViewDetails() {

  const { id } = useParams();

  return (
    <section className="SelectedEmployee">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-5">
            <div className="row">
              <div className="col-xl-6">
                <div className="selectedEmploImgBackBtn">
                  <a href>
                    <img
                      src="assets/frontend/images/selectedEmployee/backButton.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="selectedEmployeeBookmarkImg">
                  <a href>
                    <img
                      src="assets/frontend/images/selectedEmployee/SelecEmployeeCardBookmaricon.png"
                      className="img-fluid"
                      alt="image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="selectedEmpProfilePic">
                <img
                  src="assets/frontend/images/selectedEmployee/slcEmpPro.png"
                  className="img-fluid"
                  alt="image"
                />
              </div>
            </div>
            <div className="row">
              <div className="profileMarker">
                <img
                  src="assets/frontend/images/selectedEmployee/profileMarkLogo.png"
                  className="img-fluid"
                  alt="image"
                />
              </div>
            </div>
            <div className="row">
              <div
                className="selectProfileRowForMargin"
                style={{ width: "auto", borderRadius: 14 }}
              >
                <div className="card selectEmpCardCard_body card-body">
                  <div className="sctEmplTitleBox">
                    <h5 className="card-title slctProfileNameTitle">
                      Mr Alquraish Sharkar
                    </h5>
                    <span className="sctProfileAge">Age: 45 years</span>
                    <span className="slctProfiletotalRating">
                      <img
                        src="assets/frontend/images/selectedEmployee/Star 1.png "
                        className="img-fluid scltEmpProfileRatingIcon"
                        alt="image"
                      />
                      4.5 (15)
                    </span>
                    <div className="slctproLine">
                      <img
                        src="assets/frontend/images/selectedEmployee/Line 1.png"
                        className="img-fluid"
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="row slctEmpProfileRateRow">
                    <div className="col-xl-7 col-md-6">
                      <span className="slctProfileRateName">
                        <img
                          className="img-fluid SlctProrateIcon"
                          src="assets/frontend/images/selectedEmployee/rate.png"
                          alt="image"
                        />
                        Rate:
                      </span>
                      <span className="slctprofilePerHourPrice">500$/Hour</span>
                    </div>
                    <div className="col-xl-5 col-md-6">
                      <span className="slctProfileExpName">
                        <img
                          src="assets/frontend/images/selectedEmployee/experience.png"
                          alt="image"
                        />
                        Exp:
                      </span>
                      <span className="slctProfileExpValue">5 years</span>
                    </div>
                  </div>
                  <div className="row slctEmpProfileRateRow">
                    <div className="col-xl-7 col-md-6">
                      <span className="selectEmployeeTotalHours">
                        <img
                          src="assets/frontend/images/selectedEmployee/clock.png"
                          alt="image"
                        />
                        Total Hours:
                      </span>
                      <span className="selectEmployeeTotalHoursValue">
                        2456 H
                      </span>
                    </div>
                    <div className="col-xl-5 col-md-6 selectEmpReviewCol">
                      <span className="selectEmpReviewspan">
                        <img
                          src="assets/frontend/images/selectedEmployee/Review.png"
                          alt="image"
                        />
                        Review:
                      </span>
                      <span className="selectEmpReviewspanValue">1 time</span>
                    </div>
                  </div>
                  <div className="row slcEmpProfilLicenseRow">
                    <div className="col-xl-12">
                      <span className="selectEmpLicense">
                        <img
                          src="assets/frontend/images/selectedEmployee//licenceLogo.png"
                          className="img-fluid selectEmpLicenseLogo"
                          alt="image"
                        />
                        License No:
                      </span>
                      <span className="selectEmpLicenseValue">
                        MN123456-12345
                      </span>
                    </div>
                  </div>
                  <div className="selectEmployeeCardBookNowButton">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-md-7">
            <div className="selectEmpLocationBar">
              <p>Location</p>
              <img
                src="assets/frontend/images/selectedEmployee/Line 2.png"
                className="img-fluid"
                alt="image"
              />
              <span>
                <img src="assets/frontend/images/selectedEmployee/location.png" alt="image" />
                &nbsp;20 Ranipukur Lane, Ciatle, #PO 42345, Camodia
              </span>
            </div>
            <div className="selectEmpLocationBar">
              <p>Education</p>
              <img
                src="assets/frontend/images/selectedEmployee/Line 2.png"
                className="img-fluid"
                alt="image"
              />
              <span>
                <img
                  src="assets/frontend/images/selectedEmployee/education (2).png"
                  alt="image"
                />
                &nbsp;2015-17: Oxford High School, Camodia
              </span>
              <div className="row">
                <span>
                  <img
                    src="assets/frontend/images/selectedEmployee/education (2).png"
                    alt="image"
                  />
                  &nbsp;2018-20: (B.Sc.)Cambridge University, Camodia
                </span>
              </div>
            </div>
            <div className="selectEmpLocationBar">
              <p>Certificate</p>
              <img
                src="assets/frontend/images/selectedEmployee/Line 2.png"
                className="img-fluid"
                alt="image"
              />
              <span>
                <img
                  src="assets/frontend/images/selectedEmployee/certificateICon.png"
                  alt="image"
                />
                &nbsp;College Certificate in Culinary Skills
              </span>
              <div className="row">
                <span>
                  <img
                    src="assets/frontend/images/selectedEmployee/certificateICon.png"
                    alt="image"
                  />
                  &nbsp;College Certificate in Culinary Skills &amp; Cookery
                </span>
              </div>
              <span>
                <img
                  src="assets/frontend/images/selectedEmployee/certificateICon.png"
                  alt="image"
                />
                &nbsp;Advanced Certificate in Culinary Arts
              </span>
              <div className="row">
                <span>
                  <img
                    src="assets/frontend/images/selectedEmployee/certificateICon.png"
                    alt="image"
                  />
                  &nbsp;Certificate IV Program
                </span>
              </div>
            </div>
            <div className="selectEmpLocationBar">
              <p>Language</p>
              <img
                src="assets/frontend/images/selectedEmployee/Line 2.png"
                className="img-fluid"
                alt="image"
              />
              <span>
                <img
                  src="assets/frontend/images/selectedEmployee/googleTranslate.png"
                  alt="image"
                />
                &nbsp;English (Native)
              </span>
              <div className="row">
                <span>
                  <img
                    src="assets/frontend/images/selectedEmployee/googleTranslate.png"
                    alt="image"
                  />
                  &nbsp;Spanish, Hindi (Conversational)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmployeeViewDetails;
