import React, { useState, useEffect, useCallback } from 'react';
import { responseNotification } from '../../../utils/notifcation';
import { Select, Switch } from 'antd';
import _ from "lodash";
import { Link, useLocation } from 'react-router-dom';
import { getPage } from '../../../utils/getPage';
import { fetchClientListHandler } from '../../../api/employee';
import Loader from '../../loadar/Loader';
import { statusOptions } from '../../../common/statusOptions';
import { token } from '../../../utils/authentication';

const { Option } = Select;

function ClientList() {

    const loc = useLocation();
    const [limit] = useState(20);
    const [getClient, setClient] = useState([]);
    const [loading, setLoading] = useState(false);
    const [getName, setName] = useState(undefined);
    const params = new URLSearchParams(window.location.search);
    const [getStatus, setStatus] = useState(undefined);
    let serialNumber = Number(params.get("page"));

    const fetchClient = useCallback(async () => {
        setLoading(true);

        await fetchClientListHandler(limit, getName, getStatus, loc?.search).then((res) => {
            if (res?.status === 200) {
                setLoading(false);
                setClient(res?.data)
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
                        fetchClient();
                    } else if (res?.statusCode === 400) {
                        responseNotification("Bad request", "danger");
                    }
                });
        }
    },
        [fetchClient]
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
                            <th className="min-w-150px">Restaurant Name</th>
                            <th className="min-w-150px">Email</th>
                            <th className="min-w-150px">Phone Number</th>
                            <th className="min-w-150px">Restaurant Address</th>
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
                        ) : getClient?.users?.length ? (
                            _.map(getClient?.users, (item, index) => (
                                <tr key={item?._id}>
                                    <td>
                                        {" "}
                                        {getClient?.count *
                                            (typeof serialNumber === "number"
                                                ? serialNumber >= 1
                                                    ? serialNumber - 1
                                                    : 0
                                                : 0) +
                                            index +
                                            1}
                                    </td>
                                    <td>{item?.restaurantName}</td>
                                    <td>{item?.email}</td>
                                    <td>{item?.phoneNumber}</td>
                                    <td>{item?.restaurantAddress}</td>
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
                                            to='/admin/client-details'
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
                </table>
            </div>
        </div>
    )
}

export default ClientList