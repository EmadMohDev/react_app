import React, { Component } from 'react'

export default class TeamMember extends Component {
  render() {
    return (
        <div className="col-md-4 col-sm-6">
        <div className="card" style={{borderColor: this.props.info.website ? '' : 'red' ,  maxWidth: '100%'}}>
    
        <img style={{maxWidth: '100%'}} src={this.props.info.img} alt={this.props.info.name} />
            <div className='card-body'  >
                        <div className="card-title">
                        <h2>{this.props.info.name}</h2>
                        </div>
                        <div className="card-text">
                          
                            <h5>{this.props.info.position}</h5>
                            <div>{this.props.info.phone}</div>
                            <div>{this.props.info.email}</div>
                            <div>{this.props.info.website}</div>
                        </div>
                
            </div>
                    
        </div>
    </div>
    )
  }
}
