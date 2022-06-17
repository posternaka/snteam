import {GET_USERS} from '../actions/actionTypes';
const users = [];

export default function getUsers(state = users, action) {
  switch (action.type) {
    case GET_USERS: 
        return [...action.payload.data];
    
    default:
      return state;
  };
};