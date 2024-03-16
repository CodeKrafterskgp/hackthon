import axios from 'axios';

import './Login.css';

const Login = () => {
  const reqq = () => {
    axios({
      method: 'post',
      url: '/api/pp',
      data: {
        name: document.getElementById('username').value,
        // email: 'willi.gmail.com',
        pass: document.getElementById('password').value,
      },
    });
  };
  // reqq();
  return (
    <div className="loginpg">
      <div className="login-form">
        <h2>LOGIN</h2>
        <br></br>
        <div className="form-group">
          <label htmlFor="username">User Id:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-group remember-me">
          <input type="checkbox" id="rememberMe" name="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit" onClick={reqq}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
