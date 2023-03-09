import axios from "axios";
import { token } from "../../utils/authentication";

// fetch api call
export const fetchHandler = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/skills`,
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
    console.log("Test Data: ", receivedEmployeeFields);
    const res = fetch(`${process.env.REACT_APP_API_BASE_URL}/users/employee-register`, {
        method: "POST",
        body: JSON.stringify(receivedEmployeeFields),
    });
    return res;
};