import { accountActionTypes } from "src/app/actions/accountActions";
import { AnyAction } from "redux";

const initialAccountState = {
  isAuthenticated: false,
  isCorrectEmail: false,
  isResetPasswordSuccess: false,
};

export const accountReducer = (
  state = initialAccountState,
  action: AnyAction
) => {
  switch (action.type) {
    case accountActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
      };
    }
    case accountActionTypes.LOGIN_FAIL: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    case accountActionTypes.LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthenticated: false,
      };
    }
    case accountActionTypes.FORGET_PASSWORD_SUCCESS: {
      return {...state, isCorrectEmail: action.data}
    }
    case accountActionTypes.RESET_PASSWORD_SUCCESS: {
      return {...state, isResetPasswordSuccess: action.data}
    }

    default:
      return state;
  }
};
