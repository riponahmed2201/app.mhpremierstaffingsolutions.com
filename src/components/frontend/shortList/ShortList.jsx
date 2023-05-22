import React, { useState, useCallback, useEffect } from "react";

import _ from "lodash";
import moment from "moment";

import { Button, Form, Modal, DatePicker, Space } from "antd";

import defaultImage from "../../../assets/images/default.png";
import Loader from "../../loadar/Loader";
import { responseNotification } from "../../../utils/notifcation";
import { token } from "../../../utils/authentication";
import {
  fetchShortListHandler,
  updateShortHandler,
} from "../../../api/shortList";
import { Link } from "react-router-dom";

const ShortList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [getShortList, setShortList] = useState([]);
  const [getSelectedShortlist, setSelectedShortlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [updateShortListLoading, setUpdateShortListLoading] = useState(false);
  const [getError, setError] = useState();
  const [getFromDate, setFromDate] = useState(undefined);
  const [getToDate, setToDate] = useState(undefined);
  const [shortListId, setShortListId] = useState();

  const [form] = Form.useForm();

  const showModal = (values) => {
    setShortListId(values);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const fetchShortListData = useCallback(async () => {
    setLoading(true);
    await fetchShortListHandler().then((res) => {
      if (res?.status === 201) {
        setShortList(res?.data?.shortList);
      } else {
        setLoading(false);
      }
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchShortListData();
  }, []);

  //delete short list info here
  const deleteShortListInfo = useCallback(
    async (shortListId) => {
      const unicodeUri = `${process.env.REACT_APP_API_BASE_URL}`;
      console.log("shortListId: ", shortListId);
      if (true) {
        await fetch(`${unicodeUri}/short-list/delete/${shortListId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token()}`,
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((res) => {
            if (res?.statusCode === 200) {
              responseNotification(
                "Short list removed successfully",
                "success"
              );
              // fetchShortListData();
              window.location.reload();
            } else if (res?.statusCode === 400) {
              responseNotification("Bad request", "danger");
            }
          });
      }
    },
    [fetchShortListData]
  );

  // Edit short list Data
  const updateShortInfo = () => {
    const receivedShortListFields = {
      id: shortListId,
      fromDate: getFromDate,
      toDate: getToDate,
    };

    if (!getFromDate || !getToDate) {
      responseNotification("Please enter from date and to date!!", "error");
    }

    if (shortListId && getFromDate && getToDate) {
      setUpdateShortListLoading(true);
      updateShortHandler(receivedShortListFields)
        .then((res) => res.json())
        .then((res) => {
          if (res?.statusCode === 200) {
            setError(undefined);
            setUpdateShortListLoading(false);
            responseNotification("Short list updated successfully!", "success");
            fetchShortListData();

            setFromDate(undefined);
            setToDate(undefined);
            setShortListId("");

            handleOk();
          } else if (res?.statusCode === 400) {
            setError(res?.errors?.[0].msg);
            setUpdateShortListLoading(false);
          } else if (res?.statusCode === 500) {
            setError(res?.message);
            setUpdateShortListLoading(false);
          }
        });
    }
  };

  //delete short list info here
  const bookAllShortListInfo = useCallback(
    async (shortListId) => {
      const unicodeUri = `${process.env.REACT_APP_API_BASE_URL}`;

      let shortList = [];

      const newHobbies = [];

      _.map(getShortList, async (data) => {
        _.map(data.employeeDetails, async (hobby) => {
          console.log("hobby._id: ", hobby._id);
          newHobbies.push(hobby._id);
        });

        shortList.push(newHobbies);
      });

      console.log("shortList: ", newHobbies);

      const receivedData = { selectedShortlist: newHobbies };

      if (true) {
        await fetch(`${unicodeUri}/hired-histories/create`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(receivedData),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res?.statusCode === 201) {
              responseNotification(
                "Hired history created successfully",
                "success"
              );
              // fetchShortListData();
              window.location.reload();
            } else if (res?.statusCode === 400) {
              setError(res?.message);
              responseNotification(res?.message, "error");
            }
          });
      }
    },
    [fetchShortListData]
  );

  return (
    <div>
      <section className="InnnerDashboardSearch">
        <div className="container px-0">
          <div className="innerDashSearchItems">
            <Link to="/client-dashboard">
              <button className="innerdashboardBackButton">
                <img
                  src="assets/frontend/images/InnerDashboard/arrow.png"
                  className="img-fluid"
                  alt="image"
                />
              </button>
            </Link>
            <img
              src="assets/frontend/images/InnerDashboard/mapSearch.png"
              className="img-fluid"
              alt="image"
            />
            <span className="innerDashSearchItemsSpan">Dashboard</span>
          </div>
        </div>
      </section>

      <div className="my-5 mb-5">
        {loading ? (
          <div className="container px-0">
            <div className="mt-2 container-style mb-4">
              <div className="mb-3 d-flex align-items-center">
                <Loader />
              </div>
            </div>
          </div>
        ) : getShortList?.length ? (
          _.map(getShortList, (positionItem, positionIndex) => (
            <div className="container px-0" key={positionIndex}>
              <div className="mt-2 container-style mb-4">
                <div className="mb-3 d-flex align-items-center">
                  <img
                    src="assets/frontend/images/shortList/icons/chef.png"
                    width={26}
                    height={26}
                    alt="image"
                  />
                  <span className="ms-2 fw-500" style={{ fontSize: "17px" }}>
                    {positionItem?.positionName}
                  </span>
                </div>
                <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-sm-2  g-4">
                  {positionItem?.employeeDetails?.map((item, index) => (
                    <div className="col" key={index}>
                      <div className="card h-100 short-list-card">
                        <img
                          style={{ width: 275, height: 207 }}
                          src={
                            item?.employeeDetails?.profilePicture
                              ? process.env.REACT_APP_ASSETs_BASE_URL +
                                "/" +
                                item?.employeeDetails?.profilePicture
                              : defaultImage
                          }
                          className="card-img-top"
                          alt="profile"
                        />
                        <div className="card-body">
                          <span className="card-title card-title-style fw-500">
                            {item?.employeeDetails?.name}
                          </span>
                          <div className="card-text mb-2 d-flex justify-content-start align-items-center">
                            {/* <img
                              src="assets/frontend/images/shortList/icons/Star 1.png"
                              width={15}
                              height={15}
                              alt="star icon"
                            />
                            <span className="ms-2 start-text fw-500">
                              {item.rating}
                            </span> */}
                          </div>
                          <div className="mb-2">
                            <img
                              src="assets/frontend/images/shortList/icons/date.png"
                              width={15}
                              height={15}
                              alt="image"
                            />
                            <span
                              onClick={() => showModal(item?._id)}
                              className="ms-2 pointer"
                              style={{ fontSize: "14px" }}
                            >
                              {moment(item?.employeeDetails?.fromDate).format(
                                "DD MMM"
                              )}
                            </span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <button className="fvt-btn">
                              <img
                                src="assets/frontend/images/shortList/icons/fvt.png"
                                className="w-100"
                                alt="image"
                              />
                            </button>
                            <button
                              onClick={() => deleteShortListInfo(item?._id)}
                              className="book-btn ms-2 fw-500"
                            >
                              Removed
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-danger">No Data Found!</div>
        )}

        <Modal
          title="Update Short List Information"
          okText="Update"
          okButtonProps={{
            style: { backgroundColor: "#C6A34F", color: "white" },
          }}
          open={isModalOpen}
          onOk={updateShortInfo}
          onCancel={handleCancel}
        >
          <div className="col-lg-12 mb-4">
            <div className="row">
              <div className="col-lg-6">
                <label htmlFor="" className="mb-2">
                  From Date:
                </label>
                <Space direction="vertical">
                  <DatePicker
                    style={{ width: 226 }}
                    size="large"
                    id="fromDate"
                    placeholder="Enter from Date"
                    onChange={(value) => {
                      setFromDate(moment(value).format("YYYY-MM-DD").valueOf());
                    }}
                  />
                </Space>
              </div>

              <div className="col-lg-6">
                <label htmlFor="" className="mb-2">
                  To Date:
                </label>
                <Space direction="vertical">
                  <DatePicker
                    size="large"
                    style={{ width: 226 }}
                    id="toDate"
                    placeholder="Enter to Date"
                    onChange={(value) => {
                      setToDate(moment(value).format("YYYY-MM-DD").valueOf());
                    }}
                  />
                </Space>
              </div>
            </div>
          </div>
          {getError ? (
            <div className="row">
              <div className="col-lg-12">
                <div className="error-message">
                  <p className="error-text-color">{getError}</p>
                </div>
              </div>
            </div>
          ) : undefined}
        </Modal>
      </div>

      <div className="container px-0">
        <div className="container-style mb-4">
          <button
            onClick={bookAllShortListInfo}
            className="btn ms-2 fw-500"
            style={{ backgroundColor: "#C6A34F", color: "white" }}
          >
            Book All
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShortList;
