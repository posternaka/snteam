import {GET_USERS} from '../actions/actionTypes';
const users = {
  users: [],
  loading: false,
};

export default function getUsers(state = users, action) {
  switch (action.type) {
    case GET_USERS: 
        return {
          users : [...action.payload.data],
          loading: true,
        };
    
    default:
      return state;
  };
};