import React, { useState, useEffect, useCallback } from 'react';
import { responseNotification } from '../../../utils/notifcation';
import { Input, Space, Switch, Table } from 'antd';
import _ from "lodash";
import { Link, useLocation } from 'react-router-dom';
import { getPage } from '../../../utils/getPage';
import { fetchEmployeeListHandler } from '../../../api/employee';
import Loader from '../../loadar/Loader';
import { token } from '../../../utils/authentication';


const { Search } = Input;

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
    const params = new URLSearchParams(window.location.search);
    let serialNumber = Number(params.get("page"));
    const [getStatus, setStatus] = useState(undefined);

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
    const handleSearchkeywordOnChange = (value) => {
        setName(value);
    };

    const data1 = [];
    _.map(getEmployee, (item, index) => {
        data1.push({
            key: index + 1,
            name: item.name,
            email: item.email,
            phoneNumber: item.phoneNumber,
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
                        <Link to={`/admin/employee-details/${item._id}`} className='btn btn-primary btn-sm'>
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

    return (
        <div className="container-fluid px-4">
            <div className='row mt-4'>
                <div className='d-flex justify-content-between'>
                    <h3 className='mb-4 title'>Employee List</h3>
                </div>
            </div>

            <div className='card'>

                <div className='d-flex flex-row-reverse'>
                    <div className='m-2'>
                        <Space direction="vertical">
                            <Search
                                placeholder="Enter employee name"
                                enterButton="Search"
                                size="large"
                                style={{
                                    fontSize: 16,
                                    color: '#c6a34f',
                                }}
                                onSearch={handleSearchkeywordOnChange}
                            />
                        </Space>
                    </div>
                </div>
                <br />
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