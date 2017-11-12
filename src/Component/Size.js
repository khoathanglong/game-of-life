import {changeSize, clearChild} from '../Action/Action';
import React from 'react';

const Size =({dispatch})=> {
  let row;
  let col;
  return (
    <div>
      <form onSubmit={e =>{ 
        e.preventDefault();
        dispatch(changeSize(Number(row.value),Number(col.value))); //change size of the table
        dispatch(clearChild()) //Clear generation counter
      } } >
        <button type='submit'>Change Size/Clear Counter</button>
        <br/>
        <br/>
        <input type="number" min="10" max="100" step="5"
          ref={selectRow => {row=selectRow }} /> 
            ROWS 
        <input type="number" min="10" max="100" step="5"  
          ref={selectCol => {col=selectCol }} /> 
            COLS 

        
      </form>
    </div>
  )
}

export default Size