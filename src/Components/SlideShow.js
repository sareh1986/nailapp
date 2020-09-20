import React, { Component } from "react";
import Slider from "react-slick";
import s1 from "../Image/slide2.jpg";
import s2 from "../Image/slide3.jpg";


export default class SlideShow extends Component {
  render() {
    let settings = {
      dots: true,
      //className: "sample",
      autoplay: true,
      //rtl: true,
      speed: 500,
      arrows: false,
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={s1}/>
        </div>
        <div>
          <img src={s2}/>
        </div>
        <div>
          <img src={s1}/>
        </div>
        <div>
          <img src={s2}/>
        </div>
      </Slider>
    );
  }
}
