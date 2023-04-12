import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

import { Form } from 'antd';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import './Media.css';

import BackIcon from '../../../assets/frontend/images/login_page/Group 685.png';
import Logo from '../../../assets/frontend/images/login_page/Logo.png';
import Ellipse from '../../../assets/frontend/images/login_page/Ellipse 70.png';
import Ellipse69 from '../../../assets/frontend/images/login_page/Ellipse 69.png';
import Profile from '../../../assets/frontend/images/login_page/Profile.png';
import Icon from '../../../assets/frontend/images/login_page/Icon.png';
import Vector from '../../../assets/frontend/images/login_page/Vector.png';
import { responseNotification } from '../../../utils/notifcation';
import { loginHandler } from '../../../api/auth';

function Login() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const [form] = Form.useForm();

    const onFinish = async (values) => {

        const receivedLoginFields = {
            email: values?.email,
            password: values?.password,
        };

        if (receivedLoginFields) {

            setLoading(true);

            await loginHandler(receivedLoginFields)
                .then((res) => res.json())
                .then((res) => {
                    if (res.statusCode === 200) {
                        responseNotification(res?.message, "success");
                        form.resetFields();
                        
                        localStorage.setItem("accessToken", res?.token);

                        navigate('/admin/dashboard');
                        setLoading(false);

                    } else if (res?.statusCode === 400) {
                        setError(res?.message);
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

    return (
        <section className="total_wrapper">
            <div className="container-fluid">
                <div className="row">
                    {/*leftpart start*/}
                    <div className="col-lg-6 col-md-6 left_part">
                        <div className="row left_part_wrapper">
                            <div className="button_wrapper">
                                <Link to="/">
                                    <img src={BackIcon} className="img-fluid" alt="logo" /></Link>
                            </div>
                            <div className="logo_wrapper text-center">
                                <img className="img-fluid" src={Logo} alt="logo" />
                            </div>
                            <div className="premier_stuffing_wrapper text-center">
                                <h1>PREMIER STAFFING SOLUTIONS</h1>
                            </div>
                            <div className="mh_premier_wrapping text-center">
                                <p>
                                    MH PREMIER STAFFING SOLUTIONS helps you hire great &amp; experienced
                                    workers at a moment's notice
                                </p>
                            </div>
                        </div>
                    </div>
                    {/*leftpart end*/}
                    {/*Right Part Start*/}
                    <div className="col-lg-6 col-md-6 right_part">
                        <div className="container custom_for_320">
                            <div className="row right_part_wrapper ">
                                <div className="first_eclips_img">
                                    <img className="img-fluid" src={Ellipse} alt="logo" />
                                </div>
                                {/* Form part start */}
                                <div className="form_part ">
                                    <div className="card custom_card " style={{ width: '70%' }}>
                                        <div className="card-body card-body_custom">
                                            <h5 className="card-title-custom text-center">Welcome back!</h5>
                                            <div className="form_wrapper">

                                                <Form
                                                    className="ant-form ant-form-vertical"
                                                    layout="vertical"
                                                    onFinish={onFinish}
                                                    form={form}
                                                >

                                                    <div className="mb-3">
                                                        <Form.Item
                                                            name="email"
                                                            hasFeedback
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Please enter first name',
                                                                },
                                                            ]}
                                                        >
                                                            <div>
                                                                <div className="contact_logo_img">
                                                                    <img src={Profile} className="img-fluid " alt="logo" />
                                                                </div>
                                                                <input placeholder="Enter email" type="email" className="form-control form-control-custom" />
                                                            </div>

                                                        </Form.Item>
                                                    </div>

                                                    <div className="mb-3">
                                                        <Form.Item
                                                            name="password"
                                                            hasFeedback
                                                            rules={[
                                                                {
                                                                    required: true,
                                                                    message: 'Please enter first name',
                                                                },
                                                            ]}
                                                        >

                                                            <div>
                                                                <div className="password_logo_img">
                                                                    <img src={Icon} className="img-fluid password_logo" alt="logo" />
                                                                </div>
                                                                <input placeholder="Password" type="password" className="form-control form-control-custom" id="exampleInputPassword1" />
                                                                <div className="password_icon_wrapper">
                                                                    <img src={Vector} className="img-fluid" alt="logo" />
                                                                </div>
                                                            </div>
                                                        </Form.Item>
                                                    </div>

                                                    <div className="mb-3 form-check">
                                                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                        <div className="save_forget_pass_wrapper d-flex justify-content-between">
                                                            <label className="form-check-label check_me_out_custom" htmlFor="exampleCheck1">Save Password</label>
                                                            <Link to="/forgot-password" className="forget_password_custom">Forget Password</Link>
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

                                                    <Form.Item >
                                                        <button
                                                            disabled={loading}
                                                            className='btn login_button'
                                                            type="submit"
                                                        >
                                                            {!loading && "Login"}
                                                            {loading && (
                                                                <span
                                                                    className="indicator-progress"
                                                                    style={{ display: "block" }}
                                                                >
                                                                    Please wait...
                                                                    <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                                                                </span>
                                                            )}
                                                        </button>
                                                    </Form.Item>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Register Section start*/}
                                <div className="accountandregisterwrapper text-center">
                                    <span className="donthaveaccounttext">Don’t have an account?</span><Link to="/client-register">Register</Link>
                                </div>
                                {/* Register Section end*/}
                                {/* Form part end */}
                                {/* last eclips image start */}
                                <div className="last_eclips_img_wrapper">
                                    <img src={Ellipse69} alt="logo" />
                                </div>
                                {/* last eclips image end*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*Right Part End*/}
            </div>
        </section>

    )
}

export default Login