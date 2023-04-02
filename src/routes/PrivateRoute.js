import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function PrivateRoute({ children }) {

    const navigate = useNavigate();

    const auth = useAuth();
    return auth ? children : navigate("/");
}

export default PrivateRoute;
