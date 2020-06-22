import { creditActionTypes } from "src/app/actions/creditActions";
import { AnyAction } from "redux";

const initialCeditReducer = {
  cardInfo: {
    name: "",
    card_number: "",
    bank: "",
    is_error: false
  }
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

    default:
      return state;
  }
};
