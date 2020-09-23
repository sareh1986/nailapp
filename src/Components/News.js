import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import news3 from "../Image/news3.jpg";
import news2 from "../Image/news2.jpg";
import news1 from "../Image/news1.jpg";

export default class News extends Component {
  render() {
    return (
      <div
        className="w-100 d-flex flex-wrap bg-light-gray"
        style={{ minHeight: "100vh" }}
      >
        <h2 className="col-12 text-pink font-weight-bold my-0 py-3 navbar">
          اخبار سلامت پوست
        </h2>
        <Link to="/News/1" className="col-4 my-3">
          <div className="w-100 bg-white overflow-hidden border">
            <img src={news3} className="d-block mw-100 mx-auto zoom" />
            <p className="text-gray px-3 py-2 my-0">سلامت پوست</p>
            <p className="font-weight-bold px-3 py-2 my-0">
              تهیه ماسک خانگی برای سلامت پوست
            </p>
            <p className="text-gray px-3 py-2 my-0 text-left">16 شهریور 99</p>
          </div>
        </Link>
        <Link to="/News/1" className="col-4 my-3">
          <div className="w-100 bg-white overflow-hidden border">
            <img src={news2} className="d-block mw-100 mx-auto zoom" />
            <p className="text-gray px-3 py-2 my-0">سلامت پوست</p>
            <p className="font-weight-bold px-3 py-2 my-0">
              تهیه ماسک خانگی برای سلامت پوست
            </p>
            <p className="text-gray px-3 py-2 my-0 text-left">16 شهریور 99</p>
          </div>
        </Link>
        <Link to="/News/1" className="col-4 my-3">
          <div to="/News/1" className="w-100 bg-white overflow-hidden border">
            <img src={news1} className="d-block mw-100 mx-auto zoom" />
            <p className="text-gray px-3 py-2 my-0">سلامت پوست</p>
            <p className="font-weight-bold px-3 py-2 my-0">
              تهیه ماسک خانگی برای سلامت پوست
            </p>
            <p className="text-gray px-3 py-2 my-0 text-left">16 شهریور 99</p>
          </div>
        </Link>
        <h2 className="col-12 text-pink font-weight-bold my-0 py-3 navbar">
          اخبار سلامت مو
        </h2>
        <Link to="/News/1" className="col-4 my-3">
          <div to="/News/1" className="w-100 bg-white overflow-hidden border">
            <img src={news1} className="d-block mw-100 mx-auto zoom" />
            <p className="text-gray px-3 py-2 my-0">سلامت پوست</p>
            <p className="font-weight-bold px-3 py-2 my-0">
              تهیه ماسک خانگی برای سلامت پوست
            </p>
            <p className="text-gray px-3 py-2 my-0 text-left">16 شهریور 99</p>
          </div>
        </Link >
        <Link to="/News/1" className="col-4 my-3">
          <div className="w-100 bg-white overflow-hidden border">
            <img src={news3} className="d-block mw-100 mx-auto zoom" />
            <p className="text-gray px-3 py-2 my-0">سلامت پوست</p>
            <p className="font-weight-bold px-3 py-2 my-0">
              تهیه ماسک خانگی برای سلامت پوست
            </p>
            <p className="text-gray px-3 py-2 my-0 text-left">16 شهریور 99</p>
          </div>
        </Link>
        <Link to="/News/1" className="col-4 my-3">
          <div className="w-100 bg-white overflow-hidden border">
            <img src={news2} className="d-block mw-100 mx-auto zoom" />
            <p className="text-gray px-3 py-2 my-0">سلامت پوست</p>
            <p className="font-weight-bold px-3 py-2 my-0">
              تهیه ماسک خانگی برای سلامت پوست
            </p>
            <p className="text-gray px-3 py-2 my-0 text-left">16 شهریور 99</p>
          </div>
        </Link>
      </div>
    );
  }
}
