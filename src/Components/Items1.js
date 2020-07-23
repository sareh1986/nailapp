import React , {Component} from 'react'
import img1 from '../Image/01.jpg';
import data from '../data.json'

export default class Items1 extends Component{
    render(){
        return(
            <section className="col-4">
          <img src={img1} className="d-block mw-100" />
          <strong className="py-2 d-block">{data.specialist[0].name}</strong>
          <p>محدوده:  {data.specialist[0].location}</p>
          <p>شماره تماس: {data.specialist[0].tel}</p>
          <a href="/moreInfo" className="btn-more d-block">مشاهده نمونه کارهای بیشتر</a>
            </section>
        )
    }
}