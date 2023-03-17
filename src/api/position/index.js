import axios from "axios";
import { token } from "../../utils/authentication";

// fetch api call
export const fetchHandler = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/positions`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

// fetch api call
export const fetchSinglePositionHandler = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/positions/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

//fetch list for dropdown
export const fetchPositionListForDropdownHandler = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/positions/list-for-dropdown`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

// add api call
export const addHandler = async (receivedPositionFields) => {
    const res = fetch(`${process.env.REACT_APP_API_BASE_URL}/positions/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(receivedPositionFields),
    });
    return res;
};

//update api call
export const updatePositionHandler = async (receivedPrintingFields) => {
    let res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/positions/update`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token()}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(receivedPrintingFields),
    });
    return res;
};