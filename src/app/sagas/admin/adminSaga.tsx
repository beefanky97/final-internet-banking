import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { adminService } from "src/api/admin/adminService";
import {
  adminActionTypes,
  actGetDetailTransactionSuccess,
  actGetTransactionsSuccess,
  actGetTellersSuccess,
  actGetDetailTellerSuccess,
  actAddTeller,
} from "src/app/actions/admin/adminAction";

function* getTransactionsSaga(action: any) {
  const { data }: AxiosResponse = yield call(
    adminService.getTransactions,
    action.partner_code
  );
  yield put(actGetTransactionsSuccess(data));
}

function* watchGetTransactions() {
  yield takeLatest(adminActionTypes.GET_TRANSACTIONS, getTransactionsSaga);
}

export function* getDetailTransactionSaga(action: any) {
  const data = yield call(adminService.getDetailTransaction, action.id);
  yield put(actGetDetailTransactionSuccess(data));
}

export function* watchGetDetailTransaction() {
  yield takeLatest(
    adminActionTypes.GET_DETAIL_TRANSACTION,
    getDetailTransactionSaga
  );
}

export function* getTellersSaga(action: any) {
  const { data }: AxiosResponse = yield call(adminService.getTellers);
  yield put(actGetTellersSuccess(data));
}

export function* watchGetTellers() {
  yield takeLatest(adminActionTypes.GET_TELLERS, getTellersSaga);
}

export function* getDetailTellerSaga(action: any) {
  const { data } = yield call(adminService.getDetailTeller, action.id);
  yield put(actGetDetailTellerSuccess(data));
}

export function* watchGetDetailTeller() {
  yield takeLatest(adminActionTypes.GET_DETAIL_TELLER, getDetailTellerSaga);
}

export function* addTellerSaga(action: any) {
  const { data } = yield call(adminService.addTeller, action.entity);
  // yield put(actGetDetailTellerSuccess(data));
  if (!data.is_error) {
    window.location.href = "/admin/tellers";
  }
}

export function* watchAddTeller() {
  yield takeLatest(adminActionTypes.ADD_TELLER, addTellerSaga);
}

export function* editTellerSaga(action: any) {
    const { data } = yield call(adminService.editTellter, action.id, action.entity);
    // yield put(actGetDetailTellerSuccess(data));
    if (!data.is_error) {
      window.location.href = "/admin/tellers";
    }
  }
  
  export function* watchEditTeller() {
    yield takeLatest(adminActionTypes.EDIT_TELLER, editTellerSaga);
  }

export function* adminSaga() {
  yield all([
    watchGetTransactions(),
    watchGetDetailTransaction(),
    watchGetTellers(),
    watchGetDetailTeller(),
    watchAddTeller(),
    watchEditTeller()
  ]);
}
