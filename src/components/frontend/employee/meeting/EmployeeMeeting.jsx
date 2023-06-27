import axios from "axios";
import React, { useEffect, useState } from "react";
import { token } from "../../../../utils/authentication";

function EmployeeMeeting() {
  const [meet, setMeet] = useState(null);
  const [meetData, setMeetData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/meet/get-my-meets`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token()}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setMeet(res.data[0].meetLink);
        setMeetData(res.data[0]);
        setLoading(false)
      });
  }, []);

  const hrEmail = "hr@mhpremierstaffingsolutions.com";

  if (loading) {
    return <div
    className="text-center"
    style={{ margin: "20% auto", padding: "20px" }}
  >
    <h4 style={{ color: "red", marginBottom: "10px" }}>
     No Active meet found
    </h4>
    <p>
      Please contact HR at{" "}
      <a href={`mailto:${hrEmail}`} style={{ textDecoration: "none" }}>
        {hrEmail}
      </a>{" "}
      for more details.
    </p>
  </div>
  }


  let expireTime = new Date(meetData?.expiredTime).getTime();
  let currentTime = new Date().getTime();
  if (expireTime < currentTime || meetData.isActive === false) {
    return (
      <>
        <div
          className="text-center"
          style={{ margin: "20% auto", padding: "20px" }}
        >
          <h4 style={{ color: "red", marginBottom: "10px" }}>
            Your meet time has expired
          </h4>
          <p>
            Please contact HR at{" "}
            <a href={`mailto:${hrEmail}`} style={{ textDecoration: "none" }}>
              {hrEmail}
            </a>{" "}
            for more details.
          </p>
        </div>
      </>
    );
  }

  function convertIsoToTime(isoDateTime) {
    const date = new Date(isoDateTime);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");

    const timeString = `${formattedHours}:${formattedMinutes} ${ampm}`;
    return timeString;
  }

  return (
    <div className="pb-5">
      <div
        style={{
          background: "#FFFFFF",
          border: "0.5px solid #A6A6A6",
          borderRadius: "14.8px",
        }}
        className="container mt-5 pb-5"
      >
        <div
          className="container mt-5 pb-5"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src="assets/frontend/images/employeeProfile/Group 117647.png"
            alt="the"
          />
        </div>

        <div
          className="container"
          style={{
            backgroundColor: "white",
            border: "0.5px solid #A6A6A6 ",
            borderRadius: "5px",
            minHeight: "190px",
          }}
        >
          <div className="row">
            <div className="col-lg-8 col-md-7 col-sm-12">
              <div className="d-flex">
                <div
                  style={{
                    backgroundColor: "  #F7F2E6",
                    padding: "20px",
                    marginLeft: "-12px",
                  }}
                  className="rounded-start"
                >
                  <img
                    src="assets/frontend/images/employeeProfile/calender.png"
                    alt="the"
                    style={{
                      alignItems: "center",
                      marginTop: "30px",
                      borderRadius: "5px",
                    }}
                  />
                </div>
                <div className="ms-3 my-5">
                  <h5 style={{ fontSize: "17px" }}>
                    {" "}
                    You and MH Company Meeting
                  </h5>
                  <p
                    style={{
                      color: "#C6A34F",
                      fontSize: "13px",
                      marginTop: "5px",
                    }}
                  >
                    View on Google calender
                  </p>
                  <div className="d-flex">
                    <p className="mx-1" style={{ fontSize: "15px" }}>
                      when
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "500" }}>
                      {convertIsoToTime(meetData?.startTime)} –{" "}
                      {convertIsoToTime(meetData?.endTime)}
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="mx-1" style={{ fontSize: "15px" }}>
                      who
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "500" }}>
                      info@mhpremiumstuffingsolutions.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-5 col-sm-12 d-flex">
              <p
                style={{
                  width: "1px",
                  minHeight: "170px",
                  backgroundColor: "gray",
                  marginBottom: "-1px",
                }}
                className="d-none  d-sm-block "
              ></p>
              <div className="ms-3 my-4">
                <h5>Gest</h5>
                <p style={{ fontSize: "12px" }}>
                  {meetData?.userDetails[0].email} -{" "}
                  <strong style={{ fontSize: "12px" }}>You</strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        <>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            className="mt-5"
          >
            <p
              style={{
                background: "#C6A34F",
                borderTopLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                color: "white",
                cursor: "pointer",
              }}
              className="px-5 py-2"
            >
              <a
                className="text-decoration-none text-white"
                href={meet}
                target="_blank"
                rel="noreferrer"
              >
                Join With Google Meet
              </a>
            </p>
          </div>

          <p style={{ color: "gray" }} className="text-center">
            Meet Link
          </p>
          <p className="text-decoration-underline text-center">
            <a
              style={{ color: "#C6A34F" }}
              href={meet}
              target="_blank"
              rel="noreferrer"
            >
              {meet}
            </a>
          </p>
        </>
      </div>
    </div>
  );
  //  }
}

export default EmployeeMeeting;
