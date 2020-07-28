import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Routers from "./routes";

import logo from "./logo.svg";

import Artist from "./Components/Artist";
import "./App.css";
import "./CSS/bootstrap.min.css";
import Home from "./App.js";
import moreInfo1 from "./Components/moreInfo1";
import moreInfo2 from "./Components/moreInfo2";
import moreInfo3 from "./Components/moreInfo3";

function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
