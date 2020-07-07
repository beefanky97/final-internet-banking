import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { adminService } from "src/api/admin/adminService";
import { adminActionTypes, actGetDetailTransactionSuccess, actGetTransactionsSuccess } from "src/app/actions/admin/adminAction";

function* getTransactionsSaga(action: any) {
    const { data }: AxiosResponse = yield call(adminService.getTransactions, action.partner_code);
    yield put(actGetTransactionsSuccess(data));
}

function* watchGetTransactions() {
    yield takeLatest(adminActionTypes.GET_TRANSACTIONS, getTransactionsSaga);
}

export function* getDetailTransactionSaga(action: any) {
    const data = yield call(adminService.getDetailTransaction, action.id);
    yield put(actGetDetailTransactionSuccess(data));
}

export function* watchGetDetailTransaction(){
    yield takeLatest(adminActionTypes.GET_DETAIL_TRANSACTION, getDetailTransactionSaga);
}

export function* adminSaga() {
    yield all([
        watchGetTransactions(),
        watchGetDetailTransaction()
    ]);
}
