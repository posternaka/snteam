import { SET_PASSWORD } from "./actionTypes";

export const setPassword = (password) => {
    return {
        type: SET_PASSWORD,
        payload: password,
    };
};