import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { token } from "../../../utils/authentication";

const columns = [
  {
    title: "#",
    dataIndex: "key",
  },
  {
    title: "Meet Link",
    dataIndex: "meetLink",
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
  },
  {
    title: "End Time",
    dataIndex: "endTime",
  },
  {
    title: "User Email",
    dataIndex: "userEmail",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    render: (_, record) => (
      <div className="btn-group">
        <Link
          to={`/admin/view-meet/${record._id}`}
          className="btn btn-sm"
          style={{ background: "#C6A34F", color: "white" }}
        >
          View Details
        </Link>
      </div>
    ),
  },
];

function ViewMeet() {
  const [getAllMeet, setGetAllMeet] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_BASE_URL}/meet/get-all-meets`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token()}`,
            },
          }
        );
        const data = await response.json();
        setGetAllMeet(data);
      } catch (error) {
        console.error("Error fetching meet data:", error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const data = Object.keys(getAllMeet)
    .filter((key) => !isNaN(key))
    .map((key, index) => ({
      key: index + 1,
      ...getAllMeet[key],
    }));

  return (
    <div className="container-fluid px-4">
      <div className="row mt-4">
        <div className="d-flex justify-content-between">
          <h3 className="mb-4 title">View Meets</h3>
        </div>
      </div>
      <div className="card">
        {loading ? (
          <div className="p-4">Loading...</div>
        ) : (
          <Table columns={columns} dataSource={data} />
        )}
      </div>
    </div>
  );
}

export default ViewMeet;
