import React, { Component } from "react";

export default class moreInfo2 extends Component {
  // my-json-server.typicode.com/user/repo/posts/1
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }
  componentDidMount() {
    fetch("my-json-server.typicode.com/user/repo/posts/1")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if(error){
        return <div>Error: ----</div>;
    }
    return (
      <div>
        <p>name: {items.user}</p>
        <p>url: {items.url}</p>
      </div>
    );
  }
}
