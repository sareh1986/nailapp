import React, { Component } from "react";
import logo from "../../logo.svg";
import "../../CSS/bootstrap.min.css";

export default class LayoutMain extends Component {
  render() {
    return (
      <div className="App d-flex flex-wrap">
        <header className="App-header col-12">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}
