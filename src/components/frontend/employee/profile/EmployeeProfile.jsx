import React from "react";
import { Link, NavLink } from "react-router-dom";

const EmployeeProfile = () => {
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
          style={{
            height: "95px",
            marginLeft: "-12px",
            marginRight: "-12px",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
            backgroundColor: "black",
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
            Hey Razinul Karim, Your Profile is{" "}
            <strong style={{ color: "#C6A34F" }}>30%</strong> Done. Please,
            complete your profile to Proceed Next!
            <span className="mx-3 rounded-circle border border-white border-5 px-1 py-2 ">
              {" "}
              30%{" "}
            </span>{" "}
          </p>
        </div>

        <div className="container mt-5">
          <div className="d-md-flex d-lg-flex  justify-content-evenly">
            <div>
              <div>
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Profile (1).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    First Name
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" Razinul "
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>

              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Vector (1).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Position
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" Manager "
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>

              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Vector (2).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Phone Number
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" +880-1726332325 "
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Subtract.png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Present Address
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" Latif School, Patuakhali"
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Vector (3).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Date of Birth
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -- / -- / --"
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Vector (4).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    language
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" Type here..."
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Vector (5).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Higher Education
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -"
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Vector (2).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Emergency Contact
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" - "
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            <div>
              <div>
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Profile (1).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Last Name
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" karim "
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Vector (6).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Gender
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" - "
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Vector (7).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Email
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" raz.cse5.bu@gmail.com"
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Subtract.png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Permanent Address
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -"
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Vector (8).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Country
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -"
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Union.png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Skills
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" type here"
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Vector (9).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Licenses No.
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -"
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
              </div>
              <div className="mt-2">
                <div className="d-flex mt-2">
                  <img
                    src="assets/frontend/images/employeeProfile/Vector (10).png"
                    alt="tt"
                    style={{ height: "15px", width: "15px", marginTop: "8px" }}
                  />
                  <p
                    className="mx-2"
                    style={{
                      color: "#C6A34F",
                      fontWeight: "400",
                      fontSize: "11px",
                      marginTop: "8px",
                    }}
                  >
                    Certificate Name
                  </p>
                </div>
                <input
                  name="name"
                  type="text"
                  placeholder=" -"
                  required=""
                  className="border-bottom border-0 px-1   "
                  style={{
                    fontWeight: "500",
                    fontSize: "15px",
                    marginTop: "5px",
                    outline: "none",
                  }}
                />
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
            <button
              style={{
                background: "#C6A34F",
                borderTopLeftRadius: "10px",
                borderBottomRightRadius: "10px",
                color: "white",
                outline: "none",
              }}
              className="px-5 py-2 border-0"
            >
              Submit Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeProfile;
