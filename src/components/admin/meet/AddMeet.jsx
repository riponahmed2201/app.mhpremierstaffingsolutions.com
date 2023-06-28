import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { token } from "../../../utils/authentication";
import { BsFillEyeFill , BsFillEyeSlashFill } from "react-icons/bs";  
const AddMeet = () => {
  const initialValues = {
    meetLink: "",
    startTime: "",
    endTime: "",
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (values) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_BASE_URL}/meet/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify({
          ...values,
          userEmail: values.email,
          password: values.password,
        }),
      }
    );
    if (response.status === 200) {
      toast.success("Meet added successfully");
      // reset the form
      values.meetLink = "";
      values.startTime = "";
      values.endTime = "";
      values.email = "";
      values.password = "";
    }

    console.log(values);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-50 mx-auto">
      <h1 className="mb-4">Set Meet</h1>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-3">
            <label htmlFor="meetLink" className="form-label">
              Meet Link
            </label>
            <Field
              type="text"
              name="meetLink"
              className="form-control"
              placeholder="Enter meet link"
            />
            <a style={{
              textDecoration: "none",
              fontSize: "0.8rem",
            }} href="https://meet.new" target="_blank" without rel="noreferrer">
              Click here to generate a new meet link
            </a>
          </div>
          <div className="mb-3">
            <label htmlFor="startTime" className="form-label">
              Start Time
            </label>
            <Field
              type="datetime-local"
              name="startTime"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="endTime" className="form-label">
              End Time
            </label>
            <Field
              type="datetime-local"
              name="endTime"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <Field
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="input-group">
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                className="form-control"
                placeholder="Enter password"
              />
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <BsFillEyeSlashFill/> : <BsFillEyeFill />}
              </button>
            </div>
          </div>
          <Button type="submit" variant="primary">
            Set Meet
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddMeet;
