import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DatePicker, Form, Input, InputNumber, Select } from "antd";

import axios from "axios";
import moment from "moment";

import { token } from "../../../utils/authentication";
import { responseNotification } from "../../../utils/notifcation";

const { Option } = Select;

function AddInvoice() {
  const [getClientList, setClientList] = useState([]);

  const [getFromWeekDate, setFromWeekDate] = useState(undefined);
  const [getToWeekDate, setToWeekDate] = useState(undefined);

  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  const [form] = Form.useForm();

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

  const onFinish = async (values) => {
    const receivedClientFields = {
      clientId: values?.clientName,
      amount: values?.amount,
      totalEmployee: values?.totalEmployee,
      fromWeekDate: getFromWeekDate,
      toWeekDate: getToWeekDate,
    };

    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/invoices/create`,
        receivedClientFields,
        {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        }
      );

      if (res?.data?.statusCode === 201) {
        setError(undefined);
        setLoading(false);
        responseNotification(
          "Invoice information created successfully!",
          "success"
        );
      } else if (res?.data?.statusCode === 400) {
        setError(res?.data?.errors?.[0].msg);
        setLoading(false);
      } else if (res?.data?.statusCode === 500) {
        setError(res?.message);
        setLoading(false);
      }
    } catch (error) {
      setError(error?.response?.data?.errors?.[0].msg);
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid px-4">
      <div className="row mt-4">
        <div className="d-flex justify-content-between">
          <h3 className="mb-4 title">Add New Invoice Information</h3>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Add New Invoice</div>
        <div className="card-body">
          <div>
            <Form
              className="ant-form ant-form-vertical"
              layout="vertical"
              onFinish={onFinish}
              form={form}
            >
              <div className="col-12">
                <div className="row">
                  <div className="col-md-6">
                    <Form.Item
                      label="Client Name"
                      name="clientName"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter client name",
                        },
                      ]}
                    >
                      <Select
                        showSearch={true}
                        placeholder="Please select"
                        optionFilterProp="children"
                      >
                        {getClientList?.map((item, index) => (
                          <Option key={index} value={item?._id}>
                            {item?.restaurantName}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-md-6">
                    <Form.Item
                      label="Amount"
                      name="amount"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter amount",
                        },
                      ]}
                    >
                      <InputNumber
                        style={{
                          width: "100%",
                        }}
                        min={1}
                        placeholder="Enter amount"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-6">
                    <Form.Item
                      label="From Week"
                      name="fromWeekDate"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter from week",
                        },
                      ]}
                    >
                      <DatePicker
                        id="fromWeekDate"
                        placeholder="From week date"
                        style={{ width: "100% !important" }}
                        className="w-100"
                        onChange={(value, dateOfBirthString) => {
                          setFromWeekDate(
                            moment(dateOfBirthString)
                              .format("YYYY-MM-DD")
                              .valueOf()
                          );
                        }}
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-6">
                    <Form.Item
                      label="To Week"
                      name="toWeekDate"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter to week",
                        },
                      ]}
                    >
                      <DatePicker
                        id="toWeekDate"
                        placeholder="To week date"
                        style={{ width: "100% !important" }}
                        className="w-100"
                        onChange={(value, dateOfBirthString) => {
                          setToWeekDate(
                            moment(dateOfBirthString)
                              .format("YYYY-MM-DD")
                              .valueOf()
                          );
                        }}
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-6">
                    <Form.Item
                      label="Total Employee"
                      name="totalEmployee"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter total employee",
                        },
                      ]}
                    >
                      <InputNumber
                        style={{
                          width: "100%",
                        }}
                        min={1}
                        placeholder="Enter total employee"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>
                </div>
              </div>

              {getError ? (
                <div className="row">
                  <div className="col-lg-12">
                    <div className="error-message">
                      <p className="text-danger">{getError}</p>
                    </div>
                  </div>
                </div>
              ) : undefined}

              <div className="col-md-6">
                <Form.Item>
                  <button
                    disabled={loading}
                    className="btn"
                    style={{ background: "#C6A34F", color: "white" }}
                    type="submit"
                  >
                    {!loading && "Submit"}
                    {loading && (
                      <span
                        className="indicator-progress"
                        style={{ display: "block" }}
                      >
                        Please wait...
                        <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                      </span>
                    )}
                  </button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddInvoice;
