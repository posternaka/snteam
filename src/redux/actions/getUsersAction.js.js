import axios from 'axios';
import {GET_USERS} from './actionTypes';

export const fetchUsers = () => async (dispatch) => {
    try {
      console.log("111");
      const asyncData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log("2222");

      console.log(asyncData);
      dispatch(getUsers(asyncData));
    } catch (error) {
      // dispatch(errorAction(error));
    }
};

export const getUsers = (users) => {
  return {
    type: GET_USERS,
    payload: users,
  };
};