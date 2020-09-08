import React, { Component } from "react";
import Slider from "react-slick";


export default class SlideShow extends Component {
  render() {
    let settings = {
      dots: true,
      //className: "sample",
      autoplay: true,
      //rtl: true,
      speed: 500
    };
    return (
      <Slider {...settings}>
        <div>
          <h3 style={{width:'200px', backgroundColor:'red', height:'300px'}}>slide num 1 *****</h3>
        </div>
        <div>
          <h3 style={{width:'200px', backgroundColor:'blue', height:'300px'}}>slide num 2 *****</h3>
        </div>
        <div>
          <h3 style={{width:'200px', backgroundColor:'black', height:'300px'}}>slide num 3 *****</h3>
        </div>
        <div>
          <h3 style={{width:'200px', backgroundColor:'white', height:'300px'}}>slide num 4 *****</h3>
        </div>
        <div>
          <h3 style={{width:'200px', backgroundColor:'green', height:'300px'}}>slide num 5 *****</h3>
        </div>
        <div>
          <h3 style={{width:'200px', backgroundColor:'yellow', height:'300px'}}>slide num 6 *****</h3>
        </div>
      </Slider>
    );
  }
}
