

export const addLive = (x,y) => {
	return {
		type: 'ADD_LIVE',
		x,
		y
	}
}

export const startGame = () => {
	return {
		type:'START_GAME',
	}
}

export const changeDisable = ()=>{
	return {
		type:'CHANGE_DISABLE'
	}
}

export const changeSize = (rows,cols) => {
	return {
		type:"CHANGE_SIZE",
		rows,
		cols
	}
}
export const counter = () => {
	return {
		type:"COUNT_CHILD",
	}
}
export const clearChild = () => {
	return {
		type:"CLEAR_CHILD"
	}
}