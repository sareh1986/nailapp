import React, { Component } from "react";
import p1 from "../Image/p1.jpg";
import news1 from "../Image/news1.jpg";
import news2 from "../Image/news2.jpg";
import news3 from "../Image/news3.jpg";

export default class Skin extends Component {
  render() {
    return (
      <div className="w-100 d-flex flex-wrap">
        <div
          className="col-xl-2 col-lg-2 col-md-3 col-4 bg-sidebar">
          <p className="text-sidebar">پاکسازی</p>
          <p className="text-sidebar">آبرسانی</p>
          <p className="text-sidebar">لایه برداری</p>
          <p className="text-sidebar">پاکسازی</p>
          <p className="text-sidebar">آبرسانی</p>
          <p className="text-sidebar">لایه برداری</p>
        </div>
        <div className="col-xl-10 col-lg-10 col-md-9 col-8 bg-light-gray px-0">
          <div className="d-flex flex-wrap w-100">
            <h2 className="col-12 text-pink font-weight-bold my-0 py-3 navbar">
              سرویس دهنده های برتر
            </h2>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div className="d-flex flex-wrap p-1 w-100 bg-white">
                <div className="col-5 p-0">
                  <img src={p1} className="mw-100 d-block mx-auto curve-box" />
                </div>
                <div className="col-7">
                  <strong>مهشاد شکیبا</strong>
                  <p className="text-gray">متخصص پوست</p>
                  <p>مشاهده نمونه کارها</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div className="d-flex flex-wrap p-1 w-100 bg-white">
                <div className="col-5 p-0">
                  <img src={p1} className="mw-100 d-block mx-auto curve-box" />
                </div>
                <div className="col-7">
                  <strong>مهشاد شکیبا</strong>
                  <p className="text-gray">متخصص پوست</p>
                  <p>مشاهده نمونه کارها</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12">
              <div className="d-flex flex-wrap p-1 w-100 bg-white">
                <div className="col-5 p-0">
                  <img src={p1} className="mw-100 d-block mx-auto curve-box" />
                </div>
                <div className="col-7">
                  <strong>مهشاد شکیبا</strong>
                  <p className="text-gray">متخصص پوست</p>
                  <p>مشاهده نمونه کارها</p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap w-100 mt-5">
            <h2 className="col-12 text-pink font-weight-bold my-0 py-3 navbar">
              خدمات پوستی
            </h2>
            <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
              <div className="w-100 bg-white overflow-hidden">
                <img src={news2} className="d-block mw-100 mx-auto zoom" />
                <p className="text-gray px-3 py-2 my-0">قلهک</p>
                <p className="font-weight-bold px-3 py-2 my-0">پاکسازی پوست</p>
                <p>
                  <del className="px-2">100000 تومان</del>
                  <span className="px-2 text-pink font-weight-bold">
                    60000 تومان
                  </span>
                </p>
                <p className="py-2 my-0 text-left">
                  <span className="bg-pink text-white px-4">50%</span>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
              <div className="w-100 bg-white overflow-hidden">
                <img src={news2} className="d-block mw-100 mx-auto zoom" />
                <p className="text-gray px-3 py-2 my-0">تجریش</p>
                <p className="font-weight-bold px-3 py-2 my-0">آبرسانی پوست</p>
                <p>
                  <del className="px-2">100000 تومان</del>
                  <span className="px-2 text-pink font-weight-bold">
                    60000 تومان
                  </span>
                </p>
                <p className="py-2 my-0 text-left">
                  <span className="bg-pink text-white px-4">50%</span>
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
              <div className="w-100 bg-white overflow-hidden">
                <img src={news2} className="d-block mw-100 mx-auto zoom" />
                <p className="text-gray px-3 py-2 my-0">نارمک</p>
                <p className="font-weight-bold px-3 py-2 my-0">لایه برداری</p>
                <p>
                  <del className="px-2">100000 تومان</del>
                  <span className="px-2 text-pink font-weight-bold">
                    60000 تومان
                  </span>
                </p>
                <p className="py-2 my-0 text-left">
                  <span className="bg-pink text-white px-4">50%</span>
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap w-100 mt-5 bg-pink-light">
            <h2 className="col-12 text-pink font-weight-bold my-0 py-3 navbar bg-light-gray">
              خدمات پوستی
            </h2>
            <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
              <div className="w-100 bg-white overflow-hidden">
                <img src={news2} className="d-block mw-100 mx-auto zoom" />
                <p className="text-gray px-3 py-2 my-0">قلهک</p>
                <p className="font-weight-bold px-3 py-2 my-0">پاکسازی پوست</p>
                <p className="text-gray px-3 py-2 my-0">مهشاد شکیبا</p>
                <p className="px-3 text-pink font-weight-bold">1000000تومان</p>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
              <div className="w-100 bg-white overflow-hidden">
                <img src={news2} className="d-block mw-100 mx-auto zoom" />
                <p className="text-gray px-3 py-2 my-0">تجریش</p>
                <p className="font-weight-bold px-3 py-2 my-0">آبرسانی پوست</p>
                <p className="text-gray px-3 py-2 my-0">مهشاد شکیبا</p>
                <p className="px-3 text-pink font-weight-bold">1000000تومان</p>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
              <div className="w-100 bg-white overflow-hidden">
                <img src={news2} className="d-block mw-100 mx-auto zoom" />
                <p className="text-gray px-3 py-2 my-0">تجریش</p>
                <p className="font-weight-bold px-3 py-2 my-0">آبرسانی پوست</p>
                <p className="text-gray px-3 py-2 my-0">مهشاد شکیبا</p>
                <p className="px-3 text-pink font-weight-bold">1000000تومان</p>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
              <div className="w-100 bg-white overflow-hidden">
                <img src={news2} className="d-block mw-100 mx-auto zoom" />
                <p className="text-gray px-3 py-2 my-0">تجریش</p>
                <p className="font-weight-bold px-3 py-2 my-0">آبرسانی پوست</p>
                <p className="text-gray px-3 py-2 my-0">مهشاد شکیبا</p>
                <p className="px-3 text-pink font-weight-bold">1000000تومان</p>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
              <div className="w-100 bg-white overflow-hidden">
                <img src={news2} className="d-block mw-100 mx-auto zoom" />
                <p className="text-gray px-3 py-2 my-0">تجریش</p>
                <p className="font-weight-bold px-3 py-2 my-0">آبرسانی پوست</p>
                <p className="text-gray px-3 py-2 my-0">مهشاد شکیبا</p>
                <p className="px-3 text-pink font-weight-bold">1000000تومان</p>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
              <div className="w-100 bg-white overflow-hidden">
                <img src={news2} className="d-block mw-100 mx-auto zoom" />
                <p className="text-gray px-3 py-2 my-0">نارمک</p>
                <p className="font-weight-bold px-3 py-2 my-0">لایه برداری</p>
                <p className="text-gray px-3 py-2 my-0">مهشاد شکیبا</p>
                <p className="px-3 text-pink font-weight-bold">1000000تومان</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
