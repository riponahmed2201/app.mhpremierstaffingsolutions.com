import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { token } from "../../../utils/authentication";
import Loader from "../../loadar/Loader";
import defaultImage from "../../../assets/images/default.png";
import moment from "moment";

function EmployeeViewDetails() {
  const { id } = useParams();

  const [getSingleEmployeeDetails, setSingleEmployeeDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  //Fetch refer person list for dropdown
  const fetchSingleEmployeeData = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        }
      );

      setSingleEmployeeDetails(res?.data?.details);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSingleEmployeeData();
  }, [id]);

  return (
    <section className="SelectedEmployee">
      <div className="container">
        {loading ? (
          <div className="card-body">
            <Loader /> <br />
            <br />
            <br />
          </div>
        ) : (
          <div className="row">
            <div className="col-xl-4 col-md-5">
              <div className="row">
                <div className="col-xl-6">
                  <div className="selectedEmploImgBackBtn">
                    <Link to="/client-dashboard">
                      <img
                        src="/assets/frontend/images/selectedEmployee/backButton.png"
                        className="img-fluid"
                        alt="alt-image"
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="selectedEmployeeBookmarkImg">
                    <a href>
                      <img
                        src="/assets/frontend/images/selectedEmployee/SelecEmployeeCardBookmaricon.png"
                        className="img-fluid"
                        alt="alt-image"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="selectedEmpProfilePic">
                  <img
                    src={
                      getSingleEmployeeDetails?.profilePicture
                        ? process.env.REACT_APP_ASSETs_BASE_URL +
                          "/" +
                          getSingleEmployeeDetails?.profilePicture
                        : defaultImage
                    }
                    className="img-fluid"
                    alt="alt-image"
                  />
                </div>
              </div>
              <div className="row">
                <div className="profileMarker">
                  <img
                    src="/assets/frontend/images/selectedEmployee/profileMarkLogo.png"
                    className="img-fluid"
                    alt="alt-image"
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
                        {getSingleEmployeeDetails?.name}
                      </h5>
                      <span className="sctProfileAge">
                        Date Of Birth:
                        {moment(getSingleEmployeeDetails?.dateOfBirth)
                          .format("YYYY-MM-DD")
                          .valueOf()}
                      </span>
                      <span className="slctProfiletotalRating">
                        <img
                          src="/assets/frontend/images/selectedEmployee/Star 1.png "
                          className="img-fluid scltEmpProfileRatingIcon"
                          alt="alt-image"
                        />
                        {getSingleEmployeeDetails?.rating}
                      </span>
                      <div className="slctproLine">
                        <img
                          src="/assets/frontend/images/selectedEmployee/Line 1.png"
                          className="img-fluid"
                          alt="alt-image"
                        />
                      </div>
                    </div>
                    <div className="row slctEmpProfileRateRow">
                      <div className="col-xl-7 col-md-6">
                        <span className="slctProfileRateName">
                          <img
                            className="img-fluid SlctProrateIcon"
                            src="/assets/frontend/images/selectedEmployee/rate.png"
                            alt="alt-image"
                          />
                          Rate:
                        </span>
                        <span className="slctprofilePerHourPrice">
                          {getSingleEmployeeDetails?.hourlyRate}£/Hour
                        </span>
                      </div>
                      <div className="col-xl-5 col-md-6">
                        <span className="slctProfileExpName">
                          <img
                            src="/assets/frontend/images/selectedEmployee/experience.png"
                            alt="alt-image"
                          />
                          Exp:
                        </span>
                        <span className="slctProfileExpValue">
                          {getSingleEmployeeDetails?.employeeExperience}
                        </span>
                      </div>
                    </div>
                    <div className="row slctEmpProfileRateRow">
                      <div className="col-xl-7 col-md-6">
                        <span className="selectEmployeeTotalHours">
                          <img
                            src="/assets/frontend/images/selectedEmployee/clock.png"
                            alt="alt-image"
                          />
                          Total Hours:
                        </span>
                        <span className="selectEmployeeTotalHoursValue">
                          {getSingleEmployeeDetails?.totalWorkingHour} H
                        </span>
                      </div>
                      <div className="col-xl-5 col-md-6 selectEmpReviewCol">
                        <span className="selectEmpReviewspan">
                          <img
                            src="/assets/frontend/images/selectedEmployee/Review.png"
                            alt="alt-image"
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
                            src="/assets/frontend/images/selectedEmployee//licenceLogo.png"
                            className="img-fluid selectEmpLicenseLogo"
                            alt="alt-image"
                          />
                          License No:
                        </span>
                        <span className="selectEmpLicenseValue">
                          {getSingleEmployeeDetails?.licensesNo}
                        </span>
                      </div>
                    </div>
                    {/* <div className="selectEmployeeCardBookNowButton">
                      <button>Book Now</button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-8 col-md-7">
              <div className="selectEmpLocationBar">
                <p>Location</p>
                <img
                  src="/assets/frontend/images/selectedEmployee/Line 2.png"
                  className="img-fluid"
                  alt="alt-image"
                />
                <span>
                  <img
                    src="/assets/frontend/images/selectedEmployee/location.png"
                    alt="alt-image"
                  />
                  &nbsp; {getSingleEmployeeDetails?.presentAddress}
                </span>
              </div>
              <div className="selectEmpLocationBar">
                <p>Education</p>
                <img
                  src="/assets/frontend/images/selectedEmployee/Line 2.png"
                  className="img-fluid"
                  alt="alt-image"
                />
                <span>
                  <img
                    src="/assets/frontend/images/selectedEmployee/education (2).png"
                    alt="alt-image"
                  />
                  &nbsp;{getSingleEmployeeDetails?.higherEducation}
                </span>
              </div>
              <div className="selectEmpLocationBar">
                <p>Certificate</p>
                {getSingleEmployeeDetails?.certificates?.map((item, index) => (
                  <div className="row" key={index}>
                    <span>
                      <img
                        src="/assets/frontend/images/selectedEmployee/certificateICon.png"
                        alt="custom-image"
                      />
                      &nbsp; {item?.certificateName}
                    </span>
                  </div>
                ))}
              </div>
              <div className="selectEmpLocationBar">
                <p>Language</p>

                {getSingleEmployeeDetails?.languages?.map((item, index) => (
                  <div className="row" key={index}>
                    <span>
                      <img
                        src="/assets/frontend/images/selectedEmployee/googleTranslate.png"
                        alt="custom-image"
                      />
                      &nbsp;{item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default EmployeeViewDetails;
