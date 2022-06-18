import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/actions/getPostsAction';

function News() {
  const {posts} = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []); 

  return (
    <div className='news_wrapper'>
      
      {
        posts.map((post, index) => (
          <div key={index} className='news'>
            <img src="https://via.placeholder.com/450x250/258DC8/E0F6FD" alt="placeholder news" />    
            <p className='news_title'>{post.title}</p>
            <p className='news_text'>{post.body}</p>
          </div>
        ))
      }

    </div>
  )
}

export default News;