import { AnyAction } from "redux";
import { tellerActionTypes } from "src/app/actions/tellerActions";

let initialtellerState: object[] = [];

export const tellerReducer = (
    state = initialtellerState,
    action: AnyAction
) => {
    switch (action.type) {
        case tellerActionTypes.All_CUSTOMERS: {
            state = action.customers;
            return [...state];
        }
        case tellerActionTypes.ADD_CUSTOMER: {
            const customer: object = action.entity;
            state.push(customer);
            return [...state];
        }

        default:
            return state;
    }
};
