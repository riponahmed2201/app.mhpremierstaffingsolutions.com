import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Input } from 'antd';
import axios from 'axios';

import { token } from '../../../utils/authentication';
import { responseNotification } from '../../../utils/notifcation';

function ClientDetails() {

    const { id } = useParams();

    const [getSingleClientDetails, setSingleClientDetails] = useState([]);
    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const [form] = Form.useForm();

    //Fetch single client information
    const fetchSingleClientData = useCallback(async () => {

        try {

            const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token()}`,
                    },
                }
            );

            form.setFieldsValue({
                clientDiscount: res?.data?.details.clientDiscount
            });

            setSingleClientDetails(res?.data?.details);

        } catch (error) {

        }

    }, []);

    useEffect(() => {
        fetchSingleClientData();
    }, [id]);

    const onFinish = async (values) => {

        const receivedClientFields = {
            id: id,
            clientDiscount: values?.clientDiscount
        };

        try {

            setLoading(true);

            const res = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/users/update-client-discount`, receivedClientFields, {
                headers: {
                    Authorization: `Bearer ${token()}`,
                },
            });

            if (res?.data?.statusCode === 200) {
                setError(undefined);
                setLoading(false);
                responseNotification("Client bank updated successfully!", "success");

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
                    <h3 className='mb-4 title'>Client Information</h3>
                </div>
            </div>
            <div className='card'>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Restaurant Name</th>
                            <td>{getSingleClientDetails?.restaurantName}</td>
                            <th>Restaurant Address</th>
                            <td>{getSingleClientDetails?.restaurantAddress}</td>
                            <th>Email</th>
                            <td>{getSingleClientDetails?.email}</td>

                        </tr>
                        <tr>
                            <th>Phone Number</th>
                            <td>{getSingleClientDetails?.phoneNumber}</td>
                            <th>Client ID Number</th>
                            <td>{getSingleClientDetails?.userIdNumber}</td>
                            <th>Source Name</th>
                            <td>{getSingleClientDetails?.sourceName}</td>
                        </tr>
                    </thead>
                </table>
            </div>

            <br />
            <div className='card'>
                <div className='card-header'>
                    Update Client Discount
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
                                    <div className="col-md-6">
                                        <Form.Item
                                            label="Discount Amount"
                                            name="clientDiscount"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please enter discount',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Enter discount" className="ant-input ant-input-lg" />
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

export default ClientDetails