import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { token } from "../../../utils/authentication";

export default function SingleMeet() {
  const { id } = useParams();
  const [meetData, setMeetData] = useState({});
  const [loading, setLoading] = useState(true);
  const feedbackInputRef = useRef(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/meet/get-single-meet/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token()}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMeetData(data._doc);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);

  // handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const feedback = e.target.elements.feedback.value;

    fetch(`${process.env.REACT_APP_API_BASE_URL}/meet/update-meet/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token()}`,
      },
      body: JSON.stringify({
        feedback: feedback,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMeetData(data._doc);
        // Reset the input field
        if (feedbackInputRef.current) {
          feedbackInputRef.current.value = "";
        }
        toast.success("Meet data Updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h4>Meet with {meetData?.userEmail}</h4>
          <div className="row shadow m-5 p-5 rounded">
            <div className="col-md-6">
              <h5>Meet Link: {meetData.meetLink} </h5>
              <a
                href={meetData.meetLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{
                  backgroundColor: "#C6A34F",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                Join the meeting
              </a>
            </div>
            <div className="col-md-6">
              <h5>
                Meet Date: {meetData.startTime} - {meetData.endTime}
              </h5>
            </div>
          </div>

          <div className="row mt-4 shadow p-5 m-5">
            <div className="col-md-6">
              <h4>Key Notes:</h4>
              <form onSubmit={handleFormSubmit}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Key notes"
                    name="feedback"
                    ref={feedbackInputRef}
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{
                      backgroundColor: "#C6A34F",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                      color: "white",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <p>
                <span className="fw-bold">HR Key Notes</span>:{" "}
                {meetData?.feedback || "No feedback yet"}
              </p>
              <p>
                <span className="fw-bold">Meet Status</span>:{" "}
                {meetData?.isActive ? "Pending" : "Completed"}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
