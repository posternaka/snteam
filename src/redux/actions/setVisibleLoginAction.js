import { SET_IS_LOG } from "./actionTypes";

export const setIsLog = (bool) => {
    return {
        type: SET_IS_LOG,
        payload: !bool,
    };
};