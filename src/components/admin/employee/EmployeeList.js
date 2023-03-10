import React, { useState, useEffect, useCallback } from 'react';
import { responseNotification } from '../../../utils/notifcation';
import { Select, Switch } from 'antd';
import _ from "lodash";
import { Link, useLocation } from 'react-router-dom';
import { getPage } from '../../../utils/getPage';
import { fetchEmployeeListHandler } from '../../../api/employee';
import Loader from '../../loadar/Loader';
import { statusOptions } from '../../../common/statusOptions';
import { token } from '../../../utils/authentication';
import PaginationList from '../../../common/paginationList';

const { Option } = Select;

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
                setEmployee(res?.data)
            } else {
                setLoading(false);
            }
        });
    }, [limit, loc?.search, getName, getStatus]);
    useEffect(() => {
        fetchEmployee();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [fetchEmployee, getPage(loc.search)]);

    const handleChangeStatus = (value) => {
        setStatus(value);
    };

    const onTrimsStatusChange = useCallback(async (value, e) => {
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
                <table className="table table-row-bordered table-hover">
                    <thead>
                        <tr className="fw-bolder text-muted">
                            <th>#</th>
                            <th className="min-w-150px">Name</th>
                            <th className="min-w-150px">Email</th>
                            <th className="min-w-150px">Phone Number</th>
                            <th className="min-w-140px">Active</th>
                            <th className="min-w-140px text-center">Status</th>
                            <th className="min-w-100px text-end">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td>
                                    <Loader />
                                </td>
                            </tr>
                        ) : getEmployee?.users?.length ? (
                            _.map(getEmployee?.users, (item, index) => (
                                <tr key={item?._id}>
                                    <td>
                                        {getEmployee?.count *
                                            (typeof serialNumber === "number"
                                                ? serialNumber >= 1
                                                    ? serialNumber - 1
                                                    : 0
                                                : 0) +
                                            index +
                                            1}
                                    </td>
                                    <td>{item?.name}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.phoneNumber}</td>
                                    <td>{item?.active === true ? "YES" : "NO"}</td>
                                    <td className='text-center'>
                                        <Switch
                                            size="small"
                                            defaultChecked={item?.active === true}
                                            onChange={(e) => {
                                                onTrimsStatusChange(item?._id, e);
                                            }}
                                        />
                                    </td>
                                    <td className="text-end">
                                        <Link
                                            className="btn btn-sm btn-info"
                                            to='/admin/employee-details'
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td>Employee not found</td>
                            </tr>
                        )}
                    </tbody>

                    <PaginationList
                        {...getEmployee?.users}
                        limit={limit}
                        page={getPage(loc.search)}
                    />

                </table>
            </div>
        </div>
    )
}

export default EmployeeList