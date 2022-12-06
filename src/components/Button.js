import React, { Component } from 'react'

export default class Button extends Component {

    constructor(){
        super() 
        this.state = {number :  0}
        // this code will bind "this" to any function declare between constructor() and render()  like  clickHandler()
        this.clickHandler = this.clickHandler.bind(this)

    }


    clickHandler() {
        console.log('clicked')
        this.setState((prevState) => {  // prevState can be called anything 
            return { number: prevState.number + 1 }
        })
    }

  render() {
    return (
      <div>
        <button className='btn btn-primary btn-lg btn-block'  onClick={this.clickHandler} >Click Me </button>
        <h1>{this.state.number}</h1>
      </div>
    )
  }
}


/*
=> Events on React : 
=> change state on class component :
*/