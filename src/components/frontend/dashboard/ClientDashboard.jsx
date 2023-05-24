import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import _ from "lodash";
import { Select, Modal, Input } from "antd";

import { FiPhoneOutgoing } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

import Loader from "../../loadar/Loader";
import defaultImage from "../../../assets/images/default.png";
import { responseNotification } from "../../../utils/notifcation";
import { addShortHandler } from "../../../api/shortList";
import { fetchHandler } from "../../../api/position";
import { staticEmployeeExperiance } from "../../../utils/static/employeeExperiance";
import { jwtTokenDecode } from "../../../utils/jwtDecode";
import { token } from "../../../utils/authentication";

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

  //Set filter data
  const [getName, setName] = useState(undefined);
  const [getExperience, setExperience] = useState(undefined);
  const [getTotalMinHour, setTotalMinHour] = useState(undefined);
  const [getTotalMaxHour, setTotalMaxHour] = useState(undefined);
  const [getPosition, setPosition] = useState(undefined);

  //get filter data from on change
  const [getFilterPosition, setFilterPosition] = useState(undefined);
  const [getFilterExperience, setFilterExperience] = useState(undefined);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fetchEmployees = useCallback(async () => {
    setLoading(true);

    try {
      const responseData = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/users?skipLimit=YES&active=YES&requestType=EMPLOYEE` +
          (getName ? `&searchKeyword=${getName}` : ``) +
          (getPosition ? `&positionId=${getPosition}` : ``) +
          (getExperience ? `&employeeExperience=${getExperience}` : ``),
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
  }, [getName, getPosition, getExperience]);

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

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

  const handleApplyOnclick = () => {
    setLoading(true);
    if (getFilterPosition) setPosition(getFilterPosition);
    if (getFilterExperience) setExperience(getFilterExperience);
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
                          alt="eclipsegreen"
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
                          alt="EllipseRed"
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
                  <Link
                    className="text-decoration-none text-black"
                    to="/dashboard-history"
                  >
                    <div
                      className="card-body custom_dashboard_right_side_cards text-center"
                      style={{ backgroundColor: "#f6f1e5" }}
                    >
                      <div className="dashimg">
                        <img
                          src="assets/frontend/images/Dashboardimages/dashboard 1/dashboard.png"
                          className="img-fluid"
                          alt="customImage"
                        />
                      </div>
                      <div className="dashP">
                        <p>Dashboard</p>
                      </div>
                    </div>
                  </Link>
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
                          alt="employe"
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
                          alt="payment"
                        />
                      </div>
                      <div className="invoiceP">
                        <p>Invoice &amp; Payment</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div
                  style={{ cursor: "pointer" }}
                  className="col-lg-3 col-md-3 customPadding_for_768"
                  onClick={showModal}
                >
                  <div
                    className="card-body custom_dashboard_right_side_cards text-center"
                    style={{ backgroundColor: "#f6f1e5" }}
                  >
                    <div className="helpImg">
                      <img
                        src="assets/frontend/images/Dashboardimages/dashboard 1/helpSupport.png"
                        className="img-fluid"
                        alt="helpSupport"
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
                        alt="search"
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
                                  width: 230,
                                  height: 235,
                                  objectFit: "cover",
                                  borderRadius: 15,
                                }}
                                src={
                                  item?.profilePicture
                                    ? process.env.REACT_APP_ASSETs_BASE_URL +
                                      "/" +
                                      item?.profilePicture
                                    : defaultImage
                                }
                                className="Dashboard2-card-img-top"
                                alt="profilePicture"
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
                                      alt="Star"
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
                                      alt="experience"
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
                                    alt="chef"
                                  />
                                  <span>{item?.positionName}</span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="dashboard2TotalHourwrapper">
                                  <img
                                    src="assets/frontend/images/Dashboardimages/dashboard2/clock.png"
                                    className="img-fluid"
                                    alt="clock"
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
                                    alt="rate"
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
                                    alt="bookmark"
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
                      showSearch={true}
                      placeholder="Select Position"
                      onChange={(value) => {
                        setFilterPosition(value);
                      }}
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
                  {/* <Select
                    size="large"
                    style={{
                      width: "100%",
                    }}
                    allowClear
                    showSearch={true}
                    placeholder="Select Experience"
                    onChange={(value) => {
                      setFilterExperience(value);
                    }}
                  >
                    {staticEmployeeExperiance?.map((item, index) => (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select> */}
                  <Input
                    placeholder="Search Experience"
                    onChange={(e) => {
                      setFilterExperience(e.target.value);
                    }}
                    className="ant-input ant-input-lg"
                  />
                </div>
                <div className="row">
                  <button
                    type="button"
                    onClick={handleApplyOnclick}
                    className="filterApply"
                  >
                    Apply
                  </button>
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
      <Modal
        title="Help & Support"
        okButtonProps={{ style: { display: "none" } }}
        open={isModalOpen}
        onCancel={handleCancel}
        cancelText="Close"
        cancelButtonProps={{
          style: { backgroundColor: "#c6a34f", color: "white" },
        }}
      >
        <div className="col-lg-12 mb-4">
          {/* <div className="row"></div> */}
          <div className="socialMediaIcons">
            <a
              target="_blank"
              href="https://www.facebook.com/RecruitmentMirkoHospitality/"
            >
              <img
                className="img-fluid"
                src="/assets/frontend/images/indexImages/socialMedia/Group 116168.png"
                alt="image"
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/recruitmentmirkohospitality/"
            >
              <img
                className="img-fluid"
                src="/assets/frontend/images/indexImages/socialMedia/Group 116169.png"
                alt="image"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/mirko-hospitality/mycompany/?viewAsMember=true"
            >
              <img
                className="img-fluid"
                src="/assets/frontend/images/indexImages/socialMedia/Group 116170.png"
                alt="image"
              />
            </a>
            <a href="https://vm.tiktok.com/ZGJmndX98/" target="_blank">
              <img
                className="img-fluid"
                src="/assets/frontend/images/indexImages/socialMedia/Group 116171.png"
                alt="image"
              />
            </a>
          </div>
          <div>
            <div className="d-flex mt-4">
              <a href="tel:+4407500146699">
                <FiPhoneOutgoing
                  style={{
                    fontSize: "45px",
                    color: "#8e6d45",
                    marginTop: "15px",
                  }}
                />
              </a>
              <div className="mx-5">
                <p>Reservation</p>
                <h5 style={{ fontSize: "20px", color: "#8e6d45" }}>
                  +44 075 001 46699
                </h5>
              </div>
            </div>
            <div className="d-flex mt-4">
              <a href="mailto:info@mhpremierstaffingsolutions.com">
                <TfiEmail
                  style={{
                    fontSize: "45px",
                    color: "#8e6d45",
                    marginTop: "15px",
                  }}
                />
              </a>
              <div className="mx-5">
                <p>Email Info</p>
                <h5 style={{ fontSize: "15px", color: "#8e6d45" }}>
                  info@mhpremierstaffingsolutions.com
                </h5>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <br /> <br />
    </div>
  );
}

export default ClientDashboard;
