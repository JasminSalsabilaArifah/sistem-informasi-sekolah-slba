import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncSetAuthUser } from '../states/authUser/action';
import LoginInput from '../components/LoginInput';

function Login (){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogin = ({ username, password }) => {
        dispatch(asyncSetAuthUser({ username, password }));
        navigate('/');
      };    

    return(
        <section className="login-page">
            <h1>Login</h1>
            <LoginInput login={onLogin} />
    </section>
    )
}

export default Login