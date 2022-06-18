import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav_wrapper'>
      
      <NavLink to='/'>На главную</NavLink>
      <NavLink to='/profile/0'>Профиль</NavLink>
      <NavLink to='/friends'>Друзья</NavLink>
      <NavLink to='/news'>Новости</NavLink>
    </nav>
  )
}

export default Nav