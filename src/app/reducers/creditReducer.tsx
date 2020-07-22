import { creditActionTypes } from "src/app/actions/creditActions";
import { AnyAction } from "redux";

const initialCeditReducer = {
  cardInfo: {
    name: "",
    card_number: "",
    bank: "",
    is_error: false,
  },
  sendingTransactions: [],
  receivingTransactions: [],
  remindingDebtTransactions: [],
  othersDebt: [],
  myDebt: [],
  othersUnpaidDebt: [],
  myUnpaidDebt: [],
};

export const creditReducer = (state = initialCeditReducer, action: AnyAction) => {
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

    case creditActionTypes.GET_DEBT_LIST_SUCCESS: {
      console.log("reucer", action.debtList);
      return {
        ...state,
        othersDebt: action.debtList.othersDebt,
        myDebt: action.debtList.myDebt,
        othersUnpaidDebt: action.debtList.othersUnpaidDebt,
        myUnpaidDebt: action.debtList.myUnpaidDebt,
      };
    }

    default:
      return state;
  }
};
