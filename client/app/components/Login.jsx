import React from 'react';
import request from 'then-request';
import { render } from 'react-dom';

import Overview from './Overview';
import Register from './Register';

const loginSubmit = () => {
    const invalidLoginNotification = document.getElementById('invalid-login-notification');
    invalidLoginNotification.style.display = 'none';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const options = { qs: { email, password } };
    request('GET', '../api/users/authenticate', options).done((res) => {
        const response = JSON.parse(res.getBody());
        if (response.result === 'success') {
            render(<Overview />, document.getElementById('app'));
        } else {
            invalidLoginNotification.style.display = 'block';
        }
    });

    return false;
};

const showRegistration = () => {
    render(<Register />, document.getElementById('app'));
};

function Login() {
    return (
      <div className="login independant-pane">
        <form>
          <div>
            <h2>Log in</h2>
          </div>
          <div>
            <input id="email" placeholder={'Email'} />
          </div>
          <div>
            <input id="password" placeholder={'Password'} type={'password'} />
          </div>
          <div>
            <input type="button" className="positive-button" id="login-button" onClick={loginSubmit} value="Submit" />
            <div id={'invalid-login-notification'}>Login failed.</div>
          </div>
          <div>
            <span onClick={showRegistration} id="register-link">Register</span>
          </div>
        </form>
      </div>
    );
}

export default Login;
