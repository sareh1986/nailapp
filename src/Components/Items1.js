import React, { Component } from "react";
import img1 from "../Image/01.jpg";
import data from "../data.json";
import { Link, Route, Switch } from "react-router-dom";
import moreInfo1 from "./moreInfo1";

export default class Items1 extends Component {
  render() {
    return (
      <section className="col-xl-4 col-lg-4 col-md-4 col-12">
        <img src={img1} className="d-block mw-100" />
        <strong className="py-2 d-block text-center">
          {data.specialist[0].name}
        </strong>
        <p>محدوده: {data.specialist[0].location}</p>
        <p>شماره تماس: {data.specialist[0].tel}</p>
        <Link to="/moreInfo/1" className="btn-more d-block text-center">
          مشاهده نمونه کارهای بیشتر
        </Link>
      </section>
    );
  }
}
