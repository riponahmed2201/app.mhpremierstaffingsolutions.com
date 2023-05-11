import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { Form } from "antd";
import { responseNotification } from "../../../utils/notifcation";
import { loginHandler } from "../../../api/auth";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    const receivedLoginFields = {
      email: values?.email,
      password: values?.password,
    };

    if (receivedLoginFields) {
      setLoading(true);

      await loginHandler(receivedLoginFields)
        .then((res) => res.json())
        .then((res) => {
          if (res.statusCode === 200) {
            responseNotification(res?.message, "success");
            form.resetFields();

            localStorage.setItem("accessToken", res?.token);

            const jwtDecode = jwt_decode(res?.token);

            if (
              jwtDecode &&
              (jwtDecode.admin || jwtDecode.hr || jwtDecode.isMhEmployee)
            ) {
              navigate("/admin/dashboard");
              setLoading(false);
            } else if (jwtDecode && jwtDecode.client) {
              navigate("/client-dashboard");
              setLoading(false);
            } else if (jwtDecode && jwtDecode.employee) {
              navigate("/employee-profile");
              setLoading(false);
            } else {
              navigate("/login");
              setLoading(false);
            }
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
        <div className="row">
          {/*leftpart start*/}
          <div className="col-lg-6 col-md-6 Login_Page_left_part">
            <div className="col-lg-12">
              <div className="button_wrapper">
                <Link to="/">
                  <img
                    src="assets/frontend/images/login_page_images/Group 685.png"
                    className="img-fluid"
                    alt="iamge"
                  />
                </Link>
              </div>
            </div>
            <div className="row left_part_wrapper">
              <div className="logo_wrapper text-center">
                <img
                  className="img-fluid"
                  src="assets/frontend/images/login_page_images/Logo.png"
                  alt="iamge"
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
          <div className="col-lg-6 col-md-6 Login_page_right_part">
            <div className="container custom_for_320">
              <div className="row right_part_wrapper ">
                <div className="first_eclips_img">
                  <img
                    className="img-fluid"
                    src="assets/frontend/images/login_page_images/Ellipse 70.png"
                    alt="iamge"
                  />
                </div>
                {/* Form part start */}
                <div className="form_part ">
                  <div className="card custom_card " style={{ width: "88%" }}>
                    <div className="card-body card-body_custom">
                      <h5 className="card-title-custom text-center">
                        Welcome back!
                      </h5>
                      <div className="form_wrapper">
                        <Form
                          className="ant-form ant-form-vertical"
                          layout="vertical"
                          onFinish={onFinish}
                          form={form}
                        >
                          <div className="mb-3">
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
                                {/* <label htmlFor="exampleInputEmail1" className="form-label user_name_label">User Name/ID</label> */}
                                <div className="contact_logo_img">
                                  <img
                                    src="assets/frontend/images/login_page_images/Profile.png"
                                    className="img-fluid "
                                    alt="iamge"
                                  />
                                </div>
                                <input
                                  placeholder="Enter email"
                                  type="email"
                                  className="form-control form-control-custom"
                                  id="exampleInputEmail1"
                                  aria-describedby="emailHelp"
                                />
                              </div>
                            </Form.Item>
                          </div>

                          <div className="mb-3">
                            <Form.Item
                              name="password"
                              hasFeedback
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter your password",
                                },
                              ]}
                            >
                              <div>
                                <div className="password_logo_img">
                                  <img
                                    src="assets/frontend/images/login_page_images/Icon.png"
                                    className="img-fluid password_logo"
                                    alt="iamge"
                                  />
                                </div>
                                <input
                                  placeholder="Enter password"
                                  type="password"
                                  className="form-control form-control-custom"
                                />
                              </div>
                            </Form.Item>
                          </div>

                          <div className="mb-3 form-check">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="exampleCheck1"
                            />
                            <div className="save_forget_pass_wrapper d-flex justify-content-between">
                              <label
                                className="form-check-label check_me_out_custom"
                                htmlFor="exampleCheck1"
                              >
                                Save Password
                              </label>
                              <label
                                className="form-check-label "
                                htmlFor="exampleCheck1"
                              >
                                <a className="forget_password_custom" href>
                                  Forget Password
                                </a>
                              </label>
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

                          {/* <button type="submit" className="btn login_button">Login</button> */}

                          <Form.Item>
                            <button
                              disabled={loading}
                              className="btn login_button"
                              type="submit"
                            >
                              {!loading && "Login"}
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
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Register Section start*/}
                <div className="accountandregisterwrapper text-center">
                  <span className="donthaveaccounttext">
                    Don’t have an account?
                  </span>
                  <Link to="/client-register">Register</Link>
                </div>
                {/* Register Section end*/}
                {/* Form part end */}
                {/* last eclips image start */}
                <div className="last_eclips_img_wrapper">
                  <img
                    src="assets/frontend/images/login_page_images/Ellipse 69.png"
                    alt="iamge"
                  />
                </div>
                {/* last eclips image end*/}
              </div>
            </div>
          </div>
        </div>
        {/*Right Part End*/}
      </div>
    </section>
  );
}

export default Login;
