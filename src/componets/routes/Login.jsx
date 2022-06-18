import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../redux/actions/setLoginAction';
import { setPassword } from '../../redux/actions/setPassAction';

function Login() {

  localStorage.setItem('username', 'admin');
  localStorage.setItem('password', '12345');

  const hadlerPost = () => {
    
  }

  const dispatch = useDispatch();
  const {login, password} = useSelector(state => state);

  const logIn = () => {
    if(login === localStorage.getItem('username') & password === localStorage.getItem('password')) {
      console.log('Login success');
    }
    else {
      console.log('Login failed');
    }
  }


  return (
    <div>
        <div>Login</div>
        <input type="text" placeholder='Введите логин' onChange={(e) => dispatch(setLogin(e.target.value))} />
        <div>Password</div>
        <input type="text" placeholder='Введите пароль' onChange={(e) => dispatch(setPassword(e.target.value))} />
        <button onClick={() => logIn()}>Войти</button>
    </div>
  )
}

export default Login;