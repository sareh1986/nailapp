import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutMain from "../Components/Layout/LayoutMain.js";

import Home from "../Components/Home.js";
import Login from "../Components/Login.js"
import moreInfo1 from "../Components/moreInfo1";
import moreInfo2 from "../Components/moreInfo2";
import moreInfo3 from "../Components/moreInfo3";


export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />

        <Route exact path="/:path?">
          <LayoutMain>
            <Switch>
              <Route exact path="/Home" component={Home} />
              {/* <Route exact path="/Login" component={Login} /> */}
            </Switch>
          </LayoutMain>
        </Route>

        <Route path="/moreInfo/:path?" exact>
          <LayoutMain>
            <Switch>
              <Route path="/moreInfo/1" exact component={moreInfo1} />
              <Route path="/moreInfo/2" component={moreInfo2} />
              <Route path="/moreInfo/3" component={moreInfo3} />
            </Switch>
          </LayoutMain>
        </Route>

        {/* <Route path="/Home/:path?" exact>
          <LayoutMain>
            <Switch>
              <Route path="/Home" exact component={Home} />
            </Switch>
          </LayoutMain>
        </Route> */}
      </Switch>
    </Router>
  );
};
