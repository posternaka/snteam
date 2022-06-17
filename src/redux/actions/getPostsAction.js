import axios from 'axios';
import {GET_POSTS} from './actionTypes';

export const fetchPosts = () => async (dispatch) => {
    try {
      const asyncData = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      dispatch(getPosts(asyncData));
    } catch (error) {
      // dispatch(errorAction(error));
    }
};

export const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    payload: posts,
  };
};