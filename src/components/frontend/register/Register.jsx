import React, { useState, useEffect, useCallback } from "react";

import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Upload, Button } from "antd";
import axios from "axios";
import ImgCrop from "antd-img-crop";
import { UploadOutlined } from "@ant-design/icons";

import { clientRegisterHandler } from "../../../api/client";
import { responseNotification } from "../../../utils/notifcation";
import CountryWiseValidationRules from "../../../utils/static/countryList";
import { employeeRegisterHandler } from "../../../api/employee";
import { fetchPositionListForDropdownHandler } from "../../../api/position";
import defaultImage from "../../../assets/images/default.png";

function Register() {
  const [referPerson, setReferPerson] = useState([]);
  const [sourceFrom, setSourceFrom] = useState([]);
  const [position, setPosition] = useState([]);

  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  const [profilePicture, setProfilePicture] = useState([]);
  const [summaryPdf, setSummaryPdf] = useState([]);
  const [summaryPdfFileShow, setSummaryPdfFileShow] = useState(undefined);

  const [form] = Form.useForm();

  const navigate = useNavigate();

  const onProfileChange = ({ fileList: newFileList }) => {
    setProfilePicture(newFileList);
  };

  // image preview
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/users/list?isReferPerson=YES`
        );
        setReferPerson(response?.data?.users);
      } catch (error) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchSourceFromData = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/sources/list-for-dropdown`
      );
      setSourceFrom(response?.data?.sources);
    };

    fetchSourceFromData();
  }, []);

  //Fetch position list for dropdown
  const fetchPositionData = useCallback(async () => {
    await fetchPositionListForDropdownHandler().then((res) => {
      setPosition(res?.data?.positions);
    });
  }, []);

  useEffect(() => {
    fetchPositionData();
  }, []);

  const onFinish = async (values) => {
    console.log("values: ", values);

    if (true) {
      setLoading(true);

      const file = new FormData();
      file.append("firstName", values?.firstName);
      file.append("lastName", values?.lastName);
      file.append("email", values?.email);
      file.append("phoneNumber", values?.phoneNumber);
      file.append("countryName", values?.countryName);
      file.append("positionId", values?.positionId);

      if (summaryPdf?.[0].originFileObj)
        file.append("cv", summaryPdf?.[0].originFileObj);
      if (profilePicture?.[0].originFileObj)
        file.append("profilePicture", profilePicture?.[0].originFileObj);

      await employeeRegisterHandler(file)
        .then((res) => res.json())
        .then((res) => {
          if (res.statusCode === 201) {
            responseNotification(
              "Employee registered successfully!",
              "success"
            );
            // form.resetFields();
            setSummaryPdf([]);

            navigate("/login");

            // window.location.reload();
          } else if (res?.statusCode === 400) {
            // responseNotification(
            //     "Bad request please upload valid file or check you internet",
            //     "warning"
            // );
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

  //CV onchange
  const summaryPdfChange = ({ fileList: newFileList }) => {
    setSummaryPdf(newFileList);
    setSummaryPdfFileShow(newFileList[0]?.originFileObj?.name);
  };

  return (
    <section className="total_wrapper">
      <div className="container-fluid">
        <div className="row custom_coloring_row">
          {/*leftpart start*/}
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
          {/*leftpart end*/}
          {/*Right Part Start*/}
          <div className="col-lg-6 col-md-6 col-sm-12 Registration_page_right_part">
            <div className="eclips_wrapper1">
              <img
                className="img-fluid"
                src="assets/frontend/images/registrationFormImages/clientAndEmployee/Ellipse 70.png"
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
                  <button
                    className="nav-link active client_tab_button"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Client
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link employee_tab_button"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Employee
                  </button>
                </li>
              </ul>
            </div>
            <div className="formWrappper">
              <div className="tab-content" id="myTabContent">
                {/* Clients Form */}
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="container card_looking_container">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="resturauntNameWrapper">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="form-label restaurantNameText"
                          >
                            Resturaunt Name
                          </label>
                        </div>
                        <div className="inputLogoWrapper">
                          <img
                            className="img-fluid"
                            src="assets/frontend/images/registrationFormImages/clientFormPictures/Vector.png"
                            alt="image"
                          />
                        </div>
                        <input
                          placeholder="Name"
                          type="email"
                          className="form-control custom_client_input_for_registration_page mb-3"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        <div className="inputLogoWrapper">
                          <img
                            className="img-fluid"
                            src="assets/frontend/images/registrationFormImages/clientFormPictures/Email.png"
                            alt="image"
                          />
                        </div>
                        <input
                          placeholder="Email Address"
                          type="email"
                          className="form-control custom_client_input_for_registration_page mb-3"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-lg-6">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="hidden_input form-label restaurantNameText"
                        >
                          Resturaunt Name
                        </label>
                        {/* This is an hidden label for  empty space */}
                        <div className="inputLogoWrapper">
                          <img
                            className="img-fluid"
                            src="assets/frontend/images/registrationFormImages/clientFormPictures/Subtract.png"
                            alt="image"
                          />
                        </div>
                        <input
                          placeholder="Resturaunt Address"
                          type="text"
                          className="form-control custom_client_input_for_registration_page mb-3"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        <div className="inputLogoWrapper">
                          <img
                            className="img-fluid"
                            src="assets/frontend/images/registrationFormImages/clientFormPictures/phone.png"
                            alt="image"
                          />
                        </div>
                        <input
                          placeholder="Phone Number"
                          type="email"
                          className="form-control custom_client_input_for_registration_page mb-3"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        <div className="inputLogoWrapper">
                          <img
                            className="img-fluid hidden_input"
                            src="assets/frontend/images/registrationFormImages/clientFormPictures/ip.png"
                            alt="image"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="inputLogoWrapper">
                          <img
                            className="img-fluid"
                            src="assets/frontend/images/registrationFormImages/clientFormPictures/pass.png"
                            alt="image"
                          />
                        </div>
                        <input
                          placeholder="Password"
                          type="password"
                          className="form-control custom_client_input_for_registration_page mb-3"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-lg-6">
                        <div className="inputLogoWrapper">
                          <img
                            className="img-fluid"
                            src="assets/frontend/images/registrationFormImages/clientFormPictures/pass.png"
                            alt="image"
                          />
                        </div>
                        <input
                          placeholder="Confirm Password"
                          type="password"
                          className="form-control custom_client_input_for_registration_page mb-3"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    {/* Please Provide Text */}
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
                    {/* Please Provide Text End */}
                    {/* About Us form */}
                    <div className="container dropdownContainer">
                      <div className="row">
                        <div className="col-lg-6">
                          <p className="how_youKnow_text">
                            How You Know About Us
                          </p>
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
                                aria-label="Select country"
                              >
                                <option selected disabled>
                                  Select from here
                                </option>
                                <option value="Afghanistan">Afghanistan</option>
                                <option value="Brazil">Brazil</option>
                                <option value="Canada">Canada</option>
                                <option value="Denmark">Denmark</option>
                                <option value="Egypt">Egypt</option>
                                <option value="Finland">Finland</option>
                                <option value="Greece">Greece</option>
                                <option value="Hungary">Hungary</option>
                                <option value="India">India</option>
                                <option value="Japan">Japan</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <p className="how_youKnow_text">Refer</p>
                          <div className="referFieldWrapper">
                            <div className="inputLogoWrapper">
                              <img
                                className="img-fluid"
                                src="assets/frontend/images/registrationFormImages/clientFormPictures/EnterHere.png"
                                alt="image"
                              />
                            </div>
                            <input
                              placeholder="Enter Here"
                              type="password"
                              className="form-control custom_client_input_for_registration_page mb-3"
                              id="exampleInputEmail1"
                              aria-describedby="emailHelp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* About Us form End */}
                    {/* Register Button */}
                    <div className="registerButton text-center">
                      <button type="submit" className="btn register_button">
                        Register
                      </button>
                    </div>

                    <div className="accountandregisterwrapper text-center">
                      <span className="donthaveaccounttext">
                        Already have an account?
                      </span>
                      <Link to="/login" style={{ color: "#ceb26e" }}>
                        Login
                      </Link>
                    </div>
                    {/* Register Button End */}
                  </div>
                </div>

                {/* Employee form */}
                <Form
                  className="ant-form ant-form-vertical"
                  layout="vertical"
                  onFinish={onFinish}
                  form={form}
                >
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="uploadImageWrapper d-flex justify-content-center align-items-center">
                            <Form.Item
                              name="profilePicture"
                              hasFeedback
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter your profile picture",
                                },
                              ]}
                            >
                              <div>
                                <ImgCrop rotate aspect={2 / 1}>
                                  <Upload
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    listType="picture-card"
                                    fileList={profilePicture}
                                    onChange={onProfileChange}
                                    onPreview={onPreview}
                                  >
                                    {profilePicture?.length < 1 && (
                                      <>
                                        <img
                                          style={{
                                            height: "100px",
                                            width: "100px",
                                          }}
                                          src="assets/frontend/images/registrationFormImages/employeeFormPictures/uploadeImage.png"
                                          alt="Default Image"
                                        />
                                      </>
                                    )}
                                  </Upload>
                                </ImgCrop>
                              </div>
                            </Form.Item>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <Form.Item
                            name="firstName"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please enter your first name",
                              },
                            ]}
                          >
                            <div>
                              <div className="resturauntNameWrapper">
                                <label
                                  htmlFor="exampleInputEmail1"
                                  className="form-label restaurantNameText"
                                >
                                  First Name
                                </label>
                              </div>
                              <div className="inputLogoWrapper">
                                <img
                                  className="img-fluid"
                                  src="assets/frontend/images/registrationFormImages/employeeFormPictures/Icon.png"
                                  alt="image"
                                />
                              </div>
                              <input
                                placeholder="Enter first name"
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
                                message: "Please enter your email",
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
                                placeholder="Enter email"
                                type="email"
                                className="form-control custom_client_input_for_registration_page"
                              />
                            </div>
                          </Form.Item>

                          <Form.Item
                            name="positionId"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please select your position",
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
                                  aria-label="Select country"
                                >
                                  <option selected disabled>
                                    Please select position
                                  </option>
                                  {position?.map((item, index) => (
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
                          <Form.Item
                            name="lastName"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please enter your last name",
                              },
                            ]}
                          >
                            <div>
                              <div className="inputLogoWrapper">
                                <img
                                  className="img-fluid"
                                  src="assets/frontend/images/registrationFormImages/employeeFormPictures/Icon.png"
                                  alt="image"
                                />
                              </div>
                              <input
                                placeholder="Enter last name"
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
                                message: "Please enter your phone number",
                              },
                            ]}
                          >
                            <div>
                              <div className="inputLogoWrapper">
                                <img
                                  className="img-fluid"
                                  src="assets/frontend/images/registrationFormImages/employeeFormPictures/mobile.png"
                                  alt="image"
                                />
                              </div>
                              <input
                                placeholder="Phone Number"
                                type="text"
                                className="form-control custom_client_input_for_registration_page"
                              />
                            </div>
                          </Form.Item>
                          <Form.Item
                            name="countryName"
                            hasFeedback
                            rules={[
                              {
                                required: true,
                                message: "Please select your country name",
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
                                  aria-label="Select country"
                                >
                                  <option selected disabled>
                                    Please select country name
                                  </option>
                                  {CountryWiseValidationRules?.map(
                                    (item, index) => (
                                      <option key={index} value={item?.name}>
                                        {item?.name}
                                      </option>
                                    )
                                  )}
                                </select>
                              </div>
                            </div>
                          </Form.Item>
                        </div>
                      </div>

                      <Form.Item
                        rules={[
                          {
                            required: true,
                            message: "Curriculam Vitea (CV)",
                          },
                        ]}
                        name="summaryPdf"
                      >
                        <div className="row">
                          <div className="col-lg-12 d-flex justify-content-center align-items-center">
                            {/* Logo Upload Button */}
                            <label className="logo-upload-btn">
                              <img
                                className="img-fluid cv_button"
                                src="assets/frontend/images/registrationFormImages/employeeFormPictures/uploadPDF.png"
                                alt="CV"
                              />

                              <Upload
                                listType="picture"
                                defaultFileList={[...summaryPdf]}
                                fileList={summaryPdf}
                                onChange={summaryPdfChange}
                                maxCount={1}
                                accept=".pdf, .PDF, docs, DOCS, .doc, .DOC, .docx"
                              >
                                {/* <Button icon={<UploadOutlined />}>
                                  {!summaryPdfFileShow ? "Upload" : "Uploaded"}
                                </Button> */}
                              </Upload>
                            </label>
                          </div>
                        </div>
                      </Form.Item>

                      <div className="row">
                        <div className="col-lg-12">
                          {/* Register Button */}
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
                          {/* Register Button End */}

                          <div className="accountandregisterwrapper text-center">
                            <span className="donthaveaccounttext">
                              Already have an account?
                            </span>
                            <Link to="/login" style={{ color: "#ceb26e" }}>
                              Login
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
            {/* Have an account Section start*/}
            {/* <div className="accountandregisterwrapper text-center">
              <span className="donthaveaccounttext">
                Already have an account?
              </span>
              <Link to="/login" style={{ color: "#ceb26e" }}>
                Login
              </Link>
            </div> */}
            {/* Have an account Section end*/}
          </div>
          {/* <div class="eclipse_wrapper2">
          <img class="img-fluid"
              src="images/registrationFormImages/clientFormPictures/../clientAndEmployee/Ellipse 69.png" alt="">
      </div> */}
        </div>
        {/*Right Part End*/}
      </div>
    </section>
  );
}

export default Register;
