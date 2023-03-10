import axios from "axios";
import { token } from "../../utils/authentication";

// fetch api call
export const fetchHandler = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/sources`,
        {
            headers: {
                Authorization: `Bearer ${token()}`,
            },
        }
    );
    return res;
};

//fetch list for dropdown
export const fetchSourceListForDropdownHandler = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/sources/list-for-dropdown`,
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
    const res = fetch(`${process.env.REACT_APP_API_BASE_URL}/sources/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token()}`,
        },
        body: JSON.stringify(receivedPositionFields),
    });
    return res;
};