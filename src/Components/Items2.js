import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import img2 from "../Image/02.jpg";
import data from "../data.json";
import moreInfo2 from "./moreInfo2";

export default class Items2 extends Component {
  render() {
    return (
      <section className="col-xl-4 col-lg-4 col-md-4 col-12">
        <img src={img2} className="d-block mw-100" />
        <strong className="py-2 d-block text-center">
          {data.specialist[1].name}
        </strong>
        <p>محدوده: {data.specialist[1].location}</p>
        <p>شماره تماس: {data.specialist[1].tel}</p>
        <Link to="/moreInfo/2" className="btn-more d-block text-center">
          مشاهده نمونه کارهای بیشتر
        </Link>
      </section>
    );
  }
}
