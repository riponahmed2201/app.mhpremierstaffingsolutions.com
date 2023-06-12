import React, { useState } from 'react'
import jwt_decode from "jwt-decode";

import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useFormik } from 'formik';

// import Navbar from '../../../layouts/frontend/Navbar';

function AdminLogin() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            email: yup.string().required(),
            password: yup.string().min(6, "Password must have at least 6 characters").required(),
        }),
        onSubmit: async (values, resetForm) => {
            setLoading(true);
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/login`, values);

                if (res?.data?.statusCode === 200) {

                    localStorage.setItem("accessToken", res?.data?.token);
                    localStorage.setItem("loginData", JSON.stringify(res?.data));

                    const jwtDecode = jwt_decode(res?.data?.token);

                    if (jwtDecode && (jwtDecode.admin || jwtDecode.hr || jwtDecode.isMhEmployee)) {
                        setError(undefined);
                        setLoading(false);
                        navigate('/admin/dashboard');

                    } else if (jwtDecode && jwtDecode.client) {
                        setError(undefined);
                        setLoading(false);
                        navigate('/client-dashboard');
                    } else {
                        setError(undefined);
                        setLoading(false);
                        navigate('/login');
                    }

                    // resetForm({ values: "" });

                } else if (res?.data?.statusCode === 400) {
                    setError(res?.message);
                    setLoading(false);
                } else if (res?.statusCode === 500) {
                    setError(res?.message);
                    setLoading(false);
                }
            } catch (error) {
                setError(error?.response?.data?.message);
                setLoading(false);
            }
        },
    });

    return (
        <div className='py-5' style={{ background: "#f7f7fc", backgroundImage: `url(background.png)`, minHeight: "100vh" }}>
            <br />
            <br />
            <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                <h3 className='text-center'>Login</h3>
                <p className='text-center'>Login to your account to continue</p>

                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <div className="form-group mb-3">
                            <label htmlFor="email" className="form-label"><span className='text-danger'>*</span>Email</label>
                            <input type="text" className='form-control' onChange={formik.handleChange}
                                value={formik.values.email} name='email' placeholder="Enter your email" id="email" />
                            {formik.touched.email && formik.errors.email && <span style={{ color: 'red' }}>{formik.errors.email}</span>}
                        </div>

                        <div className="form-group mb-3">
                            <label htmlFor="password" className="form-label"><span className='text-danger'>*</span>Password</label>
                            <input type="password" className='form-control' onChange={formik.handleChange}
                                value={formik.values.password} name='password' placeholder="Enter your password" id="password" />
                            {formik.touched.password && formik.errors.password && <span style={{ color: 'red' }}>{formik.errors.password}</span>}
                        </div>
                    </div>
                    <div className='mb-3 mt-3 text-end'>
                        <Link to="/forgot-password">Forgot Password?</Link>
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

                    <button
                        disabled={loading}
                        className='border-0 px-3 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5'
                        type="submit"
                        style={{ background: "#C6A34F" }}
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

                    <br />
                    <div className='mb-3 mt-3 text-end'>
                        <p>New Here? <Link to="/register">Create an Account</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminLogin