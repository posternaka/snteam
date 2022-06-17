import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


function News() {
  const [posts, setPosts] = useState([]);

  const fetchData = (data) => {
    setPosts(data.data)
  }

  const fetchApiPosts = async () => {
    try {
      const asyncData = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      fetchData(asyncData);
    }
    catch {
      throw Error("Error");
    }
  }

  useEffect(() => {
    fetchApiPosts();
  }, []); 


  return (
    <div className='news_wrapper'>
      
      {
        posts.map((post, index) => (
          <div key={index} className='news'>
            <img src="https://via.placeholder.com/250x250/258DC8/E0F6FD" alt="placeholder news" />    
            <p className='news_title'>{post.title}</p>
            <p className='news_text'>{post.body}</p>
          </div>
        ))
      }

    </div>
  )
}

export default News;