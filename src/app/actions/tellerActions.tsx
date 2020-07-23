export const tellerActionTypes = {
  All_CUSTOMERS: "All_CUSTOMERS",
  All_CUSTOMERS_REQUEST: "All_CUSTOMERS_REQUEST",
  ADD_CUSTOMER: "ADD_CUSTOMER",
  ADD_CUSTOMER_SUCCESS: "ADD_CUSTOMER_SUCCESS",
  DETAIL_CUSTOMER_REQUEST: "DETAIL_CUSTOMER_REQUEST",
  DETAIL_CUSTOMER: "DETAIL_CUSTOMER",
  INFO_CARDS_REQUEST: "INFO_CARDS_REQUEST",
  INFO_CARDS: "INFO_CARDS",
  GET_HISTORY_TRANSACTION: "GET_HISTORY_TRANSACTION_TELLER",
  GET_RECEIVING_TRANSACTION_SUCCESS: "GET_RECEIVING_TRANSACTION_SUCCESS_TELLER",
  GET_SENDING_TRANSACTION_SUCCESS: "GET_SENDING_TRANSACTION_SUCCESS_TELLER",
  GET_REMINDING_DEBT_TRANSACTION_SUCCESS:
    "GET_REMINDING_DEBT_TRANSACTION_SUCCESS_TELLER",
  ADD_MONEY_CUSTOMER_REQUEST: "ADD_MONEY_CUSTOMER_REQUEST",
  ADD_MONEY_CUSTOMER_SUCCESS: "ADD_MONEY_CUSTOMER_SUCCESS",
};

export const actShowAllCustomersRequest = () => ({
  type: tellerActionTypes.All_CUSTOMERS_REQUEST,
});

export const actShowAllCustomers = (customers: []) => ({
  type: tellerActionTypes.All_CUSTOMERS,
  customers,
});

export const actAddCustomer = (entity: object) => ({
  type: tellerActionTypes.ADD_CUSTOMER,
  entity,
});

export const actAddCustomerSuccess = (data: boolean) => ({
  type: tellerActionTypes.ADD_CUSTOMER_SUCCESS,
  data,
});

export const actShowDetailCustomerRequest = (id: string) => ({
  type: tellerActionTypes.DETAIL_CUSTOMER_REQUEST,
  id,
});

export const actShowDetailCustomer = (customer: object) => ({
  type: tellerActionTypes.DETAIL_CUSTOMER,
  customer,
});

export const actShowInfoCardsRequest = (id: string) => ({
  type: tellerActionTypes.INFO_CARDS_REQUEST,
  id,
});

export const actShowInfoCards = (cards: []) => ({
  type: tellerActionTypes.INFO_CARDS,
  cards,
});

export const getHistoryTransaction = (type: string, card_number: number) => ({
  type: tellerActionTypes.GET_HISTORY_TRANSACTION,
  type_transaction: type,
  card_number,
});

export const getReceivingTransactionSuccess = (data: any) => ({
  type: tellerActionTypes.GET_RECEIVING_TRANSACTION_SUCCESS,
  receivingTransactions: data,
});

export const getSendingTransactionSuccess = (data: any) => ({
  type: tellerActionTypes.GET_SENDING_TRANSACTION_SUCCESS,
  sendingTransactions: data,
});

export const getRemindingDebtTransactionSuccess = (data: any) => ({
  type: tellerActionTypes.GET_REMINDING_DEBT_TRANSACTION_SUCCESS,
  remindingDebtTransactions: data,
});

export const actAddMoneyCustomerRequest = (
  card_number: number,
  money: number
) => ({
  type: tellerActionTypes.ADD_MONEY_CUSTOMER_REQUEST,
  card_number,
  money,
});

export const actAddMoneyCustomerSuccess = (data: boolean) => ({
  type: tellerActionTypes.ADD_MONEY_CUSTOMER_SUCCESS,
  data,
});
