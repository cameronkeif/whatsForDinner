import React from 'react';

function Login() {
    return (
      <div className="login independant-pane">
        <div>
          <h2>Log in</h2>
        </div>
        <div>
          <input id="username" placeholder={'Username'} />
        </div>
        <div>
          <input id="password" placeholder={'Password'} type={'password'} />
        </div>
        <div>
          <input id="remember-me" type="checkbox" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <div>
          <button type="button" className="positive-button" id="login-button">Log in</button>
        </div>
      </div>
    );
}

export default Login;
