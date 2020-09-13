import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Logo from "../Image/logo beauty.svg";

export default class Login extends Component {
  render() {
    return (
      <div
        className="w-100 d-flex flex-wrap bg-pink-light align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
       <div className="col-8 py-3 mx-auto bg-white border d-flex flex-wrap">
        <div className="col-6">
            <h2 className="font-weight-bold text-pink-light py-2">ورود</h2>
          </div>
          <div className="col-6">
            <img src={Logo} className="float-left" height="60" />
          </div>
          <input
            className="my-2 box-search"
            type="text"
            placeholder="موبایل خود را وارد کنید"
          />
          <input
            className="my-2 box-search"
            type="password"
            placeholder="رمز عبور خود را وارد کنید"
          />
         <div className="d-flex flex-wrap my-2 box-search w-100">
            <div className="col-9">
              <input type="text" placeholder="عبارت امنیتی را وارد کنید" />
            </div>
            <div className="col-3 bg-pink text-white align-items-center justify-content-center d-flex">
              Az90Rp8
            </div>
          </div>
          <button className="my-2">ورود</button>
          <Link className="col-6">قوانین و مقررات</Link>
          <Link to="/Join" className="col-6 text-left">ثبت نام کنید</Link>
        </div>
      </div>
    );
  }
}
