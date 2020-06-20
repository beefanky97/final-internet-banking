import { accountActionTypes } from "src/app/actions/accountActions";
import { AnyAction } from "redux";

const initialAccountState = {
  isAuthenticated: false,
};

export const accountReducer = (
  state = initialAccountState,
  action: AnyAction
) => {
  switch (action.type) {
    case accountActionTypes.LOGIN_SUCCESS: {
      console.log("login success!");
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

    default:
      return state;
  }
};
