import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/actions/getUsersAction';


function Friends() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {users} = useSelector((store) => store.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []); 


  return (
    <div className='friends_wrapper'>
      
      {
        users.map((user, index) => (
           <button key={index} className='friend_button' onClick={() => navigate(`/profile/${index}`)}>
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