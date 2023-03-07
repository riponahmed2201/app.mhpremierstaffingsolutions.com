import React, { useState, useEffect } from 'react';
import * as yup from "yup";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useFormik } from 'formik';

// import Navbar from '../../../layouts/frontend/Navbar'

function EmployeeRegister() {

    const [referPerson, setReferPerson] = useState([]);
    const [skill, setSkill] = useState([]);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            positionId: '',
            gender: '',
            dateOfBirth: '',
            email: '',
            phoneNumber: '',
            countryName: '',
            presentAddress: '',
            permanentAddress: '',
            language: '',
            higherEducation: '',
            licensesNo: '',
            emmergencyContact: '',
            skillId: '',
            sourceFrom: '',
            employeeExperience: ''
        },
        validationSchema: yup.object({
            name: yup.string().required(),
            positionId: yup.string().required(),
            gender: yup.string().required(),
            dateOfBirth: yup.string().required(),
            email: yup.string().email().required(),
            phoneNumber: yup.string().required(),
            countryName: yup.string().required(),
            presentAddress: yup.string().required(),
            permanentAddress: yup.string().required(),
            language: yup.string().required(),
            higherEducation: yup.string().required(),
            licensesNo: yup.string().required(),
            emmergencyContact: yup.string().required(),
            skillId: yup.string().required(),
            sourceFrom: yup.string().required(),
            employeeExperience: yup.string().required(),
        }),
        onSubmit: async (values, resetForm) => {
            const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/users/employee-register`, values);

            if (res?.data?.statusCode === 201) {
                // console.log("response: ", res?.data?.statusCode);
                resetForm({ values: "" });
                navigate('/login')
            } else {
                navigate('/employee-register')
            }
        },
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/list?isReferPerson=YES`);
            setReferPerson(response?.data?.users);
        };

        fetchData();
    }, []);


    useEffect(() => {
        const fetchSkillData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/skills`);
            setSkill(response?.data?.skills);
        };

        fetchSkillData();
    }, []);


    return (
        <div>
            {/* <Navbar /> */}
            <div className='row'>
                <div className='col-md-6 col-sm-12' style={{ background: "#f7f7fc", minHeight: "100vh" }}>
                    <div style={{ padding: "20px 30px" }}>
                        <br />
                        <br />
                        <h2 className='class="mt-40 text-center mb-25'>Welcome to MH</h2>
                        <div className='mt-5' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', justifyItems: 'center' }}>
                            <img style={{ width: 'auto', height: 'auto', objectFit: "cover" }} src='logo.png' alt='img' />
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12' style={{ background: "#ffffff" }}>
                    <div className='bg-white p-4'>
                        <br />
                        <br />
                        <h2 className='text-left mb-4'>Create New Account</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='col-12'>
                                <div className='row'>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="name"> <span className='text-danger'>*</span> Name</label>
                                        <input type="text" className='form-control mt-2'
                                            placeholder="Enter your name"
                                            name="name"
                                            onChange={formik.handleChange} value={formik.values.name} />
                                        {formik.touched.name && formik.errors.name &&
                                            <span style={{ color: 'red' }}>{formik.errors.name}</span>}
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
                                        <label htmlFor="gender"><span className='text-danger'>*</span>Gender</label>
                                        <select name='gender'
                                            onChange={formik.handleChange} value={formik.values.gender} className="form-select mt-2">
                                            <option value="">Please select</option>
                                            <option value="MALE">MALE</option>
                                            <option value="FEMALE">FEMALE</option>
                                        </select>
                                        {formik.touched.gender && formik.errors.gender &&
                                            <span style={{ color: 'red' }}>{formik.errors.gender}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="dateOfBirth"><span className='text-danger'>*</span>Date of birth</label>
                                        <input type="text" className='form-control mt-2' name='dateOfBirth' placeholder="Enter your date of birth"
                                            onChange={formik.handleChange} value={formik.values.dateOfBirth} />
                                        {formik.touched.dateOfBirth && formik.errors.dateOfBirth &&
                                            <span style={{ color: 'red' }}>{formik.errors.dateOfBirth}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="presentAddress"><span className='text-danger'>*</span>Present address</label>
                                        <input type="text" className='form-control mt-2' name='presentAddress' placeholder="Enter your present address"
                                            onChange={formik.handleChange} value={formik.values.presentAddress} />
                                        {formik.touched.presentAddress && formik.errors.presentAddress &&
                                            <span style={{ color: 'red' }}>{formik.errors.presentAddress}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="permanentAddress"><span className='text-danger'>*</span>Permanent address</label>
                                        <input type="text" className='form-control mt-2' name='permanentAddress' placeholder="Enter your permanent address"
                                            onChange={formik.handleChange} value={formik.values.permanentAddress} />
                                        {formik.touched.permanentAddress && formik.errors.permanentAddress &&
                                            <span style={{ color: 'red' }}>{formik.errors.permanentAddress}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="countryName"><span className='text-danger'>*</span>Country name</label>
                                        <select name='countryName'
                                            onChange={formik.handleChange} value={formik.values.countryName} className="form-select mt-2">
                                            <option value="">Please select</option>
                                            <option value="BANGLADESH">BANGLADESH</option>
                                            <option value="INDIA">INDIA</option>
                                        </select>
                                        {formik.touched.countryName && formik.errors.countryName &&
                                            <span style={{ color: 'red' }}>{formik.errors.countryName}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="language"><span className='text-danger'>*</span>Language</label>
                                        <select name='language'
                                            onChange={formik.handleChange} value={formik.values.language} className="form-select mt-2">
                                            <option value="">Please select</option>
                                            <option value="ENGLISH">ENGLISH</option>
                                            <option value="BANGLA">BANGLA</option>
                                        </select>
                                        {formik.touched.language && formik.errors.language &&
                                            <span style={{ color: 'red' }}>{formik.errors.language}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="higherEducation"><span className='text-danger'>*</span>Higher education</label>
                                        <input type="text" className='form-control mt-2' name='higherEducation'
                                            onChange={formik.handleChange} value={formik.values.higherEducation}
                                            placeholder="Enter your higher education" />
                                        {formik.touched.higherEducation && formik.errors.higherEducation &&
                                            <span style={{ color: 'red' }}>{formik.errors.higherEducation}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="licensesNo"><span className='text-danger'>*</span>Licenses no</label>
                                        <input type="text" className='form-control mt-2' name='licensesNo'
                                            onChange={formik.handleChange} value={formik.values.licensesNo}
                                            placeholder="Enter your licenses no" />
                                        {formik.touched.licensesNo && formik.errors.licensesNo &&
                                            <span style={{ color: 'red' }}>{formik.errors.licensesNo}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="emmergencyContact"><span className='text-danger'>*</span>Emmergency contact</label>
                                        <input type="text" className='form-control mt-2' name='emmergencyContact'
                                            onChange={formik.handleChange} value={formik.values.emmergencyContact}
                                            placeholder="Enter your emmergency contact" />
                                        {formik.touched.emmergencyContact && formik.errors.emmergencyContact &&
                                            <span style={{ color: 'red' }}>{formik.errors.emmergencyContact}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="employeeExperience"><span className='text-danger'>*</span>Experience</label>
                                        <input type="text" className='form-control mt-2' name='employeeExperience'
                                            onChange={formik.handleChange} value={formik.values.employeeExperience}
                                            placeholder="Enter your emmergency contact" />
                                        {formik.touched.employeeExperience && formik.errors.employeeExperience &&
                                            <span style={{ color: 'red' }}>{formik.errors.employeeExperience}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="skillId"><span className='text-white'>*</span>Skill</label>
                                        <select name='skillId'
                                            onChange={formik.handleChange} value={formik.values.skillId} className="form-select mt-2">
                                            <option value="">Please select</option>
                                            {skill?.map((skillName, index) => (
                                                <option key={index} value={skillName?._id}>{skillName?.name}</option>
                                            ))}
                                        </select>
                                        {formik.touched.skillId && formik.errors.skillId &&
                                            <span style={{ color: 'red' }}>{formik.errors.skillId}</span>}
                                    </div>

                                    <div className="col-md-6 form-group mb-3">
                                        <label htmlFor="sourceFrom"><span className='text-danger'>*</span>Where do you find us?</label>
                                        <input type="text"
                                            onChange={formik.handleChange} value={formik.values.sourceFrom}
                                            className='form-control mt-2'
                                            name='sourceFrom'
                                            placeholder="Enter source from" id="sourceFrom" />
                                        {formik.touched.sourceFrom && formik.errors.sourceFrom &&
                                            <span style={{ color: 'red' }}>{formik.errors.sourceFrom}</span>}
                                    </div>

                                </div>
                            </div>
                            <br />
                            <div className="col-12">
                                <button type="submit" className="btn" style={{ background: '#C6A34F', color: 'white' }}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeRegister