import axios from "axios";
import { token } from "../../utils/authentication";

// fetch api call
export const fetchNotificationListHandler = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/notifications`,
    {
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    }
  );
  return res;
};

//update api call
export const updateNotificationHandler = async (receivedContactFields) => {
  let res = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/notifications/update`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(receivedContactFields),
    }
  );
  return res;
};
