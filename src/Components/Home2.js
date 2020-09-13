import React, { Component } from "react";
import Artist from "./Artist";
import logo from '../logo.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="App d-flex flex-wrap" >
        {/* <header className="App-header col-12">
              <img src={logo} className="App-logo" alt="logo" />
            </header> */}
        <div className="App">
          <Artist />
        </div>
      </div>
    );
  }
}
