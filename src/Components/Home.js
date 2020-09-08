import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import SlideShow from './SlideShow'
import bg from "../Image/bg.jpg";
import img1 from "../Image/services.jpg";
import img2 from "../Image/services2.jpg";
import img3 from "../Image/services3.jpg";
import img4 from "../Image/services4.jpg";
import img5 from "../Image/services5.jpg";
import img6 from "../Image/services6.jpg";
import news1 from "../Image/news1.jpg";
import news2 from "../Image/news2.jpg";
import news3 from "../Image/news3.jpg";
import main from "../Image/ours.jpg";

export default () => {
  return (
    // style={{ height: "100vh" }}
    <div className="d-flex flex-wrap">
      <div className="w-100" style={{ height: "300px" }}>
        <SlideShow/>
      </div>
      <div className="w-100 d-flex flex-wrap bg-pink-light">
        <Link
          to="/Services/Skin"className="col-lg-4 col-xl-4 col-md-6 col-12 my-3">
          <div className="overflow-hidden position-relative effect">
            <img src={img1} className="d-block mw-100 mx-auto" />
            <div className="services-title">میکاپ و گریم</div>
          </div>
        </Link>
        <Link to="/Services/Hair" className="col-lg-4 col-xl-4 col-md-6 col-12 my-3">
          <div className="overflow-hidden position-relative effect">
            <img src={img2} className="d-block mw-100 mx-auto" />
            <div className="services-title">مو و هیرکات</div>
          </div>
        </Link>
        <div className="col-lg-4 col-xl-4 col-md-6 col-12 my-3">
          <div className="overflow-hidden position-relative effect">
            <img src={img3} className="d-block mw-100 mx-auto" />
            <div className="services-title">ماساژ تراپی</div>
          </div>
        </div>

        <div className="col-lg-4 col-xl-4 col-md-6 col-12 my-3">
          <div className="overflow-hidden position-relative effect">
            <img src={img4} className="d-block mw-100 mx-auto" />
            <div className="services-title">پوست</div>
          </div>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-6 col-12 my-3">
          <div className="overflow-hidden position-relative effect">
            <img src={img5} className="d-block mw-100 mx-auto" />
            <div className="services-title">ناخن</div>
          </div>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-6 col-12 my-3">
          <div className="overflow-hidden position-relative effect">
            <img src={img6} className="d-block mw-100 mx-auto" />
            <div className="services-title">ابرو</div>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex flex-wrap bg-pink-light">
        <div className="col-12 bg-white p-3 mt-3">
          <h2 className="text-pink font-weight-bold text-center my-0">
            آخرین اخبار زیبایی
          </h2>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
          <div className="w-100 bg-white overflow-hidden">
            <img src={news1} className="d-block mw-100 mx-auto zoom" />
            <p className="text-gray px-3 py-2 my-0">سلامت پوست</p>
            <p className="font-weight-bold px-3 py-2 my-0">
              اصول لایه برداری پوست
            </p>
            <p className="text-gray px-3 py-2 my-0 text-left">16 شهریور 99</p>
          </div>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
          <div className="w-100 bg-white overflow-hidden">
            <img src={news2} className="d-block mw-100 mx-auto zoom" />
            <p className="text-gray px-3 py-2 my-0">سلامت پوست</p>
            <p className="font-weight-bold px-3 py-2 my-0">
              هشت راهکار برای سلامت مو
            </p>
            <p className="text-gray px-3 py-2 my-0 text-left">16 شهریور 99</p>
          </div>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-6 col-12 mb-4">
          <div className="w-100 bg-white overflow-hidden">
            <img src={news3} className="d-block mw-100 mx-auto zoom" />
            <p className="text-gray px-3 py-2 my-0">سلامت پوست</p>
            <p className="font-weight-bold px-3 py-2 my-0">
              تهیه ماسک خانگی برای سلامت پوست
            </p>
            <p className="text-gray px-3 py-2 my-0 text-left">16 شهریور 99</p>
          </div>
        </div>
      </div>
      <div className="w-100 d-flex flex-wrap py-3">
        <h3 className="col-12 font-weight-bold text-center">
          <span className="px-4 title text-pink">درباره ما</span>
        </h3>
        <div className="col-lg-8 col-xl-8 col-md-6 col-12 order-xl-0 order-lg-0 order-1 my-3">
          <strong className="text-pink-light">
            گروه دیپ بیوتی ارائه دهنده خدمات آرایشی و زیبایی در محل
          </strong>
          <p>
            فعالیت‌های ما در حال حاضر شامل جدیدترین خدمات استایلینگ مو و ناخن،
            با کیفیتی مشابه سالن های مجهز آرایشی و با استفاده از مرغوب‌ترین مواد
            و با تکیه بر توانایی‌های برترین استادان، از طریق اعزام آرایشگر به
            منزل و در محل مورد نظر شما ارائه می گردد.دیگر نیازی به سفرهای درون
            شهری و صرف زمان زیاد نخواهید داشت.با همکاران آموزش دیده ما شما می
            توانید هر کجا که هستید از طریق اعزام آرایشگر به منزل یا محل کار،
            خدمات استایلینگ مو از براشینگ ساده تا کرلی و شنیون را دریافت کنید.
            برای این منظور کافیست خدمات مد نظر خود را انتخاب کرده و سپس ارتفاع
            موی خود را انتخاب کنید. فعالیت‌های ما با کیفیتی مشابه سالن‌های مجهز
            آرایشی و با استفاده از مرغوب‌ترین مواد و با تکیه بر توانایی‌های
            برترین استادان، در محل مورد نظر شما ارائه می گردد. ما با هدف ارتقا
            سطح کیفی زندگی و رفع نیازهای در حال رشد ایرانیان، در زمینه خدمات
            آرایشی، شامل مدل کوتاهی موی زنانه و خدمات ناخن در محل فعالیت می کند.
            ما با ایجاد بستری امن، سفارش رضایت بخش در فضای اینترنتی را رکن اصلی
            توسعه‌ ی فعالیت‌های خود در زمینه خدمات آرایشی قرار داده ایم. امید
            داریم با چشم اندازی روشن به آینده و با تکیه بر اصول اخلاقی و کاری،
            در ایجاد رابطه‌ ای پایدار با مشتری در ترغیب به استفاده از خدمات
            آنلاین و تغییر در الگوهای زندگی مردم شریف ایران موثر باشیم.
          </p>
        </div>
        <div className="col-lg-4 col-xl-4 col-md-6 col-12 order-xl-1 order-lg-1 order-0 my-3">
          <img src={main} className="d-block mw-100 mx-auto" />
        </div>
      </div>
    </div>
  );
};
