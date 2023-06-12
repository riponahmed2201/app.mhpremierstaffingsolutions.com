import axios from "axios";
import { token } from "../../utils/authentication";
import { getPage } from "../../utils/getPage";

// fetch api call
export const fetchHandler = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

// fetch api call
export const fetchReferPersonListForDropdownHandler = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/list?isReferPerson=YES`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

// fetch api call
export const fetchUserListForDropdownHandler = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/users/list`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

// add api call
export const addHandler = async (receivedEmployeeFields) => {
    const res = fetch(`${process.env.REACT_APP_API_BASE_URL}/users/employee-register`, {
        method: "POST",
        body: JSON.stringify(receivedEmployeeFields),
    });
    return res;
};

//employee register api call
export const employeeRegisterHandler = async (receivedBlogFields) => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/employee-register`,
        {
            method: "POST",
            body: receivedBlogFields,
        }
    );
    return res;
};

//HR fetch api call
export const fetchEmployeeListHandler = async (limit, getName, getStatus, getCountryName, locationsearch) => {

    const unicodeUri = `${process.env.REACT_APP_API_BASE_URL}`;

    const res = await axios.get(`${unicodeUri}/users?page=${getPage(locationsearch) || 1}&skipLimit=YES&limit=${limit || 20}` + (getName ? `&searchKeyword=${getName}` : ``) +
        (getStatus ? `&active=${getStatus}` : ``) + (getCountryName ? `&countryName=${getCountryName}` : ``) + (`&requestType=EMPLOYEE`),
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

//HR fetch api call
export const fetchClientListHandler = async (limit, getName, getStatus, getCountryName, locationsearch) => {

    const unicodeUri = `${process.env.REACT_APP_API_BASE_URL}`;

    const res = await axios.get(`${unicodeUri}/users?page=${getPage(locationsearch) || 1}&skipLimit=YES&limit=${limit || 20}` + (getName ? `&searchKeyword=${getName}` : ``) +
        (getStatus ? `&active=${getStatus}` : ``) + (getCountryName ? `&countryName=${getCountryName}` : ``) + (`&requestType=CLIENT`),
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

//Certificate upload api call
export const certificateUploadHandler = async (receivedCertificateFields) => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/certificate/upload`,
        {
            method: "PUT",
            body: receivedCertificateFields,
        }
    );
    return res;
};

//Removed certificate upload api call
export const removedCertificateHandler = async (receivedCertificateFields) => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/certificate/upload`,
        {
            method: "PUT",
            body: receivedCertificateFields,
        }
    );
    return res;
};

//Employee update api call
export const employeeUpdateHandler = async (receivedBlogFields) => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/update-employee`,
        {
            method: "PUT",
            body: receivedBlogFields,
        }
    );
    return res;
};