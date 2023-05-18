import React from "react";
import { AiOutlineAndroid, AiOutlineApple } from "react-icons/ai";
import "./job.css";
import { useTranslation } from "react-i18next";

const Career = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        className="banner-header section-padding valign bg-img bg-fixed img-fluid"
        style={{
          // backgroundImage: `url('assets/frontend/images/findJobs/find_jobs.png)`,
          backgroundImage: `url('assets/frontend/images/findJobs/find-jobs.png')`,
          minHeight: "500px",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-12  caption align-middle"
              style={{ marginTop: "244px" }}
            >
              <h5 style={{ color: "white" }}>
                {t("meet_the_team_company_name")}
              </h5>
              <h1 style={{ color: "white" }}> {t("job_opening")} </h1>
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
                  <a
                    href="https://apps.apple.com/us/app/mh/id6446052294"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <AiOutlineApple
                      style={{
                        fontSize: "25px",
                        cursor: "pointer",
                        marginRight: "15px",
                      }}
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.invain.mh"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <AiOutlineAndroid
                      style={{ fontSize: "25px", cursor: "pointer" }}
                    />
                  </a>
                </div>
              </div>
            </div>
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
                  <a
                    href="https://apps.apple.com/us/app/mh/id6446052294"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <AiOutlineApple
                      style={{
                        fontSize: "25px",
                        cursor: "pointer",
                        marginRight: "15px",
                      }}
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.invain.mh"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <AiOutlineAndroid
                      style={{ fontSize: "25px", cursor: "pointer" }}
                    />
                  </a>
                </div>
              </div>
            </div>
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
                  <a
                    href="https://apps.apple.com/us/app/mh/id6446052294"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <AiOutlineApple
                      style={{
                        fontSize: "25px",
                        cursor: "pointer",
                        marginRight: "15px",
                      }}
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.invain.mh"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <AiOutlineAndroid
                      style={{ fontSize: "25px", cursor: "pointer" }}
                    />
                  </a>
                </div>
              </div>
            </div>
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
                  <a
                    href="https://apps.apple.com/us/app/mh/id6446052294"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <AiOutlineApple
                      style={{
                        fontSize: "25px",
                        cursor: "pointer",
                        marginRight: "15px",
                      }}
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.invain.mh"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white"
                  >
                    <AiOutlineAndroid
                      style={{ fontSize: "25px", cursor: "pointer" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default Career;
