import React, { Component } from "react";
import slide from "../../Image/slide1.jpg";
import offer from "../../Image/offer1.jpg";
import img from "../../Image/profile.jpg";
//

export default class Provider extends Component {
  render() {
    return (
      <div className="w-100 d-flex flex-wrap">
        <div className="col-xl-7 col-lg-7 col-md-7 col-12 my-2">
          <img src={slide} className="mw-100 mx-auto d-block" />
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-12 my-2">
          <img src={offer} className="mw-100 mx-auto d-block" />
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7 col-12 my-2">
          <strong className="text-pink-light px-2">درباره ندا علی پور</strong>
          <p className="px-2">
            ندا علی پور دارای مدرک دوره آموزشی پاکسازی پوست .از آنجایی که پوست،
            اولین سد دفاعی بدن می باشد که وظیفه دفع سموم بدن و مواد زیان آور را
            از طریق تعرق به دنبال دارد، در دوره پاکسازی پوست آموزش آناليز كردن
            سـاختمان پوسـت ، آمـاده سـازي پوست مشتري ، پاكسازي انواع پوست ،
            مراقبت هاي بعد از پاكسازي پوست و به كـارگيري ماسـك صـورت به هنر جو
            داده میشود. هنرجو در این دوره می آموزد چطور آلودگی‌های سطحی و
            دانه‌های سرسیاه را از سطح پوست بردارد و مواد معدنی و اکسیژن‌دار را
            به سطح درمیست (لایه زیرین پوست) برساند و تمام منافذ آن را تمیز کند.
            ندا علی پور دارای مدرک دوره آموزشی پاکسازی پوست .از آنجایی که پوست،
            اولین سد دفاعی بدن می باشد که وظیفه دفع سموم بدن و مواد زیان آور را
            از طریق تعرق به دنبال دارد، در دوره پاکسازی پوست آموزش آناليز كردن
            سـاختمان پوسـت ، آمـاده سـازي پوست مشتري ، پاكسازي انواع پوست ،
            مراقبت هاي بعد از پاكسازي پوست و به كـارگيري ماسـك صـورت به هنر جو
            داده میشود. هنرجو در این دوره می آموزد چطور آلودگی‌های سطحی و
            دانه‌های سرسیاه را از سطح پوست بردارد و مواد معدنی و اکسیژن‌دار را
            به سطح درمیست (لایه زیرین پوست) برساند و تمام منافذ آن را تمیز کند.
            از آنجایی که پوست، اولین سد دفاعی بدن می باشد که وظیفه دفع سموم بدن
            و مواد زیان آور را از طریق تعرق به دنبال دارد، در دوره پاکسازی پوست
            آموزش آناليز كردن سـاختمان پوسـت ، آمـاده سـازي پوست مشتري ، پاكسازي
            انواع پوست ، مراقبت هاي بعد از پاكسازي پوست و به كـارگيري ماسـك
            صـورت به هنر جو داده میشود. هنرجو در این دوره می آموزد چطور
            آلودگی‌های سطحی و دانه‌های سرسیاه را از سطح پوست بردارد و مواد معدنی
            و اکسیژن‌دار را به سطح درمیست (لایه زیرین پوست) برساند و تمام منافذ
            آن را تمیز کند.
          </p>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-5 col-12 my-2">
          <img src={img} className="mw-100 mx-auto d-block" />
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-12 my-2">
          <h2 className="font-weight-bold">لیست خدمات</h2>
          <table className="w-100">
            <thead>
              <tr>
                <th>نوع سرویس</th>
                <th>زمان تقریبی سرویس دهی</th>
                <th>قیمت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>پاکسازی</td>
                <td>2 ساعت</td>
                <td>300000 تومان</td>
              </tr>
              <tr>
                <td>لایه برداری</td>
                <td>1 ساعت</td>
                <td>200000 تومان</td>
              </tr>
              <tr>
                <td>آبرسانی</td>
                <td>1 ساعت</td>
                <td>200000 تومان</td>
              </tr>
              <tr>
                <td> ماساژ صورت</td>
                <td>30 دقیقه</td>
                <td>200000 تومان</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-12 my-2">
          <h2 className="font-weight-bold">زمان آزاد سرویس دهنده</h2>
          <table className="w-100">
            <thead>
              <tr>
                <th>روز هفته</th>
                <th>ساعت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>شنبه</td>
                <td>8 تا 10 | 10 تا 12 | 18 تا 20</td>
              </tr>
              <tr>
                <td>یکشنبه</td>
                <td>9 تا 11 | 12 تا 14 | 18 تا 20</td>
              </tr>
              <tr>
                <td>دو شنبه</td>
                <td>8 تا 10 | 12 تا 14 | 16 تا 18</td>
              </tr>
              <tr>
                <td>سه شنبه</td>
                <td>9 تا 11 | 12 تا 14 | 18 تا 20</td>
              </tr>
              <tr>
                <td>چهار شنبه</td>
                <td>8 تا 10 | 12 تا 14 | 16 تا 18</td>
              </tr>
              <tr>
                <td>پنجشنبه</td>
                <td>8 تا 10 | 10 تا 12 | 18 تا 20</td>
              </tr>
              <tr>
                <td>جمعه</td>
                <td>11 تا 13 | 17 تا 19 | 20 تا 22</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-8 my-3 mx-auto py-3 bg-pink text-white text-center font-weight-bold">
          درخواست سرویس
        </div>
        <h2 className="col-12 text-pink font-weight-bold mb-0 mt-5 py-3 navbar bg-light-gray">نظرات کاربران</h2>
        <div className="col-12 bg-pink-light d-flex flex-wrap">
        <div className="col-9 my-2 py-2 mx-auto">
            <div className="bg-white p-2">
              <div className="box-search my-3">
                <input
                  type="text"
                  className="border-p"
                  placeholder="نظرات خود را درباره این سرویس وارد کنید"
                />
              </div>
              <div className="my-3">
                <input
                  type="file"
                  placeholder="نظرات خود را درباره این سرویس وارد کنید"
                />
              </div>
              <div className="my-3">
                <input
                  className="bg-pink py-2 text-center text-white"
                  type="button"
                  value="ثبت نظر"
                />
              </div>
            </div>
          </div>
          <div className="col-9 py-2 mx-auto">
            <div className="w-100 my-3 bg-white pt-3">
              <p className="my-2 px-3">
                <span className="px-2 font-weight-bold">هستی بیات </span>|
                <span className="px-2 text-gray"> 22 شهریور 99</span> |
                <span className="px-2 text-gray">ژلیش ناخن</span>
              </p>
              <p className="my-2 px-3">
                از لحاظ کار بسیار حرفه ای و وقت شناس و خوش برخورد بود
              </p>
              <div className="py-2 bg-pink text-white text-center">
                مشاهده تصاویر
              </div>
            </div>
            <div className="w-100 my-3 bg-white pt-3">
              <p className="my-2 px-3">
                <span className="px-2 font-weight-bold">هستی بیات </span>|
                <span className="px-2 text-gray"> 22 شهریور 99</span> |
                <span className="px-2 text-gray">لایه برداری</span>
              </p>
              <p className="my-2 px-3">
                از لحاظ کار بسیار حرفه ای و وقت شناس و خوش برخورد بود
              </p>
              <div className="py-2 bg-pink text-white text-center">
                مشاهده تصاویر
              </div>
            </div>
            <div className="w-100 my-3 bg-white pt-3">
              <p className="my-2 px-3">
                <span className="px-2 font-weight-bold">هستی بیات </span>|
                <span className="px-2 text-gray"> 22 شهریور 99</span> |
                <span className="px-2 text-gray">ژلیش ناخن</span>
              </p>
              <p className="my-2 px-3">
                از لحاظ کار بسیار حرفه ای و وقت شناس و خوش برخورد بود
              </p>
              <div className="py-2 bg-pink text-white text-center">
                مشاهده تصاویر
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
