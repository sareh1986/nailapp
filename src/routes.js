import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainPage from './App.js';
import moreInfo from './Components/moreInfo';




export default  (
    <Router>
    
    <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/moreInfo' component={moreInfo} />
    </Switch>
    
    </Router>
  );