import React from "react";
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";
import { BsArrowUpRight } from "react-icons/bs";
import "./job.css";

const Career = () => {
  return (
    <div>
      <div
        className="banner-header section-padding valign bg-img bg-fixed img-fluid"
        style={{
          backgroundImage: `url('https://i.ibb.co/J26y8YG/career2.jpg)`,
          minHeight: "600px",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-12  caption align-middle"
              style={{ marginTop: "330px" }}
            >
              <h5 style={{ color: "white" }}>MH PREMIER STAFFING SOLUTIONS</h5>
              <h1 style={{ color: "white" }}>Job Opening</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <hr />
        <div className="d-flex justify-content-between lg:d-flex justify-content-between px-3 py-5 job-hover">
          <h3>KP</h3>
          <div>
            <p>Location</p>
            <p>UK</p>
          </div>
          <div className="d-flex">
            <div>
              <h6>Employee Type</h6>
              <h6>Full Time</h6>
              <div
                style={{ backgroundColor: "#c6a34f", width: "100%" }}
                className="d-flex justify-content-evenly px-3 py-2"
              >
                <div>
                  <AiOutlineApple style={{ fontSize: "25px" }} />
                  <AiOutlineApple style={{ fontSize: "25px" }} />
                </div>
                <AiOutlineAndroid style={{ fontSize: "23px" }} />
              </div>
            </div>

            <BsArrowUpRight
              style={{ fontSize: "20px", color: "#c6a34f" }}
              className="mt-5 mx-3 right-hover"
            />
          </div>
        </div>

        <hr />
        <div className="d-flex justify-content-between lg:d-flex justify-content-between px-3 py-5 job-hover">
          <h3>Chef</h3>
          <div>
            <p>Location</p>
            <p>UK</p>
          </div>
          <div className="d-flex">
            <div>
              <h6>Employee Type</h6>
              <h6>Full Time</h6>
              <div
                style={{ backgroundColor: "#c6a34f", width: "100%" }}
                className="d-flex justify-content-evenly px-3 py-2"
              >
                <div>
                  <AiOutlineApple style={{ fontSize: "25px" }} />
                  <AiOutlineApple style={{ fontSize: "25px" }} />
                </div>
                <AiOutlineAndroid style={{ fontSize: "23px" }} />
              </div>
            </div>

            <BsArrowUpRight
              style={{ fontSize: "20px", color: "#c6a34f" }}
              className="mt-5 mx-3 right-hover"
            />
          </div>
        </div>

        <hr />
        <div className="d-flex justify-content-between lg:d-flex justify-content-between px-3 py-5 job-hover">
          <h3>
            Restaurant <br /> Manager
          </h3>
          <div>
            <p>Location</p>
            <p>UK</p>
          </div>
          <div className="d-flex">
            <div>
              <h6>Employee Type</h6>
              <h6>Full Time</h6>
              <div
                style={{ backgroundColor: "#c6a34f", width: "100%" }}
                className="d-flex justify-content-evenly px-3 py-2"
              >
                <div>
                  <AiOutlineApple style={{ fontSize: "25px" }} />
                  <AiOutlineApple style={{ fontSize: "25px" }} />
                </div>
                <AiOutlineAndroid style={{ fontSize: "23px" }} />
              </div>
            </div>

            <BsArrowUpRight
              style={{ fontSize: "20px", color: "#c6a34f" }}
              className="mt-5 mx-3 right-hover"
            />
          </div>
        </div>
        <hr />

        <div className="d-flex justify-content-between lg:d-flex justify-content-between px-3 py-5 job-hover">
          <h3>Runner</h3>
          <div>
            <p>Location</p>
            <p>UK</p>
          </div>
          <div className="d-flex">
            <div>
              <h6>Employee Type</h6>
              <h6>Full Time</h6>
              <div
                style={{ backgroundColor: "#c6a34f", width: "100%" }}
                className="d-flex justify-content-evenly px-3 py-2"
              >
                <div>
                  <AiOutlineApple style={{ fontSize: "25px" }} />
                  <AiOutlineApple style={{ fontSize: "25px" }} />
                </div>
                <AiOutlineAndroid style={{ fontSize: "23px" }} />
              </div>
            </div>

            <BsArrowUpRight
              style={{ fontSize: "20px", color: "#c6a34f" }}
              className="mt-5 mx-3 right-hover"
            />
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default Career;
