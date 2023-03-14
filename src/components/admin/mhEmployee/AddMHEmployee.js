import React, { useCallback, useEffect, useState } from 'react'
import { Form, Select, Checkbox, Divider, Input } from 'antd'
import { addHandler } from '../../../api/addMHEmployee';
import { responseNotification } from '../../../utils/notifcation';

const { Option } = Select;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Position', 'Skill', 'Source', 'Employee List', 'Client List', 'User Permission'];
const defaultCheckedList = ['Apple', 'Orange'];

function AddMHEmployee() {

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const [form] = Form.useForm();

    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onChange = (list) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    const onFinish = (values) => {

        const name = values?.name;
        const active = values?.active === "YES" ? true : false;

        const addSkillFields = { name, active };

        if (name) {
            setLoading(true);
            addHandler(addSkillFields)
                .then((res) => res.json())
                .then((res) => {
                    if (res?.statusCode === 201) {
                        setError(undefined);
                        setLoading(false);
                        responseNotification("MH emplyee created successfully!", "success");
                        // form.resetFields();
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
                    <h3 className='mb-4 title'>Add MH Employee</h3>
                </div>
            </div>

            <div className='card'>
                <div className='card-header'>Add MH Employee</div>
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

                                    <div className="col-md-4">
                                        <Form.Item
                                            label="Role Type"
                                            name="roleType"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Role type is required",
                                                },
                                            ]}
                                        >
                                            <Select
                                                showSearch={true}
                                                placeholder="Please select role type"
                                                optionFilterProp="children"
                                            >
                                                <Option value="EMPLOYEE">EMPLOYEE</Option>
                                                <Option value="ADMIN">ADMIN</Option>
                                                <Option value="HR">HR</Option>
                                                <Option value="CLIENT">CLIENT</Option>
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
                                            label="Menu List"
                                            name="active"
                                            hasFeedback
                                            rules={[
                                                {
                                                    required: true,
                                                    message: "Menu list is required",
                                                },
                                            ]}
                                        >
                                            <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                                                All Permission
                                            </Checkbox>
                                            <Divider />
                                            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />

                                        </Form.Item>
                                    </div>

                                    {getError ? (
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="error-message">
                                                    <p className="error-text-color">{getError}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : undefined}

                                    <div className="col-md-6">
                                        <Form.Item>
                                            <button
                                                disabled={loading}
                                                className="btn btn-primary"
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

export default AddMHEmployee