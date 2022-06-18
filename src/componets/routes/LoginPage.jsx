import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../hook/useHook';

function LoginPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { signIn } = useAuth();

    const fromPage = location.state?.from?.pathname || '/profile/0';

    const hadleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const user = form.username.value;
        const password = form.password.value;

        signIn(user, () => navigate(fromPage, {replace: true}));
    }

  return (
    <div className="f">
    <div className='form_wrapper'>
        <div className="form_flex">
            <h1 className='from_title'>Sing In:</h1>
            <form onSubmit={hadleSubmit} >

                <p className='form_suptitle'>Name</p>
                <label>
                    <input className='form_name' type="text" name="username" placeholder='Nikita'/>
                </label>

                <p className='form_suptitle'>Password</p>
                <label>
                    <input className='form_pass' type="password" name="password" />
                </label>

                <button className='form_button' type='submit'>Login</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export {LoginPage}