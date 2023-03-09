import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Form, Select, Input, DatePicker, Space } from 'antd';

import moment from "moment";

import { addHandler } from '../../../api/employee';
import { responseNotification } from '../../../utils/notifcation';

const { Option } = Select;

function EmployeeRegister() {

    const [referPerson, setReferPerson] = useState([]);
    const [skill, setSkill] = useState([]);
    const [position, setPosition] = useState([]);
    const [sourceFrom, setSourceFrom] = useState([]);

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const navigate = useNavigate();

    const [form] = Form.useForm();

    const onFinish = async (values) => {

        const receivedEmployeeFields = {
            name: values?.name,
            email: values?.email,
            phoneNumber: values?.phoneNumber,
            countryName: values?.countryName,
            dateOfBirth: "2023-09-03",
            emmergencyContact: values?.emmergencyContact,
            gender: values?.gender,
            higherEducation: values?.higherEducation,
            languages: values?.languages,
            licensesNo: values?.licensesNo,
            permanentAddress: values?.permanentAddress,
            positionId: values?.positionId,
            presentAddress: values?.presentAddress,
            referPersonId: values?.referPersonId,
            skills: values?.skills,
            sourceId: values?.sourceId,
            employeeExperience: Number(values?.employeeExperience)

            // values.dateOfBirth
        };

        try {
            setLoading(true);
            const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/employee-register`, receivedEmployeeFields);
            // const res = await axios.post(`http://localhost:8000/api/v1/users/employee-register`, receivedEmployeeFields);
            console.log("res: ", res);
            if (res?.data?.statusCode === 201) {
                setError(undefined);
                setLoading(false);
                responseNotification("Employee registered successfully!", "success");
                form.resetFields();
            } else if (res?.data?.statusCode === 400) {
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
    };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/list?isReferPerson=YES`);
            setReferPerson(response?.data?.users);
        };

        fetchData();
    }, []);


    useEffect(() => {
        const fetchSkillData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/skills//list-for-dropdown`);
            setSkill(response?.data?.skills);
        };

        fetchSkillData();
    }, []);

    useEffect(() => {
        const fetchPositionData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/positions/list-for-dropdown`);
            setPosition(response?.data?.positions);
        };

        fetchPositionData();
    }, []);

    useEffect(() => {
        const fetchSourceFromData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/sources/list-for-dropdown`);
            setSourceFrom(response?.data?.sources);
        };

        fetchSourceFromData();
    }, []);


    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12' style={{ background: "#f7f7fc" }}>
                <div style={{ padding: "20px 30px" }}>
                    <br />
                    <br />
                    <h2 className='class="mt-40 text-center mb-25'>WELCOME TO MH PREMIER STAFFING SOLUTIONS</h2>
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
                                        <Link className="nav-link" to="/client-register">Client Register</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/employee-register">Employee Register</Link>
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
                        >
                            <div className='col-12'>
                                <div className='row'>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Name"
                                            name="name"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter name" className="ant-input ant-input-lg" />
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
                                            label="Position"
                                            name="positionId"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter position',
                                                },
                                            ]}
                                        >
                                            <Select
                                                showSearch={true}
                                                placeholder="Please Select position"
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
                                            label="Gender"
                                            name="gender"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter gender',
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

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Date Of Birth"
                                            name="dateOfBirth"
                                        // rules={[
                                        //     {
                                        //         required: true,
                                        //         message: 'Please enter date of birth',
                                        //     },
                                        // ]}
                                        >
                                            <Space direction="vertical" style={{
                                                width: '100%',
                                            }}>

                                                <DatePicker
                                                    style={{ width: '100%' }}
                                                    disabledDate={(current) => {
                                                        let customDate = moment().format("YYYY-MM-DD");
                                                        return (
                                                            current &&
                                                            current < moment(customDate, "YYYY-MM-DD")
                                                        );
                                                    }}
                                                />

                                            </Space>
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Present Address"
                                            name="presentAddress"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter present address',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter present address" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Permanent Address"
                                            name="permanentAddress"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter your permanent address',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter your permanent address" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Country Name"
                                            name="countryName"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter country name',
                                                },
                                            ]}
                                        >
                                            <Select
                                                showSearch={true}
                                                placeholder="Please Select Country Name"
                                                optionFilterProp="children"
                                            >
                                                <Option value="BANGLADESH">BANGLADESH</Option>
                                                <Option value="INDIA">INDIA</Option>
                                            </Select>
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Higher Education"
                                            name="higherEducation"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter higher education',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter higher education" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Licenses No"
                                            name="licensesNo"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter licenses no',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter licenses no" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Emmergency Contact"
                                            name="emmergencyContact"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter emmergency contact',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter emmergency contact" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Employee Experience"
                                            name="employeeExperience"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter employee experience',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter employee experience" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Languages"
                                            name="languages"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter languages',
                                                },
                                            ]}
                                        >
                                            <Select
                                                mode="multiple"
                                                showSearch={true}
                                                placeholder="Please Select languages"
                                                optionFilterProp="children"
                                            >

                                                <Option value="ENGLISH">ENGLISH</Option>
                                                <Option value="BANGLA">BANGLA</Option>
                                                <Option value="HINDI">HINDI</Option>

                                            </Select>
                                        </Form.Item>

                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Skills"
                                            name="skills"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter skills',
                                                },
                                            ]}
                                        >
                                            <Select
                                                mode="multiple"
                                                showSearch={true}
                                                placeholder="Please Select Skill"
                                                optionFilterProp="children"
                                            >
                                                {skill?.map((skillName, index) => (
                                                    <Option key={index} value={skillName?._id}>{skillName?.name}</Option>
                                                ))}
                                            </Select>
                                        </Form.Item>

                                    </div>

                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Source name"
                                            name="sourceId"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter source name',
                                                },
                                            ]}
                                        >

                                            <Select
                                                showSearch={true}
                                                placeholder="Please Select Source"
                                                optionFilterProp="children"
                                            >

                                                {sourceFrom?.map((item, index) => (
                                                    <Option key={index} value={item?._id}>{item?.name}</Option>
                                                ))}

                                            </Select>
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-6">
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
                                                    <Option key={index} value={refer?._id}>{refer?.name}</Option>
                                                ))}
                                            </Select>
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