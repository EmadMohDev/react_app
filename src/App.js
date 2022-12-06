import React , {Component} from 'react'
import Header from './components/Header'
import Team from './components/Team'

export default class App extends Component {
    constructor(){
        super()
        this.state = {answer: "Yes"}
    }


  render() {

   
    return (
        <div className="container mt-3">
           <Header />
           <Team />
        </div>
    )
  }
}
