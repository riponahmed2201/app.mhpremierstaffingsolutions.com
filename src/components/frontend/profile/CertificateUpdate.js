import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Upload, Button, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

import { responseNotification } from '../../../utils/notifcation';
import { certificateUploadHandler } from '../../../api/employee/profileUpdateImage';

function ProfileUpdate() {

    const [summaryPdf, setSummaryPdf] = useState([]);
    const [summaryPdfFileShow, setSummaryPdfFileShow] = useState(undefined);

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const navigate = useNavigate();

    const { id } = useParams()

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
                        responseNotification("Certificate updated successfully", "success");
                        setSummaryPdf([]);

                        navigate('/employee-welcome');

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

    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12' style={{ background: "#000000", minHeight: '100vh' }}>
                <div style={{ padding: "20px 30px", marginTop: '190px' }}>
                    <br />
                    <br />
                    <h4 className='class="mt-40 text-center mb-25 text-white'>WELCOME TO MH PREMIER STAFFING SOLUTIONS</h4>
                    <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center' }}>
                        <img style={{ width: 'auto', height: 'auto', objectFit: "cover" }} src='/logo.png' alt='img' />
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-sm-12' style={{ background: "#ffffff" }}>
                <div className='bg-white'>
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/register">Client Register</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link className="nav-link" to="/employee-register">Employee Register</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <br />

                        <h4 className='text-left mb-4'>Employee Profile Update</h4>

                        <Form
                            className="ant-form ant-form-vertical"
                            layout="vertical"
                            onFinish={onFinish}
                        >
                            <div className='col-12'>
                                <div className='row'>

                                    <div className="col-md-6">
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

                                    <div className="col-md-6">
                                        <Form.Item name="summaryPdf" className="p-1 m-0" label="Certificate Attachment">
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
                                </div>
                            </div>

                            {getError ? (
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="error-message">
                                            <p className="text-danger">{getError}</p>
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
                                        {!loading && "Finished"}
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

export default ProfileUpdate