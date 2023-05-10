import React, { useState, useCallback, useEffect } from "react";

import _ from "lodash";

import { Button, Modal, DatePicker, Space } from "antd";

import defaultImage from "../../../assets/images/default.png";
import Loader from "../../loadar/Loader";
import { responseNotification } from "../../../utils/notifcation";
import { token } from "../../../utils/authentication";
import { fetchShortListHandler } from "../../../api/shortList";
import { Link } from "react-router-dom";

const { RangePicker } = DatePicker;

const ShortList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [getShortList, setShortList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  const showModal = () => {
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
                          src={
                            item?.profilePicture
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
                            <img
                              src="assets/frontend/images/shortList/icons/Star 1.png"
                              width={15}
                              height={15}
                              alt="star icon"
                            />
                            <span className="ms-2 start-text fw-500">
                              {item.rating}
                            </span>
                          </div>
                          <div className="mb-2">
                            <img
                              src="assets/frontend/images/shortList/icons/date.png"
                              width={15}
                              height={15}
                              alt=""
                            />
                            <span
                              onClick={showModal}
                              // onClick={handleShow}
                              className="ms-2 pointer"
                              style={{ fontSize: "14px" }}
                            >
                              -- /-- - --/--
                            </span>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <button className="fvt-btn">
                              <img
                                src="assets/frontend/images/shortList/icons/fvt.png"
                                className="w-100"
                                alt=""
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
          title="Update Hired Date"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Space direction="vertical" size={12}>
            <RangePicker style={{ width: 472 }} />
          </Space>
        </Modal>
      </div>
    </div>
  );
};

export default ShortList;
