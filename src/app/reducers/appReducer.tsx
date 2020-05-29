import { combineReducers } from 'redux';
//Import some reducer to combine

const appReducer = combineReducers({
    //structure:  [name state]: [reducer's imported]
    exampleSate: () => {return {trash: 1}}
})

export default appReducer;