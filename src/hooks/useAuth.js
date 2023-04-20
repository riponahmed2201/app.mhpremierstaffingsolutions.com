import axios from "axios";

export default function useAuth() {
    const jwtToken = localStorage.getItem("accessToken");
    if (jwtToken) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;
        return true;
    } else {
        return false;
    }
}
