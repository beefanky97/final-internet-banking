import { creditActionTypes } from "src/app/actions/creditActions";
import { AnyAction } from "redux";

const initialCeditReducer = {
  cardInfo: {
    name: "",
    card_number: "",
    bank: "",
    is_error: false
  },
  sendingTransactions: [],
  receivingTransactions: [],
  remindingDebtTransactions: [],
};

export const creditReducer = (
  state = initialCeditReducer,
  action: AnyAction
) => {
  switch (action.type) {
    case creditActionTypes.GET_CARD_INFO_SUCCESS: {
      return {
        ...state,
        cardInfo: action.cardInfo,
      };
    }
    
    case creditActionTypes.GET_RECEIVING_TRANSACTION_SUCCESS: {
      return {
        ...state,
        receivingTransactions: action.receivingTransactions,
      };
    }
    
    case creditActionTypes.GET_SENDING_TRANSACTION_SUCCESS: {
      return {
        ...state,
        sendingTransactions: action.sendingTransactions,
      };
    }
    
    case creditActionTypes.GET_REMINDING_DEBT_TRANSACTION_SUCCESS: {
      return {
        ...state,
        remindingDebtTransactions: action.remindingDebtTransactions,
      };
    }


    default:
      return state;
  }
};
