import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutMain from "../Components/Layout/LayoutMain.js";

import Home2 from "../Components/Home2.js";
import Home from "../Components/Home.js";
import Skin from "../Components/Skin";
import Hair from "../Components/Hair.js";
import moreInfo1 from "../Components/moreInfo1";
import moreInfo2 from "../Components/moreInfo2";
import moreInfo3 from "../Components/moreInfo3";

export default () => {
  return (
    <Router>
      <Switch>
        
        <LayoutMain>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </LayoutMain>

       
        <Route exact path="/Services/:path?">
          <LayoutMain>
            <Switch>
              <Route exact path="/Services/Skin" component={Skin} />
              <Route path="/Services/Hair" exact component={Hair} />
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
