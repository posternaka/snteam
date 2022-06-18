import {GET_POSTS} from '../actions/actionTypes';
const posts = {
  posts: [],
  loading: false,
};

export default function getPosts(state = posts, action) {
  switch (action.type) {
    case GET_POSTS: 
        return {
          posts : [...action.payload.data],
          loading: true,
        };
    
    default:
      return state;
  };
};