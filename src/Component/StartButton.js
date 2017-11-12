import React, { Component } from 'react';
import { startGame,changeDisable, counter} from '../Action/Action';

class StartButton extends Component  {
  constructor (props){
    super(props);
    this.setInterval= this.setInterval.bind(this);
    this.clearInterval= this.clearInterval.bind(this);
  }
  setInterval(){
    this.props.dispatch(changeDisable()) //change disable 
    this.timerID= setInterval(() =>{
    this.props.dispatch(counter()); //start counter generation, counter++ each time Cell changes
    this.props.dispatch(startGame())},400); //at the same time start game
  }
  componentWillUnMount(){
    clearInterval (this.timerID);
  }
  clearInterval() {
    this.props.dispatch(changeDisable()) //disable when pause
    clearInterval(this.timerID);
  } 
  render(){
    return(
      <div>
        <button type='button' onClick={ this.setInterval } disabled={this.props.disable} >
          Start
        </button>
        <button onClick={this.clearInterval} disabled={!this.props.disable}>
          Pause
        </button>
        <br/>
        <div>Generation Counter: {this.props.counter}</div>
      </div>
      )
  }
}
export default StartButton