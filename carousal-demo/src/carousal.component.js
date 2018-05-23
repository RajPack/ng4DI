import React, { Component } from 'react';
import './carousal.component.css';

export class Carousal extends Component {

  constructor(props){
    super(props);
    this.state={...props} 
  }
  componentWillReceiveProps(props){
    this.setState({...props})
  }
  render() {
    return (
        <div className={"carousal-section "+ (this.state.active==="yes" ? 'active' : 'hidden')} data-index={this.state.index} >
        <div className='carousal-title'>{this.state.title}</div>
        <div className='carousal-data'> {this.state.data} </div>
      </div>
    );
  }
}
