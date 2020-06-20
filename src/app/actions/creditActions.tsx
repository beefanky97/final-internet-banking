export const creditActionTypes = {
  TRANSFER: 'TRANSFER',
  TRANSFER_SUCCESS: 'TRANSFER_SUCCESS',
  GET_CARD_INFO: 'GET_CARD_INFO',
  GET_CARD_INFO_SUCCESS: 'GET_CARD_INFO_SUCCESS',
};

//asign type for each action => identify
//Define structure of data when dispatch
export const transfer = (transferInfo: Object) => {
  return {
    type: creditActionTypes.TRANSFER,
    transferInfo
  };
};

export const transferSuccsess = () => ({
  type: creditActionTypes.TRANSFER_SUCCESS
});

export const getCardInfo = (card_number: number) => {
  return {
    type: creditActionTypes.GET_CARD_INFO,
    card_number
  };
};

export const getCardInfoSuccess = (cardInfo: Object) => ({
  type: creditActionTypes.GET_CARD_INFO_SUCCESS,
  cardInfo,
});

