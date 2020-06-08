import { combineReducers } from 'redux';
import { postReducer } from 'src/app/reducers/postReducer';
import { accountReducer } from './accountReducer';
//Import some reducer to combine

const appReducer = combineReducers({
    //structure:  [name state]: [reducer's imported]
    postState: postReducer,
    accountState: accountReducer
})

export default appReducer;