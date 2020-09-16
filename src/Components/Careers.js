import React, { Component } from "react";
import Logo from "../Image/logo beauty.svg";
import { Link, Route, Switch } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <div
        className="w-100 d-flex flex-wrap py-2 bg-pink-light align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="col-8 pb-4 bg-light-gray border d-flex flex-wrap">
          <div className="p-3 col-12">
            <img src={Logo} className="mx-auto mw-100 d-block" height="60" />
          </div>
          <div className="col-9 mx-auto">
            <input
              className="my-2 box-search"
              type="text"
              placeholder="نام خود را وارد کنید"
            />
          </div>
          <div className="col-9 mx-auto">
            <input
              className="my-2 box-search"
              type="text"
              placeholder="نام خانوادگی خود را وارد کنید"
            />
          </div>
          <div className="col-9 mx-auto">
            <input
              className="my-2 box-search"
              type="text"
              placeholder="شهر خود را وارد کنید"
            />
          </div>
          <div className="col-9 mx-auto">
            <input
              className="my-2 box-search"
              type="text"
              placeholder="شماره تماس خود را وارد کنید"
            />
          </div>
          <div className="col-9 d-flex flex-wrap mx-auto">
            <span className="col-3 d-flex align-items-center">نوع سرویس</span>
            <div className="my-2 col-9 d-flex flex-wrap px-0">
              <span className="align-items-center d-flex col-4">
                <input className="box-search px-1" type="checkbox" />
                خدمات ناخن
              </span>
              <span className="align-items-center d-flex col-4">
                <input className="box-search px-1" type="checkbox" />
                میکاپ و گریم
              </span>
              <span className="align-items-center d-flex col-4">
                <input className="box-search px-1" type="checkbox" />
                مو و هیرکات
              </span>
              <span className="align-items-center d-flex col-4">
                <input className="box-search px-1" type="checkbox" />
                پوست
              </span>
              <span className="align-items-center d-flex col-4">
                <input className="box-search px-1" type="checkbox" />
                ابرو
              </span>
              <span className="align-items-center d-flex col-4">
                <input className="box-search px-1" type="checkbox" />
                ماساژ
              </span>
            </div>
          </div>
          <div className="col-9 d-flex flex-wrap mx-auto">
            <span className="col-3 d-flex align-items-center">
              تصویر کارت ملی
            </span>
            <div className="my-2 col-9 px-0">
              <input className="box-search" type="file" />
            </div>
          </div>
          <div className="col-9 d-flex flex-wrap mx-auto">
            <span className="col-3 d-flex align-items-center">
              تصویر مدارک
            </span>
            <div className="my-2 col-9 px-0">
              <input className="box-search" type="file" />
            </div>
          </div>
          <div className="col-9 d-flex flex-wrap mx-auto">
            <span className="col-3 d-flex align-items-center">
              تصویر مدارک
            </span>
            <div className="my-2 col-9 px-0">
              <input className="box-search" type="file" />
            </div>
          </div>
          <div className="col-9 d-flex flex-wrap mx-auto">
            <span className="col-3 d-flex align-items-center">
              تصویر مدارک
            </span>
            <div className="my-2 col-9 px-0">
              <input className="box-search" type="file" />
            </div>
          </div>
          <div className="col-9 mx-auto">
            <button className="my-2">ثبت نام</button>
          </div>
        </div>
      </div>
    );
  }
}
