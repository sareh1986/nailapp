import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './App.js';
import moreInfo1 from './Components/moreInfo1';
import moreInfo2 from './Components/moreInfo2';
import moreInfo3 from './Components/moreInfo3';




export default  (
    <Router>
    
    <Switch>
          <Route path="/" component={Home} />
          <Route path='/moreInfo1' component={moreInfo1} />
          <Route path='/moreInfo2' component={moreInfo2} />
          <Route path="/moreInfo3" component={moreInfo3} />
          
    </Switch>
    
    </Router>
  );