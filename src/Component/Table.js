import React from 'react';

const Cell = ({live=false, onCellClick,x,y, maxX, maxY}) =>{ //(x,y) is coordinate of a Cell
  return (
      <div style ={{border:'solid black 1px', 
                    width:'12px',height:'12px',
                    display:'inline-block',
                    'backgroundColor': live ? 'green': 
                        y==0||y==maxY-1 ||x==0||x==maxX-1 ? 'grey': 'white'
                    }} 
            onClick={() => onCellClick(x,y)}
            key={[{x},{y}]}
            >
      </div>
    )
}
const Cols= ({onRowClick, y,maxY, live, col}) => {//create 30 cols
  return (
    <div style= {{'lineHeight':'0',}} >
      {col.map((each,index) => {
        return (
            <Cell 
                  onCellClick={onRowClick} 
                  x={index}  y={y} 
                  live={col[index]} 
                  maxY={maxY}
                  maxX={col.length}
                  key={index}
            /> )}) //on the row, select x-axis => get the coordinate of a Cell
      }    
    </div>
  )
}

const Table =({coordinate, onClick }) => { //coordinate is a 2-dimension arrays
    return (
      <div>  
        {coordinate.map((each,index) => { //generate 20 rows
          return (
            <Cols  
              col={coordinate[index]} 
              onRowClick={onClick}
               y={index} 
               maxY={coordinate.length}
               key={index}
               />) //total of 30 cols
          })
        }
      </div>
    )
}

export default Table