import { SET_PASSWORD } from "../actions/actionTypes";
const password = '';

export default function setPassword(state = password, action) {
  switch (action.type) {
    case SET_PASSWORD: 
        return action.payload;
    
    default:
      return state;
  };
};