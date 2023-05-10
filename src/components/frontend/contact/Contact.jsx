import React, { useState } from "react";
import { Form } from "antd";

import { FiPhoneOutgoing } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { MdPlace } from "react-icons/md";
import { useTranslation } from "react-i18next";

import { addContactHandler } from "../../../api/contact";
import { responseNotification } from "../../../utils/notifcation";

const Contact = () => {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const name = values?.name;
    const email = values?.email;
    const message = values?.message;

    const addContactFields = { name, email, message };

    if (addContactFields) {
      setLoading(true);
      addContactHandler(addContactFields)
        .then((res) => res.json())
        .then((res) => {
          if (res?.statusCode === 201) {
            setError(undefined);
            setLoading(false);
            responseNotification(
              "Contact information received successfully!",
              "success"
            );
            form.resetFields();
          } else if (res?.statusCode === 400) {
            setError(res?.errors?.[0].msg);
            setLoading(false);
          } else if (res?.statusCode === 500) {
            setError(res?.message);
            setLoading(false);
          }
        });
    }
  };

  return (
    <div style={{ backgroundColor: "white" }}>
      <div
        className="banner-header section-padding valign bg-img bg-fixed img-fluid "
        style={{
          backgroundImage: `url('assets/frontend/images/contact/contact.png')`,
          minHeight: "400px",
          width: "100%",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundColor: "white",
        }}
      >
        <div className="container">
          <div className="row">
            <div
              className="col-md-12  caption align-middle"
              style={{ marginTop: "150px" }}
            >
              <h5 style={{ color: "white", fontSize: "18px" }}>
                MH PREMIER STAFFING SOLUTIONS
              </h5>
              <h1 style={{ color: "white", fontSize: "70px" }}>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container " style={{ marginTop: "60px" }}>
        <div className="row justify-content-end">
          <div className="col-12 col-md-6 col-lg-6 ">
            <div className="about_us_section_title">MH</div>
            <div className="about_us_section_sub_title">
              <strong>PREMIER STAFFING SOLUTIONS</strong>
            </div>
            <br />
            <h5 className="about_us_section_paragraph">
              MH is a premium staffing solution with years of hospitality
              industry experience. we understand the challenges our clients have
              in recruiting competent and experienced staff.
            </h5>

            <div className="d-flex mt-4">
              <FiPhoneOutgoing
                style={{
                  fontSize: "45px",
                  color: "#8e6d45",
                  marginTop: "15px",
                }}
              />
              <div className="mx-5">
                <p>Reservation</p>
                <h5 style={{ fontSize: "20px", color: "#8e6d45" }}>
                  +44 075 001 46699
                </h5>
              </div>
            </div>
            <div className="d-flex mt-4">
              <TfiEmail
                style={{
                  fontSize: "45px",
                  color: "#8e6d45",
                  marginTop: "15px",
                }}
              />
              <div className="mx-5">
                <p>Email Info</p>
                <h5 style={{ fontSize: "15px", color: "#8e6d45" }}>
                  info@mhpremierstaffingsolutions.com
                </h5>
              </div>
            </div>

            <div className="d-flex mt-4">
              <MdPlace
                style={{
                  fontSize: "45px",
                  color: "#8e6d45",
                  marginTop: "15px",
                }}
              />
              <div className="mx-5">
                <p>Address</p>
                <h5 style={{ fontSize: "15px", color: "#8e6d45" }}>
                  48 Warwick St Regent Street W1B 5AW London
                </h5>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-5">
            <h3 className="mb-3">Get in touch</h3>
            <Form
              className="ant-form ant-form-vertical"
              layout="vertical"
              onFinish={onFinish}
              form={form}
            >
              <div className="row">
                <div className="col-12 col-md-6 col-lg-6  form-group">
                  <Form.Item
                    name="name"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter name",
                      },
                    ]}
                  >
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter name"
                      required=""
                      className="form-control"
                      style={{ outline: "none" }}
                    />
                  </Form.Item>
                </div>
                <div className="col-12 col-md-6 col-lg-6 form-group">
                  <Form.Item
                    name="email"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter email",
                      },
                    ]}
                  >
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter email"
                      required=""
                      className="form-control"
                      style={{ outline: "none" }}
                    />
                  </Form.Item>
                </div>

                <div className="col-12 col-md-12 col-lg-12 form-group">
                  <Form.Item
                    name="message"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter message",
                      },
                    ]}
                  >
                    <textarea
                      style={{ height: 100 }}
                      placeholder="Enter message"
                      className="form-control"
                    />
                  </Form.Item>
                </div>
                <div className="col-md-12">
                  <button
                    disabled={loading}
                    className="btn"
                    style={{
                      width: "152px",
                      height: "40px",
                      backgroundColor: "#c6a34f",
                      color: "#ffffff",
                      fontWeight: "bold",
                      marginBottom: "50px",
                    }}
                    type="submit"
                  >
                    {!loading && (
                      <div> {t("home_contact_form_send_button")}</div>
                    )}
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
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="100%"
              height="500px"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=48 Warwick St Regent Street W1B 5AW London&t=&z=14&ie=UTF8&iwloc=&output=embed"
              // frameborder="0"
              // scrolling="no"
              // marginheight="0"
              // marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
