import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Form, Select, Input } from 'antd';
import axios from "axios";
import { useFormik } from 'formik';

import { clientRegisterHandler } from '../../../api/client';
import { responseNotification } from '../../../utils/notifcation';

import './Register.css';
import './Media.css';

const { Option } = Select;

function ClientRegister() {

    const [referPerson, setReferPerson] = useState([]);
    const [sourceFrom, setSourceFrom] = useState([]);

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const [form] = Form.useForm();

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            restaurantName: '',
            restaurantAddress: '',
            sourceFrom: '',
            referPersonId: '',
            phoneNumber: '',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            restaurantName: yup.string().required(),
            restaurantAddress: yup.string().required(),
            sourceFrom: yup.string().required(),
            referPersonId: yup.string().required(),
            phoneNumber: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, "Password must have at least 6 characters").required(),
        }),
        onSubmit: async (values, resetForm) => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/client-register`, values);

                if (res?.data?.statusCode === 201) {
                    console.log("response: ", res?.data?.statusCode);
                    // resetForm({ values: "" });
                    navigate('/admin-login')
                } else {
                    navigate('/register')
                }
            } catch (error) {

            }
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/list?isReferPerson=YES`);
                setReferPerson(response?.data?.users);
            } catch (error) {

            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const fetchSourceFromData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/sources/list-for-dropdown`);
            setSourceFrom(response?.data?.sources);
        };

        fetchSourceFromData();
    }, []);

    const onFinish = async (values) => {

        const receivedClientRegisterFields = {
            restaurantName: values?.restaurantName,
            restaurantAddress: values?.restaurantAddress,
            sourceId: values?.sourceId,
            referPersonId: values?.referPersonId,
            phoneNumber: values?.phoneNumber,
            email: values?.email,
            password: values?.password,
            lat: '123.23122242',
            long: '4545.354545',
        };

        if (receivedClientRegisterFields) {

            setLoading(true);

            await clientRegisterHandler(receivedClientRegisterFields)
                .then((res) => res.json())
                .then((res) => {
                    if (res.statusCode === 201) {
                        responseNotification("Client registered successfully!", "success");
                        form.resetFields();

                        navigate('/admin-login');

                        // window.location.reload();
                    } else if (res?.statusCode === 400) {
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

    return (
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
                            label="Restaurant Name"
                            name="restaurantName"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter restaurant name',
                                },
                            ]}
                        >
                            <Input placeholder="Enter restaurant name" className="ant-input ant-input-lg" />
                        </Form.Item>
                    </div>

                    <div className="col-md-6">
                        <Form.Item
                            label="Restaurant Address"
                            name="restaurantAddress"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter restaurant address',
                                },
                            ]}
                        >
                            <Input placeholder="Enter restaurant address" className="ant-input ant-input-lg" />
                        </Form.Item>
                    </div>

                    <div className="col-md-6">
                        <Form.Item
                            label="Where do you find us?"
                            name="sourceId"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter where do you find us?',
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
                            label="Refer Person Name"
                            name="referPersonId"
                            hasFeedback
                            rules={[
                                {
                                    message: 'Please enter refer person name',
                                },
                            ]}
                        >
                            <Select
                                showSearch={true}
                                placeholder="Please Select"
                                optionFilterProp="children"
                            >
                                {referPerson?.map((item, index) => (
                                    <Option key={index} value={item?._id}>{item?.name}</Option>
                                ))}

                            </Select>
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
                            label="Password"
                            name="password"
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please enter password',
                                },
                            ]}
                        >
                            <Input placeholder="Enter password" className="ant-input ant-input-lg" />
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
    )
}

export default ClientRegister