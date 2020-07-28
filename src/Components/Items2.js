import React , {Component} from 'react'
import { Link, Route, Switch } from "react-router-dom";
import img2 from '../Image/02.jpg';
import data from '../data.json'
import moreInfo2 from "./moreInfo2";

export default class Items2 extends Component{
    render(){
        return(
            <section className="col-4">
          <img src={img2} className="d-block mw-100" />
          <strong className="py-2 d-block">{data.specialist[1].name}</strong>
          <p>محدوده:  {data.specialist[1].location}</p>
          <p>شماره تماس: {data.specialist[1].tel}</p>
          <Link to="/moreInfo2" className="btn-more d-block">مشاهده نمونه کارهای بیشتر</Link>
      
          <switch>
            <Route exact path='/moreInfo2' component={moreInfo2} />
          </switch> 

      </section>
        )
    }
}