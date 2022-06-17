import {GET_POSTS} from '../actions/actionTypes';
const posts = [];

export default function getPosts(state = posts, action) {
  switch (action.type) {
    case GET_POSTS: 
        return [...action.payload.data];
    
    default:
      return state;
  };
};