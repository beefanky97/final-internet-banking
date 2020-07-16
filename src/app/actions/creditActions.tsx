export const creditActionTypes = {
  TRANSFER: 'TRANSFER',
  TRANSFER_SUCCESS: 'TRANSFER_SUCCESS',
  GET_CARD_INFO: 'GET_CARD_INFO',
  GET_CARD_INFO_SUCCESS: 'GET_CARD_INFO_SUCCESS',
  GET_HISTORY_TRANSACTION: 'GET_HISTORY_TRANSACTION',
  GET_RECIEVING_TRANSACTION_SUCCESS: 'GET_RECIEVING_TRANSACTION_SUCCESS',
  GET_SENDING_TRANSACTION_SUCCESS: 'GET_SENDING_TRANSACTION_SUCCESS',
  GET_REMINDING_DEBT_TRANSACTION_SUCCESS: 'GET_REMINDING_DEBT_TRANSACTION_SUCCESS',

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

export const getHistoryTransaction = (type: string) => ({
  type: creditActionTypes.GET_HISTORY_TRANSACTION,
  type_transaction: type,
});

export const getRecivingTransactionSuccess = (data: any) => ({
  type: creditActionTypes.GET_RECIEVING_TRANSACTION_SUCCESS,
  recievingTransactions: data,
});

export const getSendingTransactionSuccess = (data: any) => ({
  type: creditActionTypes.GET_SENDING_TRANSACTION_SUCCESS,
  sendingTransactions: data,
});

export const getRemindingDebtTransactionSuccess = (data: any) => ({
  type: creditActionTypes.GET_REMINDING_DEBT_TRANSACTION_SUCCESS,
  remindingDebtTransactions: data,
});
