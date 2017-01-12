import React from 'react';

function Login() {
    return (
      <div className="login independant-pane">
        <div>Log in</div>
        <div><input placeholder={'Username'} /></div>
        <div><input placeholder={'Password'} type={'password'} /></div>
      </div>
    );
}

export default Login;
