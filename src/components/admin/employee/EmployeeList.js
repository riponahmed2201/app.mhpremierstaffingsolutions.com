import React, { useState, useEffect, useCallback } from 'react';
import { responseNotification } from '../../../utils/notifcation';
import { Input, Switch, Table, Select, DatePicker, Space } from 'antd';
import _ from "lodash";
import moment from "moment";
import { Link, useLocation } from 'react-router-dom';
import { getPage } from '../../../utils/getPage';
import { fetchEmployeeListHandler } from '../../../api/employee';
import Loader from '../../loadar/Loader';
import { token } from '../../../utils/authentication';
import { donwloadCSV } from '../../../utils/static/donwloadCSV.js';
import axios from 'axios';

const { Search } = Input;
const { Option } = Select;

const columns = [
    {
        title: '#',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.length - b.name.length,
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
    },
    {
        title: 'Employee ID',
        dataIndex: 'userIdNumber',
    },
    {
        title: 'Password',
        dataIndex: 'plainPassword',
    },
    {
        title: 'Active',
        dataIndex: 'active',
        sorter: (a, b) => a.active.length - b.active.length,
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

function EmployeeList() {

    const loc = useLocation();
    const [limit] = useState(20);
    const [getEmployee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(false);
    const [getName, setName] = useState(undefined);
    const [getStatus, setStatus] = useState(undefined);
    const [getFilterFromDate, setFilterFromDate] = useState(undefined);
    const [getFilterToDate, setFilterToDate] = useState(undefined);

    const fetchEmployee = useCallback(async () => {
        setLoading(true);

        await fetchEmployeeListHandler(limit, getName, getStatus, loc?.search).then((res) => {
            if (res?.status === 200) {
                setLoading(false);
                setEmployee(res?.data?.users)
            } else {
                setLoading(false);
            }
        });
    }, [limit, loc?.search, getName, getStatus]);

    useEffect(() => {
        fetchEmployee();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchEmployee, getPage(loc.search)]);

    //search
    const handleSearchkeywordOnChange = (e) => {
        setName(e?.target?.value);
    };

    const data1 = [];
    _.map(getEmployee, (item, index) => {
        data1.push({
            key: index + 1,
            name: item.name,
            email: item.email,
            phoneNumber: item.phoneNumber,
            userIdNumber: item.userIdNumber,
            plainPassword: item.plainPassword,
            active: item.active ? 'YES' : 'NO',
            status: (
                <>
                    <Switch
                        size="small"
                        defaultChecked={item?.active === true}
                        onChange={(e) => {
                            onEmployeeStatusChange(item?._id, e);
                        }}
                    />
                </>
            ),
            action: (
                <>
                    <div className='btn-group'>
                        <Link to={`/admin/employee-details/${item._id}`} style={{ background: '#C6A34F', color: 'white' }} className='btn btn-sm'>
                            Edit
                        </Link>
                    </div>
                </>
            ),
        });
    });

    const handleChangeStatus = (value) => {
        setStatus(value);
    };

    const onEmployeeStatusChange = useCallback(async (value, e) => {
        const unicodeUri = `${process.env.REACT_APP_API_BASE_URL}`;
        const status = e === true ? true : false;
        const id = value;

        if (true) {
            await fetch(`${unicodeUri}/users/update-status`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token()}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id,
                    active: status,
                }),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res?.statusCode === 200) {
                        responseNotification("Employee status updated successfully", "success");
                        fetchEmployee();
                    } else if (res?.statusCode === 400) {
                        responseNotification("Bad request", "danger");
                    }
                });
        }
    },
        [fetchEmployee]
    );

    const handleExportData = async () => {

        try {

            const responseData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users?skipLimit=YES&requestType=EMPLOYEE` + (getFilterFromDate ? `&fromDate=${getFilterFromDate}` : ``) + (getFilterToDate ? `&toDate=${getFilterToDate}` : ``),
                {
                    headers: {
                        Authorization: `Bearer ${token()}`,
                    },
                }
            );

            const data = responseData?.data?.users?.map((item) => {
                return {
                    FirstName: item?.firstName,
                    LastName: item?.lastName,
                    Email: item?.email,
                    PhoneNumber: item?.phoneNumber,
                    Position: item?.positionName,
                    Gender: item?.gender,
                    DateOfBirth: item?.dateOfBirth,
                    PresentAddress: item?.presentAddress,
                    PermanentAddress: item?.permanentAddress,
                    CountryName: item?.countryName,
                    HigherEducation: item?.higherEducation,
                    LicensesNo: item?.licensesNo,
                    EmmergencyContact: item?.emmergencyContact,
                    EmployeeExperience: item?.employeeExperience,
                    PerHourRate: item?.hourlyRate,
                    Languages: item?.languages,
                };
            });

            donwloadCSV(data, "Employee List");

        } catch (error) {

        }
    };

    return (
        <div className="container-fluid px-4">
            <div className='row mt-4'>
                <div className='d-flex justify-content-between'>
                    <h3 className='mb-4 title'>Employee List</h3>
                </div>
            </div>

            <div className='card'>
                <div className="card-header">
                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-10'>
                                <div className='d-flex justify-content-start'>
                                    <Space>
                                        <Search
                                            placeholder="Search"
                                            allowClear
                                            size="large"
                                            onChange={handleSearchkeywordOnChange}
                                            style={{
                                                width: 300,
                                                marginLeft: '10px'
                                            }}
                                        />

                                        <Select size="large" allowClear placeholder="Active" onChange={handleChangeStatus}>
                                            <Option value="YES">YES</Option>
                                            <Option value="NO">NO</Option>
                                        </Select>

                                        <DatePicker
                                            size="large"
                                            style={{ width: '12' }}
                                            id="fromDate"
                                            placeholder="From Date"
                                            onChange={(value) => {
                                                setFilterFromDate(
                                                    moment(value)
                                                        .format("YYYY-MM-DD")
                                                        .valueOf()
                                                );
                                            }}
                                        />
                                        <DatePicker
                                            size="large"
                                            style={{ width: '12' }}
                                            id="toDate"
                                            placeholder="To Date"
                                            onChange={(value) => {
                                                setFilterToDate(
                                                    moment(value)
                                                        .format("YYYY-MM-DD")
                                                        .valueOf()
                                                );
                                            }}
                                        />
                                    </Space>
                                </div>
                            </div>
                            <div className='col-2'>
                                <button
                                    style={{ background: '#C6A34F', color: 'white' }}
                                    onClick={handleExportData}
                                    className="btn float-end"
                                >
                                    Export
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {loading ? (
                    <tr>
                        <td>
                            <Loader />
                        </td>
                    </tr>
                ) : (
                    <div className='m-2'> <Table columns={columns} dataSource={data1} /></div>)
                }
            </div>
        </div>
    )
}

export default EmployeeList