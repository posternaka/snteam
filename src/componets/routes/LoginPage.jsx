import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hook/useHook';
import { useDispatch, useSelector } from 'react-redux';
import { setLogin } from '../../redux/actions/setLoginAction';
import { setPassword } from '../../redux/actions/setPassAction';

function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useAuth();

    const fromPage = location.state?.from?.pathname || '/profile/0';
    
    const dispatch = useDispatch();
    const {login, password} = useSelector(state => state);

    const hadleSubmit = (e) => {
        e.preventDefault();

        if(login === localStorage.getItem('username') & password === localStorage.getItem('password')) {
            console.log('Login success');
            signIn(login, () => navigate(fromPage, {replace: true}));
          }
          else {
            console.log('Login failed');
          }

        
    }

  return (
    <div className="f">
    <div className='form_wrapper'>
        <div className="form_flex">
            <h1 className='from_title'>Sing In:</h1>
            <form onSubmit={hadleSubmit} >

                <p className='form_suptitle'>Name</p>
                <label>
                    <input className='form_name' type="text" name="username" placeholder='Nikita' onChange={(e) => dispatch(setLogin(e.target.value))}/>
                </label>

                <p className='form_suptitle'>Password</p>
                <label>
                    <input className='form_pass' type="password" name="password" onChange={(e) => dispatch(setPassword(e.target.value))}/>
                </label>

                <button className='form_button' type='submit'>Login</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export {LoginPage}