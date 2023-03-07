import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import React from 'react'

function PrivateRoute({ children }) {
    const auth = useAuth();
    return auth ? children : <Navigate to="/" />;
}

export default PrivateRoute;
