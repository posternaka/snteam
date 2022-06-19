import { SET_IS_LOG } from "../actions/actionTypes";
const bool = 'true';

export default function setIsLog(state = bool, action) {
  switch (action.type) {
    case SET_IS_LOG: 
        return action.payload;
    
    default:
      return state;
  };
};