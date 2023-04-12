import React, { useState, useEffect } from 'react';

import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Form, Select, Input } from 'antd';
import axios from "axios";

import { clientRegisterHandler } from '../../../api/client';
import { responseNotification } from '../../../utils/notifcation';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import './Media.css';

//assets 
import BackIcon from '../../../assets/frontend/images/login_page/Group 685.png';
import Ellipse from '../../../assets/frontend/images/login_page/Ellipse 70.png';
import Ellipse69 from '../../../assets/frontend/images/login_page/Ellipse 69.png';
import Logo from '../../../assets/frontend/images/login_page/Logo.png';
import Ellipse70 from '../../../assets/frontend/images/clientAndEmployee/Ellipse 70.png';
import Vector from '../../../assets/frontend/images/clientFormPictures/Vector.png';
import EmailImage from '../../../assets/frontend/images/clientFormPictures/Email.png';
import Subtract from '../../../assets/frontend/images/clientFormPictures/Subtract.png';
import phoneImage from '../../../assets/frontend/images/clientFormPictures/phone.png';
import ipImage from '../../../assets/frontend/images/clientFormPictures/ip.png';
import passImage from '../../../assets/frontend/images/clientFormPictures/pass.png';
import rectangleImage from '../../../assets/frontend/images/clientFormPictures/rectangle.png';
import selectFromImage from '../../../assets/frontend/images/clientFormPictures/selectFrom.png';
import EnterHereImage from '../../../assets/frontend/images/clientFormPictures/EnterHere.png';
import uploadeImage from '../../../assets/frontend/images/employeeFormPictures/uploadeImage.png';

const { Option } = Select;

