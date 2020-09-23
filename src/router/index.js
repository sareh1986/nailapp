import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutMain from "../Components/Layout/LayoutMain.js";

import Home2 from "../Components/Home2.js";
import Home from "../Components/Home.js";
import Join from "../Components/Join.js";
import Login from "../Components/Login.js";
import ComingSoon from "../Components/ComingSoon.js";
import Careers from "../Components/Careers.js";
import Skin from "../Components/Skin";
import Hair from "../Components/Hair.js";
import Calendar from "../Components/Admin/Calendar.js";
import News from "../Components/News.js";
import Details from "../Components/Details.js";
import ServiceProvider from "../Components/ServiceProvider/Provider.js";
import moreInfo1 from "../Components/moreInfo1";
import moreInfo2 from "../Components/moreInfo2";
import moreInfo3 from "../Components/moreInfo3";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/Join" component={Join} />
        <Route path="/Login" component={Login} />
        <Route path="/Careers" component={Careers} />
        <Route path="/ComingSoon" component={ComingSoon} />
        
        <LayoutMain>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Services/Skin" component={Skin} />
            <Route path="/Services/Hair" exact component={Hair} />
            <Route path="/ServiceProvider/1" component={ServiceProvider} />
            <Route path="/Calendar" component={Calendar} />
          </Switch>
          <Switch>
            <Route exact path="/News" component={News} />
            <Route exact path="/News/1" component={Details} />
          </Switch>
        </LayoutMain>

      

        {/* <Route exact path="/Services/:path?">
          <LayoutMain>
            <Switch>
              <Route path="/Services/Skin" component={Skin} />
              <Route path="/Services/Hair" exact component={Hair} />
            </Switch>
          </LayoutMain>
        </Route> */}

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
