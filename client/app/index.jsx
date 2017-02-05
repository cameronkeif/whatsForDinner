import React from 'react';
import cookie from 'react-cookie';
import { render } from 'react-dom';
import Login from './components/Login';
import css from '../assets/stylesheets/styles.less';

if (cookie.load('whatsForDinnerSessionCookie')) {
  // Render the page
  console.log("logged in!");
} else {
    console.log('Not logged in')
    render(<Login />, document.getElementById('app'));
}
