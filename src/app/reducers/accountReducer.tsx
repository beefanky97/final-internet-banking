import { accountActionTypes } from "src/app/actions/accountActions";
import { AnyAction } from "redux";

const initialAccountState = {
  isAuthenticated: false
};

export const accountReducer = (state = initialAccountState, action: AnyAction) => {
  switch (action.type) {
    case accountActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true

      };
    }

    default:
      return state;
  }
};
