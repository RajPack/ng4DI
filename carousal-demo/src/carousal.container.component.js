import React, { Component } from 'react';
import './carousal.container.component.css';
import { Carousal } from './carousal.component';

class CarousalContainer extends Component {

  constructor(props){
    super(props);
    this.state={
      listData: props.data || [],
      period: props.period || 10000,
      activeIndex: props.activeIndex || 0
    }
  }

  componentDidMount(){
    this.interval = setInterval(this.animate.bind(this) ,this.state.period)
    this.updateActiveItemInList();
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  updateActiveItemInList(){
    let list = this.state.listData.map((item, index)=>{ item.active = index===this.state.activeIndex ? true: false; return item;});
    this.setState({
      listData: list
    });
  }
  
  switchSlide(clickIndex){
    let list = this.state.listData.map((item, index)=>{ item.active = index===clickIndex ? true: false; return item;});
    this.setState({
      listData: list,
      activeIndex: clickIndex
    });
    this.resetTimer();
  }

  resetTimer(){
    clearInterval(this.interval);
    this.interval = setInterval(this.animate.bind(this), this.state.period);
  }

  animate(){
      let activeIndex = this.state.listData.length > (this.state.activeIndex+1) ? this.state.activeIndex+1 : 0;
      this.setState({
        activeIndex: activeIndex
      });
      this.updateActiveItemInList();
  }

  render() {
    return (
      <div className="carousal-container">
        <div className="carousal-sections">
          {
            this.state.listData.map((item, index)=>{
              return(
                  <Carousal title={item.title} data={item.data} key={index} index={index} active={item.active? "yes" : "no"}/>
              )
            })
          }
        </div>
        <div className="carousal-links">
        {
            this.state.listData.map((item, index)=>{
              return(
                <span key={index} >
                  <a index={index}  className={"dot-link "+ (item.active ? "active-slide": "")} onClick={this.switchSlide.bind(this, index)}></a>
                </span>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default CarousalContainer;
