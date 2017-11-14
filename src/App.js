import React, { Component } from 'react';
import './App.css';
import StartButtonContainer  from './Container/StartButtonContainer';
import ChangeSizeContainer from './Container/ChangeSizeContainer';
import TableContainer from './Container/TableContainer';



class App extends Component {
  render() {
    return (
      <div className='Game' >
        <h1>FreeCodeCamp: Game of Life</h1>
        <StartButtonContainer/> 
        <ChangeSizeContainer />
        <br/>
        <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target='blank'>Game Rules</a>
        <TableContainer/> 
      </div>
      )}
}

export default App;
