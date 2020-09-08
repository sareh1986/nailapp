import React, { Component } from "react";
import images from "../Image/s1.jpg";
import axios from 'axios'
import Test from "../test.js";


export default class moreInfo1 extends Component {
  render() {
    return (
      <div className="d-flex flex-wrap col-12">
        <div className="col-7">
          <img src={images} className="d-block mw-100" />
        </div>
        <div className="col-5">
          <h2 className="text-title text-right my-3 font-weight-bold">
            خدمات ناخن آرایشگاه بانو صولتی
          </h2>
          <p>
            خدمات ناخن آرایشگاه بانو صولتی با استفاده از با کیفیت ترین مواد و با
            تجربه ی بالا آنچه که مطابق با سلیقه و انتظارات شماست را به بهترین
            نحو ارائه می کند.{" "}
          </p>
          <p>
            قیمت: <span className="font-weight-bold"> 200,000 تومان</span>
          </p>
          <p>محدوده فعالیت: تجریش</p>
          <p>ساعت سرویس‌دهی : 18 تا 10</p>
          <div className="contact-box">تماس با ناخن کار</div>
        </div>

        <Test />
      </div>
    );
  }
}
