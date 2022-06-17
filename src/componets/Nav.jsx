import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav_wrapper'>
        <ul>
            <li><NavLink to='/'>На главную</NavLink></li>
            <li><NavLink to='/profile'>Профиль</NavLink></li>
            <li><NavLink to='/friends'>Друзья</NavLink></li>
            <li><NavLink to='/news'>Новости</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav