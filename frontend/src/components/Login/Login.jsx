import axios from 'axios';

import { useState } from 'react';

import './Login.css';

const Login = () => {
  const [isLogedin, setIsLogedin] = useState(<LoginStuff />);
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
    setIsLogedin(<AfterLoginStuff />);
  };
  // reqq();
  return (
    <div className="loginpg">
      <div className="login-form">
        {isLogedin}
        <button type="submit" onClick={reqq}>
          Login
        </button>
      </div>
    </div>
  );
};

function LoginStuff() {
  return (
    <>
      <h2 id="namelogin">LOGIN</h2>
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
    </>
  );
}

function AfterLoginStuff() {
  return (
    <div>
      <h1 className="succesLogin">
        <a href="/">Logged in successfully</a>
      </h1>
    </div>
  );
}

export default Login;
