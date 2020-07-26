import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { adminService } from "src/api/admin/adminService";
import { adminActionTypes, actGetDetailTransactionSuccess, actShowAllTransactions } from "src/app/actions/admin/adminAction";

function* showAllTransactions() {
    const { data }: AxiosResponse = yield call(adminService.showAllTransactions);
    yield put(actShowAllTransactions(data));
}

function* watchAllTransactions() {
    yield takeLatest(adminActionTypes.All_TRANSACTIONS_REQUEST, showAllTransactions);
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
        watchAllTransactions(),
        watchGetDetailTransaction()
    ]);
}
