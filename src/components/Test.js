import React, { Component } from 'react'

export default class Test extends Component {

 
    
  render() {
   
    return (
      <div>
       <h1>{this.props.fname } {this.props.lname}</h1>
      </div>
    )
  }
}


/*

=> props vs  states  :

props :  
  - can't be changed 

states  : 
  - can be changed 
  - can be passed to child components
*/


