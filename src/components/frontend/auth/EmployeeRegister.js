import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Form, Select, Input, DatePicker, Space } from 'antd';
import moment from "moment";

import { responseNotification } from '../../../utils/notifcation';
import { fetchSkillListForDropdownHandler } from '../../../api/skill';
import { fetchPositionListForDropdownHandler } from '../../../api/position';
import { fetchSourceListForDropdownHandler } from '../../../api/source';
import { fetchReferPersonListForDropdownHandler } from '../../../api/employee';
import { staticLanguageName } from '../../../utils/static/languageList';
import CountryWiseValidationRules from '../../../utils/static/countryList';

const { Option } = Select;

function EmployeeRegister() {

    const [referPerson, setReferPerson] = useState([]);
    const [skill, setSkill] = useState([]);
    const [position, setPosition] = useState([]);
    const [sourceFrom, setSourceFrom] = useState([]);

    const [getDateOfBirth, setDateOfBirth] = useState(undefined);

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const [form] = Form.useForm();

    const navigate = useNavigate();

    const onFinish = async (values) => {

        const dateOfBirthFromOnchanage = getDateOfBirth ? moment(getDateOfBirth).format("YYYY-MM-DD").valueOf() : undefined;

        const receivedEmployeeFields = {
            name: values?.name,
            email: values?.email,
            phoneNumber: values?.phoneNumber,
            countryName: values?.countryName,
            languages: values?.languages,
            positionId: values?.positionId,
        };

        if (values?.gender) receivedEmployeeFields.gender = values?.gender;
        if (values?.sourceId) receivedEmployeeFields.sourceId = values?.sourceId;
        if (values?.employeeExperience) receivedEmployeeFields.employeeExperience = values?.employeeExperience;
        if (values?.referPersonId) receivedEmployeeFields.referPersonId = values?.referPersonId;
        if (values?.presentAddress) receivedEmployeeFields.presentAddress = values?.presentAddress;
        if (values?.permanentAddress) receivedEmployeeFields.permanentAddress = values?.permanentAddress;
        if (values?.licensesNo) receivedEmployeeFields.licensesNo = values?.licensesNo;
        if (values?.higherEducation) receivedEmployeeFields.higherEducation = values?.higherEducation;
        if (values?.emmergencyContact) receivedEmployeeFields.emmergencyContact = values?.emmergencyContact;
        if (values?.dateOfBirth) receivedEmployeeFields.dateOfBirth = dateOfBirthFromOnchanage;
        if (values?.countryName) receivedEmployeeFields.countryName = values?.countryName;

        try {

            setLoading(true);

            const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/employee-register`, receivedEmployeeFields);

            if (res?.data?.statusCode === 201) {
                setError(undefined);
                setLoading(false);
                responseNotification("Employee registered successfully!", "success");
                // form.resetFields();

                navigate(`/employee-profile-update/${res?.data?.details._id}`);

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

    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12' style={{ background: "#000000" }}>
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
                            form={form}
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
                                            rules={[
                                                {
                                                    message: 'Please enter date of birth',
                                                },
                                            ]}
                                        >
                                            <Space direction="vertical" style={{
                                                width: '100%',
                                            }}>

                                                <DatePicker
                                                    style={{ width: '100%' }}
                                                    id="dateOfBirth"
                                                    placeholder="Date of Birth"
                                                    onChange={(value) => {
                                                        setDateOfBirth(
                                                            moment(value)
                                                                .format("YYYY-MM-DD")
                                                                .valueOf()
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
                                                    message: 'Please enter country name',
                                                },
                                            ]}
                                        >
                                            <Select
                                                showSearch={true}
                                                placeholder="Please Select Country Name"
                                                optionFilterProp="children"
                                            >
                                                {CountryWiseValidationRules?.map((item, index) => (
                                                    <Option key={index} value={item?.name}>{item?.name}</Option>
                                                ))}

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
                                                {staticLanguageName?.map((item, index) => (
                                                    <Option key={index} value={item?.name}>{item?.name}</Option>
                                                ))}

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
                                            label="How You Know About Us?"
                                            name="sourceId"
                                            hasFeedback
                                            rules={[
                                                {
                                                    message: 'Please enter how you know about us',
                                                },
                                            ]}
                                        >

                                            <Select
                                                showSearch={true}
                                                placeholder="Please Select"
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