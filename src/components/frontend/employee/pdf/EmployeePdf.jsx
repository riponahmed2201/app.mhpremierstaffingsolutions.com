import React from "react";
import { Link } from "react-router-dom";

const EmployeePdf = () => {
  return (
    <div className="mb-5">
      <div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          className="mt-5"
        >
          <img
            className="img-fluid nav_logo"
            src="assets/frontend/images/employeeProfile/IMAGE.png"
            alt="image"
          />
        </div>
        <h1 className="text-center mt-3" style={{ color: "#cdb069" }}>
          P r e m i e r S t a f f i n g S o l u t i o n s
        </h1>
      </div>

      <div style={{ backgroundColor: "white" }}>
        <h2 className="text-center pt-5">
          Application received - welcome to MH Premier Staffing Solutions
        </h2>

        <div className="d-flex  justify-content-evenly mx-2 mt-5">
          <div>
            <p>Dear (Name)</p>
            <p>
              Thank you for applying to work with us, your application is being
              processed.
            </p>
            <p>
              You will shortly receive an email with details on how you can
              track your application, <br />
              and with all required documentation needed to complete the
              application process
            </p>
            <p>Your current contract preferences are:</p>
            <p>Emails: Allow</p>
            <p>Phone calls: Allow </p>
            <p>SMS: Allow</p>
            <p>Postal mail: Allow </p>
            <p>Social media: Allow </p>
            <p>clients: Allow</p>
            <p>
              To learn how we process your application and keep your data
              secure, view our <br />{" "}
              <Link to="/faq">
                <span style={{ textDecoration: "underline", color: "blue" }}>
                  and keep your data secure, view our admissions Policy and
                  Procedure, and FAQ
                </span>
              </Link>{" "}
            </p>
            <p>
              For advice on Payments, please Email:
              info@mhpremierstaffingsolutions.com
            </p>
            <p>
              If you would like to visit, explore our website or visit one of
              our offices, to speak to a member of staff:
            </p>
            <p>London Office: 48 Warwick St, W1B 5AW, London </p>
            <p>Dubai office: coming soon.</p>
            <p>
              Please contact us if you have any further queries about your
              application.{" "}
            </p>
            <p>Yours sincerely,</p>
            <img
              className="img-fluid nav_logo"
              src="assets/frontend/images/employeeProfile/sign.png"
              alt="the"
            />
            <p>Rose Picicco</p>
            <p>Managing Director of relations in Dubai</p>
          </div>
          <p
            style={{
              width: "1px",
              minHeight: "170px",
              backgroundColor: "gray",
              marginBottom: "-1px",
            }}
            className="d-none  d-sm-block "
          ></p>

          <div className="mx-1">
            <h6>Application information</h6>
            <p>Customer ID:</p>
            <p>Position:</p>
            <p>Placement:</p>
            <p>Start date:</p>
            <p>Location:</p>
            <h6 className="my-2">Contact us</h6>
            <p>UK applicants</p>
            <p>Phone: +44 (0) 20 3980 9360</p>
            <p>
              Email: info@mhpremierstaffing
              <br />
              solutions.com
            </p>
            <p>EU/International applicants</p>
            <p>Phone: +44 (0) 79 6096 6110</p>
            <p>
              Email: recruitment@mhpremiers <br /> taffingsolutions.com
            </p>
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
        <img
          className="img-fluid nav_logo"
          src="assets/frontend/images/employeeProfile/IMAGE.png"
          alt="image"
        />
      </div>
    </div>
  );
};

export default EmployeePdf;
