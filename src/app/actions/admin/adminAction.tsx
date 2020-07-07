export const adminActionTypes = {
    GET_TRANSACTIONS: "GET_TRANSACTIONS",
    GET_TRANSACTIONS_SUCCESS: "GET_TRANSACTIONS_SUCCESS",
    GET_DETAIL_TRANSACTION: "GET_DETAIL_TRANSACTION",
    GET_DETAIL_TRANSACTION_SUCCESS: "GET_DETAIL_TRANSACTION_SUCCESS"
}

export const actGetTransactions = (partner_code: number) => ({
    type: adminActionTypes.GET_TRANSACTIONS,
    partner_code
})

export const actGetTransactionsSuccess = (transactions: []) => ({
    type: adminActionTypes.GET_TRANSACTIONS_SUCCESS,
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