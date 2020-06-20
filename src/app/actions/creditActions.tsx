export const creditActionTypes = {
  TRANSFER: 'TRANSFER',
  TRANSFER_SUCCESS: 'TRANSFER_SUCCESS',
  GET_CARD_INFO: 'GET_CARD_INFO',
  GET_CARD_INFO_SUCCESS: 'GET_CARD_INFO_SUCCESS',
};

//asign type for each action => identify
//Define structure of data when dispatch
export const transfer = () => {
  return {
    type: creditActionTypes.TRANSFER
  };
};

export const transferSuccsess = (tokkenInfo: any) => ({
  type: creditActionTypes.TRANSFER_SUCCESS,
  tokkenInfo,
});

export const getCardInfo = (card_number: string) => {
  return {
    type: creditActionTypes.GET_CARD_INFO,
    card_number
  };
};

export const getCardInfoSuccess = (cardInfo: Object) => ({
  type: creditActionTypes.GET_CARD_INFO_SUCCESS,
  cardInfo,
});

