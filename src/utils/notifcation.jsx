import { notification } from "antd";

export const responseNotification = (message, type) => {
    notification[
        type === "warning" || type === "success" || type === "error" ? type : "success"]({
            message: message?.code === 200 ? "Operation successful" : message,
        });
};

export const saveSuccessNotification = (Model) => {
    notification.success({
        message: `${Model}`,
    });
};

export const errorNotification = (errorMessage) => {
    notification.error({
        message: `${errorMessage} Error!!`,
    });
};
export const customErrorNotification = (errorMessage) => {
    notification.error({
        message: errorMessage,
    });
};
