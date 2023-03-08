import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Form, Select, Input, Spin } from 'antd';

const { Option } = Select;

function EmployeeRegister() {

    const [referPerson, setReferPerson] = useState([]);
    const [skill, setSkill] = useState([]);

    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log("values : ", values);
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
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/skills`);
            setSkill(response?.data?.skills);
        };

        fetchSkillData();
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
                            <Link className="navbar-brand" to="/client-register">Client Register</Link>
                            <Link className="navbar-brand" to="/employee-register">Employee Register</Link>
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
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter date of birth',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter date of birth" className="ant-input ant-input-lg" />
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
                                                placeholder="Please Select Gender"
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
                                            name="sourceFrom"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter source name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter source name" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                </div>
                            </div>
                            <br />
                            <div className="col-12">
                                <button type="submit" className="btn" style={{ background: '#C6A34F', color: 'white' }}>Register</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeRegister