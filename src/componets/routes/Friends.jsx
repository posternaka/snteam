import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/actions/getUsersAction';
import ContentLoader from "react-content-loader"


function Friends() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {users} = useSelector((store) => store.users);
  const {loading} = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []); 


  const MyLoader = () => (
    <ContentLoader 
      speed={2}
      width={280}
      height={364}
      viewBox="0 0 280 364"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="16" y="12" rx="0" ry="0" width="258" height="240" /> 
      <rect x="26" y="269" rx="0" ry="0" width="239" height="39" /> 
      <rect x="38" y="323" rx="0" ry="0" width="215" height="45" />
    </ContentLoader>
  )

  return (
    <div className='friends_wrapper'>
      
      { loading ? 
        users.map((user, index) => (
           <button key={index} className='friend_button' onClick={() => navigate(`/profile/${index}`)}>
            <div className='friend'>
              <img src="https://via.placeholder.com/250x250/258DC8/E0F6FD" alt="placeholder news" />
              <p className='friend_name'>{user.name}</p>
              <p className='friend_email'>{user.email}</p>
            </div>
          </button> 
        )) : Array(10).fill(MyLoader())
      }
      
    </div>
  )
}

export default Friends;