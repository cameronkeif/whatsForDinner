import React from 'react';
import cookie from 'react-cookie';
import { render } from 'react-dom';

import Login from './components/Login';
import Overview from './components/Overview'
import css from '../assets/stylesheets/styles.less';

if (cookie.load('whatsForDinnerSessionCookie')) {
    render(<Overview />, document.getElementById('app'));
} else {
    render(<Login />, document.getElementById('app'));
}
