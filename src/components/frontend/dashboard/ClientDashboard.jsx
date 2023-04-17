import React from "react";

function ClientDashboard() {
  return (
    <div>
      {/* Dashboard part 1 */}
      <section className="dashboard1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 margin768">
              <div className="row">
                <div className="col-lg-6 col-md-6 ">
                  <div
                    className="card"
                    style={{
                      width: "auto",
                      height: 211,
                      borderRadius: "14.8px",
                    }}
                  >
                    <div className="card-body welcome_card">
                      <h5
                        className="card-title"
                        style={{ fontWeight: 600, fontSize: 20 }}
                      >
                        Hi <br />
                        Food King Restaurant,
                      </h5>
                      <p
                        className="card-text"
                        style={{
                          fontSize: 14,
                          fontWeight: 400,
                          color: "#7b7b7b",
                        }}
                      >
                        Explore the features of MH App here
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 active_and_pending_column">
                  <div
                    className="card mb-3 activeEmployeeCard"
                    style={{
                      maxWidth: 242,
                      backgroundColor: "#e5faea",
                      padding: 22,
                      borderRadius: "14.8px",
                    }}
                  >
                    <div className="row ">
                      <div className="col-lg-3 col-md-3 d-flex justify-content-center align-items-center">
                        <img
                          src="assets/frontend/images/Dashboardimages/dashboard 1/eclipsegreen.png"
                          className="img-fluid"
                          alt
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 p-0">
                        <span style={{ fontWeight: 500, fontSize: 15 }}>
                          Active Employees
                        </span>
                      </div>
                      <div className="col-lg-3 col-md-3 d-flex  justify-content-center align-items-center">
                        <span style={{ fontWeight: 700, fontSize: 25 }}>
                          15
                        </span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="card pendingInvoicesClass"
                    style={{
                      maxWidth: 242,
                      backgroundColor: "#ffedea",
                      padding: 22,
                      borderRadius: "14.8px",
                    }}
                  >
                    <div className="row">
                      <div className="col-lg-3 col-md-3 d-flex justify-content-center align-items-center">
                        <img
                          src="assets/frontend/images/Dashboardimages/dashboard 1/EllipseRed.png"
                          className="img-fluid"
                          alt
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 p-0">
                        <span style={{ fontWeight: 500, fontSize: 15 }}>
                          Pending Invoices
                        </span>
                      </div>
                      <div className="col-lg-3 col-md-3 d-flex justify-content-center align-items-center">
                        <span style={{ fontWeight: 700, fontSize: 25 }}>
                          02
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-7 d-flex flex-row justify-content-center align-items-center"
              style={{ backgroundColor: "#ffffff", borderRadius: "14.8px" }}
            >
              <div className="row">
                <div className="col-lg-3 col-md-3 customPadding_for_768">
                  <div
                    className="card-body custom_dashboard_right_side_cards text-center"
                    style={{ backgroundColor: "#f6f1e5" }}
                  >
                    <div className="dashimg">
                      <img
                        src="assets/frontend/images/Dashboardimages/dashboard 1/dashboard.png"
                        className="img-fluid"
                        alt
                      />
                    </div>
                    <div className="dashP">
                      <p>Dashboard</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 customPadding_for_768">
                  <div
                    className="card-body custom_dashboard_right_side_cards dashboardMyemloyeeCardHeightFix text-center"
                    style={{ backgroundColor: "#f6f1e5" }}
                  >
                    <div className="employeeImg">
                      <img
                        src="assets/frontend/images/Dashboardimages/dashboard 1/employe.png"
                        className="img-fluid"
                        alt
                      />
                    </div>
                    <div className="employeeP">
                      <p>My Employees</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 customPadding_for_768">
                  <div
                    className="card-body custom_dashboard_right_side_cards text-center"
                    style={{ backgroundColor: "#f6f1e5" }}
                  >
                    <div className="invoiceImg">
                      <img
                        src="assets/frontend/images/Dashboardimages/dashboard 1/image 2.png"
                        className="img-fluid"
                        alt
                      />
                    </div>
                    <div className="invoiceP">
                      <p>Invoice &amp; Payment</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 customPadding_for_768">
                  <div
                    className="card-body custom_dashboard_right_side_cards text-center"
                    style={{ backgroundColor: "#f6f1e5" }}
                  >
                    <div className="helpImg">
                      <img
                        src="assets/frontend/images/Dashboardimages/dashboard 1/helpSupport.png"
                        className="img-fluid"
                        alt
                      />
                    </div>
                    <div className="helpP">
                      <p>Help &amp; Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dashboard part 1 End*/}
      {/* Dashboard 2 Start*/}
      <section className="dashboard2">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-10"
              style={{
                backgroundColor: "#ffffff",
                padding: "20px 20px",
                borderRadius: "14.8px",
              }}
            >
              <div className="row showEmployeerow">
                <div className="col-lg-6 col-md-6">
                  <div className="MHEmployeeImageandText">
                    <img
                      src="assets/frontend/images/Dashboardimages/dashboard2/search.png"
                      className="img-fluid"
                      alt
                    />
                    <span>MH</span>
                    <span>Employees</span>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="MHEmployeeText text-end">
                    <span>1200</span>
                    <span>employees are showing</span>
                  </div>
                </div>
              </div>
              <div className="row mb-4 d-flex">
                <div className="col-lg-3 col-md-3 bookNowCardMobileMarginBottom">
                  <div
                    className="card custom_card_image"
                    style={{ width: "auto" }}
                  >
                    <img
                      src="assets/frontend/images/Dashboardimages/dashboard2/card profiles/Rectangle 40236.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body custom_card_padding">
                      <h5 className="card-title customCardTitle">
                        Mr Alquraish Sharkar
                      </h5>
                      <div className="row">
                        <div className="col-xl-5 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Star 1.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>4.5</span>
                            <span>(123)</span>
                          </div>
                        </div>
                        <div className="col-xl-7 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/experience.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="experienceSpan d-flex">
                            <span>Exp: </span>
                            <span>5 years</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Chef.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>Runner</span>
                          </div>
                        </div>
                        <div className="col-lg-6" />
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/clock.png"
                              className="img-fluid clock"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Total hours: &nbsp; </span>
                            <span>2456 H</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/rate.png"
                              className="img-fluid rate"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Rate &nbsp; </span>
                            <span>500$/hour</span>
                          </div>
                        </div>
                      </div>
                      <div className="row bookmark_row">
                        <div className="col-lg-2 col-md-4 ">
                          <div className="bookmarkImageWrapper d-flex flex-column justify-content-center align-items-center">
                            <a href>
                              <img
                                src="assets/frontend/images/Dashboardimages/dashboard2/bookmark.png"
                                alt
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="bookNowImg">
                            <a href>
                              <button className="bookNowButton">
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 bookNowCardMobileMarginBottom">
                  <div
                    className="card custom_card_image"
                    style={{ width: "auto" }}
                  >
                    <img
                      src="assets/frontend/images/Dashboardimages/dashboard2/card profiles/7.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body custom_card_padding">
                      <h5 className="card-title customCardTitle">
                        Jonathon Alex Bend
                      </h5>
                      <div className="row">
                        <div className="col-xl-5 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Star 1.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>4.5</span>
                            <span>(123)</span>
                          </div>
                        </div>
                        <div className="col-xl-7 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/experience.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="experienceSpan d-flex">
                            <span>Exp: </span>
                            <span>5 years</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col lg-7 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Chef.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>Manager</span>
                          </div>
                        </div>
                        <div className="col-lg-5" />
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/clock.png"
                              className="img-fluid clock"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Total hours: &nbsp; </span>
                            <span>2456 H</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/rate.png"
                              className="img-fluid rate"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Rate &nbsp; </span>
                            <span>500$/hour</span>
                          </div>
                        </div>
                      </div>
                      <div className="row bookmark_row">
                        <div className="col-lg-2">
                          <div className="bookmarkImageWrapper d-flex flex-column justify-content-center align-items-center">
                            <a href>
                              <img
                                src="assets/frontend/images/Dashboardimages/dashboard2/bookmark.png"
                                alt
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="bookNowImg">
                            <a href>
                              <button className="bookNowButton">
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 bookNowCardMobileMarginBottom">
                  <div
                    className="card custom_card_image"
                    style={{ width: "auto" }}
                  >
                    <img
                      src="assets/frontend/images/Dashboardimages/dashboard2/card profiles/Rectangle 40236 (1).png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body custom_card_padding">
                      <h5 className="card-title customCardTitle">
                        Christopher Nolan
                      </h5>
                      <div className="row">
                        <div className="col-xl-5 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Star 1.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>4.5</span>
                            <span>(123)</span>
                          </div>
                        </div>
                        <div className="col-xl-7 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/experience.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="experienceSpan d-flex">
                            <span>Exp: </span>
                            <span>5 years</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col lg-6 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/rate.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>Chef</span>
                          </div>
                        </div>
                        <div className="col-lg-6" />
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/clock.png"
                              className="img-fluid clock"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Total hours: &nbsp; </span>
                            <span>2456 H</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/rate.png"
                              className="img-fluid rate"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Rate &nbsp; </span>
                            <span>500$/hour</span>
                          </div>
                        </div>
                      </div>
                      <div className="row bookmark_row">
                        <div className="col-lg-2">
                          <div className="bookmarkImageWrapper d-flex flex-column justify-content-center align-items-center">
                            <a href>
                              <img
                                src="assets/frontend/images/Dashboardimages/dashboard2/bookmark.png"
                                alt
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="bookNowImg">
                            <a href>
                              <button className="bookNowButton">
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 bookNowCardMobileMarginBottom">
                  <div
                    className="card custom_card_image"
                    style={{ width: "auto" }}
                  >
                    <img
                      src="assets/frontend/images/Dashboardimages/dashboard2/card profiles/Rectangle 40236 (2).png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body custom_card_padding">
                      <h5 className="card-title customCardTitle">
                        Anada Aniana
                      </h5>
                      <div className="row">
                        <div className="col-xl-5 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Star 1.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>4.5</span>
                            <span>(123)</span>
                          </div>
                        </div>
                        <div className="col-xl-7 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/experience.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="experienceSpan d-flex">
                            <span>Exp: </span>
                            <span>5 years</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col lg-6 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Chef.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>Chef</span>
                          </div>
                        </div>
                        <div className="col-lg-6" />
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/clock.png"
                              className="img-fluid clock"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Total hours: &nbsp; </span>
                            <span>2456 H</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/rate.png"
                              className="img-fluid rate"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Rate &nbsp; </span>
                            <span>500$/hour</span>
                          </div>
                        </div>
                      </div>
                      <div className="row bookmark_row">
                        <div className="col-lg-2">
                          <div className="bookmarkImageWrapper d-flex flex-column justify-content-center align-items-center">
                            <a href>
                              <img
                                src="assets/frontend/images/Dashboardimages/dashboard2/bookmark.png"
                                alt
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="bookNowImg">
                            <a href>
                              <button className="bookNowButton">
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-flex">
                <div className="col-lg-3 col-md-3 bookNowCardMobileMarginBottom">
                  <div
                    className="card custom_card_image"
                    style={{ width: "auto" }}
                  >
                    <img
                      src="assets/frontend/images/Dashboardimages/dashboard2/card profiles/2ndrow1st.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body custom_card_padding">
                      <h5 className="card-title customCardTitle">
                        Christopher Nolan
                      </h5>
                      <div className="row">
                        <div className="col-xl-5 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Star 1.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>4.5</span>
                            <span>(123)</span>
                          </div>
                        </div>
                        <div className="col-xl-7 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/experience.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="experienceSpan d-flex">
                            <span>Exp: </span>
                            <span>5 years</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col lg-6 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Chef.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>Security</span>
                          </div>
                        </div>
                        <div className="col-lg-6" />
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/clock.png"
                              className="img-fluid clock"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Total hours: &nbsp; </span>
                            <span>2456 H</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/rate.png"
                              className="img-fluid rate"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Rate &nbsp; </span>
                            <span>500$/hour</span>
                          </div>
                        </div>
                      </div>
                      <div className="row bookmark_row">
                        <div className="col-lg-2">
                          <div className="bookmarkImageWrapper d-flex flex-column justify-content-center align-items-center">
                            <a href>
                              <img
                                src="assets/frontend/images/Dashboardimages/dashboard2/bookmark.png"
                                alt
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="bookNowImg">
                            <a href>
                              <button className="bookNowButton">
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 bookNowCardMobileMarginBottom">
                  <div
                    className="card custom_card_image"
                    style={{ width: "auto" }}
                  >
                    <img
                      src="assets/frontend/images/Dashboardimages/dashboard2/card profiles/2ndrow2nd.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body custom_card_padding">
                      <h5 className="card-title customCardTitle">
                        Mr Alquraish Sharkar
                      </h5>
                      <div className="row">
                        <div className="col-xl-5 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Star 1.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>4.5</span>
                            <span>(123)</span>
                          </div>
                        </div>
                        <div className="col-xl-7 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/experience.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="experienceSpan d-flex">
                            <span>Exp: </span>
                            <span>5 years</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col lg-7 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Chef.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>Manager</span>
                          </div>
                        </div>
                        <div className="col-lg-5" />
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/clock.png"
                              className="img-fluid clock"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Total hours: &nbsp; </span>
                            <span>2456 H</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/rate.png"
                              className="img-fluid rate"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Rate &nbsp; </span>
                            <span>500$/hour</span>
                          </div>
                        </div>
                      </div>
                      <div className="row bookmark_row">
                        <div className="col-lg-2">
                          <div className="bookmarkImageWrapper d-flex flex-column justify-content-center align-items-center">
                            <a href>
                              <img
                                src="assets/frontend/images/Dashboardimages/dashboard2/bookmark.png"
                                alt
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="bookNowImg">
                            <a href>
                              <button className="bookNowButton">
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 bookNowCardMobileMarginBottom">
                  <div
                    className="card custom_card_image"
                    style={{ width: "auto" }}
                  >
                    <img
                      src="assets/frontend/images/Dashboardimages/dashboard2/card profiles/secut.png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body custom_card_padding">
                      <h5 className="card-title customCardTitle">
                        Anada Aniana
                      </h5>
                      <div className="row">
                        <div className="col-xl-5 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Star 1.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>4.5</span>
                            <span>(123)</span>
                          </div>
                        </div>
                        <div className="col-xl-7 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/experience.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="experienceSpan d-flex">
                            <span>Exp: </span>
                            <span>5 years</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col lg-6 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Chef.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>Chef</span>
                          </div>
                        </div>
                        <div className="col-lg-6" />
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/clock.png"
                              className="img-fluid clock"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Total hours: &nbsp; </span>
                            <span>2456 H</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/rate.png"
                              className="img-fluid rate"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Rate &nbsp; </span>
                            <span>500$/hour</span>
                          </div>
                        </div>
                      </div>
                      <div className="row bookmark_row">
                        <div className="col-lg-2">
                          <div className="bookmarkImageWrapper d-flex flex-column justify-content-center align-items-center">
                            <a href>
                              <img
                                src="assets/frontend/images/Dashboardimages/dashboard2/bookmark.png"
                                alt
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="bookNowImg">
                            <a href>
                              <button className="bookNowButton">
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 bookNowCardMobileMarginBottom">
                  <div
                    className="card custom_card_image"
                    style={{ width: "auto" }}
                  >
                    <img
                      src="assets/frontend/images/Dashboardimages/dashboard2/card profiles/Rectangle 40236 (2).png"
                      className="card-img-top"
                      alt="..."
                    />
                    <div className="card-body custom_card_padding">
                      <h5 className="card-title customCardTitle">
                        Jonathon Alex Bend
                      </h5>
                      <div className="row">
                        <div className="col-xl-5 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Star 1.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>4.5</span>
                            <span>(123)</span>
                          </div>
                        </div>
                        <div className="col-xl-7 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/experience.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="experienceSpan d-flex">
                            <span>Exp: </span>
                            <span>5 years</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col lg-6 d-flex justify-content-start">
                          <div className="rating_logo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/Chef.png"
                              className="img-fluid"
                              alt
                            />
                          </div>
                          <div className="ratingSpans d-flex">
                            <span>Manager</span>
                          </div>
                        </div>
                        <div className="col-lg-6" />
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/clock.png"
                              className="img-fluid clock"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Total hours: &nbsp; </span>
                            <span>2456 H</span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 d-flex justify-content-start">
                          <div className="experienceLogo">
                            <img
                              src="assets/frontend/images/Dashboardimages/dashboard2/rate.png"
                              className="img-fluid rate"
                              alt
                            />
                          </div>
                          <div className="totalHoursSpan d-flex">
                            <span>Rate &nbsp; </span>
                            <span>500$/hour</span>
                          </div>
                        </div>
                      </div>
                      <div className="row bookmark_row">
                        <div className="col-lg-2">
                          <div className="bookmarkImageWrapper d-flex flex-column justify-content-center align-items-center">
                            <a href>
                              <img
                                src="assets/frontend/images/Dashboardimages/dashboard2/bookmark.png"
                                alt
                              />
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-10">
                          <div className="bookNowImg">
                            <a href>
                              <button className="bookNowButton">
                                Book Now
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right Side bar start */}
            <div className="col-lg-2 card customforfilerrow2">
              <div className="row firstFilterRow">
                <div className="col-lg-5 ">
                  <div className="filtersTitle">
                    <p>FILTERS</p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="resetData">
                    <button>Reset Data</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <h6 style={{ color: "#000000" }}>Category</h6>
              </div>
              <div className="row">
                <div className="btn-group">
                  <button
                    className="btn DashboardFilterCategoryDropdown btn-sm dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="assets/frontend/images/Dashboardimages/dashboard2/filterChef.png"
                      className="img-fluid"
                      alt
                    />{" "}
                    Chef
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row ratingRow">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating"
                    id="star1"
                    defaultValue={1}
                  />
                  <label htmlFor="star1" />
                  <input
                    type="radio"
                    name="rating"
                    id="star2"
                    defaultValue={2}
                  />
                  <label htmlFor="star2" />
                  <input
                    type="radio"
                    name="rating"
                    id="star3"
                    defaultValue={3}
                  />
                  <label htmlFor="star3" />
                  <input
                    type="radio"
                    name="rating"
                    id="star4"
                    defaultValue={4}
                  />
                  <label htmlFor="star4" />
                  <input
                    type="radio"
                    name="rating"
                    id="star5"
                    defaultValue={5}
                  />
                  <label htmlFor="star5" />
                </div>
              </div>
              <div className="row">
                <h6 className="experienceH6">Experience</h6>
              </div>
              <div className="row">
                <div className="btn-group">
                  <button
                    className="btn DashboardFilterexperienceDropown btn-sm dropdown-toggle dropdown-toggle-end"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    10-20 years
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-4">
                <h6 style={{ margin: "5px 0px" }}>Total Hour</h6>
              </div>
              <div className="row g-2">
                <div className="col">
                  <input
                    type="text"
                    className="form-control minimumTotalHourInput"
                    placeholder="Min:"
                    aria-label="First name"
                  />
                </div>
                <div className="col-auto align-self-center">
                  <span>-</span>
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control maximuTotalHourInput"
                    placeholder="Max:"
                    aria-label="Last name"
                  />
                </div>
              </div>
              <div className="row">
                <a href>
                  <button className="filterApply">Apply</button>
                </a>
              </div>
              <div className="row"></div>
            </div>
            {/* right Side bar end */}
          </div>
        </div>
      </section>
      {/* Dashboard 2 End */}

      {/* Pagination Start */}
      <section className="pagination">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12 d-flex justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination paginationLiA">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">«</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">»</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* Pagination Start */}
    </div>
  );
}

export default ClientDashboard;
