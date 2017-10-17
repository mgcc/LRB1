import React, { Component } from 'react';

const Home = (props) =>
  <div>
    <h2>This is the Home Page</h2>
    <Something
      data="Hello">
      lkajsdlfk
    </Something>
  </div>

// const Something = (props) =>
//   <div>
//     {props.children}
//     <h2>Some other component</h2>
//   </div>


class Something extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: 'some data'
    }

  }


  render() {
    console.log(this);
    return (
      <div>
        {this.props.children}
        <h2>Some other component</h2>
      </div>
    )
  }
}
export default Home;