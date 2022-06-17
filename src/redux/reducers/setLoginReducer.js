import { SET_LOGIN } from "../actions/actionTypes";
const login = '';

export default function setLogin(state = login, action) {
  switch (action.type) {
    case SET_LOGIN: 
        return action.payload;
    
    default:
      return state;
  };
};