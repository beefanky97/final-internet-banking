import { combineReducers } from 'redux';
import { postReducer } from 'src/app/reducers/postReducer';
//Import some reducer to combine

const appReducer = combineReducers({
    //structure:  [name state]: [reducer's imported]
    postState: postReducer
})

export default appReducer;