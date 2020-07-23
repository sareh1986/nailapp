import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from './logo.svg';

import Artist from './Components/Artist';
import moreInfo from './Components/moreInfo';
import './App.css';
import './CSS/bootstrap.min.css'

function App() {
  return (
    <div className="App d-flex flex-wrap">
    {/* <Router>
    
        <Switch>
              <Route exact path='/' component={Artist} />
              <Route path='/moreInfo' component={moreInfo} />
        </Switch>
        
     </Router> */}

<routes></routes>
      <header className="App-header col-12">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      
<Artist/>
    </div>
  );
}


export default App;