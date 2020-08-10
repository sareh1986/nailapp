import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import img3 from "../Image/03.jpg";
import data from "../data.json";
import moreInfo3 from "./moreInfo3";

export default class Items3 extends Component {
  render() {
    return (
      <section className="col-xl-4 col-lg-4 col-md-4 col-12">
        <img src={img3} className="d-block mw-100" />
        <strong className="py-2 d-block text-center">
          {data.specialist[2].name}
        </strong>
        <p>محدوده: {data.specialist[2].location}</p>
        <p>شماره تماس: {data.specialist[2].tel}</p>
        <Link to="/moreInfo/3" className="btn-more d-block text-center">
          مشاهده نمونه کارهای بیشتر
        </Link>
      </section>
    );
  }
}
