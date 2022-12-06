import React, { Component } from 'react'
import TeamMember from './TeamMember';
import membersInfo from './membersInfo'

export default class Team extends Component {

  constructor(){
    super() 
    // make data by state
    this.state = {
      counter: 0,
       info: membersInfo, 
       newInfo: []
    }
    // this code will bind "this" to any function declare between constructor() and render()  like  clickHandler()
    this.clickHandler = this.clickHandler.bind(this)

  

  }


  clickHandler() {
    console.log('clicked')
   

    if(this.state.counter  < this.state.info.length ){

      this.setState((prevState) => {  // prevState can be called anything 
        return { 
          counter: prevState.counter + 1  
               }
    })

    console.log(this.state.counter)

      this.state.newInfo.push(membersInfo[this.state.counter ]) 
      console.log(this.state.newInfo)
    }
    
    
}

  mapping(data){
  return  data.map(member =>  <TeamMember   key={member.id}  info={member}  />   )

  }



  render() {

     const members  =  this.mapping(this.state.newInfo)


    return (
      <div className='row'>
            <button className='btn btn-primary btn-lg' onClick={this.clickHandler} >Add More Actor </button>
          
          {/* <h1>{this.state.counter}</h1> */}
        
        {members} 
    </div>
    )
  }
}
