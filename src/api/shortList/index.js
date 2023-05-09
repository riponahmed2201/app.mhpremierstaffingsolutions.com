import axios from "axios";
import { token } from "../../utils/authentication";

// fetch api call
export const fetchShortListHandler = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/short-list/list`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

// add api call
export const addShortHandler = async (receivedShortListFields) => {
    const res = fetch(`${process.env.REACT_APP_API_BASE_URL}/short-list/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(receivedShortListFields),
    });
    return res;
};

//update api call
export const updateShortHandler = async (receivedShortListFields) => {
    let res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/short-list/update`, {
        method: "PUT",
        headers: {
            Authorization: `Bearer ${token()}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(receivedShortListFields),
    });
    return res;
};