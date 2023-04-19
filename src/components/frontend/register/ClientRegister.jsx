import React, { useState, useEffect } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { Form, Select, Input } from "antd";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

import { clientRegisterHandler } from "../../../api/client";
import { responseNotification } from "../../../utils/notifcation";
import CountryWiseValidationRules from "../../../utils/static/countryList";

const { Option } = Select;

function ClientRegister() {
  const [referPerson, setReferPerson] = useState([]);
  const [sourceFrom, setSourceFrom] = useState([]);

  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  const [form] = Form.useForm();

  const navigate = useNavigate();

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

  const formik = useFormik({
    initialValues: {
      resturauntName: "",
      restaurantAddress: "",
      sourceFrom: "",
      referPersonId: "",
      phoneNumber: "",
      email: "",
      password: "",
      lat: "123.23122242",
      long: "4545.354545",
    },
    validationSchema: yup.object({
      resturauntName: yup.string().required(),
      restaurantAddress: yup.string().required(),
      sourceFrom: yup.string().required(),
      referPersonId: yup.string().required(),
      phoneNumber: yup.string().required(),
      email: yup.string().email().required(),
      password: yup
        .string()
        .min(6, "Password must have at least 6 characters")
        .required(),
    }),
    onSubmit: async (values, resetForm) => {
      console.log("values: ", values);
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/users/client-register`,
          values
        );

        if (res?.data?.statusCode === 201) {
          console.log("response: ", res?.data?.statusCode);
          resetForm({ values: "" });
          navigate("/login");
        } else {
          navigate("/client-register");
        }
      } catch (error) {}
    },
  });

  return (
    <section className="total_wrapper">
      <div className="container-fluid">
        <div className="row custom_coloring_row">
          {/*leftpart start*/}
          <div className="col-lg-6 col-md-6 col-sm-12 Registration_left_part ">
            <div className="row left_part_wrapper">
              <div className="button_wrapper">
                <a href="#">
                  <img
                    src="assets/frontend/images/registrationFormImages/clientAndEmployee/Group 685.png"
                    className="img-fluid"
                    alt="image"
                  />
                </a>
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

                <form onSubmit={formik.handleSubmit}>
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
                            onChange={formik.handleChange}
                            placeholder="Enter resturaunt name"
                            type="text"
                            value={formik.values.resturauntName}
                            className="form-control custom_client_input_for_registration_page mb-3"
                            id="resturauntName"
                            name="resturauntName"
                          />
                          {formik.touched.resturauntName &&
                            formik.errors.resturauntName && (
                              <span style={{ color: "red" }}>
                                {formik.errors.resturauntName}
                              </span>
                            )}
                          <div className="inputLogoWrapper">
                            <img
                              className="img-fluid"
                              src="assets/frontend/images/registrationFormImages/clientFormPictures/Email.png"
                              alt="image"
                            />
                          </div>
                          <input
                            onChange={formik.handleChange}
                            id="email"
                            name="email"
                            placeholder="Enter email address"
                            type="email"
                            value={formik.values.email}
                            className="form-control custom_client_input_for_registration_page mb-3"
                          />
                          {formik.touched.email && formik.errors.email && (
                            <span style={{ color: "red" }}>
                              {formik.errors.email}
                            </span>
                          )}
                        </div>
                        <div className="col-lg-6">
                          <label
                            htmlFor="exampleInputEmail1"
                            className="hidden_input form-label restaurantNameText"
                          >
                            Resturaunt Address
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
                            onChange={formik.handleChange}
                            id="resturauntAddress"
                            name="resturauntAddress"
                            value={formik.values.restaurantAddress}
                            placeholder="Enter resturaunt address"
                            type="text"
                            className="form-control custom_client_input_for_registration_page mb-3"
                          />
                          {formik.touched.restaurantAddress &&
                            formik.errors.restaurantAddress && (
                              <span style={{ color: "red" }}>
                                {formik.errors.restaurantAddress}
                              </span>
                            )}
                          <div className="inputLogoWrapper">
                            <img
                              className="img-fluid"
                              src="assets/frontend/images/registrationFormImages/clientFormPictures/phone.png"
                              alt="image"
                            />
                          </div>
                          <input
                            onChange={formik.handleChange}
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formik.values.phoneNumber}
                            type="text"
                            className="form-control custom_client_input_for_registration_page mb-3"
                          />
                          {formik.touched.phoneNumber &&
                            formik.errors.phoneNumber && (
                              <span style={{ color: "red" }}>
                                {formik.errors.phoneNumber}
                              </span>
                            )}
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
                            onChange={formik.handleChange}
                            id="password"
                            name="password"
                            value={formik.values.password}
                            placeholder="Password"
                            type="password"
                            className="form-control custom_client_input_for_registration_page mb-3"
                          />
                          {formik.touched.password &&
                            formik.errors.password && (
                              <span style={{ color: "red" }}>
                                {formik.errors.password}
                              </span>
                            )}
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
                          </div>
                          <div className="col-lg-6">
                            <p className="how_youKnow_text">Refer</p>
                            <div className="dropdownbuttonwrapper">
                              <div className="dropdown">
                                <div className="inputLogoWrapper">
                                  <img
                                    className="img-fluid"
                                    src="assets/frontend/images/registrationFormImages/clientFormPictures/EnterHere.png"
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

                                  {referPerson?.map((item, index) => (
                                    <option key={index} value={item?._id}>
                                      {item?.name}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* About Us form End */}

                      {getError ? (
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="error-message">
                              <p className="text-danger">{getError}</p>
                            </div>
                          </div>
                        </div>
                      ) : undefined}

                      {/* Register Button */}
                      <div className="registerButton text-center">
                        <button
                          disabled={loading}
                          className="btn register_button"
                          type="submit"
                        >
                          {!loading && "Register"}
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
                      </div>
                      {/* Register Button End */}
                    </div>
                  </div>
                </form>
                {/* Employee form */}
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
                          <form
                            action="#"
                            method="post"
                            encType="multipart/form-data"
                          >
                            {/* Clickable Image */}
                            <label htmlFor="file-upload">
                              <img
                                src="assets/frontend/images/registrationFormImages/employeeFormPictures/uploadeImage.png"
                                alt="image"
                                className="img-thumbnail img-fluid customImageThumbnail empUploadImg"
                                style={{ cursor: "pointer" }}
                              />
                            </label>
                            {/* Input for file upload */}
                            <input
                              id="file-upload"
                              type="file"
                              name="file"
                              style={{ display: "none" }}
                            />
                            {/* Submit Button */}
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
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
                          placeholder="Razinul Karim"
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
                        <div className="dropdownbuttonwrapper">
                          <div className="dropdown">
                            <div className="inputLogoWrapper">
                              <img
                                className="img-fluid"
                                src="assets/frontend/images/registrationFormImages/employeeFormPictures/jobtype.png"
                                alt="image"
                              />
                            </div>
                            <button
                              className="text-start btn btn-custom-dropdown dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton2"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Job Type
                            </button>
                            <ul
                              className="dropdown-menu dropdown-menu-dark"
                              aria-labelledby="dropdownMenuButton2"
                            >
                              <li>
                                <a className="dropdown-item active" href="#">
                                  Action
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a className="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="inputLogoWrapper">
                          <img
                            className="img-fluid"
                            src="assets/frontend/images/registrationFormImages/employeeFormPictures/icon2.png"
                            alt="image"
                          />
                        </div>
                        <input
                          placeholder="Last Name"
                          type="email"
                          className="form-control custom_client_input_for_registration_page mb-3"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                        <div className="inputLogoWrapper">
                          <img
                            className="img-fluid"
                            src="assets/frontend/images/registrationFormImages/employeeFormPictures/mobile.png"
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
                            className="img-fluid"
                            src="assets/frontend/images/registrationFormImages/employeeFormPictures/Subtract.png"
                            alt="image"
                          />
                        </div>
                        <input
                          placeholder="Present Address"
                          type="email"
                          className="form-control custom_client_input_for_registration_page mb-3"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 d-flex justify-content-center align-items-center">
                        <form
                          action="#"
                          method="post"
                          encType="multipart/form-data"
                        >
                          {/* Logo Upload Button */}
                          <label className="logo-upload-btn">
                            <img
                              className="img-fluid cv_button"
                              src="assets/frontend/images/registrationFormImages/employeeFormPictures/uploadPDF.png"
                              alt="Upload PDF"
                            />
                            <input
                              type="file"
                              name="file"
                              accept=".pdf"
                              className="btn-file"
                            />
                          </label>
                        </form>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        {/* Register Button */}
                        <div className="registerButton text-center">
                          <a
                            className="btn employee_register_button"
                            href="login.html"
                          >
                            Register
                          </a>
                        </div>
                        {/* Register Button End */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Have an account Section start*/}
            <div className="accountandregisterwrapper text-center">
              <span className="donthaveaccounttext">
                Already have an account?
              </span>
              <a href>Login</a>
            </div>
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

export default ClientRegister;
