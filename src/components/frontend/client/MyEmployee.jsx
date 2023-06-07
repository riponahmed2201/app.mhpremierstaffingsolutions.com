import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "lodash";

import { jwtTokenDecode } from "../../../utils/jwtDecode";
import { token } from "../../../utils/authentication";
import Loader from "../../loadar/Loader";

import defaultImage from "../../../assets/images/default.png";

function MyEmployee() {
  const jwtDecode = jwtTokenDecode();

  const [getEmployee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  //Set filter data
  const [getName, setName] = useState(undefined);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);

    try {
      const responseData = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/hired-histories/employee-list-for-client` +
          (getName ? `?searchKeyword=${getName}` : ``),
        {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        }
      );

      if (responseData && responseData?.data.statusCode === 200) {
        setEmployee(responseData?.data);
        setLoading(false);
      } else if (responseData && responseData?.data.statusCode === 400) {
        setError(responseData.errors);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(true);
      console.log(error);
    }
  }, [getName]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  //search
  const handleSearchkeywordOnChange = (e) => {

    console.log("e?.target?.value: ", e?.target?.value);
    setName(e?.target?.value);
  };

  return (
    <div>
      {/* Inner Dashboard Search Part Start */}
      <section className="InnnerDashboardSearch">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="innerDashSearchItems d-flex align-items-center">
                <Link to="/client-dashboard">
                  <button className="innerdashboardBackButton">
                    <img
                      src="assets/frontend/images/InnerDashboard/arrow.png"
                      className="img-fluid"
                      alt="arrow"
                    />
                  </button>
                </Link>
                <img
                  src="assets/frontend/images/InnerDashboard/mapSearch.png"
                  className="img-fluid"
                  alt="mapSearch"
                />
                <span className="innerDashSearchItemsSpan">
                  My Employees ({getEmployee?.total})
                </span>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="innerDashboardRightSideFormWrapper d-flex align-items-center">
                <div className="InnerDashSearchCion">
                  <img
                    src="assets/frontend/images/InnerDashboard/SearchIcon.png"
                    alt="SearchIcon"
                  />
                </div>
                <input
                  onChange={handleSearchkeywordOnChange}
                  type="text"
                  className="form-control innerDashRightSideSearchBar"
                  placeholder="search here"
                  aria-label="First name"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dashboard2">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 DashboardColXL9">
              <div className="row">
                <div className="col-lg-12">
                  <div className="card-group">
                    {loading ? (
                      <div>
                        <Loader />
                      </div>
                    ) : getEmployee?.hiredHistories?.length ? (
                      _.map(getEmployee?.hiredHistories, (item, index) => (
                        <div
                          key={index}
                          className="col-lg-3 col-md-6 Dashboard2CardbottomMarginFixForSmallScreens mb-3"
                        >
                          <div className="card DashboardEmployeeCard">
                            <Link
                              className="text-decoration-none"
                              to={`/employee-view-details/${item?._id}`}
                            >
                              <img
                                style={{
                                  height: 280,
                                  width: 313,
                                  borderRadius: 15,
                                }}
                                src={
                                  item?.employeeDetails?.profilePicture
                                    ? process.env.REACT_APP_ASSETs_BASE_URL +
                                      "/" +
                                      item?.employeeDetails?.profilePicture
                                    : defaultImage
                                }
                                className="Dashboard2-card-img-top"
                                alt="custom-image"
                              />
                            </Link>
                            <div className="card-body Dashboard2CardbodyPaddingFixfor768">
                              <h5 className="card-title Dashboard2CardTItle">
                                {item?.employeeDetails?.name}
                              </h5>
                              <div className="row">
                                <div className="col-lg-5 col-md-4">
                                  <div className="DashboardratingimgWraper">
                                    <img
                                      src="assets/frontend/images/Dashboardimages/dashboard2/Star 1.png"
                                      className="img-fluid"
                                      alt="custom-image"
                                    />
                                    <span className="Dashboard2Card_rating">
                                      {" "}
                                      {item?.employeeDetails?.rating}
                                    </span>
                                    {/* <span className="Dashboard2Card_count">
                                      (123)
                                    </span> */}
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="dashboard2chefwrapper">
                                  <img
                                    src="assets/frontend/images/Dashboardimages/dashboard2/chef.png"
                                    className="img-fluid"
                                    alt="custom-image"
                                  />
                                  <span>
                                    {item?.employeeDetails?.positionName}
                                  </span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="dashboard2TotalHourwrapper">
                                  <p className="dashboard2totalhourspan">
                                    <img
                                      src="assets/frontend/images/Dashboardimages/dashboard2/clock.png"
                                      className="img-fluid"
                                      alt="custom-image"
                                    />{" "}
                                    Total Hours :{" "}
                                    {item?.employeeDetails?.totalWorkingHour} H
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="Dashboard2BookNowButton">
                                  <button>
                                    £{item?.employeeDetails?.hourlyRate} / Hour
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center text-danger">
                        No Data Found!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
    </div>
  );
}

export default MyEmployee;
