import React, { useState, useEffect, useCallback } from 'react';
import { responseNotification } from '../../../utils/notifcation';
import { Input, Select, Switch, Table, DatePicker, Space } from 'antd';
import _ from "lodash";
import moment from "moment";
import { Link, useLocation } from 'react-router-dom';
import { getPage } from '../../../utils/getPage';
import { fetchClientListHandler } from '../../../api/employee';
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
        title: 'Restaurant Name',
        dataIndex: 'restaurantName',
        sorter: (a, b) => a.restaurantName.length - b.restaurantName.length,
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
        title: 'Restaurant Address',
        dataIndex: 'restaurantAddress',
    },
    {
        title: 'Discount(%)',
        dataIndex: 'clientDiscount',
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

function ClientList() {

    const loc = useLocation();
    const [limit] = useState(20);
    const [getClient, setClient] = useState([]);
    const [loading, setLoading] = useState(false);
    const [getName, setName] = useState(undefined);
    const [getStatus, setStatus] = useState(undefined);
    const [getFilterFromDate, setFilterFromDate] = useState(undefined);
    const [getFilterToDate, setFilterToDate] = useState(undefined);

    const fetchClient = useCallback(async () => {
        setLoading(true);

        await fetchClientListHandler(limit, getName, getStatus, loc?.search).then((res) => {
            if (res?.status === 200) {
                setLoading(false);
                setClient(res?.data?.users);
            } else {
                setLoading(false);
            }
        });
    }, [limit, loc?.search, getName, getStatus]);
    useEffect(() => {
        fetchClient();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchClient, getPage(loc.search)]);

    const handleChangeStatus = (value) => {
        setStatus(value);
    };

    //search
    const handleSearchkeywordOnChange = (e) => {
        setName(e?.target?.value);
    };

    const data1 = [];
    _.map(getClient, (item, index) => {
        data1.push({
            key: index + 1,
            restaurantName: item.restaurantName,
            email: item.email,
            phoneNumber: item.phoneNumber,
            restaurantAddress: item.restaurantAddress,
            clientDiscount: item.clientDiscount,
            active: item.active ? 'YES' : 'NO',
            status: (
                <>
                    <Switch
                        size="small"
                        defaultChecked={item?.active === true}
                        onChange={(e) => {
                            onClientStatusChange(item?._id, e);
                        }}
                    />
                </>
            ),
            action: (
                <>
                    <div className='btn-group'>
                        <Link to={`/admin/client-details/${item._id}`} style={{ background: '#C6A34F', color: 'white' }} className='btn btn-sm'>
                            Edit
                        </Link>
                    </div>
                </>
            ),
        });
    });

    const onClientStatusChange = useCallback(async (value, e) => {
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
                        fetchClient();
                    } else if (res?.statusCode === 400) {
                        responseNotification("Bad request", "danger");
                    }
                });
        }
    },
        [fetchClient]
    );

    const handleExportData = async () => {

        try {

            // &fromDate=${getFilterFromDate}&toDate=${getFilterToDate}
            const responseData = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users?skipLimit=YES&requestType=CLIENT`,
                {
                    headers: {
                        Authorization: `Bearer ${token()}`,
                    },
                }
            );

            const data = responseData?.data?.users?.map((item) => {
                return {
                    RestaurantName: item?.restaurantName,
                    RestaurantAddress: item?.restaurantAddress,
                    Email: item?.email,
                    PhoneNumber: item?.phoneNumber,
                    ClientIDNumber: item?.userIdNumber,
                    Discount: item?.clientDiscount
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
                    <h3 className='mb-4 title'>Client List</h3>
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

export default ClientList