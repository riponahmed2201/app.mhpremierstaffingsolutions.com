import React, { useEffect, useState } from "react";

function EmployeeMeeting() {
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
                    Razinul Karim and MH Company Meeting
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
                      Tue Apr 18, 2023 3:30pm – 4pm (BDT)
                    </p>
                  </div>
                  <div className="d-flex">
                    <p className="mx-1" style={{ fontSize: "15px" }}>
                      who
                    </p>
                    <p style={{ fontSize: "15px", fontWeight: "500" }}>
                      alquraish@mhcompany.com
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
                  alquraish@mhcompany.com -{" "}
                  <strong style={{ fontSize: "12px" }}>Organizer</strong>{" "}
                </p>
                <p style={{ fontSize: "12px" }}>
                  mirjaabbas@mhcompany.com -{" "}
                  <strong style={{ fontSize: "12px" }}>participant</strong>{" "}
                </p>
                <p style={{ fontSize: "12px" }}>
                  sarwar@mhcompany.com -{" "}
                  <strong style={{ fontSize: "12px" }}>Participant</strong>{" "}
                </p>
                <p style={{ fontSize: "12px" }}>
                  raz.cse.bu@gmail.com -{" "}
                  <strong style={{ fontSize: "12px" }}>You</strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

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
            }}
            className="px-5 py-2"
          >
            Join With Google Meet
          </p>
        </div>
        <p style={{ color: "gray" }} className="text-center">
          Meet Link
        </p>
        <p
          className="text-decoration-underline text-center"
          style={{ color: "#C6A34F" }}
        >
          meet.google.com/xir-gyan-bqq
        </p>
        <p className="text-center" style={{ color: "gray" }}>
          Join by phone
        </p>
        <p className="text-center" style={{ fontWeight: "600" }}>
          (EE) +372 647 2814PIN: 104517423
        </p>
      </div>
    </div>
  );
  //  }
}

export default EmployeeMeeting;
