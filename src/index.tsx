import React from 'react'
import { render } from 'react-dom'

//  load styles in order
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

//  local components
import App from './app'


/*	Renderer
/*   *   *   *   *   *   *   *   *   *   */
render(

    // 	renders whole app
    <React.StrictMode>
        <App />
    </React.StrictMode>,

    // 	refrence to DOM target
    document.getElementById('root')
);