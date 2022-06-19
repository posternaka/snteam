import { combineReducers } from "redux";
import getUsers from './getUsersReducer';
import getPosts from './getPostsReducer';
import setLogin from "./setLoginReducer";
import setPassword from "./setPassReducer";
import setIsLog from "./setVisibleLoginReducer";

export default combineReducers({
    users: getUsers,
    posts: getPosts,
    login: setLogin,
    password: setPassword,
    bool: setIsLog,
});