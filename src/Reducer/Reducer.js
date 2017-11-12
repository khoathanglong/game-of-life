import {combineReducers} from 'redux';


const reducer = (state =[] ,action) => {
	switch (action.type){
		case "ADD_LIVE":
			let newState=state.slice();
			let col=newState[action.y].slice(); //select a collumn 
			col[action.x]=!col[action.x]; // toggle the selected Cell value
			newState[action.y]=col;
			return newState;
		case 'START_GAME':
			return startGame(state);
		case 'CHANGE_SIZE':
			let nextState=[];
				if(action.rows==0||action.cols==0) {return state};
				for (let i = 0; i<action.rows; i++){
					nextState.push([])
				}
				for (let i =0;i<action.rows;i++){
					for (let j=0;j<action.cols; j++){
						if (i== 0||i==action.rows-1||j==0||j==action.cols-1) {
							nextState[i].push(false)
						}
						else{
							let random=  Math.floor(Math.random()*4) +1;
							random===3? nextState[i].push(true): nextState[i].push(false);
						}
					}
				}	
			return nextState;
		default:
			return state;	
	}
}

const startGame =(state=[]) =>{
	const nextState = state.slice();
	for (let y =1; y<state.length-1;y++){
		for (let x=1; x<state[0].length-1;x++){
			let count=0;
			if (state[y][x+1]===true) {count++};
			if (state[y][x-1]===true) {count++};			
			if (state[y+1][x]===true) {count++};
			if (state[y+1][x+1]===true) {count++};
			if (state[y+1][x-1]===true) {count++};
			if (state[y-1][x+1]===true) {count++};
			if (state[y-1][x]===true) {count++};
			if (state[y-1][x-1]===true) {count++};
			//change value based on count
			let col=nextState[y].slice();// if I dont do this step, 
			//state will be mutated though I used slice to get the nextState from the state?
			//Is this the effect of using Array(n).fill(i)??? 
			if (state[y][x]===true){
				if (count<=2) {col[x]=!true};
				if (count===2||count===3) {col[x]=true};
				if (count>3) {col[x]=!true};			
			}
			else if (state[y][x]===!true){
				if (count===3) {col[x]=true};
			}
			nextState[y]=col;
		}
	}
	return nextState
}

const disable = (state=false, action) => {
	switch (action.type){
		case 'CHANGE_DISABLE':
			return !state;
		default:
			return state
	}
}

const counter = (state=0, action) => {
	switch (action.type){
		case 'COUNT_CHILD':
			let counter = state; 
			counter ++
			return counter
		case 'CLEAR_CHILD':
			return 0 //start counting over again
		default:
			return state

	}
}


const appReducer = combineReducers({reducer, disable, counter});

export default appReducer;