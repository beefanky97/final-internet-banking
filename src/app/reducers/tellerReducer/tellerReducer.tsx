import { AnyAction } from "redux";
import { tellerActionTypes } from "src/app/actions/tellerActions";

let initialtellerState: any = {
    customer: {},
    customers: []
};

export const tellerReducer = (
    state = initialtellerState,
    action: AnyAction
) => {
    switch (action.type) {
        case tellerActionTypes.All_CUSTOMERS: {
            return {
                ...state,
                customers: action.customers
            };
        }
        case tellerActionTypes.DETAIL_CUSTOMER: {
            return {
                ...state,
                customer: action.customer
            }
        }
        case tellerActionTypes.INFO_CARDS: {
            return
        }

        default:
            return state;
    }
};
