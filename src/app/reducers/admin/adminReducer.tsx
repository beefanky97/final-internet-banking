import { AnyAction } from "redux";
import { adminActionTypes } from "src/app/actions/admin/adminAction";

let initialAdminState: any ={
    transactions: [],
    transaction: {}
}

export const adminReducer = (
    state = initialAdminState,
    action: AnyAction
) => {
    switch (action.type) {
        case adminActionTypes.ALL_TRANSACTIONS: {
            return {
                ...state,
                transactions: action.transactions
            }
        }
        case adminActionTypes.GET_DETAIL_TRANSACTION_SUCCESS: {
            return {
                ...state,
                transaction: action.transaction
            }
        }
        
        default:
            return state;
    }
};