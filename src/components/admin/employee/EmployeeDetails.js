
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Input } from 'antd';
import axios from 'axios';

import { token } from '../../../utils/authentication';
import { responseNotification } from '../../../utils/notifcation';

function EmployeeDetails() {

    const { id } = useParams();

    const [getSingleEmployeeDetails, setSingleEmployeeDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const [form] = Form.useForm();

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

            setLoading(true);

            const res = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/users/update-bank-dress`, receivedEmployeeFields);

            if (res?.data?.statusCode === 200) {
                setError(undefined);
                setLoading(false);
                responseNotification("Employee bank updated successfully!", "success");

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

    return (
        <div className="container-fluid px-4">
            <div className='row mt-4'>
                <div className='d-flex justify-content-between'>
                    <h3 className='mb-4 title'>Employee Information</h3>
                </div>
            </div>
            <div className='card'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name:</th>
                            <td>{getSingleEmployeeDetails?.name}</td>
                            <th>Phone Number:</th>
                            <td>{getSingleEmployeeDetails?.phoneNumber}</td>
                            <th>Gender:</th>
                            <td>{getSingleEmployeeDetails?.gender}</td>
                        </tr>
                        <tr>
                            <th>Country Name:</th>
                            <td>{getSingleEmployeeDetails?.countryName}</td>
                            <th>Hourly Rate:</th>
                            <td>{getSingleEmployeeDetails?.hourlyRate}</td>
                            <th>Licenses No:</th>
                            <td>{getSingleEmployeeDetails?.licensesNo}</td>
                        </tr>
                        <tr>
                            <th>emmergencyContact:</th>
                            <td>{getSingleEmployeeDetails?.emmergencyContact}</td>
                            <th>employeeExperience:</th>
                            <td>{getSingleEmployeeDetails?.employeeExperience}</td>
                            <th>higherEducation:</th>
                            <td>{getSingleEmployeeDetails?.higherEducation}</td>
                        </tr>
                        <tr>
                            <th>presentAddress:</th>
                            <td>{getSingleEmployeeDetails?.presentAddress}</td>
                            <th>permanentAddress:</th>
                            <td>{getSingleEmployeeDetails?.permanentAddress}</td>
                            <th>referPersonName:</th>
                            <td>{getSingleEmployeeDetails?.referPersonName}</td>
                        </tr>
                        <tr>
                            <th>Position Name:</th>
                            <td>{getSingleEmployeeDetails?.positionName}</td>
                            <th>Total Working Hour:</th>
                            <td>{getSingleEmployeeDetails?.totalWorkingHour}</td>
                            <th>Password:</th>
                            <td>{getSingleEmployeeDetails?.plainPassword}</td>
                        </tr>
                        <tr>
                            <th>Source Name:</th>
                            <td>{getSingleEmployeeDetails?.presentAddress}</td>
                            <th>Employee Id Number:</th>
                            <td>{getSingleEmployeeDetails?.userIdNumber}</td>
                        </tr>
                    </thead>
                </table>
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
                                        disabled={loading}
                                        className="btn"
                                        style={{ background: '#C6A34F', color: 'white' }}
                                        type="submit"
                                    >
                                        {!loading && "Submit"}
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

export default EmployeeDetails