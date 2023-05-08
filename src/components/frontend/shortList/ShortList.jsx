import React, { useState, useCallback, useEffect } from "react";
import { fetchShortListHandler } from "../../../api/shortList";
// import Modal from 'react-bootstrap/Modal';
// import { DateRange } from 'react-date-range';
import _ from "lodash";

import defaultImage from "../../../assets/images/default.png";
import Loader from "../../loadar/Loader";
const styles = {
  selectionRange: {
    background: "#c6a34f",
    opacity: 0.5,
  },
};

const ShortList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [getShortList, setShortList] = useState([]);
  const [getPosition, setPosition] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  const fetchShortListData = useCallback(async () => {
    setLoading(true);
    await fetchShortListHandler().then((res) => {
      if (res?.status === 201) {
        setShortList(res?.data?.shortList);
        setPosition(res?.data?.positions);
      } else {
        setLoading(false);
      }
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchShortListData();
  }, []);

  return (
    <div className="my-5 mb-5">
      {loading ? (
        <div className="container px-0">
          <div className="mt-2 container-style mb-4">
            <div className="mb-3 d-flex align-items-center">
              <Loader />
            </div>
          </div>
        </div>
      ) : getPosition?.length ? (
        _.map(getPosition, (positionItem, positionIndex) => (
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
                  {positionItem?.name}
                </span>
              </div>
              <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-sm-2  g-4">
                {getShortList?.map((item, index) => (
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
                          {item.name}
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
                            onClick={handleShow}
                            className="ms-2 pointer"
                            style={{ fontSize: "14px" }}
                          >
                            2 Jan - 10 Jan (9 days)
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
                          <button className="book-btn ms-2 fw-500">
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

      {/* <Modal className="modal-md" show={show} onHide={handleClose} animation={true}>
                <div className='mt-2'>
                    <div className="d-flex justify-content-between align-items-center px-4">
                        <div className='pointer bg-color px-2 rounded' onClick={handleClose}>
                            <img src="assets/frontend/images/shortList/icons/lt.png" height={15} width={10} alt="icon" /></div>
                        <div><span className='fw-500'>Select Date Range</span></div>
                        <div><button className="apply-range-btn" onClick={handleClose}>Apply Range</button></div>
                    </div>
                </div>
                <Modal.Body className="text-center">
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        rangeColors={['#c6a34f']}
                        className={'date-range-wrapper date-picker-custom'}
                        styles={styles}
                    />
                </Modal.Body>
            </Modal> */}
    </div>
  );
};

export default ShortList;
