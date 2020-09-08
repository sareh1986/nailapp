import axios from "axios";
import React, { Component } from "react";

export default class test extends Component{
  state = {
    persons: []
  }

  // componentDidMount() {
  //   console.log('start');
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       console.log(res.data);
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }          
    render(){
        return(
            
            // axios.get('https://jsonplaceholder.typicode.com/todos/1')
            // .then(function (response) {
            //   // handle success
            //   console.log(response);
            // })
            // .catch(function (error) {
            //   // handle error
            //   console.log(error);
            // })
            // .finally(function () {
            //   // always executed
            // })
           

           
            
                <ul>
                  { this.state.persons.map(person => <li>{person.name}</li>)}
                </ul>


  
              

        )
    }

}