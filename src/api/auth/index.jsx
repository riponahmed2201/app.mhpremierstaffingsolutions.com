//client register api call
export const loginHandler = async (receivedLoginFields) => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/login`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(receivedLoginFields),
        }
    );
    return res;
};