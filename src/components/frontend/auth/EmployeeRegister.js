import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Form, Select, Input, Upload, Button } from 'antd';
import ImgCrop from "antd-img-crop";
import { UploadOutlined } from '@ant-design/icons';

import { responseNotification } from '../../../utils/notifcation';
import { fetchPositionListForDropdownHandler } from '../../../api/position';
import CountryWiseValidationRules from '../../../utils/static/countryList';
import { employeeRegisterHandler } from '../../../api/employee';
import defaultImage from '../../../assets/images/default.png';

import './Register.css';

const { Option } = Select;

function EmployeeRegister() {

    const [position, setPosition] = useState([]);

    const [profilePicture, setProfilePicture] = useState([]);
    const [summaryPdf, setSummaryPdf] = useState([]);
    const [summaryPdfFileShow, setSummaryPdfFileShow] = useState(undefined);

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

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

            if (summaryPdf?.[0].originFileObj) file.append("cv", summaryPdf?.[0].originFileObj);
            if (profilePicture?.[0].originFileObj) file.append("profilePicture", profilePicture?.[0].originFileObj);

            await employeeRegisterHandler(file)
                .then((res) => res.json())
                .then((res) => {
                    if (res.statusCode === 201) {
                        responseNotification("Employee registered successfully!", "success");
                        // form.resetFields();
                        setSummaryPdf([]);

                        navigate('/employee-welcome');

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
            <div className='col-md-6 col-sm-12' style={{ background: "#343a40", height: '100vh' }}>
                <div style={{ padding: "20px 30px", marginTop: '190px' }}>
                    <br />
                    <br />
                    <h4 className='class="mt-40 text-center mb-25' style={{ color: "#c6a34f" }}>WELCOME TO MH PREMIER STAFFING SOLUTIONS</h4>
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
                                    <li className="nav-item">
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
                                        <Form.Item name="profilePicture" label="Profile Picture">
                                            <p style={{ color: 'gray' }}>Image must passport size with white backgound</p>
                                            <ImgCrop rotate aspect={2 / 1}>
                                                <Upload
                                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                    listType="picture-card"
                                                    fileList={profilePicture}
                                                    onChange={onProfileChange}
                                                    onPreview={onPreview}
                                                >
                                                    {profilePicture?.length < 1 && (<><img style={{ height: '60px', width: '60px' }} src={defaultImage} alt="Default Image" /></>)}
                                                </Upload>
                                            </ImgCrop>
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item name="summaryPdf" className="p-1 m-0" label="Curriculam Vitea (CV)">
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

                            <br />
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