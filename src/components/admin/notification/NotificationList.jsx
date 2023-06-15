import React, { useState, useEffect, useCallback } from "react";
import { Button, DatePicker, Select, Space, Switch, Table } from "antd";

import _ from "lodash";
import moment from "moment";

import Loader from "../../loadar/Loader";
import { responseNotification } from "../../../utils/notifcation";
import { token } from "../../../utils/authentication";
import { fetchNotificationListHandler } from "../../../api/notification";
import axios from "axios";

const columns = [
  {
    title: "#",
    dataIndex: "key",
  },
  {
    title: "Employee Name",
    dataIndex: "employeeName",
    sorter: (a, b) => a.employeeName.length - b.employeeName.length,
  },
  {
    title: "Restaurant Name",
    dataIndex: "restaurantName",
  },
  {
    title: "Restaurant Address",
    dataIndex: "restaurantAddress",
  },
  {
    title: "Waiting Time",
    dataIndex: "waitingTime",
  },
  {
    title: "From Date",
    dataIndex: "fromDate",
  },
  {
    title: "To Date",
    dataIndex: "toDate",
  },
  {
    title: "From Time",
    dataIndex: "fromTime",
  },
  {
    title: "To Time",
    dataIndex: "toTime",
  },
  {
    title: "Hired Status",
    dataIndex: "hiredStatus",
  },
  {
    title: "Status",
    dataIndex: "status",
  },
];

const { Option } = Select;

function NotificationList() {
  const [getNotification, setNotificationList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getClientList, setClientList] = useState([]);

  const fetchNotifications = useCallback(async () => {
    setLoading(true);
    await fetchNotificationListHandler().then((res) => {
      if (res?.status === 200) {
        setNotificationList(res?.data?.notifications);
      } else {
        setLoading(false);
      }
    });

    setLoading(false);
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const data1 = [];
  _.map(getNotification, (item, index) => {
    data1.push({
      key: index + 1,
      employeeName: item?.employeeName,
      restaurantName: item?.restaurantName,
      restaurantAddress: item?.restaurantAddress,
      waitingTime: "2 hours ago",
      fromDate: moment(item?.fromDate).format("ddd, D MMM, YY"),
      toDate: moment(item?.fromDate).format("ddd, D MMM, YY"),
      fromTime: item?.fromTime,
      toTime: item?.toTime,
      hiredStatus: item?.hiredStatus,
      status: (
        <>
          <Switch
            size="small"
            defaultChecked={item?.hiredStatus === "ALLOW"}
            onChange={(e) => {
              onNotificationStatusChange(item?._id, e);
            }}
          />
        </>
      ),
    });
  });

  //Fetch client information
  const fetchClientData = useCallback(async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/users?requestType=CLIENT`,
        {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        }
      );

      setClientList(res?.data?.users);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchClientData();
  }, []);

  const onNotificationStatusChange = useCallback(
    async (value, e) => {
      const unicodeUri = `${process.env.REACT_APP_API_BASE_URL}`;
      const status = e === true ? "PAID" : "DUE";
      const id = value;

      if (true) {
        await fetch(`${unicodeUri}/invoices/update-statusssssssss`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token()}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            status: status,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res?.statusCode === 200) {
              responseNotification(
                "Notification status updated successfully",
                "success"
              );
              fetchNotifications();
            } else if (res?.statusCode === 400) {
              responseNotification("Bad request", "danger");
            }
          });
      }
    },
    [fetchNotifications]
  );

  return (
    <div className="container-fluid px-4">
      <div className="row mt-4">
        <div className="d-flex justify-content-between">
          <h3 className="mb-4 title">Hired Notification List</h3>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="col-12">
            <div className="row">
              <div className="col-10">
                <div className="d-flex justify-content-start">
                  <Space>
                    <Select
                      size="large"
                      allowClear
                      showSearch={true}
                      placeholder="Select Client Name"
                      // onChange={handleChangeCountryName}
                    >
                      {getClientList?.map((item, index) => (
                        <Option key={index} value={item?._id}>
                          {item?.restaurantName}
                        </Option>
                      ))}
                    </Select>

                    <DatePicker
                      size="large"
                      style={{ width: "12" }}
                      id="toDate"
                      placeholder="Hired Date"
                      // onChange={(value) => {
                      //   setFilterToDate(
                      //     moment(value).format("YYYY-MM-DD").valueOf()
                      //   );
                      // }}
                    />

                    <Select
                      size="large"
                      allowClear
                      showSearch={true}
                      placeholder="Hired Status"
                      // onChange={handleChangeStatus}
                    >
                      <Option value="ALLOW">ALLOW</Option>
                      <Option value="DENY">DENY</Option>
                    </Select>
                  </Space>
                </div>
              </div>
            </div>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <div className="m-2">
            <Table columns={columns} dataSource={data1} />
          </div>
        )}
      </div>
    </div>
  );
}

export default NotificationList;
