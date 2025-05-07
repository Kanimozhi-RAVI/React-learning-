import React, { Component } from 'react'

export class ComponentClass extends Component {

    constructor(){
        super();
        this.state = {color: "Red" , model :"Ford"}
    }
  render() {
    
    return (
      <div>
        <h1>I am class componet state {this.state.color}</h1>
        <button onClick={()=> { this.setState(previousstate => { return {...previousstate , color:"Bluee"}}) }}>Change this Color</button>
      </div>
    )
  }
}

export default ComponentClass;