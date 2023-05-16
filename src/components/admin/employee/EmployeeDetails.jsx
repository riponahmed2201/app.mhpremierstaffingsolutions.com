import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import axios from "axios";
import { Form, Select, Input, DatePicker, Space, Upload, Button } from "antd";
import ImgCrop from "antd-img-crop";
import { UploadOutlined } from "@ant-design/icons";

import moment from "moment";
import _ from "lodash";

import { token } from "../../../utils/authentication";
import { responseNotification } from "../../../utils/notifcation";
import { fetchReferPersonListForDropdownHandler } from "../../../api/employee";
import { fetchSkillListForDropdownHandler } from "../../../api/skill";
import { fetchPositionListForDropdownHandler } from "../../../api/position";
import { fetchSourceListForDropdownHandler } from "../../../api/source";
import { staticLanguageName } from "../../../utils/static/languageList";
import CountryWiseValidationRules from "../../../utils/static/countryList";
import defaultImage from "../../../assets/images/default.png";
import Loader from "../../loadar/Loader";

const { Option } = Select;

function EmployeeDetails() {
  const { id } = useParams();

  const [getSingleEmployeeDetails, setSingleEmployeeDetails] = useState([]);
  const [referPerson, setReferPerson] = useState([]);
  const [skill, setSkill] = useState([]);
  const [position, setPosition] = useState([]);
  const [sourceFrom, setSourceFrom] = useState([]);
  const [loading, setLoading] = useState(false);
  const [bankUpdateLoading, setBankUpdateLoading] = useState(false);
  const [basicInfoUpdateloading, setBasicInfoUpdateloading] = useState(false);
  const [getError, setError] = useState();
  const [getDateOfBirth, setDateOfBirth] = useState(undefined);
  const [profilePicture, setProfilePicture] = useState([]);
  const [summaryPdf, setSummaryPdf] = useState([]);
  const [summaryPdfFileShow, setSummaryPdfFileShow] = useState(undefined);

  const [form] = Form.useForm();
  const [formEdit] = Form.useForm();

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

  //Fetch refer person list for dropdown
  const fetchSingleEmployeeData = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token()}`,
          },
        }
      );

      //Employee Basic Information
      formEdit.setFieldsValue({
        firstName: res?.data?.details.firstName,
        lastName: res?.data?.details.lastName,
        email: res?.data?.details.email,
        phoneNumber: res?.data?.details.phoneNumber,
        positionId: res?.data?.details.positionId,
        gender: res?.data?.details.gender,
        presentAddress: res?.data?.details.presentAddress,
        permanentAddress: res?.data?.details.permanentAddress,
        countryName: res?.data?.details.countryName,
        higherEducation: res?.data?.details.higherEducation,
        licensesNo: res?.data?.details.licensesNo,
        emmergencyContact: res?.data?.details.emmergencyContact,
        employeeExperience: res?.data?.details.employeeExperience,
        languages: res?.data?.details.languages,
        sourceId: res?.data?.details.sourceId,
        referPersonId: res?.data?.details.referPersonId,
        hourlyRate: res?.data?.details.hourlyRate,
      });

      //bank information
      form.setFieldsValue({
        bankName: res?.data?.details.bankName,
        accountNumber: res?.data?.details.accountNumber,
        routingNumber: res?.data?.details.routingNumber,
        dressSize: res?.data?.details.dressSize,
        additionalOne: res?.data?.details.additionalOne,
        additionalTwo: res?.data?.details.additionalTwo,
      });

      setSingleEmployeeDetails(res?.data?.details);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSingleEmployeeData();
  }, [id]);

  const onFinish = async (values) => {
    const receivedEmployeeFields = {
      id: id,
      bankName: values?.bankName,
      accountNumber: values?.accountNumber,
      routingNumber: values?.routingNumber,
    };

    if (values?.dressSize) receivedEmployeeFields.dressSize = values?.dressSize;
    if (values?.additionalOne)
      receivedEmployeeFields.additionalOne = values?.additionalOne;
    if (values?.additionalTwo)
      receivedEmployeeFields.additionalTwo = values?.additionalTwo;

    try {
      if (id && receivedEmployeeFields) {
        setBankUpdateLoading(true);

        const res = await axios.put(
          `${process.env.REACT_APP_API_BASE_URL}/users/update-bank-dress`,
          receivedEmployeeFields,
          {
            headers: {
              Authorization: `Bearer ${token()}`,
            },
          }
        );

        if (res?.data?.statusCode === 200) {
          setError(undefined);
          setBankUpdateLoading(false);
          responseNotification(
            "Employee bank updated successfully!",
            "success"
          );
        } else if (res?.data?.statusCode === 400) {
          setError(res?.data?.errors?.[0].msg);
          setBankUpdateLoading(false);
        } else if (res?.data?.statusCode === 500) {
          setError(res?.message);
          setBankUpdateLoading(false);
        }
      }
    } catch (error) {
      setError(error?.response?.data?.errors?.[0].msg);
      setBankUpdateLoading(false);
    }
  };

  //Fetch refer person list for dropdown
  const fetchReferPersonData = useCallback(async () => {
    await fetchReferPersonListForDropdownHandler().then((res) => {
      setReferPerson(res?.data?.users);
    });
  }, []);

  //Fetch skill list for dropdown
  const fetchSkillData = useCallback(async () => {
    await fetchSkillListForDropdownHandler().then((res) => {
      setSkill(res?.data?.skills);
    });
  }, []);

  //Fetch position list for dropdown
  const fetchPositionData = useCallback(async () => {
    await fetchPositionListForDropdownHandler().then((res) => {
      setPosition(res?.data?.positions);
    });
  }, []);

  //Fetch source list for dropdown
  const fetchSourceFromData = useCallback(async () => {
    await fetchSourceListForDropdownHandler().then((res) => {
      setSourceFrom(res?.data?.sources);
    });
  }, []);

  useEffect(() => {
    fetchSkillData();
    fetchPositionData();
    fetchSourceFromData();
    fetchReferPersonData();
  }, []);

  const onFinishBasicInfoUpdate = async (values) => {

    const file = new FormData();
    file.append("id", id);
    file.append("firstName", values?.firstName);
    file.append("lastName", values?.lastName);
    file.append("email", values?.email);
    file.append("phoneNumber", values?.phoneNumber);
    file.append("countryName", values?.countryName);
    file.append("emmergencyContact", values?.emmergencyContact);
    file.append("gender", values?.gender);
    file.append("higherEducation", values?.higherEducation);
    file.append("permanentAddress", values?.permanentAddress);
    file.append("positionId", values?.positionId);
    file.append("presentAddress", values?.presentAddress);
    file.append("sourceId", values?.sourceId);
    file.append("hourlyRate", values?.hourlyRate);
    file.append("employeeExperience", values?.employeeExperience);

    if (getDateOfBirth) {
      file.append("dateOfBirth", getDateOfBirth);
    } else {
      file.append(
        "dateOfBirth",
        getSingleEmployeeDetails?.dateOfBirth
          ? moment(getSingleEmployeeDetails?.dateOfBirth).format("YYYY-MM-DD")
          : undefined
      );
    }

    // if (_.size(summaryPdf)) {
    //   file.append(
    //     "cv",
    //     summaryPdf[0].originFileObj || getSingleEmployeeDetails?.cv
    //   );
    // }

    if (_.size(profilePicture)) {
      file.append(
        "profilePicture",
        profilePicture[0].originFileObj ||
          getSingleEmployeeDetails?.profilePicture
      );
    }

    values?.skills.forEach((element, index) => {
      file.append(`skills[${index}]`, element);
    });

    if (values?.referPersonId) {
      file.append("referPersonId", values?.referPersonId);
    }

    try {
      if (id && file) {
        setBasicInfoUpdateloading(true);

        const res = await axios.put(
          `${process.env.REACT_APP_API_BASE_URL}/users/update-employee`,
          file,
          {
            headers: {
              Authorization: `Bearer ${token()}`,
            },
          }
        );

        if (res?.data?.statusCode === 200) {
          setError(undefined);
          setBasicInfoUpdateloading(false);
          responseNotification(
            "Employee information updated successfully!",
            "success"
          );
          window.location.reload();
          
        } else if (res?.data?.statusCode === 400) {
          setError(res?.data?.errors?.[0].msg);
          setBasicInfoUpdateloading(false);
        } else if (res?.data?.statusCode === 500) {
          setError(res?.message);
          setBasicInfoUpdateloading(false);
        }
      }
    } catch (error) {
      setError(error?.response?.data?.errors?.[0].msg);
      setBasicInfoUpdateloading(false);
    }
  };

  //CV onchange
  const summaryPdfChange = ({ fileList: newFileList }) => {
    setSummaryPdf(newFileList);
    setSummaryPdfFileShow(newFileList[0]?.originFileObj?.name);
  };

  const onProfileChange = ({ fileList: newFileList }) => {
    setProfilePicture(newFileList);
  };

  useEffect(() => {
    setProfilePicture([
      {
        uid: "2",
        name: "image.png",
        status: "done",
        url: `${process.env.REACT_APP_ASSETs_BASE_URL}/${getSingleEmployeeDetails?.profilePicture}`,
      },
    ]);
  }, [getSingleEmployeeDetails]);

  console.log(
    "getSingleEmployeeDetails?.dateOfBirth: ",
    getSingleEmployeeDetails?.dateOfBirth
      ? moment(getSingleEmployeeDetails?.dateOfBirth)
      : undefined
  );

  return (
    <div className="container-fluid px-4">
      <div className="row mt-4">
        <div className="d-flex justify-content-between">
          <h3 className="mb-4 title">Employee Information</h3>
        </div>
      </div>
      <div className="card">
        <div className="card-header">
          <div className="d-flex justify-content-between">
            <h5>Edit Employee Information</h5>
            <Link
              to={`/admin/view-certificate/${id}`}
              style={{ background: "#C6A34F", color: "white" }}
              className="btn btn-sm"
            >
              View Certificate
            </Link>
          </div>
        </div>

        {loading ? (
          <div className="card-body">
            <Loader /> <br />
            <br />
            <br />
          </div>
        ) : (
          <div className="card-body">
            <Form
              className="ant-form ant-form-vertical"
              layout="vertical"
              onFinish={onFinishBasicInfoUpdate}
              form={formEdit}
            >
              <div className="col-12">
                <div className="row">
                  <div className="col-md-4">
                    <Form.Item
                      label="First Name"
                      name="firstName"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter first name",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter first name"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Last Name"
                      name="lastName"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter last name",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter last name"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Email"
                      name="email"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter email",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter email"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Phone number"
                      name="phoneNumber"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter phone number",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter phone number"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Position"
                      name="positionId"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter position",
                        },
                      ]}
                    >
                      <Select
                        showSearch={true}
                        placeholder="Please Select position"
                        optionFilterProp="children"
                      >
                        {position?.map((item, index) => (
                          <Option key={index} value={item?._id}>
                            {item?.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Gender"
                      name="gender"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter gender",
                        },
                      ]}
                    >
                      <Select
                        showSearch={true}
                        placeholder="Please Select Gender"
                        optionFilterProp="children"
                      >
                        <Option value="MALE">MALE</Option>
                        <Option value="FEMALE">FEMALE</Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Date Of Birth"
                      name="dateOfBirth"
                      hasFeedback
                      rules={[
                        {
                          // required: true,
                          message: "Please enter date of birth",
                        },
                      ]}
                    >
                      <Space
                        direction="vertical"
                        style={{
                          width: "100%",
                        }}
                      >
                        <DatePicker
                          id="dateOfBirth"
                          placeholder="Date of Birth"
                          style={{ width: "100% !important" }}
                          className="w-100"
                          defaultValue={
                            getSingleEmployeeDetails?.dateOfBirth
                              ? moment(getSingleEmployeeDetails?.dateOfBirth)
                              : undefined
                          }
                          onChange={(value, dateOfBirthString) => {
                            setDateOfBirth(
                              moment(dateOfBirthString)
                                .format("YYYY-MM-DD")
                                .valueOf()
                            );

                            // console.log(
                            //   "test: ",
                            //   moment(dateOfBirthString).format("YYYY-MM-DD")
                            // );
                          }}
                        />
                      </Space>
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Present Address"
                      name="presentAddress"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter present address",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter present address"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Permanent Address"
                      name="permanentAddress"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter your permanent address",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter your permanent address"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Country Name"
                      name="countryName"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter country name",
                        },
                      ]}
                    >
                      <Select
                        showSearch={true}
                        placeholder="Please Select Country Name"
                        optionFilterProp="children"
                      >
                        {CountryWiseValidationRules?.map((item, index) => (
                          <Option key={index} value={item?.name}>
                            {item?.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Higher Education"
                      name="higherEducation"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter higher education",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter higher education"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Licenses No"
                      name="licensesNo"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter licenses no",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter licenses no"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Emergency Contact"
                      name="emmergencyContact"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter Emergency contact",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter Emergency contact"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Employee Experience"
                      name="employeeExperience"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter employee experience",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter employee experience"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Per hour rate($ or £)"
                      name="hourlyRate"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter per hour rate",
                        },
                      ]}
                    >
                      <Input
                        placeholder="Enter per hour rate"
                        className="ant-input ant-input-lg"
                      />
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Languages"
                      name="languages"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter languages",
                        },
                      ]}
                    >
                      <Select
                        mode="multiple"
                        showSearch={true}
                        placeholder="Please Select languages"
                        optionFilterProp="children"
                      >
                        {staticLanguageName?.map((item, index) => (
                          <Option key={index} value={item?.name}>
                            {item?.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Skills"
                      name="skills"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter skills",
                        },
                      ]}
                      initialValue={getSingleEmployeeDetails?.skills?.map(
                        (item) => item.skillId
                      )}
                    >
                      <Select
                        mode="multiple"
                        showSearch={true}
                        placeholder="Please Select Skill"
                        optionFilterProp="children"
                      >
                        {skill?.map((skillName, index) => (
                          <Option key={index} value={skillName?._id}>
                            {skillName?.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="How You Know About Us?"
                      name="sourceId"
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: "Please enter how you know about us",
                        },
                      ]}
                    >
                      <Select
                        showSearch={true}
                        placeholder="Please Select"
                        optionFilterProp="children"
                      >
                        {sourceFrom?.map((item, index) => (
                          <Option key={index} value={item?._id}>
                            {item?.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      label="Refer Person name"
                      name="referPersonId"
                      hasFeedback
                    >
                      <Select
                        showSearch={true}
                        placeholder="Please Select Refer Person"
                        optionFilterProp="children"
                      >
                        {referPerson?.map((refer, index) => (
                          <Option key={index} value={refer?._id}>
                            {refer?.name}
                          </Option>
                        ))}
                      </Select>
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item name="profilePicture" label="Profile Picture">
                      <div>
                        {/* <ImgCrop rotate aspect={2 / 1}> */}
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
                                style={{ height: "60px", width: "60px" }}
                                src={defaultImage}
                                alt="Default Image"
                              />
                            </>
                          )}
                        </Upload>
                        <p style={{ color: "gray" }}>
                          Image must passport size with white backgound
                        </p>
                        {/* </ImgCrop> */}
                      </div>
                    </Form.Item>
                  </div>

                  <div className="col-md-4">
                    <Form.Item
                      name="summaryPdf"
                      className="p-1 m-0"
                      label="Curriculam Vitea (CV)"
                      rules={[
                        {
                          // required: true,
                          message: "Please enter curriculam vitea (CV)",
                        },
                      ]}
                    >
                      <div>
                        <Upload
                          listType="picture"
                          defaultFileList={[...summaryPdf]}
                          fileList={summaryPdf}
                          onChange={summaryPdfChange}
                          maxCount={1}
                          accept=".pdf, .PDF, docs, DOCS, .doc, .DOC, .docx"
                        >
                          <Button icon={<UploadOutlined />}>
                            {!summaryPdfFileShow ? "Upload" : "Uploaded"}{" "}
                          </Button>
                        </Upload>

                        <div className="mt-3">
                          <a
                            target="_blank"
                            href={
                              `${process.env.REACT_APP_ASSETs_BASE_URL}/` +
                              getSingleEmployeeDetails?.cv
                            }
                          >
                            Download
                          </a>
                        </div>
                      </div>
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

              <div className="col-md-4">
                <Form.Item>
                  <button
                    disabled={basicInfoUpdateloading}
                    className="btn"
                    style={{ background: "#C6A34F", color: "white" }}
                    type="submit"
                  >
                    {!basicInfoUpdateloading && "Update"}
                    {basicInfoUpdateloading && (
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
        )}
      </div>
      <br />

      <div className="card">
        <div className="card-header">Bank and Dress Information</div>
        <div className="card-body">
          {loading ? (
            <div className="card-body">
              <Loader /> <br />
              <br />
              <br />
            </div>
          ) : (
            <div>
              <Form
                className="ant-form ant-form-vertical"
                layout="vertical"
                onFinish={onFinish}
                form={form}
              >
                <div className="col-12">
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Item
                        label="Bank Name"
                        name="bankName"
                        hasFeedback
                        initialValue={getSingleEmployeeDetails?.name}
                        rules={[
                          {
                            required: true,
                            message: "Please enter bank name",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter bank name"
                          className="ant-input ant-input-lg"
                        />
                      </Form.Item>
                    </div>

                    <div className="col-md-4">
                      <Form.Item
                        label="Account Number"
                        name="accountNumber"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: "Please enter account number",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter bank account number"
                          className="ant-input ant-input-lg"
                        />
                      </Form.Item>
                    </div>

                    <div className="col-md-4">
                      <Form.Item
                        label="Routing Number"
                        name="routingNumber"
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: "Please enter routing number",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter routing number"
                          className="ant-input ant-input-lg"
                        />
                      </Form.Item>
                    </div>
                    <div className="col-md-4">
                      <Form.Item
                        label="Dress Size"
                        name="dressSize"
                        hasFeedback
                        rules={[
                          {
                            message: "Please enter dress size",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter dress size"
                          className="ant-input ant-input-lg"
                        />
                      </Form.Item>
                    </div>

                    <div className="col-md-4">
                      <Form.Item
                        label="Additional One"
                        name="additionalOne"
                        hasFeedback
                        rules={[
                          {
                            message: "Please enter additional one",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter additional one"
                          className="ant-input ant-input-lg"
                        />
                      </Form.Item>
                    </div>

                    <div className="col-md-4">
                      <Form.Item
                        label="Additional Two"
                        name="additionalTwo"
                        hasFeedback
                        rules={[
                          {
                            message: "Please enter additional two",
                          },
                        ]}
                      >
                        <Input
                          placeholder="Enter additional two"
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
                      disabled={bankUpdateLoading}
                      className="btn"
                      style={{ background: "#C6A34F", color: "white" }}
                      type="submit"
                    >
                      {!bankUpdateLoading && "Update Bank"}
                      {bankUpdateLoading && (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
