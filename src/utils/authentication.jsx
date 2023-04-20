// user token get
export const token = () => {
    const getToken = localStorage.getItem("accessToken");
    if (getToken) {
        return getToken;
    }
    return false;
};