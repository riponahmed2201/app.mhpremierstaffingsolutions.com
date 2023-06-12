import { token } from "../../utils/authentication";

//client register api call
export const loginHandler = async (receivedLoginFields) => {
  const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(receivedLoginFields),
  });
  return res;
};

//update api call
export const updatePasswordHandler = async (receivedMhEmployeeFields) => {
  let res = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/users/update-password`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receivedMhEmployeeFields),
    }
  );
  return res;
};
