import React , {Component} from 'react'
import img3 from '../Image/03.jpg';
import data from '../data.json';


export default class Items3 extends Component{
    render(){
        return(
            <section className="col-4">
          <img src={img3} className="d-block mw-100" />
          <strong className="py-2 d-block">{data.specialist[2].name}</strong>
          <p>محدوده:  {data.specialist[2].location}</p>
          <p>شماره تماس: {data.specialist[2].tel}</p>
          <a href="/moreInfo" className="btn-more d-block">مشاهده نمونه کارهای بیشتر</a>

      </section>
        )
    }
}