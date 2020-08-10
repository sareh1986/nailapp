import React from "react";
import { Link, Route, Switch } from "react-router-dom"; 

export default () => {
  return (
    <div
      className="d-flex flex-wrap bg-login justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="col-7 panel-login p-4">
        <input className="my-3" type="text" placeholder="شهر خود را انتخاب کنید" />
        <input className="my-3" type="password" placeholder="منطقه خود را وارد کنید" />
        <Link to="/Home" className="btn-Login d-block my-3">ورود</Link>
      </div>
    </div>
  );
};
