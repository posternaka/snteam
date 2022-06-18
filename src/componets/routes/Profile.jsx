import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUsers } from '../../redux/actions/getUsersAction';
import ContentLoader from "react-content-loader"

function Profile() {
  const {users} = useSelector((store) => store.users);
  const {loading} = useSelector((store) => store.users);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []); 

  const MyLoader = () => (
    <ContentLoader 
      speed={2}
      width={1070}
      height={350}
      viewBox="0 0 1070 350"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="49" y="1" rx="0" ry="0" width="350" height="350" /> 
      <rect x="409" y="14" rx="0" ry="0" width="265" height="45" /> 
      <rect x="412" y="77" rx="0" ry="0" width="214" height="32" /> 
      <rect x="414" y="122" rx="0" ry="0" width="225" height="36" />
    </ContentLoader>
  )

  return (
    <div className='profile_wrapper'>
        {loading ? 
          <>
          <img src="https://via.placeholder.com/350x350/258DC8/E0F6FD" alt="placeholder user" /> 
          <div className='profile'>
              <p className='profile_name'>{users.length > 0 && users[`${id}`].name}</p>
              <p className='profile_city'>{users.length > 0 && users[`${id}`].address && users[`${id}`].address.city}</p>
              <p className='profile_catchPhrase'>{users.length > 0 && users[`${id}`].company && users[`${id}`].company.catchPhrase}</p>
          </div>
          </> : MyLoader()
        }
    </div>
  )
}

export default Profile;

