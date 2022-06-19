import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hook/useHook';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../redux/actions/setLoginAction';
import { setPassword } from '../../redux/actions/setPassAction';


function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useAuth();
    const [dis, setDis] = useState(false);
    const [message, setMessage] = useState('');

    const fromPage = location.state?.from?.pathname || '/profile/0';
    
    const dispatch = useDispatch();
    const {login, password} = useSelector(state => state);
    const {users} = useSelector(state => state.users);

    const hadleSubmit = (e) => {
        e.preventDefault();

        if(login === localStorage.getItem('username') & password === localStorage.getItem('password')) {
          signIn(login, () => navigate(fromPage, {replace: true}));
          console.log('Login success');
          setDis(!dis)
          setMessage('');
          }
          else {
            console.log('Login failed');
            setMessage("Имя пользователя или пароль введены не верно");
          }
    }

    // console.log(users);

  return (
    <div className="form">
      <div className='form_wrapper'>
          <div className="form_flex">
              <h1 className='from_title'>Sing In:</h1>
              <form onSubmit={hadleSubmit} >

                  <p className='form_suptitle'>Name</p>
                      <input 
                        className={login.length > 0 ? 'form_name green' : 'form_name red'}
                        type="text" 
                        name="username" 
                        placeholder='Введите имя'
                        onChange={(e) => dispatch(setLogin(e.target.value))}
                      />

                  <p className='form_suptitle'>Password</p>
                      <input 
                        className={password.length > 0 ? 'form_name green' : 'form_name red'}
                        type="password" 
                        name="password" 
                        placeholder='Введите пароль'
                        onChange={(e) => dispatch(setPassword(e.target.value))}
                      />

                  <p className='form_message'>{message}</p>

                  <button 
                    className='button form_button' 
                    type='submit'
                    disabled={dis}
                  >
                    Login
                  </button>
              </form>
          </div>
      </div>
    </div>
  )
}

export {LoginPage}