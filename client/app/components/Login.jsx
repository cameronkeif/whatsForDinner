import React from 'react';
import request from 'then-request';

const loginSubmit = () => {
    const invalidLoginNotification = document.getElementById('invalid-login-notification');
    invalidLoginNotification.style.display = 'none';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const options = { qs: { email, password } };
    request('GET', '../api/users/authenticate', options).done((res) => {
        const response = JSON.parse(res.getBody());
        if (response.result === 'success') {
          console.log("yay!");
        } else {
            invalidLoginNotification.style.display = 'block';
        }
    });
};

function Login() {
    return (
      <div className="login independant-pane">
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
          <button type="button" className="positive-button" id="login-button" onClick={loginSubmit}>
            Log in
          </button>
          <div id={'invalid-login-notification'}>Login failed.</div>
        </div>
      </div>
    );
}

export default Login;
