import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    } from "react-router-dom";
import Home from "./Components/Home.js";
import Layout from "./Components/Layout/LayoutMain.js";
import moreInfo1 from "./Components/moreInfo1";
import moreInfo2 from "./Components/moreInfo2";
import moreInfo3 from "./Components/moreInfo3";

export default () => {
  return (
    <Router>
      <Switch>
        <Route>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/moreInfo1" component={moreInfo1} />
              <Route path="/moreInfo2" component={moreInfo2} />
              <Route path="/moreInfo3" component={moreInfo3} />
            </Switch>
          </Layout>
        </Route>
      </Switch>
    </Router>
  );
};
