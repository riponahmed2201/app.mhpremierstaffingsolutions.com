import React, { useState } from "react";
import { Form, Input } from "antd";

import { jwtTokenDecode } from "../../utils/jwtDecode";
import { responseNotification } from "../../utils/notifcation";
import { updatePasswordHandler } from "../../api/auth";

function ChangePassword() {
  const jwtdecode = jwtTokenDecode();

  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const id = jwtdecode._id;

    if (id) {
      const updatePasswordReceivedFields = {
        id: values?.id,
        newPassword: values?.newPassword,
        currentPassword: values?.currentPassword,
      };

      if (updatePasswordReceivedFields) {
        setLoading(true);
        updatePasswordHandler(updatePasswordReceivedFields)
          .then((res) => res.json())
          .then((res) => {
            if (res?.statusCode === 201) {
              setError(undefined);
              setLoading(false);
              responseNotification("Password updated successfully!", "success");
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
    }
  };

  return (
    <div className="container-fluid px-4">
      <div className="row mt-4">
        <div className="d-flex justify-content-between">
          <h3 className="mb-4 title">Change Password</h3>
        </div>
      </div>
      <div className="card">
        <div className="card-header">Change Password</div>
        <div className="card-body">
          <Form
            className="ant-form ant-form-vertical"
            layout="vertical"
            onFinish={onFinish}
            form={form}
          >
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <Form.Item
                    label="Current Password"
                    name="currentPassword"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter current password",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter current password"
                      className="ant-input ant-input-lg"
                      visibilityToggle={{
                        visible: passwordVisible,
                        onVisibleChange: setPasswordVisible,
                      }}
                    />
                  </Form.Item>
                </div>

                <div className="col-md-6">
                  <Form.Item
                    label="New Password"
                    name="newPassword"
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: "Please enter new password",
                      },
                    ]}
                  >
                    <Input.Password
                      placeholder="Enter new password"
                      className="ant-input ant-input-lg"
                      visibilityToggle={{
                        visible: passwordVisible,
                        onVisibleChange: setPasswordVisible,
                      }}
                    />
                  </Form.Item>
                </div>

                {getError ? (
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="error-message">
                        <p className="error-text-color text-danger">
                          {getError}
                        </p>
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
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
