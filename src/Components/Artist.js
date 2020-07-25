import React, { Component } from 'react'
import Items1 from './Items1';
import Items2 from './Items2';
import Items3 from './Items3';


export default class Artist extends Component{
    render(){
        return(
            <div className="d-flex flex-wrap">
                <Items1 />
                <Items2 />
                <Items3 />
            </div>
        )
    }
}