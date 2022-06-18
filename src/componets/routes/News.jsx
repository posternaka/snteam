import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/actions/getPostsAction';
import ContentLoader from "react-content-loader"

function News() {
  const {posts} = useSelector((store) => store.posts);
  const {loading} = useSelector((store) => store.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []); 

  const MyLoader = (props) => (
    <ContentLoader 
      speed={2}
      width={500}
      height={433}
      viewBox="0 0 500 433"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="24" y="20" rx="0" ry="0" width="450" height="250" /> 
      <rect x="-4" y="338" rx="0" ry="0" width="515" height="81" /> 
      <rect x="77" y="285" rx="0" ry="0" width="345" height="35" />
    </ContentLoader>
  )

  return (
    <div className='news_wrapper'>
      
      { loading ?
        posts.map((post, index) => (
          <div key={index} className='news'>
            <img src="https://via.placeholder.com/450x250/258DC8/E0F6FD" alt="placeholder news" />    
            <p className='news_title'>{post.title}</p>
            <p className='news_text'>{post.body}</p>
          </div>
        )) : Array(10).fill(MyLoader())
      }

    </div>
  )
}

export default News;