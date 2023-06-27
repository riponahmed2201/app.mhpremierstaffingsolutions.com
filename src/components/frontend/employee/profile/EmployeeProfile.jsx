import axios from "axios";
import _ from "lodash";
import moment from "moment";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import defaultImage from "../../../../assets/images/default.png";
import { token } from "../../../../utils/authentication";
import { jwtTokenDecode } from "../../../../utils/jwtDecode";
import Loader from "../../../loadar/Loader";

const EmployeeProfile = () => {
  const jwt_decode = jwtTokenDecode();
  // console.log("jwt_decode: ", jwt_decode);
  const id = jwt_decode?._id;

  const [getSingleEmployeeDetails, setSingleEmployeeDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();
  const [meetData, setMeetData] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/meet/get-my-meets`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((res) => {
        console.log(res.data[0]);
        setMeetData(res.data[0]);
      });
  }, []);
  const expireTime = new Date(meetData.expiredTime).getTime();
  const currentTime = new Date().getTime();
  const isExpired = currentTime > expireTime;
  console.log("isExpired: ", isExpired);
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

  let profileCompletedPercentage = 0;
  if (getSingleEmployeeDetails?.firstName && getSingleEmployeeDetails?.lastName)
    profileCompletedPercentage += 10;
  if (getSingleEmployeeDetails?.positionId) profileCompletedPercentage += 10;
  if (getSingleEmployeeDetails?.gender) profileCompletedPercentage += 5;
  if (getSingleEmployeeDetails?.presentAddress) profileCompletedPercentage += 5;
  if (getSingleEmployeeDetails?.emmergencyContact)
    profileCompletedPercentage += 5;
  if (getSingleEmployeeDetails?.profilePicture)
    profileCompletedPercentage += 10;
  if (getSingleEmployeeDetails?.bankName) profileCompletedPercentage += 10;
  if (getSingleEmployeeDetails?.cv) profileCompletedPercentage += 10;
  if (getSingleEmployeeDetails?.countryName) profileCompletedPercentage += 5;
  if (getSingleEmployeeDetails?.higherEducation)
    profileCompletedPercentage += 5;
  if (getSingleEmployeeDetails?.dateOfBirth) profileCompletedPercentage += 5;
  if (getSingleEmployeeDetails?.phoneNumber) profileCompletedPercentage += 5;
  if (_.size(getSingleEmployeeDetails?.skills)) profileCompletedPercentage += 5;
  if (_.size(getSingleEmployeeDetails?.languages))
    profileCompletedPercentage += 5;
  if (getSingleEmployeeDetails?.employeeExperience)
    profileCompletedPercentage += 5;

  return (
    <div className="container px-4">
      <section className="SelectedEmployee">
        <div className="card">
          <div
            className="card-header"
            style={{
              height: "95px",
              backgroundColor: "#C6A34F",
            }}
          >
            <p
              className="text-center py-4 "
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: "12px",
                lineHeight: "30px",
              }}
            >
              Hey {getSingleEmployeeDetails?.name}, Your Profile is
              <strong
                style={{
                  color: "white",
                  marginLeft: "3px",
                  marginRight: "3px",
                }}
              >
                {profileCompletedPercentage}%
              </strong>
              Done. Please, complete your profile to Proceed Next!
              <span className="mx-3 rounded-circle border border-white border-5 px-1 py-2 ">
                {profileCompletedPercentage}%
              </span>
            </p>
          </div>
        </div>
        <br />
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
                <div className="selectedEmpProfilePic">
                  <img
                    style={{
                      borderRadius: 14,
                      width: "397px",
                      height: "309px",
                    }}
                    src={
                      getSingleEmployeeDetails?.profilePicture
                        ? process.env.REACT_APP_ASSETs_BASE_URL +
                          "/" +
                          getSingleEmployeeDetails?.profilePicture
                        : defaultImage
                    }
                    className="img-fluid"
                    alt="custom-image"
                  />
                </div>
              </div>
              <div className="row">
                <div className="profileMarker">
                  <img
                    src="/assets/frontend/images/selectedEmployee/profileMarkLogo.png"
                    className="img-fluid"
                    alt="custom-image"
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
                          alt="custom-image"
                        />
                        {getSingleEmployeeDetails?.rating}
                      </span>
                      <div className="slctproLine">
                        <img
                          src="/assets/frontend/images/selectedEmployee/Line 1.png"
                          className="img-fluid"
                          alt="custom-image"
                        />
                      </div>
                    </div>
                    <div className="row slctEmpProfileRateRow">
                      <div className="col-xl-7 col-md-6">
                        <span className="slctProfileRateName">
                          <img
                            className="img-fluid SlctProrateIcon"
                            src="/assets/frontend/images/selectedEmployee/rate.png"
                            alt="custom-image"
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
                            alt="custom-image"
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
                            alt="custom-image"
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
                            alt="custom-image"
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
                            alt="custom-image"
                          />
                          License No:
                        </span>
                        <span className="selectEmpLicenseValue">
                          {getSingleEmployeeDetails?.licensesNo}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {isExpired === false && (
                <>
                  <div className="row ">
                    <div
                      className="selectProfileRowForMargin"
                      style={{ borderRadius: 14 }}
                    >
                      <div className="card selectEmpCardCard_body card-body">
                        <p>You've one meeting in pending</p>

                        <div className="btn-group w-50">
                          <Link
                            to={`/employee-meeting`}
                            className="btn btn-sm"
                            style={{ background: "#C6A34F", color: "white" }}
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="col-xl-8 col-md-7">
              <div className="selectEmpLocationBar">
                <p>Location</p>
                <img
                  src="/assets/frontend/images/selectedEmployee/Line 2.png"
                  className="img-fluid"
                  alt="custom-image"
                />
                <span>
                  <img
                    src="/assets/frontend/images/selectedEmployee/location.png"
                    alt="custom-image"
                  />
                  &nbsp; {getSingleEmployeeDetails?.presentAddress}
                </span>
              </div>
              <div className="selectEmpLocationBar">
                <p>Education</p>
                <div className="row">
                  <span>
                    <img
                      src="/assets/frontend/images/selectedEmployee/education (2).png"
                      alt="custom-image"
                    />
                    &nbsp;{getSingleEmployeeDetails?.higherEducation}
                  </span>
                </div>
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
      </section>
    </div>
  );
};

export default EmployeeProfile;
