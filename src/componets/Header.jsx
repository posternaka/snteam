import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
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
                  <Link to="/login">
                    <li>Вход</li>
                  </Link>
                  {/* <Link to="/">
                    <li>Выход</li>
                  </Link> */}
              </ul>
          </div>
      </div>
    </header>
  )
}

export default Header;