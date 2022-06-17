import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Profile() {
  const idInit = 1;

  const [{name, address, company}, setUser] = useState({});

  const fetchData = (data) => {
    setUser(data.data)
  }

  const fetchApiPosts = async () => {
    try {
      const asyncData = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${idInit}`
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
    <div className='profile_wrapper'>
      <img src="https://via.placeholder.com/350x350/258DC8/E0F6FD" alt="placeholder user" /> 
      <div className='profile'>
          <p className='profile_name'>{name}</p>
          <p className='profile_city'>{address && address.city}</p>
          <p className='profile_catchPhrase'>{company && company.catchPhrase}</p>
      </div>
    </div>
  )
}

export default Profile;

