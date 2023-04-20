
import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import axios from "axios";
import { Form, Select, Input, DatePicker, Space, Upload, Button } from 'antd';
import ImgCrop from "antd-img-crop";
import { UploadOutlined } from '@ant-design/icons';

import moment from "moment";
import _ from "lodash";

import { token } from '../../../utils/authentication';
import { responseNotification } from '../../../utils/notifcation';
import { fetchReferPersonListForDropdownHandler } from '../../../api/employee';
import { fetchSkillListForDropdownHandler } from '../../../api/skill';
import { fetchPositionListForDropdownHandler } from '../../../api/position';
import { fetchSourceListForDropdownHandler } from '../../../api/source';
import { staticLanguageName } from '../../../utils/static/languageList';
import CountryWiseValidationRules from '../../../utils/static/countryList';
import defaultImage from '../../../assets/images/default.png';

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
    const [getEditDateOfBirth, setEditDateOfBirth] = useState(undefined);

    const [form] = Form.useForm();
    const [formEdit] = Form.useForm();

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

    //Fetch refer person list for dropdown
    const fetchSingleEmployeeData = useCallback(async () => {

        try {

            const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token()}`,
                    },
                }
            );

            setEditDateOfBirth(res?.data?.details.dateOfBirth);

            //Employee Basic Information
            formEdit.setFieldsValue({
                firstName: res?.data?.details.firstName,
                lastName: res?.data?.details.lastName,
                email: res?.data?.details.email,
                phoneNumber: res?.data?.details.phoneNumber,
                positionId: res?.data?.details.positionId,
                gender: res?.data?.details.gender,
                // dateOfBirth: moment(res?.data?.details.dateOfBirth).format("YYYY-MM-DD"),
                presentAddress: res?.data?.details.presentAddress,
                permanentAddress: res?.data?.details.permanentAddress,
                countryName: res?.data?.details.countryName,
                higherEducation: res?.data?.details.higherEducation,
                licensesNo: res?.data?.details.licensesNo,
                emmergencyContact: res?.data?.details.emmergencyContact,
                employeeExperience: res?.data?.details.employeeExperience,
                languages: res?.data?.details.languages,
                skills: res?.data?.details.skills,
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
                additionalTwo: res?.data?.details.additionalTwo
            });

            setSingleEmployeeDetails(res?.data?.details);

        } catch (error) {

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
        if (values?.additionalOne) receivedEmployeeFields.additionalOne = values?.additionalOne;
        if (values?.additionalTwo) receivedEmployeeFields.additionalTwo = values?.additionalTwo;

        try {

            if (id && receivedEmployeeFields) {
                setBankUpdateLoading(true);

                const res = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/users/update-bank-dress`, receivedEmployeeFields, {
                    headers: {
                        Authorization: `Bearer ${token()}`,
                    },
                });

                if (res?.data?.statusCode === 200) {
                    setError(undefined);
                    setBankUpdateLoading(false);
                    responseNotification("Employee bank updated successfully!", "success");

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

        const dateOfBirthFromOnchanage = getDateOfBirth ? moment(getDateOfBirth).format("YYYY-MM-DD").valueOf() : undefined;
        // console.log("values: ", values);
        const receivedEmployeeFields = {
            id: id,
            firstName: values?.firstName,
            lastName: values?.lastName,
            email: values?.email,
            phoneNumber: values?.phoneNumber,
            countryName: values?.countryName,
            dateOfBirth: dateOfBirthFromOnchanage,
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
            hourlyRate: values?.hourlyRate,
            employeeExperience: values?.employeeExperience

            // values.dateOfBirth
        };

        try {

            setBasicInfoUpdateloading(true);

            if (id && receivedEmployeeFields) {
                const res = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/users/update-employee`, receivedEmployeeFields, {
                    headers: {
                        Authorization: `Bearer ${token()}`,
                    },
                });

                if (res?.data?.statusCode === 200) {
                    setError(undefined);
                    setBasicInfoUpdateloading(false);
                    responseNotification("Employee information updated successfully!", "success");

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

    return (
        <div className="container-fluid px-4">
            <div className='row mt-4'>
                <div className='d-flex justify-content-between'>
                    <h3 className='mb-4 title'>Employee Information</h3>
                </div>
            </div>
            <div className='card'>
                <div className='card-header'>
                    <div className='d-flex justify-content-between'>
                        <h5>Edit Employee Information</h5>
                        <Link to={`/admin/view-certificate/${id}`} style={{ background: '#C6A34F', color: 'white' }} className='btn btn-sm'>
                            View Certificate
                        </Link>
                    </div>
                </div>

                <div className='card-body'>
                    <Form
                        className="ant-form ant-form-vertical"
                        layout="vertical"
                        onFinish={onFinishBasicInfoUpdate}
                        form={formEdit}
                    >
                        <div className='col-12'>
                            <div className='row'>

                                <div className="col-md-4">
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
                                        <Input placeholder="Enter first name" className="ant-input ant-input-lg" />
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
                                                message: 'Please enter last name',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Enter last name" className="ant-input ant-input-lg" />
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
                                                message: 'Please enter email',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Enter email" className="ant-input ant-input-lg" />
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
                                                message: 'Please enter phone number',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Enter phone number" className="ant-input ant-input-lg" />
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

                                <div className="col-md-4">
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

                                <div className="col-md-4">
                                    <Form.Item
                                        label="Date Of Birth"
                                        name="dateOfBirth"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter date of birth',
                                            },
                                        ]}
                                    >
                                        <Space direction="vertical" style={{
                                            width: '100%',
                                        }}>

                                            <DatePicker
                                                style={{ width: '100%' }}
                                                placeholder="Date of Birth"
                                                defaultValue={
                                                    (getEditDateOfBirth && moment(getEditDateOfBirth, 'YYYY-MM-DD')) || ''
                                                }
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

                                <div className="col-md-4">
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

                                <div className="col-md-4">
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

                                <div className="col-md-4">
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
                                            {CountryWiseValidationRules?.map((item, index) => (
                                                <Option key={index} value={item?.name}>{item?.name}</Option>
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
                                                message: 'Please enter higher education',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Enter higher education" className="ant-input ant-input-lg" />
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
                                                message: 'Please enter licenses no',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Enter licenses no" className="ant-input ant-input-lg" />
                                    </Form.Item>
                                </div>

                                <div className="col-md-4">
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

                                <div className="col-md-4">
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

                                <div className="col-md-4">
                                    <Form.Item
                                        label="Per hour rate($ or £)"
                                        name="hourlyRate"
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please enter per hour rate',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Enter per hour rate" className="ant-input ant-input-lg" />
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

                                <div className="col-md-4">
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

                                <div className="col-md-4">
                                    <Form.Item
                                        label="How You Know About Us?"
                                        name="sourceId"
                                        hasFeedback
                                        rules={[
                                            {
                                                required: true,
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
                                                <Option key={index} value={refer?._id}>{refer?.name}</Option>
                                            ))}
                                        </Select>
                                    </Form.Item>
                                </div>

                                <div className="col-md-4">
                                    <Form.Item name="profilePicture" label="Profile Picture">
                                        <div>
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
                                                required: true,
                                                message: 'Please enter curriculam vitea (CV)',
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

                        <div className="col-md-4">
                            <Form.Item>
                                <button
                                    disabled={basicInfoUpdateloading}
                                    className="btn"
                                    style={{ background: '#C6A34F', color: 'white' }}
                                    type="submit"
                                >
                                    {!basicInfoUpdateloading && "Update"}
                                    {basicInfoUpdateloading && (
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
            <br />

            <div className='card'>
                <div className='card-header'>
                    Bank and Dress Information
                </div>
                <div className='card-body'>
                    <div>
                        <Form
                            className="ant-form ant-form-vertical"
                            layout="vertical"
                            onFinish={onFinish}
                            form={form}
                        >
                            <div className='col-12'>
                                <div className='row'>
                                    <div className="col-md-4">
                                        <Form.Item
                                            label="Bank Name"
                                            name="bankName"
                                            hasFeedback
                                            initialValue={getSingleEmployeeDetails?.name}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter bank name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter bank name" className="ant-input ant-input-lg" />
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
                                                    message: 'Please enter account number',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter bank account number" className="ant-input ant-input-lg" />
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
                                                    message: 'Please enter routing number',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter routing number" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-4">
                                        <Form.Item
                                            label="Dress Size"
                                            name="dressSize"
                                            hasFeedback
                                            rules={[
                                                {
                                                    message: 'Please enter dress size',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter dress size" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-4">
                                        <Form.Item
                                            label="Additional One"
                                            name="additionalOne"
                                            hasFeedback
                                            rules={[
                                                {
                                                    message: 'Please enter additional one',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter additional one" className="ant-input ant-input-lg" />
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-4">
                                        <Form.Item
                                            label="Additional Two"
                                            name="additionalTwo"
                                            hasFeedback
                                            rules={[
                                                {
                                                    message: 'Please enter additional two',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter additional two" className="ant-input ant-input-lg" />
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
                                        style={{ background: '#C6A34F', color: 'white' }}
                                        type="submit"
                                    >
                                        {!bankUpdateLoading && "Update Bank"}
                                        {bankUpdateLoading && (
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

export default EmployeeDetails