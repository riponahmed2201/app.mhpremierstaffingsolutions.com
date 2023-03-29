import React, { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Form, Select, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { responseNotification } from '../../../utils/notifcation';
import { fetchPositionListForDropdownHandler } from '../../../api/position';
import CountryWiseValidationRules from '../../../utils/static/countryList';

const { Option } = Select;

function EmployeeRegister() {

    const [position, setPosition] = useState([]);

    const [summaryPdf, setSummaryPdf] = useState([]);
    const [summaryPdfFileShow, setSummaryPdfFileShow] = useState(undefined);

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const [form] = Form.useForm();

    const navigate = useNavigate();

    const onFinish = async (values) => {

        if (true) {
            try {

                setLoading(true);

                const file = new FormData();

                file.append("firstName", values?.firstName);
                file.append("lastName", values?.lastName);
                file.append("email", values?.email);
                file.append("phoneNumber", values?.phoneNumber);
                file.append("countryName", values?.countryName);
                file.append("positionId", values?.positionId);
                file.append("cv", summaryPdf?.[0].originFileObj);
                console.log("file: ", file);
                const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/employee-register`, file);

                if (res?.data?.statusCode === 201) {
                    setError(undefined);
                    setLoading(false);
                    responseNotification("Employee registered successfully!", "success");
                    // form.resetFields();
                    setSummaryPdf([]);
                    navigate(`/`);

                } else if (res?.data?.statusCode === 400) {

                    responseNotification(
                        "Bad request please upload valid file or check you internet",
                        "warning"
                    );
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
        }
    };

    //Fetch position list for dropdown
    const fetchPositionData = useCallback(async () => {
        await fetchPositionListForDropdownHandler().then((res) => {
            setPosition(res?.data?.positions);
        });
    }, []);

    useEffect(() => {
        fetchPositionData();
    }, []);

    //CV onchange
    const summaryPdfChange = ({ fileList: newFileList }) => {
        setSummaryPdf(newFileList);
        setSummaryPdfFileShow(newFileList[0]?.originFileObj?.name);
    };

    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12' style={{ background: "#000000", height: '100vh' }}>
                <div style={{ padding: "20px 30px", marginTop: '190px' }}>
                    <br />
                    <br />
                    <h4 className='class="mt-40 text-center mb-25 text-white'>WELCOME TO MH PREMIER STAFFING SOLUTIONS</h4>
                    <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center' }}>
                        <img style={{ width: 'auto', height: 'auto', objectFit: "cover" }} src='logo.png' alt='img' />
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-sm-12' style={{ background: "#ffffff" }}>
                <div className='bg-white'>
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/client-register">Client Register</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/employee-register">Employee Register</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <br />

                        <h4 className='text-left mb-4'>Employee Register Here</h4>

                        <Form
                            className="ant-form ant-form-vertical"
                            layout="vertical"
                            onFinish={onFinish}
                            form={form}
                        >
                            <div className='col-12'>
                                <div className='row'>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="First Name"
                                            name="firstName"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter first name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter fisrt name" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Last Name"
                                            name="lastName"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter last name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter fisrt name" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Email"
                                            name="email"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter email',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter email" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Phone number"
                                            name="phoneNumber"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter phone number',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter phone number" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Job Type"
                                            name="positionId"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter job type',
                                                },
                                            ]}
                                        >
                                            <Select
                                                showSearch={true}
                                                placeholder="Please Select job type"
                                                optionFilterProp="children"
                                            >
                                                {position?.map((item, index) => (
                                                    <Option key={index} value={item?._id}>{item?.name}</Option>
                                                ))}

                                            </Select>
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Your Location"
                                            name="countryName"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter your location',
                                                },
                                            ]}
                                        >
                                            <Select
                                                showSearch={true}
                                                placeholder="Please Select Location"
                                                optionFilterProp="children"
                                            >
                                                {CountryWiseValidationRules?.map((item, index) => (
                                                    <Option key={index} value={item?.name}>{item?.name}</Option>
                                                ))}

                                            </Select>
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item name="summaryPdf"
                                            className="p-1 m-0"
                                            label="Curriculam Vitea (CV)"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter country name',
                                                },
                                            ]}
                                        >
                                            <Upload
                                                listType="picture"
                                                defaultFileList={[...summaryPdf]}
                                                fileList={summaryPdf}
                                                onChange={summaryPdfChange}
                                                maxCount={1}
                                                accept=".pdf, .PDF, docs, DOCS, .doc, .DOC, .docx"
                                            >
                                                <Button icon={<UploadOutlined />}>
                                                    {" "}
                                                    {!summaryPdfFileShow ? "Upload" : "Uploaded"}{" "}
                                                </Button>
                                            </Upload>

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

                            <br />
                            <div className="col-md-6">
                                <Form.Item>
                                    <button
                                        disabled={loading}
                                        className="btn"
                                        style={{ background: '#C6A34F', color: 'white' }}
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
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeRegister