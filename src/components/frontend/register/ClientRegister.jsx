import React, { useState, useEffect, useCallback } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Form } from "antd";
import axios from "axios";

import { clientRegisterHandler } from "../../../api/client";
import { responseNotification } from "../../../utils/notifcation";

function ClientRegister() {
  const [referPerson, setReferPerson] = useState([]);
  const [sourceFrom, setSourceFrom] = useState([]);

  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  const [form] = Form.useForm();
  const navigate = useNavigate();

  //Fetch Refer Person list for dropdown
  const fetchReferPersonData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/users/list?isReferPerson=YES`
      );
      setReferPerson(response?.data?.users);
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);

  //Fetch source from list for dropdown
  const fetchSourceFromData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/sources/list-for-dropdown`
      );
      setSourceFrom(response?.data?.sources);
    } catch (error) {
      console.log("Error: ", error);
    }
  }, []);

  useEffect(() => {
    fetchSourceFromData();
    fetchReferPersonData();
  }, []);

  const onFinish = async (values) => {
    const receivedClientRegisterFields = {
      restaurantName: values?.restaurantName,
      restaurantAddress: values?.restaurantAddress,
      sourceId: values?.sourceId,
      phoneNumber: values?.phoneNumber,
      email: values?.email,
      password: values?.password,
      lat: "123.23122242",
      long: "4545.354545",
    };

    if (values?.referPersonId) {
      receivedClientRegisterFields.referPersonId = values?.referPersonId;
    }

    if (receivedClientRegisterFields) {
      setLoading(true);

      await clientRegisterHandler(receivedClientRegisterFields)
        .then((res) => res.json())
        .then((res) => {
          if (res.statusCode === 201) {
            responseNotification("Client registered successfully!", "success");
            form.resetFields();

            navigate("/register-welcome");

            // window.location.reload();
          } else if (res?.statusCode === 400) {
            setError(res?.message);
            setLoading(false);
          } else {
            setLoading(false);
            setError(res?.message);
          }
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    }
  };

  return (
    <section className="total_wrapper">
      <div className="container-fluid">
        <div className="row custom_coloring_row">
          <div className="col-lg-6 col-md-6 col-sm-12 Registration_left_part ">
            <div className="row left_part_wrapper">
              <div className="button_wrapper">
                <Link to="/login">
                  <img
                    src="assets/frontend/images/registrationFormImages/clientAndEmployee/Group 685.png"
                    className="img-fluid"
                    alt="image"
                  />
                </Link>
              </div>
              <div className="logo_wrapper text-center">
                <img
                  className="img-fluid"
                  src="assets/frontend/images/registrationFormImages/clientAndEmployee/Logo.png"
                  alt="image"
                />
              </div>
              <div className="premier_stuffing_wrapper text-center">
                <h1>PREMIER STAFFING SOLUTIONS</h1>
              </div>
              <div className="mh_premier_wrapping text-center">
                <p>
                  MH PREMIER STAFFING SOLUTIONS helps you hire great &amp;
                  experienced workers at a moment's notice
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 Registration_page_right_part">
            <div className="eclips_wrapper1">
              <img
                className="img-fluid"
                src="assets/frontend/images/registrationFormImages/clientAndEmployee/Ellipse 70.png"
                alt="image"
              />
            </div>
            <div className="eclipse_wrapper2">
              <img
                className="img-fluid"
                src="assets/frontend/images/registrationFormImages/clientFormPictures/../clientAndEmployee/Ellipse 69.png"
                alt="image"
              />
            </div>
            <div className="clientButtonWrapper d-flex justify-content-center align-items-center">
              <ul
                className="nav mobile_320  ClientButtonNavTabs nav-tabs"
                id="myTab"
                role="tablist"
              >
                <li
                  className="nav-item ClientButtonNavItem"
                  role="presentation"
                >
                  <Link to="/client-register" className="text-decoration-none">
                    <button className="nav-link active client_tab_button">
                      Client
                    </button>
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link
                    to="/employee-register"
                    className="text-decoration-none"
                  >
                    <button className="nav-link employee_tab_button">
                      Employee
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="formWrappper">
              <div className="tab-content">
                <Form
                  className="ant-form ant-form-vertical"
                  layout="vertical"
                  onFinish={onFinish}
                  form={form}
                >
                  <div className="tab-pane fade show active">
                    <div className="container card_looking_container">
                      <div className="row">
                        <div className="col-lg-6">
                          <Form.Item
                            name="restaurantName"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please enter restaurant name",
                              },
                            ]}
                          >
                            <div>
                              <div className="inputLogoWrapper">
                                <img
                                  className="img-fluid"
                                  src="assets/frontend/images/registrationFormImages/clientFormPictures/Vector.png"
                                  alt="image"
                                />
                              </div>
                              <input
                                placeholder="Enter restauraunt name"
                                type="text"
                                className="form-control custom_client_input_for_registration_page"
                              />
                            </div>
                          </Form.Item>

                          <Form.Item
                            name="email"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please enter email address",
                              },
                            ]}
                          >
                            <div>
                              <div className="inputLogoWrapper">
                                <img
                                  className="img-fluid"
                                  src="assets/frontend/images/registrationFormImages/clientFormPictures/Email.png"
                                  alt="image"
                                />
                              </div>
                              <input
                                placeholder="Enter email address"
                                type="email"
                                className="form-control custom_client_input_for_registration_page"
                              />
                            </div>
                          </Form.Item>
                        </div>
                        <div className="col-lg-6">
                          <Form.Item
                            name="restaurantAddress"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please enter restaurant address",
                              },
                            ]}
                          >
                            <div>
                              <div className="inputLogoWrapper">
                                <img
                                  className="img-fluid"
                                  src="assets/frontend/images/registrationFormImages/clientFormPictures/Subtract.png"
                                  alt="image"
                                />
                              </div>
                              <input
                                placeholder="Enter restauraunt address"
                                type="text"
                                className="form-control custom_client_input_for_registration_page"
                              />
                            </div>
                          </Form.Item>

                          <Form.Item
                            name="phoneNumber"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please enter phone number",
                              },
                            ]}
                          >
                            <div>
                              <div className="inputLogoWrapper">
                                <img
                                  className="img-fluid"
                                  src="assets/frontend/images/registrationFormImages/clientFormPictures/phone.png"
                                  alt="image"
                                />
                              </div>
                              <input
                                placeholder="Enter phone number"
                                type="text"
                                className="form-control custom_client_input_for_registration_page"
                              />
                            </div>
                          </Form.Item>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <Form.Item
                            name="password"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please enter password",
                              },
                            ]}
                          >
                            <div>
                              <div className="inputLogoWrapper">
                                <img
                                  className="img-fluid"
                                  src="assets/frontend/images/registrationFormImages/clientFormPictures/pass.png"
                                  alt="image"
                                />
                              </div>
                              <input
                                placeholder="Enter password"
                                type="password"
                                className="form-control custom_client_input_for_registration_page"
                              />
                            </div>
                          </Form.Item>
                        </div>
                        <div className="col-lg-6">
                          <Form.Item
                            name="confirmPassword"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please enter confirm password",
                              },
                            ]}
                          >
                            <div>
                              <div className="inputLogoWrapper">
                                <img
                                  className="img-fluid"
                                  src="assets/frontend/images/registrationFormImages/clientFormPictures/pass.png"
                                  alt="image"
                                />
                              </div>
                              <input
                                placeholder="Enter confirm password"
                                type="password"
                                className="form-control custom_client_input_for_registration_page"
                              />
                            </div>
                          </Form.Item>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12 please_provide_wrapper text-center">
                          <p className="pleaseProvideText">
                            Please provide the following info too
                          </p>
                          <img
                            className="img-fluid pleaseProvideImage"
                            src="assets/frontend/images/registrationFormImages/clientFormPictures/rectangle.png"
                            alt="image"
                          />
                        </div>
                      </div>

                      <div className="container dropdownContainer">
                        <div className="row">
                          <div className="col-lg-6">
                            <p className="how_youKnow_text">
                              How You Know About Us?
                            </p>

                            <Form.Item
                              name="sourceId"
                              hasFeedback
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Please select how you know about us?",
                                },
                              ]}
                            >
                              <div className="dropdownbuttonwrapper">
                                <div className="dropdown">
                                  <div className="inputLogoWrapper">
                                    <img
                                      className="img-fluid"
                                      src="assets/frontend/images/registrationFormImages/clientFormPictures/selectFrom.png"
                                      alt="image"
                                    />
                                  </div>

                                  <select
                                    className="form-select custom_select"
                                    aria-label="Select"
                                  >
                                    <option value="" selected disabled>
                                      Please select
                                    </option>
                                    {sourceFrom?.map((item, index) => (
                                      <option key={index} value={item?._id}>
                                        {item?.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </Form.Item>
                          </div>

                          <div className="col-lg-6">
                            <p className="how_youKnow_text">
                              How You Know About Us?
                            </p>

                            <Form.Item
                              name="referPersonId"
                              hasFeedback
                              rules={[
                                {
                                  // required: true,
                                  message: "Please enter refer person",
                                },
                              ]}
                            >
                              <div className="dropdownbuttonwrapper">
                                <div className="dropdown">
                                  <div className="inputLogoWrapper">
                                    <img
                                      className="img-fluid"
                                      src="assets/frontend/images/registrationFormImages/clientFormPictures/EnterHere.png"
                                      alt="image"
                                    />
                                  </div>

                                  <select className="form-select custom_select">
                                    <option selected disabled>
                                      Please select
                                    </option>
                                    {referPerson?.map((item, index) => (
                                      <option key={index} value={item?._id}>
                                        {item?.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>
                            </Form.Item>
                          </div>
                        </div>
                      </div>

                      <div className="registerButton text-center">
                        <Form.Item>
                          <button
                            disabled={loading}
                            className="btn employee_register_button"
                            type="submit"
                          >
                            {!loading && "Register"}
                            {loading && (
                              <span
                                className="indicator-progress"
                                style={{ display: "block" }}
                              >
                                Please wait...{" "}
                                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                              </span>
                            )}
                          </button>
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
            <div className="accountandregisterwrapper text-center">
              <span className="donthaveaccounttext">
                Already have an account?
              </span>
              <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientRegister;
