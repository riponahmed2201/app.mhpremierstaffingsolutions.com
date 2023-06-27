import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { token } from "../../../utils/authentication";

export default function SingleMeet() {
  const { id } = useParams();
  console.log(id);
  const [meetData, setMeetData] = useState({});
  const [loading, setLoading] = useState(true);
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
      });
  }, [id]);

  console.log(meetData);
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
              <h4>Feedback:</h4>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Leave a feedback"
                />
                <button
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
            </div>
          </div>
        </>
      )}
    </>
  );
}
