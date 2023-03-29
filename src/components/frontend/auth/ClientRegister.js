import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useFormik } from 'formik';

import './Register.css';

function ClientRegister() {

    const [referPerson, setReferPerson] = useState([]);
    const [sourceFrom, setSourceFrom] = useState([]);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            restaurantName: '',
            restaurantAddress: '',
            sourceFrom: '',
            referPersonId: '',
            phoneNumber: '',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            restaurantName: yup.string().required(),
            restaurantAddress: yup.string().required(),
            sourceFrom: yup.string().required(),
            referPersonId: yup.string().required(),
            phoneNumber: yup.string().required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, "Password must have at least 6 characters").required(),
        }),
        onSubmit: async (values, resetForm) => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/client-register`, values);

                if (res?.data?.statusCode === 201) {
                    console.log("response: ", res?.data?.statusCode);
                    // resetForm({ values: "" });
                    navigate('/login')
                } else {
                    navigate('/register')
                }
            } catch (error) {

            }
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/list?isReferPerson=YES`);
                setReferPerson(response?.data?.users);
            } catch (error) {

            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        const fetchSourceFromData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/sources/list-for-dropdown`);
            setSourceFrom(response?.data?.sources);
        };

        fetchSourceFromData();
    }, []);

    return (
        <div className='row'>
            <div className='col-md-6 col-sm-12' style={{ background: "#000000", minHeight: "100vh" }}>
                <div style={{ padding: "20px 30px", marginTop: '190px' }} >
                    <br />
                    <br />
                    <h4 className='class="mt-40 text-center mb-25 text-white'>WELCOME TO MH PREMIER STAFFING SOLUTIONS</h4>
                    <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center' }}>
                        <img style={{ width: 'auto', height: 'auto', objectFit: "cover" }} src='logo.png' alt='img' />
                    </div>
                </div>
            </div>
            <div className='col-md-6 col-sm-12' style={{ background: "#ffffff" }}>
                <div className='bg-white'>
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/client-register">Client Register</NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/employee-register">Employee Register</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <br />

                        <h4 className='text-left mb-4'>Client Register Here</h4>

                        <form onSubmit={formik.handleSubmit}>
                            <div className='col-12'>
                                <div className='row'>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="restaurantName"> <span className='text-danger'>*</span> Restaurant name</label>
                                        <input type="text" className='form-control mt-2'
                                            placeholder="Enter your restaurant name"
                                            name="restaurantName"
                                            onChange={formik.handleChange} value={formik.values.restaurantName} />

                                        {formik.touched.restaurantName && formik.errors.restaurantName &&
                                            <span style={{ color: 'red' }}>{formik.errors.restaurantName}</span>}

                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="restaurantAddress"><span className='text-danger'>*</span>Restaurant address</label>
                                        <input type="text" className='form-control mt-2' name='restaurantAddress'
                                            onChange={formik.handleChange} value={formik.values.restaurantAddress}
                                            placeholder="Enter your restaurant address" />

                                        {formik.touched.restaurantAddress && formik.errors.restaurantAddress &&
                                            <span style={{ color: 'red' }}>{formik.errors.restaurantAddress}</span>}

                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="sourceFrom"><span className='text-danger'>*</span>Where do you find us?</label>
                                        <select name='sourceFrom'
                                            onChange={formik.handleChange} value={formik.values.sourceFrom} className="form-select mt-2">
                                            <option value="">Please select</option>

                                            {sourceFrom?.map((item, index) => (
                                                <option key={index} value={item?._id}>{item?.name}</option>
                                            ))}

                                        </select>


                                        {formik.touched.sourceFrom && formik.errors.sourceFrom &&
                                            <span style={{ color: 'red' }}>{formik.errors.sourceFrom}</span>}

                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="referPersonName"><span className='text-white'>*</span>Refer from</label>
                                        <select name='referPersonId'
                                            onChange={formik.handleChange} value={formik.values.referPersonId} className="form-select mt-2">
                                            <option value="">Please select</option>

                                            {referPerson?.map((refer, index) => (
                                                <option key={index} value={refer?._id}>{refer?.name}</option>
                                            ))}

                                        </select>

                                        {formik.touched.referPersonId && formik.errors.referPersonId &&
                                            <span style={{ color: 'red' }}>{formik.errors.referPersonId}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="email"><span className='text-danger'>*</span>Email</label>
                                        <input type="text" onChange={formik.handleChange} name='email' value={formik.values.email}
                                            className='form-control mt-2' placeholder="Enter your email" id="email" />

                                        {formik.touched.email && formik.errors.email &&
                                            <span style={{ color: 'red' }}>{formik.errors.email}</span>}

                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="phoneNumber"><span className='text-danger'>*</span>Phone number</label>
                                        <input type="text" className='form-control mt-2' name='phoneNumber' placeholder="Enter your phone number"
                                            onChange={formik.handleChange} value={formik.values.phoneNumber} />

                                        {formik.touched.phoneNumber && formik.errors.phoneNumber &&
                                            <span style={{ color: 'red' }}>{formik.errors.phoneNumber}</span>}

                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="password"><span className='text-danger'>*</span>Password</label>
                                        <input type="password" className='form-control mt-2' name='password' placeholder="Enter your password"
                                            onChange={formik.handleChange} value={formik.values.password} />
                                        {formik.touched.password && formik.errors.password && <span style={{ color: 'red' }}>{formik.errors.password}</span>}
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="col-12">
                                <button type="submit" className="btn" style={{ background: '#C6A34F', color: 'white' }}>Register</button>
                            </div>
                            <div className='mb-3 mt-3 text-left'>
                                <p> Already have an account? <Link to="/login">Sign in now</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientRegister