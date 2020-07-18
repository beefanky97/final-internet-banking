import { AnyAction } from "redux";
import { tellerActionTypes } from "src/app/actions/tellerActions";
import { tellerService } from "src/api/teller/tellerService";

let initialtellerState: any = {
  customer: {},
  cards: [],
  customers: [],
};

export const tellerReducer = (state = initialtellerState, action: AnyAction) => {
  switch (action.type) {
    case tellerActionTypes.All_CUSTOMERS: {
      return {
        ...state,
        customers: action.customers,
      };
    }
    case tellerActionTypes.DETAIL_CUSTOMER: {
      return {
        ...state,
        customer: action.customer,
      };
    }
    case tellerActionTypes.INFO_CARDS: {
      return {
        ...state,
        cards: action.cards,
      };
    }

    case tellerActionTypes.GET_RECEIVING_TRANSACTION_SUCCESS: {
      return {
        ...state,
        receivingTransactions: action.receivingTransactions,
      };
    }

    case tellerActionTypes.GET_SENDING_TRANSACTION_SUCCESS: {
      return {
        ...state,
        sendingTransactions: action.sendingTransactions,
      };
    }

    case tellerActionTypes.GET_REMINDING_DEBT_TRANSACTION_SUCCESS: {
      return {
        ...state,
        remindingDebtTransactions: action.remindingDebtTransactions,
      };
    }

    default:
      return state;
  }
};
