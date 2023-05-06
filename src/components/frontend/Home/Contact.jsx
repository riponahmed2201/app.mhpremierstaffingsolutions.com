import React, { useState } from "react";
import { Form } from "antd";

import { useTranslation } from "react-i18next";
import { addContactHandler } from "../../../api/contact";
import { responseNotification } from "../../../utils/notifcation";

function Contact() {
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
    <section className="contactUs">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="contactUsText text-center">
              <span className="contactUsSpan">{t("home_contact_us")}</span>
              <span className="todaySpan">{t("home_contact_us_today")}</span>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container contactUsFormContainer">
        <div className="row">
          <Form
            // className="ant-form ant-form-vertical"
            // layout="vertical"
            onFinish={onFinish}
            form={form}
          >
            <div className="col-lg-12">
              <div className="row text-center">
                <div className="col-lg-6">
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
                    <div>
                      <div className="inputLogoWrapper">
                        <img
                          className="img-fluid"
                          src="assets/frontend/images/indexImages/contactForm/Placeholder.png"
                          alt="image"
                        />
                      </div>
                      <input
                        placeholder={t("home_contact_form_name")}
                        type="text"
                        className="form-control custom_client_input"
                      />
                    </div>
                  </Form.Item>
                </div>

                <div className="col-lg-6">
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
                    <div>
                      <div className="inputLogoWrapper">
                        <img
                          className="img-fluid"
                          src="assets/frontend/images/indexImages/contactForm/Placeholder (1).png"
                          alt="image"
                        />
                      </div>
                      <input
                        placeholder={t("home_contact_form_email")}
                        type="email"
                        className="form-control custom_client_input"
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>
              <div className="row">
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
                  <div className="col-lg-12">
                    <div className="messageinputLogoWrapper">
                      <img
                        className="img-fluid"
                        src="assets/frontend/images/indexImages/contactForm/Placeholder (2).png"
                        alt="image"
                      />
                    </div>
                    <textarea
                      className="form-control contactUsMessage"
                      placeholder={t("home_contact_form_message")}
                      id="floatingTextarea2"
                      style={{ height: 100 }}
                    />
                  </div>
                </Form.Item>

                <Form.Item>
                  <div className="sendButtonWrapper text-center">
                    <button
                      disabled={loading}
                      className="btn"
                      style={{
                        width: "152px",
                        height: "40px",
                        backgroundColor: "#c6a34f",
                        color: "#ffffff",
                        fontWeight: "bold",
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
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
