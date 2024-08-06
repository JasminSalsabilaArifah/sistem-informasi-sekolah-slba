import PropTypes from 'prop-types';
import { useState } from "react";

function LoginInput({ login }) {
  const [username, onUsernameChange] = useState('');
  const [password, onPasswordChange] = useState('');

  return (
    <form className="login-input">
      <input type="text" value={username} onChange={e => onUsernameChange(e.target.value)} placeholder="email" />
      <input type="password" value={password} onChange={e => onPasswordChange(e.target.value)} placeholder="Password" />
      <button type="button" onClick={() => login({ username, password })}>Login</button>
    </form>
  )
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;