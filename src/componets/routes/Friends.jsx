import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Profile from './Profile';

function Friends() {
  const navigate = useNavigate();
  const [users, setPosts] = useState([]);
  
  const fetchData = (data) => {
    setPosts(data.data)
  }

  const fetchApiPosts = async () => {
    try {
      const asyncData = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
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
    <div className='friends_wrapper'>
      
      {
        users.map((user, index) => (
          <button key={index} className='friend_button' onClick={() => navigate('/profile')}>
            <div className='friend'>
              <img src="https://via.placeholder.com/250x250/258DC8/E0F6FD" alt="placeholder news" />
              <p className='friend_name'>{user.name}</p>
              <p className='friend_email'>{user.email}</p>
            </div>
          </button>  
        ))
      }
    </div>
  )
}

export default Friends;