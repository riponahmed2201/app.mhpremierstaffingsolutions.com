import React, { useCallback, useEffect, useState } from 'react'
import { Form, Select, Input } from 'antd'
import { updateMhEmployeeHandler } from '../../../api/addMHEmployee';
import { responseNotification } from '../../../utils/notifcation';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { token } from '../../../utils/authentication';
import { staticMenuPermission } from '../../../utils/static/menuPermission';

const { Option } = Select;

function EditMHEmployee() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();
    const [getSingleEmployeeDetails, setSingleEmployeeDetails] = useState([]);

    const [form] = Form.useForm();

    //Fetch single mh employee info
    const fetchSingleEmployeeData = useCallback(async () => {

        try {

            const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token()}`,
                    },
                }
            );

            //Employee Basic Information
            form.setFieldsValue({
                name: res?.data?.details.name,
                email: res?.data?.details.email,
                phoneNumber: res?.data?.details.phoneNumber,
                role: res?.data?.details.role,
                active: res?.data?.details?.active === true ? "YES" : "NO",
                permissions: res?.data?.details?.menuPermission
            });

            setSingleEmployeeDetails(res?.data?.details);

        } catch (error) {

        }

    }, []);

    useEffect(() => {
        fetchSingleEmployeeData();
    }, [id]);

    const onFinish = (values) => {

        const active = values?.active === "YES" ? true : false;

        const updateMhEmployeeReceivedFields = {
            id: id,
            name: values?.name,
            email: values?.email,
            phoneNumber: values?.phoneNumber,
            password: values?.password,
            role: values?.role,
            active: active,
            permissions: values?.permissions
        };

        if (updateMhEmployeeReceivedFields) {
            setLoading(true);
            updateMhEmployeeHandler(updateMhEmployeeReceivedFields)
                .then((res) => res.json())
                .then((res) => {
                    if (res?.statusCode === 201) {
                        setError(undefined);
                        setLoading(false);
                        responseNotification("MH employee updated successfully!", "success");

                        navigate("/admin/mh-employee-list");
                        form.resetFields();
                    } else if (res?.statusCode === 400) {
                        setError(res?.errors?.[0].msg);
                        setLoading(false);
                    } else if (res?.statusCode === 500) {
                        setError(res?.message);
                        setLoading(false);
                    }
                });
        }
    };

    return (
        <div className="container-fluid px-4">
            <div className='row mt-4'>
                <div className='d-flex justify-content-between'>
                    <h3 className='mb-4 title'>Edit MH Employee</h3>
                </div>
            </div>

            <div className='card'>
                <div className='card-header'>Edit MH Employee</div>
                <div className='card-body'>
                    <div className='m-2'>
                        <Form
                            className="ant-form ant-form-vertical"
                            layout="vertical"
                            onFinish={onFinish}
                            form={form}
                        >
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className="col-md-4">
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
                                            label="Role Name"
                                            name="role"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Role name is required",
                                                },
                                            ]}
                                        >
                                            <Select
                                                showSearch={true}
                                                placeholder="Please select role name"
                                                optionFilterProp="children"
                                            >
                                                <Option value="ADMIN">ADMIN</Option>
                                                <Option value="HR">HR</Option>
                                                <Option value="MARKETING">MARKETING</Option>
                                            </Select>
                                        </Form.Item>
                                    </div>

                                    <div className="col-md-4">
                                        <Form.Item
                                            label="Active"
                                            name="active"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "status is required",
                                                },
                                            ]}
                                        >
                                            <Select
                                                showSearch={true}
                                                placeholder="Please Select Active Yes or No"
                                                optionFilterProp="children"
                                            >
                                                <Option value="YES">YES</Option>
                                                <Option value="NO">NO</Option>
                                            </Select>
                                        </Form.Item>
                                    </div>


                                    <div className="col-md-12">
                                        <Form.Item
                                            label="Menu Permission List"
                                            name="permissions"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Menu permission is required",
                                                },
                                            ]}
                                        >
                                            <Select
                                                showSearch={true}
                                                placeholder="Please Select Permission"
                                                optionFilterProp="children"
                                                mode="multiple"
                                                allowClear
                                            >

                                                {staticMenuPermission?.map((item, index) => (
                                                    <Option key={index} value={item?.name}>{item?.name}</Option>
                                                ))}

                                            </Select>
                                        </Form.Item>
                                    </div>

                                    {getError ? (
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="error-message">
                                                    <p className="error-text-color text-danger">{getError}</p>
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
                                                {!loading && "Save"}
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
                                </div>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditMHEmployee