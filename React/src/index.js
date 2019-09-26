import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import axios from 'axios';
import 'antd/dist/antd';

axios.defaults.baseURL = 'http://127.0.0.1:8080/api';

//const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, rootElement);

serviceWorker.unregister();