import { SET_LOGIN } from "./actionTypes";

export const setLogin = (login) => {
    return {
        type: SET_LOGIN,
        payload: login,
    };
};