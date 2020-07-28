import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import Home from './App.js';
import moreInfo1 from './Components/moreInfo1';
import moreInfo2 from './Components/moreInfo2';
import moreInfo3 from './Components/moreInfo3';

ReactDOM.render(
  <Router>
    <App />


  </Router>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
