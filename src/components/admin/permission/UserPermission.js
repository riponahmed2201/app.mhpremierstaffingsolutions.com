import React, { useCallback, useEffect, useState } from 'react'
import { Form, Select, Checkbox, Divider } from 'antd'
import { addHandler } from '../../../api/userPermission';
import { responseNotification } from '../../../utils/notifcation';
import { fetchUserListForDropdownHandler } from '../../../api/employee';

const { Option } = Select;
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Position', 'Skill', 'Source', 'Employee List', 'Client List', 'User Permission'];
const defaultCheckedList = ['Apple', 'Orange'];

function UserPermission() {

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const [form] = Form.useForm();

    const [getUser, setUser] = useState([]);
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

    const options = [
        {
            label: 'Position',
            value: true,
        },
        {
            label: 'Skill',
            value: true,
        },
        {
            label: 'Source',
            value: true,
        },
        {
            label: 'Employee List',
            value: true,
        },
        {
            label: 'Client List',
            value: true,
        },
        {
            label: 'User Permission',
            value: true,
        },
        {
            label: 'Source',
            value: true,
        },
    ];

    //Fetch user list for dropdown
    const fetchReferPersonData = useCallback(async () => {
        await fetchUserListForDropdownHandler().then((res) => {
            setUser(res?.data?.users);
        });
    }, []);

    useEffect(() => {
        fetchReferPersonData();
    }, []);

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
                        responseNotification("Permission created successfully!", "success");
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
                    <h3 className='mb-4 title'>User permission</h3>
                </div>
            </div>

            <div className='card'>
                <div className='card-header'>User Permission</div>
                <div className='card-body'>
                    <div className='m-2'>
                        <Form
                            className="ant-form ant-form-vertical"
                            layout="vertical"
                            onFinish={onFinish}
                            form={form}
                        >
                            <div className="col-lg-6">
                                <Form.Item
                                    label="User Email"
                                    name="email"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: "Email is required",
                                        },
                                    ]}
                                >
                                    <Select
                                        showSearch={true}
                                        placeholder="Please select user email"
                                        optionFilterProp="children"
                                    >

                                        {getUser?.map((item, index) => (
                                            <Option key={index} value={item?._id}>{item?.email}</Option>
                                        ))}

                                    </Select>
                                </Form.Item>
                            </div>

                            <div className="col-lg-6">
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

                            <div className="col-lg-12">
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

                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPermission