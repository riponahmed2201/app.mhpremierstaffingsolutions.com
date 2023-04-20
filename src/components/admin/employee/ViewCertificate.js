import React, { useState, useEffect, useCallback } from 'react';
import { responseNotification } from '../../../utils/notifcation';
import { Button, Input, Form, Table, Drawer, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from "axios";
import _ from "lodash";
import { useParams } from 'react-router-dom';
import { certificateUploadHandler } from '../../../api/employee';
import Loader from '../../loadar/Loader';
import { token } from '../../../utils/authentication';

const columns = [
    {
        title: '#',
        dataIndex: 'key',
    },
    {
        title: 'Name',
        dataIndex: 'certificateName'
    },
    {
        title: 'Attachment',
        dataIndex: 'attachment',
    },
    {
        title: 'Action',
        dataIndex: 'action',
    },
];

function ViewCertificate() {

    const { id } = useParams();

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();
    const [getSingleEmployeeDetails, setSingleEmployeeDetails] = useState([]);
    const [open, setOpen] = useState(false);
    const [summaryPdf, setSummaryPdf] = useState([]);
    const [summaryPdfFileShow, setSummaryPdfFileShow] = useState(undefined);

    const [form] = Form.useForm();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const data1 = [];

    _.map(getSingleEmployeeDetails?.certificates, (item, index) => {
        data1.push({
            key: index + 1,
            certificateName: item.certificateName,
            attachment: (
                <>
                    <a target='_blank' href={`${process.env.REACT_APP_ASSETs_BASE_URL}/` + item?.attachment}>Attachment</a>
                </>
            ),
            action: (
                <>
                    <Button type="primary" danger
                        onClick={() => removeCertificateInfo(item?.certificateId)}>
                        Delete
                    </Button>
                </>
            ),
        });
    });

    //Fetch refer person list for dropdown
    const fetchSingleEmployeeData = useCallback(async () => {
        try {

            setLoading(true);

            const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token()}`,
                    },
                }
            );

            setSingleEmployeeDetails(res?.data?.details);

            setError(res?.data?.errors?.[0]?.msg);
            setLoading(false);

        } catch (error) {
            setLoading(false);
            setError(error?.message);
        }

    }, []);

    useEffect(() => {
        fetchSingleEmployeeData();
    }, [id]);

    const onFinish = async (values) => {

        if (true) {
            setLoading(true);

            const file = new FormData();
            file.append("certificateName", values?.certificateName);
            file.append("attachment", summaryPdf?.[0].originFileObj);
            file.append("id", id);

            await certificateUploadHandler(file)
                .then((res) => res.json())
                .then((res) => {
                    console.log("Response: ", res);
                    if (res.statusCode === 200) {
                        responseNotification("Certificate added successfully", "success");
                        setSummaryPdf([]);
                        onClose();
                        setLoading(false);
                        window.location.reload();
                    } else if (res?.statusCode === 400) {
                        responseNotification(
                            "Bad request please upload valid file or check you internet",
                            "warning"
                        );
                        setError(res?.errors?.[0]?.msg);
                        setLoading(false);
                    } else {
                        setLoading(false);
                        setError(res?.message);
                    }
                })
                .catch((err) => {
                    console.error(err);
                    setLoading(false);
                });
        }
    };

    //certificate attachment onchange
    const summaryPdfChange = ({ fileList: newFileList }) => {
        setSummaryPdf(newFileList);
        setSummaryPdfFileShow(newFileList[0]?.originFileObj?.name);
    };

    //delete certificate info here 
    const removeCertificateInfo = useCallback(async (certificateId) => {

        const unicodeUri = `${process.env.REACT_APP_API_BASE_URL}`;

        const receivedCertificateDeleteFields = { id, certificateId };

        if (true) {
            await fetch(`${unicodeUri}/users/certificate/remove`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token()}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(receivedCertificateDeleteFields),
            })
                .then((res) => res.json())
                .then((res) => {
                    if (res?.statusCode === 200) {
                        responseNotification("Employee certificate removed successfully", "success");
                        fetchSingleEmployeeData();
                    } else if (res?.statusCode === 400) {
                        responseNotification("Bad request", "danger");
                    }
                });
        }
    },
        [fetchSingleEmployeeData]
    );

    return (
        <div className="container-fluid px-4">
            <div className='row mt-4'>
                <div className='d-flex justify-content-between'>
                    <h3 className='mb-4 title'>Employee Certificate List</h3>
                    <Button type="primary" style={{ background: '#C6A34F', color: 'white' }} className='ml-5' onClick={showDrawer}>
                        Add Certificate
                    </Button>
                </div>
            </div>

            <div className='card'>
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
            {/* Add Drawer  */}
            <Drawer title="Add new position" width={520} closable={false} onClose={onClose} open={open}>
                <div className="drawer-toggle-wrapper">
                    <div className="drawer-toggle-inner-wrapper">
                        <Form
                            className="ant-form ant-form-vertical"
                            layout="vertical"
                            onFinish={onFinish}
                            form={form}
                        >
                            <div className="col-md-12">
                                <Form.Item
                                    label="Certificate Name"
                                    name="certificateName"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please enter certificate name',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Enter name" className="ant-input ant-input-lg" />
                                </Form.Item>
                            </div>

                            <div className="col-md-12">
                                <Form.Item name="summaryPdf" className="p-1 m-0" label="Upload Attachment">
                                    <Upload
                                        listType="picture"
                                        defaultFileList={[...summaryPdf]}
                                        fileList={summaryPdf}
                                        onChange={summaryPdfChange}
                                        maxCount={1}
                                        accept=".pdf, .PDF, docs, DOCS, .doc, .DOC, .docx"
                                    >
                                        <Button icon={<UploadOutlined />}>
                                            {" "}
                                            {!summaryPdfFileShow ? "Upload" : "Uploaded"}{" "}
                                        </Button>
                                    </Upload>

                                </Form.Item>
                            </div>
                            <br />
                            {getError ? (
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="error-message">
                                            <p className="error-text-color">{getError}</p>
                                        </div>
                                    </div>
                                </div>
                            ) : undefined}

                            <br />
                            <div className="col-lg-12">
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
                        </Form>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default ViewCertificate