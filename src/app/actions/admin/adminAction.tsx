export const adminActionTypes = {
  GET_TRANSACTIONS: "GET_TRANSACTIONS",
  GET_TRANSACTIONS_SUCCESS: "GET_TRANSACTIONS_SUCCESS",
  GET_DETAIL_TRANSACTION: "GET_DETAIL_TRANSACTION",
  GET_DETAIL_TRANSACTION_SUCCESS: "GET_DETAIL_TRANSACTION_SUCCESS",
  GET_TELLERS: "GET_TELLERS",
  GET_TELLERS_SUCCESS: "GET_TELLERS_SUCCESS",
  GET_DETAIL_TELLER: "GET_DETAIL_TELLER",
  GET_DETAIL_TELLER_SUCCESS: "GET_DETAIL_TELLER_SUCCESS",
  ADD_TELLER: "ADD_TELLER",
  ADD_TELLER_SUCCESS: "ADD_TELLER_SUCCESS",
  EDIT_TELLER: "EDIT_TELLER",
  EDIT_TELLER_SUCCESS: "EDIT_TELLER_SUCCESS",
  DELETE_TELLER: "DELETE_TELLER",
  DELETE_TELLER_SUCCESS: "DELETE_TELLER_SUCCESS"
};

export const actGetTransactions = (partner_code: number) => ({
  type: adminActionTypes.GET_TRANSACTIONS,
  partner_code,
});

export const actGetTransactionsSuccess = (transactions: []) => ({
  type: adminActionTypes.GET_TRANSACTIONS_SUCCESS,
  transactions,
});

export const actGetDetailTransaction = (id: string) => ({
  type: adminActionTypes.GET_DETAIL_TRANSACTION,
  id,
});

export const actGetDetailTransactionSuccess = (transaction: object) => ({
  type: adminActionTypes.GET_DETAIL_TRANSACTION_SUCCESS,
  transaction,
});

export const actGetTellers = () => ({
  type: adminActionTypes.GET_TELLERS,
});

export const actGetTellersSuccess = (tellers: []) => ({
  type: adminActionTypes.GET_TELLERS_SUCCESS,
  tellers,
});

export const actGetDetailTeller = (id: string) => ({
  type: adminActionTypes.GET_DETAIL_TELLER,
  id,
});

export const actGetDetailTellerSuccess = (teller: object) => ({
  type: adminActionTypes.GET_DETAIL_TELLER_SUCCESS,
  teller,
});

export const actAddTeller = (entity: object) => ({
  type: adminActionTypes.ADD_TELLER,
  entity,
});

export const actAddTellerSuccess = (data: boolean) => ({
  type: adminActionTypes.ADD_TELLER_SUCCESS,
  data,
});

export const actEditTeller = (id: string, entity: object) => ({
  type: adminActionTypes.EDIT_TELLER,
  id,
  entity,
});

export const actEditTellerSuccess = (data: boolean) => ({
  type: adminActionTypes.EDIT_TELLER_SUCCESS,
  data
});

export const actDeleteTeller = (id: string) => ({
  type: adminActionTypes.DELETE_TELLER,
  id
})

export const actDeleteTellerSuccess = (data: boolean) => ({
  type: adminActionTypes.DELETE_TELLER_SUCCESS,
  data
})