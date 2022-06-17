import {GET_POSTS} from '../actions/actionTypes';
const posts = ['posts'];

export default function getPosts(state = posts, action) {
  switch (action.type) {
    case GET_POSTS: 
        return [...action.payload];
    
    default:
      return state;
  };
};