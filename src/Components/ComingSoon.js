import React, { Component } from "react";
import Logo from "../Image/logo beauty.svg";
import { Link, Route, Switch } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div
        className="w-100 d-flex flex-wrap bg-pink-light align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-8 pb-4 bg-light-gray border-pink d-flex flex-wrap">
          <div className="p-3 col-12">
            <img src={Logo} className="mx-auto mw-100 d-block" height="60" />
          </div>

          <p className="col-12 text-center">
            به زودی با وب سایت و اپلیکیشن DeepBeauty ، زیبایی را به خانه شما می
            آوریم
          </p>
          <p className="col-12 text-center">
            ما در تلاشیم که کسب و کار خانگی را برای افراد متخصص در زمینه زیبایی
            فراهم آوریم
          </p>
          <p className="col-12 text-center">
            برای پیوستن به تیم ما فرم همکاری را تکمیل نموده تا کارشناسان ما با
            شما تماس حاصل کنند
          </p>
          <Link to="/Careers" className="col-9 my-3 mx-auto py-2 bg-pink text-white text-center">جهت همکاری با تیم  <span className="font-weight-bold">DeepBeauty</span>  اینجا کلیک کنید</Link>
        </div>
      </div>
    );
  }
}
