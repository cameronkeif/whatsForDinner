import React from 'react';
import { render } from 'react-dom';
import request from 'then-request';
import Login from './components/Login';
import css from '../assets/stylesheets/styles.less';

render(<Login />, document.getElementById('app'));

request('GET', 'http://127.0.0.1:5000/').done((res) => {
  console.log(res.getBody());
});
