export const adminActionTypes = {
    ALL_TRANSACTIONS: "All_TRANSACTIONS",
    All_TRANSACTIONS_REQUEST: "All_TRANSACTIONS_REQUEST",
    GET_DETAIL_TRANSACTION: "GET_DETAIL_TRANSACTION",
    GET_DETAIL_TRANSACTION_SUCCESS: "GET_DETAIL_TRANSACTION_SUCCESS"
}

export const actShowAllTransactionsRequest = () => ({
    type: adminActionTypes.All_TRANSACTIONS_REQUEST,
})

export const actShowAllTransactions = (transactions: []) => ({
    type: adminActionTypes.ALL_TRANSACTIONS,
    transactions
})

export const actGetDetailTransaction = (id: string) => ({
    type: adminActionTypes.GET_DETAIL_TRANSACTION,
    id
})

export const actGetDetailTransactionSuccess = (transaction: object) => ({
    type: adminActionTypes.GET_DETAIL_TRANSACTION_SUCCESS,
    transaction
})