import React, { Component } from 'react'

 class Classcomponent extends Component {
  render() {
    const {phone} = this.props;
    const { type, Price} = phone;
    return (
      <div>
        <h4>I am a  {type} Mobile, This price is  ₹{Price} Expensive </h4>
      </div>
    )
  }
}
export default Classcomponent;

