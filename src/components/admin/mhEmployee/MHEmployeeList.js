import React, { useState, useEffect, useCallback } from 'react';
import { responseNotification } from '../../../utils/notifcation';
import { Input, Select, Switch, Table } from 'antd';
import _ from "lodash";
import { Link, useLocation } from 'react-router-dom';
import { getPage } from '../../../utils/getPage';
import Loader from '../../loadar/Loader';
import { token } from '../../../utils/authentication';
import { fetchMhEmployeeListHandler } from '../../../api/addMHEmployee';

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
        title: 'Role Name',
        dataIndex: 'role',
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

function MHEmployeeList() {

    const loc = useLocation();
    const [limit] = useState(20);
    const [getEmployee, setEmployee] = useState([]);
    const [loading, setLoading] = useState(false);
    const [getName, setName] = useState(undefined);
    const [getStatus, setStatus] = useState(undefined);

    const fetchEmployee = useCallback(async () => {
        setLoading(true);

        await fetchMhEmployeeListHandler(limit, getName, getStatus, loc?.search).then((res) => {
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
    }, [fetchEmployee, getPage(loc.search)]);

    //search
    const handleSearchkeywordOnChange = (value) => {
        setName(value);
    };

    const data1 = [];
    _.map(getEmployee, (item, index) => {
        data1.push({
            key: index + 1,
            name: item?.name,
            email: item?.email,
            phoneNumber: item?.phoneNumber,
            role: item?.role,
            active: item?.active ? 'YES' : 'NO',
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
                        <Link to={`/admin/edit-mh-employee/${item._id}`} className='btn btn-sm'  style={{ background: '#C6A34F', color: 'white' }}>
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
                    <h3 className='mb-4 title'>MH Employee List</h3>
                </div>
            </div>
            <div className='card'>
                <div className="card-header d-flex justify-content-between">
                    <Search
                        placeholder="Search"
                        allowClear
                        size="large"
                        onChange={handleSearchkeywordOnChange}
                        style={{
                            width: 304
                        }}
                    />

                    <Select size="large" allowClear placeholder="Active" onChange={handleChangeStatus}>
                        <Option value="YES">YES</Option>
                        <Option value="NO">NO</Option>
                    </Select>
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

export default MHEmployeeList