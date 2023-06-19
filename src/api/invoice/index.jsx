import axios from "axios";
import { token } from "../../utils/authentication";

// fetch api call
export const fetchInvoiceListHandler = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_BASE_URL}/invoices`,
    {
      headers: {
        Authorization: `Bearer ${token()}`,
      },
    }
  );
  return res;
};

// add api call
export const addInvoiceHandler = async (receivedContactFields) => {
  const res = fetch(`${process.env.REACT_APP_API_BASE_URL}/invoices/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token()}`,
    },
    body: JSON.stringify(receivedContactFields),
  });
  return res;
};

//update api call
export const updateInvoiceHandler = async (receivedContactFields) => {
  let res = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}/invoices/update`,
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
