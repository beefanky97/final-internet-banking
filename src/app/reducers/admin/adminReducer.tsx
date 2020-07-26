import { AnyAction } from "redux";
import { adminActionTypes } from "src/app/actions/admin/adminAction";
import { act } from "react-dom/test-utils";

let initialAdminState: any = {
  transactions: [],
  transaction: {},
  tellers: [],
  teller: {},
  isAddTellerSuccessed: false,
  isEditTellerSuccessed: false,
  isDeleleTellerSuccessed: false,
};

export const adminReducer = (state = initialAdminState, action: AnyAction) => {
  switch (action.type) {
    case adminActionTypes.GET_TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        transactions: action.transactions,
      };
    }
    case adminActionTypes.GET_DETAIL_TRANSACTION_SUCCESS: {
      return {
        ...state,
        transaction: action.transaction,
      };
    }

    case adminActionTypes.GET_TELLERS_SUCCESS: {
      return {
        ...state,
        tellers: action.tellers,
      };
    }

    case adminActionTypes.GET_DETAIL_TELLER_SUCCESS: {
      return {
        ...state,
        teller: action.teller,
      };
    }

    case adminActionTypes.ADD_TELLER_SUCCESS: {
      return {
        ...state,
        isAddTellerSuccessed: action.data,
      };
    }
    case adminActionTypes.EDIT_TELLER_SUCCESS: {
      return {
        ...state,
        isEditTellerSuccessed: action.data,
      };
    }
    case adminActionTypes.DELETE_TELLER_SUCCESS: {
      return {
        ...state,
        isDeleleTellerSuccessed: action.data,
      };
    }

    default:
      return state;
  }
};
