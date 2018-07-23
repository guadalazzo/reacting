import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import App from './components/App';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'));
