import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from './hook/useHook';
import { useNavigate } from 'react-router-dom';
 
function Header() {
  const { signIn, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <header>
      <div className="header_wrapper">
          <Link to="/">
            <div className="header_logo">
                <img src='https://i.postimg.cc/MZ4S1TZh/Logo.jpg' alt="logo"/>
            </div>
          </Link>
          <div className="header_nav">
              <ul>
                  <li onClick={() => signIn(() => navigate('/login', {replace : true}))}>Вход</li>
                  <li onClick={() => signOut(() => navigate('/', {replace : true}))}>Выход</li>
              </ul>
          </div>
      </div>
    </header>
  )
}

export default Header;