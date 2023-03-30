//client register api call
export const clientRegisterHandler = async (receivedClientRegisterFields) => {
    const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/users/client-register`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(receivedClientRegisterFields),
        }
    );
    return res;
};