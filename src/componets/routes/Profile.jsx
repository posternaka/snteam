import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../../redux/actions/getUsersAction';

function Profile() {
  const {users} = useSelector((store) => store);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []); 

  return (
    <div className='profile_wrapper'>
      <img src="https://via.placeholder.com/350x350/258DC8/E0F6FD" alt="placeholder user" /> 
      <div className='profile'>
          <p className='profile_name'>{users.length > 0 && users[`${id}`].name}</p>
          <p className='profile_city'>{users.length > 0 && users[`${id}`].address && users[`${id}`].address.city}</p>
          <p className='profile_catchPhrase'>{users.length > 0 && users[`${id}`].company && users[`${id}`].company.catchPhrase}</p>
      </div>
    </div>
  )
}

export default Profile;

