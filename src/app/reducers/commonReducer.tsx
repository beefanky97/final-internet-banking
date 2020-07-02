import { commonActionTypes } from "src/app/actions/commonActions";
import { AnyAction } from "redux";

const initialCommonReducer = {
  isLoading: false
};

export const commonReducer = (
  state = initialCommonReducer,
  action: AnyAction
) => {
  switch (action.type) {
    case commonActionTypes.ON_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case commonActionTypes.OFF_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};
