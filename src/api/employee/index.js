import axios from "axios";
import { token } from "../../utils/authentication";

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

// add api call
export const addHandler = async (receivedEmployeeFields) => {
    const res = fetch(`${process.env.REACT_APP_API_BASE_URL}/users/employee-register`, {
        method: "POST",
        body: JSON.stringify(receivedEmployeeFields),
    });
    return res;
};