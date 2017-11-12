import appReducer from '../Reducer/Reducer';
import {createStore} from 'redux';

const initialArray=[];
//array is created by Array(20).fill([]) will loop 20*20 times 
for (let i = 0; i<20; i++){
	initialArray.push([])
}

for (let i =0;i<initialArray.length;i++){
	for (let j=0;j<30; j++){
		if (i== 0||i==initialArray.length-1||j==0||j==29) 
			{
				initialArray[i].push(false)
			}
		else{
				let random =  Math.floor(Math.random()*4) +1;
				random===3? initialArray[i].push(true): initialArray[i].push(false);
			}
	}
	//break is needed to be used with array created through Array(n).fill()
}

const initialState= {reducer:initialArray, disable: false, counter:0};
const store= createStore(appReducer, initialState);


export default store
