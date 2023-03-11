import { token } from "../../utils/authentication";


// image upload api call
export const imageUploadHandler = async (receivedBlogFields) => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/profile-picture/upload`,
        {
            method: "PUT",
            body: receivedBlogFields,
        }
    );
    return res;
};

// image upload api call
export const certificateUploadHandler = async (receivedBlogFields) => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/certificate/upload`,
        {
            method: "PUT",
            body: receivedBlogFields,
        }
    );
    return res;
};