import React from 'react';
import request from 'then-request';
import { render } from 'react-dom';

import Login from './Login';

const registerSubmit = () => {
    const invalidLoginNotification = document.getElementById('invalid-login-notification');
    invalidLoginNotification.style.display = 'none';

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const options = { qs: { email, password } };
    request('POST', '../api/users/register', options).done((res) => {
        const response = JSON.parse(res.getBody());
        if (response.result === 'success') {
            alert('Registration successful!'); // Kludgey notification, will update later.
            render(<Login />, document.getElementById('app'));
        } else {
            invalidLoginNotification.innerHTML = response.reason;
            invalidLoginNotification.style.display = 'block';
        }
    });
};

function Register() {
    return (
      <div className="login independant-pane">
        <form>
          <div>
            <h2>Register</h2>
          </div>
          <div>
            <input id="email" placeholder={'Email'} />
          </div>
          <div>
            <input id="password" placeholder={'Password'} type={'password'} />
          </div>
          <div>
            <input id="passwordConfirm" placeholder={'Confirm Password'} type={'password'} />
          </div>
          <div>
            <input
              type="button"
              className="positive-button"
              id="login-button"
              onClick={registerSubmit} value="Register"
            />
            <div id={'invalid-login-notification'} />
          </div>
        </form>
      </div>
    );
}

export default Register;
