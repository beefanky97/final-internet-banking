import { combineReducers } from 'redux';
import { postReducer } from 'src/app/reducers/postReducer';
import { accountReducer } from './accountReducer';
import { creditReducer } from './creditReducer';
import { reducer as modal } from 'redux-modal';
//Import some reducer to combine

const appReducer = combineReducers({
    //structure:  [name state]: [reducer's imported]
    postState: postReducer,
    accountState: accountReducer,
    creditState: creditReducer,
    modal
})

export default appReducer;