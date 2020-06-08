import { postActionType } from "src/app/actions/postActions";
import { AnyAction } from "redux";

const initialAccountState = {
  isAuthenticated: false
};

export const accountReducer = (state = initialAccountState, action: AnyAction) => {
  switch (action.type) {
    case postActionType.GET_ALL_POST_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true

      };
    }

    default:
      return state;
  }
};
