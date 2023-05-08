import React, { useCallback, useEffect, useState } from "react";
import { token } from "../../../utils/authentication";
import axios from "axios";
import _ from "lodash";
import { jwtTokenDecode } from "../../../utils/jwtDecode";
import { Link } from "react-router-dom";
import Loader from "../../loadar/Loader";
import defaultImage from "../../../assets/images/default.png";
import { responseNotification } from "../../../utils/notifcation";
import { addShortHandler } from "../../../api/shortList";
import { Select, InputNumber, Space } from "antd";
import { fetchHandler } from "../../../api/position";
import { staticEmployeeExperiance } from "../../../utils/static/employeeExperiance";

const { Option } = Select;

function ClientDashboard() {
  const jwtDecode = jwtTokenDecode();

  const [getEmployee, setEmployee] = useState([]);
  const [getShortList, setShortList] = useState([]);
  const [addShortListData, setAddShortListData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [shortListLoading, setShortListLoading] = useState(false);
  const [getError, setError] = useState();
  const [positions, setPositions] = useState([]);

  const fetchEmployees = useCallback(async () => {
    setLoading(true);

    try {
      const responseData = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/users?skipLimit=YES&requestType=EMPLOYEE`,
        {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        }
      );

      if (responseData && responseData?.data.statusCode == 200) {
        setEmployee(responseData?.data);
        setLoading(false);
      } else if (responseData && responseData?.data.statusCode == 400) {
        setError(responseData.errors);
        setLoading(false);
      }
    } catch (error) {
      setError(error);
      setLoading(true);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchPositions = useCallback(async () => {
    setLoading(true);
    await fetchHandler().then((res) => {
      if (res?.status === 200) {
        setPositions(res?.data?.positions);
      } else {
        setLoading(false);
      }
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchPositions();
  }, []);

  const addShortListOnclikHandler = (employeeId) => {
    const shortListReceivedField = { employeeId };
    if (shortListReceivedField) {
      setAddShortListData(shortListReceivedField);

      setShortListLoading(true);

      addShortHandler(shortListReceivedField)
        .then((res) => res.json())
        .then((res) => {
          if (res?.statusCode === 201) {
            setError(undefined);
            setShortListLoading(false);

            responseNotification("Short list created successfully!", "success");

            window.location.reload();
          } else if (res?.statusCode === 400) {
            setError(res?.errors?.[0].msg);
            setShortListLoading(false);
          } else if (res?.statusCode === 500) {
            setError(res?.message);
            setShortListLoading(false);
          }
        });
    }
  };

  const handleChangeStatus = (value) => {
    // setStatus(value);
  };

  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <div>
      {/* Dashboard part 1 */}
      <section className="dashboard1">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 margin768">
              <div className="row">
                <div className="col-lg-6 col-md-6 Dashboard1WelcomeCardFor1080p ">
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
                        {jwtDecode?.restaurantName},
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
                          alt="image"
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
                          alt="image"
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
              className="col-lg-7 Dashboard1PaddingFixfor375 d-flex flex-row justify-content-center align-items-center"
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
                        alt="image"
                      />
                    </div>
                    <div className="dashP">
                      <p>Dashboard</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3 customPadding_for_768">
                  <Link
                    className="text-decoration-none text-black"
                    to="/client-myemployee"
                  >
                    <div
                      className="card-body custom_dashboard_right_side_cards dashboardMyemloyeeCardHeightFix text-center"
                      style={{ backgroundColor: "#f6f1e5" }}
                    >
                      <div className="employeeImg">
                        <img
                          src="assets/frontend/images/Dashboardimages/dashboard 1/employe.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </div>
                      <div className="employeeP">
                        <p>My Employees</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-lg-3 col-md-3 customPadding_for_768">
                  <Link
                    className="text-decoration-none text-black"
                    to="/payment-invoice"
                  >
                    <div
                      className="card-body custom_dashboard_right_side_cards text-center"
                      style={{ backgroundColor: "#f6f1e5" }}
                    >
                      <div className="invoiceImg">
                        <img
                          src="assets/frontend/images/Dashboardimages/dashboard 1/image 2.png"
                          className="img-fluid"
                          alt="image"
                        />
                      </div>
                      <div className="invoiceP">
                        <p>Invoice &amp; Payment</p>
                      </div>
                    </div>
                  </Link>
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
                        alt="image"
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
            <div className="col-xl-9 DashboardColXL9">
              <div className="container showEmployeerow">
                <div className="row ">
                  <div className="col-lg-6 col-md-6">
                    <div className="MHEmployeeImageandText">
                      <img
                        src="assets/frontend/images/Dashboardimages/dashboard2/search.png"
                        className="img-fluid"
                        alt="image"
                      />
                      <span>MH</span>
                      <span>Employees</span>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="MHEmployeeText text-end">
                      <span>{getEmployee?.total} </span>
                      <span> Employees are showing</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card-group">
                    {loading ? (
                      <div>
                        <Loader />
                      </div>
                    ) : getEmployee?.users?.length ? (
                      _.map(getEmployee?.users, (item, index) => (
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
                                  width: "215px",
                                  height: "149px",
                                  objectFit: "cover",
                                }}
                                src={
                                  item?.profilePicture
                                    ? process.env.REACT_APP_ASSETs_BASE_URL +
                                      "/" +
                                      item?.profilePicture
                                    : defaultImage
                                }
                                className="Dashboard2-card-img-top"
                                alt="image"
                              />
                            </Link>
                            <div className="card-body Dashboard2CardbodyPaddingFixfor768">
                              <h5 className="card-title Dashboard2CardTItle">
                                {item?.name}
                              </h5>
                              <div className="row">
                                <div className="col-lg-5 col-md-4">
                                  <div className="DashboardratingimgWraper">
                                    <img
                                      src="assets/frontend/images/Dashboardimages/dashboard2/Star 1.png"
                                      className="img-fluid"
                                      alt="image"
                                    />
                                    <span className="Dashboard2Card_rating">
                                      4.5
                                    </span>
                                    <span className="Dashboard2Card_count">
                                      (123)
                                    </span>
                                  </div>
                                </div>
                                <div className="col-lg-7 col-md-8">
                                  <div className="DashboardexperienceWrapperimg">
                                    <img
                                      src="assets/frontend/images/Dashboardimages/dashboard2/experience.png"
                                      className="img-fluid"
                                      alt="image"
                                    />
                                    <span className="Dashboard2ExpSpan">
                                      Exp:
                                    </span>
                                    <span className="Dashboardcard2Years">
                                      {item?.employeeExperience
                                        ? item?.employeeExperience
                                        : 0}
                                      Y
                                    </span>
                                  </div>
                                </div>
                              </div>

                              <div className="row">
                                <div className="dashboard2chefwrapper">
                                  <img
                                    src="assets/frontend/images/Dashboardimages/dashboard2/chef.png"
                                    className="img-fluid"
                                    alt="image"
                                  />
                                  <span>{item?.positionName}</span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="dashboard2TotalHourwrapper">
                                  <img
                                    src="assets/frontend/images/Dashboardimages/dashboard2/clock.png"
                                    className="img-fluid"
                                    alt="image"
                                  />
                                  <span className="dashboard2totalhourspan">
                                    Total Hours :
                                  </span>
                                  <span className="dashboard2totalhoursspent">
                                    2456 H
                                  </span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="dashboard2Rate">
                                  <img
                                    src="assets/frontend/images/Dashboardimages/dashboard2/rate.png"
                                    className="img-fluid"
                                    alt="image"
                                  />
                                  <span className="Dashboard2Rate">Rate:</span>
                                  <span className="Dashboard2Perhour">
                                    {item?.hourlyRate}$/hour
                                  </span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="Dashboard2BookNowButton">
                                  <img
                                    src="assets/frontend/images/Dashboardimages/dashboard2/bookmark.png"
                                    alt="image"
                                  />

                                  <button
                                    onClick={() =>
                                      addShortListOnclikHandler(item?._id)
                                    }
                                  >
                                    Book Now
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

            <div className="col-xl-3 ">
              <div className="container Dashboard2FilterpartContainer">
                <div className="row firstFilterRow">
                  <div className="col-lg-5 ">
                    <div className="filtersTitle">
                      <p>FILTERS</p>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="resetData">
                      <button onClick={() => window.location.reload()}>
                        Reset Data
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h6 style={{ color: "#000000" }}>Position:</h6>
                </div>
                <div className="row">
                  <div>
                    <Select
                      size="large"
                      style={{
                        width: "100%",
                      }}
                      allowClear
                      placeholder="Select Position"
                      onChange={handleChangeStatus}
                    >
                      {positions?.map((item, index) => (
                        <Option key={index} value={item?._id}>
                          {item?.name}
                        </Option>
                      ))}
                    </Select>
                  </div>
                </div>

                <div className="row mt-3">
                  <h6 className="experienceH6">Experience:</h6>
                </div>
                <div>
                  <Select
                    size="large"
                    style={{
                      width: "100%",
                    }}
                    allowClear
                    placeholder="Select Experience"
                    onChange={handleChangeStatus}
                  >
                    {staticEmployeeExperiance?.map((item, index) => (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </div>
                <div className="row mt-3">
                  <h6 className="experienceH6">Total Hour:</h6>
                </div>
                <div className="row">
                  <Space>
                    <InputNumber
                      size="large"
                      style={{
                        width: 118,
                      }}
                      min={1}
                      max={100000}
                      defaultValue={1}
                      onChange={onChange}
                    />
                    <span>-</span>
                    <InputNumber
                      size="large"
                      style={{
                        width: 118,
                      }}
                      min={1}
                      max={100000}
                      defaultValue={1}
                      onChange={onChange}
                    />
                  </Space>
                </div>
                <div className="row">
                  <a href="#">
                    <button className="filterApply">Apply</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Dashboard 2 End */}
      {/* Pagination Start */}
      {/* <section className="pagination">
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
      </section> */}
      {/* Pagination Start */}
      <br /> <br />
    </div>
  );
}

export default ClientDashboard;