function ClientRegister() {

    const [referPerson, setReferPerson] = useState([]);
    const [sourceFrom, setSourceFrom] = useState([]);

    const [loading, setLoading] = useState(false);
    const [getError, setError] = useState();

    const [form] = Form.useForm();

    const navigate = useNavigate();

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

    const onFinish = async (values) => {

        const receivedClientRegisterFields = {
            restaurantName: values?.restaurantName,
            restaurantAddress: values?.restaurantAddress,
            sourceId: values?.sourceId,
            referPersonId: values?.referPersonId,
            phoneNumber: values?.phoneNumber,
            email: values?.email,
            password: values?.password,
            lat: '123.23122242',
            long: '4545.354545',
        };

        if (receivedClientRegisterFields) {

            setLoading(true);

            await clientRegisterHandler(receivedClientRegisterFields)
                .then((res) => res.json())
                .then((res) => {
                    if (res.statusCode === 201) {
                        responseNotification("Client registered successfully!", "success");
                        form.resetFields();

                        navigate('/admin-login');

                        // window.location.reload();
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
        <div>
            <section className="total_wrapper">
                <div className="container-fluid">
                    <div className="row custom_coloring_row">
                        {/*leftpart start*/}
                        <div className="col-lg-6 col-md-6 col-sm-12 left_part">
                            <div className="row left_part_wrapper">
                                <div className="button_wrapper">
                                    <a href="#"> <img src="images/clientAndEmployee/Group 685.png" className="img-fluid" alt /></a>
                                </div>
                                <div className="logo_wrapper text-center">
                                    <img className="img-fluid" src="images/clientAndEmployee/Logo.png" alt />
                                </div>
                                <div className="premier_stuffing_wrapper text-center">
                                    <h1>PREMIER STAFFING SOLUTIONS</h1>
                                </div>
                                <div className="mh_premier_wrapping text-center">
                                    <p>MH PREMIER STAFFING SOLUTIONS helps you hire great &amp; experienced workers at a moment's notice
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*leftpart end*/}
                        {/*Right Part Start*/}
                        <div className="col-lg-6 col-md-6 col-sm-12 right_part">
                            <div className="eclips_wrapper1">
                                <img className="img-fluid" src="images/clientAndEmployee/Ellipse 70.png" />
                            </div>
                            <div className="clientButtonWrapper d-flex justify-content-center align-items-center">
                                <ul className="nav mobile_320 nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active custom_client_button" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Client</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link custom_employee_button" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Employee</button>
                                    </li>
                                </ul>
                            </div>
                            <div className="formWrappper">
                                <div className="tab-content" id="myTabContent">
                                    {/* Clients Form */}
                                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div className="container card_looking_container">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="resturauntNameWrapper">
                                                        <label htmlFor="exampleInputEmail1" className="form-label restaurantNameText">Resturaunt Name</label>
                                                    </div>
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid" src="images/clientFormPictures/Vector.png" alt />
                                                    </div>
                                                    <input placeholder="Food King Resturaunt" type="email" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid" src="images/clientFormPictures/Email.png" alt />
                                                    </div>
                                                    <input placeholder="Email Address" type="email" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <label htmlFor="exampleInputEmail1" className="hidden_input form-label restaurantNameText">Resturaunt Name</label>
                                                    {/* This is an hidden label for  empty space */}
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid" src="images/clientFormPictures/Subtract.png" alt />
                                                    </div>
                                                    <input placeholder="Resturaunt Address" type="text" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid" src="images/clientFormPictures/phone.png" alt />
                                                    </div>
                                                    <input placeholder="Phone Number" type="email" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid hidden_input" src="images/clientFormPictures/ip.png" alt />
                                                    </div>
                                                </div>
                                            </div>
                                            {/*
                                      <div class="row">
                                          <div class="col-lg-6">
                                              <div class="inputLogoWrapper">
                                                  <img class="img-fluid" src="images/clientFormPictures/ip.png" alt="" />
                                              </div>
                                              <input placeholder="Resturaunt IP" type="email" class="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                          </div>
                                          <div class="col-lg-6"></div>
                                      </div> */}
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid" src="images/clientFormPictures/pass.png" alt />
                                                    </div>
                                                    <input placeholder="Password" type="password" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid" src="images/clientFormPictures/pass.png" alt />
                                                    </div>
                                                    <input placeholder="Confirm Password" type="password" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            {/* Please Provide Text */}
                                            <div className="row">
                                                <div className="col-lg-12 please_provide_wrapper text-center">
                                                    <p className="pleaseProvideText">Please provide the following info too</p>
                                                    <img className="img-fluid pleaseProvideImage" src="images/clientFormPictures/rectangle.png" alt />
                                                </div>
                                            </div>
                                            {/* Please Provide Text End */}
                                            {/* About Us form */}
                                            <div className="container dropdownContainer">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <p className="how_youKnow_text">How You Know About Us</p>
                                                        <div className="dropdownbuttonwrapper">
                                                            <div className="dropdown">
                                                                <div className="inputLogoWrapper">
                                                                    <img className="img-fluid" src="images/clientFormPictures/selectFrom.png" alt />
                                                                </div>
                                                                <button className="text-start btn btn-custom-dropdown dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">Select From Here</button>
                                                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                                                    <li>
                                                                        <a className="dropdown-item active" href="#">Action</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                    </li>
                                                                    <li>
                                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <p className="how_youKnow_text">Refer</p>
                                                        <div className="referFieldWrapper">
                                                            <div className="inputLogoWrapper">
                                                                <img className="img-fluid" src="images/clientFormPictures/EnterHere.png" alt />
                                                            </div>
                                                            <input placeholder="Enter Here" type="password" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* About Us form End */}
                                            {/* Register Button */}
                                            <div className="registerButton text-center">
                                                <button type="submit" className="btn register_button">Register</button>
                                            </div>
                                            {/* Register Button End */}
                                        </div>
                                    </div>
                                    {/* Employee form */}
                                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="uploadImageWrapper d-flex justify-content-center align-items-center">
                                                        <form action="#" method="post" encType="multipart/form-data">
                                                            {/* Clickable Image */}
                                                            <label htmlFor="file-upload">
                                                                <img src="images/employeeFormPictures/uploadeImage.png" alt="Your Image" className="img-thumbnail img-fluid customImageThumbnail" style={{ cursor: 'pointer' }} />
                                                            </label>
                                                            {/* Input for file upload */}
                                                            <input id="file-upload" type="file" name="file" style={{ display: 'none' }} />
                                                            {/* Submit Button */}
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="resturauntNameWrapper">
                                                        <label htmlFor="exampleInputEmail1" className="form-label restaurantNameText">First
                                                            Name</label>
                                                    </div>
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid" src="images/employeeFormPictures/Icon.png" alt />
                                                    </div>
                                                    <input placeholder="Razinul Karim" type="email" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid" src="images/clientFormPictures/Email.png" alt />
                                                    </div>
                                                    <input placeholder="Email Address" type="email" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    <div className="dropdownbuttonwrapper">
                                                        <div className="dropdown">
                                                            <div className="inputLogoWrapper">
                                                                <img className="img-fluid" src="images/employeeFormPictures/jobtype.png" alt />
                                                            </div>
                                                            <button className="text-start btn btn-custom-dropdown dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">Job Type</button>
                                                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                                                <li>
                                                                    <a className="dropdown-item active" href="#">Action</a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#">Another action</a>
                                                                </li>
                                                                <li>
                                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid" src="images/employeeFormPictures/icon2.png" alt />
                                                    </div>
                                                    <input placeholder="Last Name" type="email" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid" src="images/employeeFormPictures/mobile.png" alt />
                                                    </div>
                                                    <input placeholder="Phone Number" type="email" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    <div className="inputLogoWrapper">
                                                        <img className="img-fluid" src="images/employeeFormPictures/Subtract.png" alt />
                                                    </div>
                                                    <input placeholder="Present Address" type="email" className="form-control custom_client_input mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12 d-flex justify-content-center align-items-center">
                                                    <form action="#" method="post" encType="multipart/form-data">
                                                        {/* Logo Upload Button */}
                                                        <label className="logo-upload-btn">
                                                            <img className="img-fluid cv_button" src="images/employeeFormPictures/uploadPDF.png" alt="Upload PDF" />
                                                            <input type="file" name="file" accept=".pdf" className="btn-file" />
                                                        </label>
                                                    </form>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    {/* Register Button */}
                                                    <div className="registerButton text-center">
                                                        <button type="submit" className="btn register_button">Register</button>
                                                    </div>
                                                    {/* Register Button End */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Have an account Section start*/}
                            <div className="accountandregisterwrapper text-center"><span className="donthaveaccounttext">Already have an
                                account?</span><a href>Login</a></div>
                            {/* Have an account Section end*/}
                        </div>
                        <div className="eclipse_wrapper2">
                            <img className="img-fluid" src="images/clientFormPictures/../clientAndEmployee/Ellipse 69.png" alt />
                        </div>
                    </div>
                    {/*Right Part End*/}
                </div>
            </section></div>


    )
}

export default ClientRegister