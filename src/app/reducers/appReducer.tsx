import { combineReducers } from 'redux';
import { postReducer } from 'src/app/reducers/postReducer';
import { accountReducer } from './accountReducer';
import { creditReducer } from './creditReducer';
import { recieverReducer } from './recieverReducer';
import { commonReducer } from './commonReducer';
import { reducer as modal } from 'redux-modal';
import { tellerReducer } from './tellerReducer/tellerReducer';
import { adminReducer } from './admin/adminReducer';
//Import some reducer to combine

const appReducer = combineReducers({
    //structure:  [name state]: [reducer's imported]
    postState: postReducer,
    accountState: accountReducer,
    creditState: creditReducer,
    recieverState: recieverReducer,
    commonState: commonReducer,
    modal,
    tellerState: tellerReducer,
    adminState: adminReducer
})

export default appReducer;