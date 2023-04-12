import jwt_decode from "jwt-decode";
import { token } from "./authentication";

// user token decode using jwt-decode
export const jwtTokenDecode = () => {
    return jwt_decode(token());
};