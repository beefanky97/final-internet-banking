import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { adminService } from "src/api/admin/adminService";
import {
  adminActionTypes,
  actGetDetailTransactionSuccess,
  actGetTransactionsSuccess,
  actGetTellersSuccess,
  actGetDetailTellerSuccess,
  actAddTellerSuccess,
  actEditTellerSuccess,
  actDeleteTellerSuccess,
} from "src/app/actions/admin/adminAction";
import { onLoading, offLoading } from "src/app/actions/commonActions";

function* getTransactionsSaga(action: any) {
  yield put(onLoading());
  const { data }: AxiosResponse = yield call(
    adminService.getTransactions,
    action.partner_code
  );
  yield put(offLoading());
  yield put(actGetTransactionsSuccess(data));
}

function* watchGetTransactions() {
  yield takeLatest(adminActionTypes.GET_TRANSACTIONS, getTransactionsSaga);
}

export function* getDetailTransactionSaga(action: any) {
  yield put(onLoading());
  const data = yield call(adminService.getDetailTransaction, action.id);
  yield put(offLoading());
  yield put(actGetDetailTransactionSuccess(data));
}

export function* watchGetDetailTransaction() {
  yield takeLatest(
    adminActionTypes.GET_DETAIL_TRANSACTION,
    getDetailTransactionSaga
  );
}

export function* getTellersSaga(action: any) {
  yield put(onLoading());
  const { data }: AxiosResponse = yield call(adminService.getTellers);
  yield put(offLoading());
  yield put(actGetTellersSuccess(data));
}

export function* watchGetTellers() {
  yield takeLatest(adminActionTypes.GET_TELLERS, getTellersSaga);
}

export function* getDetailTellerSaga(action: any) {
  yield put(onLoading());
  const { data } = yield call(adminService.getDetailTeller, action.id);
  yield put(offLoading());
  yield put(actGetDetailTellerSuccess(data));
}

export function* watchGetDetailTeller() {
  yield takeLatest(adminActionTypes.GET_DETAIL_TELLER, getDetailTellerSaga);
}

export function* addTellerSaga(action: any) {
  yield put(onLoading());
  const { data } = yield call(adminService.addTeller, action.entity);
  yield put(offLoading());
  if (!data.is_error) {
    yield put(actAddTellerSuccess(true));
  } else {
    alert(data.msg);
    yield put(actAddTellerSuccess(false));
  }
}

export function* watchAddTeller() {
  yield takeLatest(adminActionTypes.ADD_TELLER, addTellerSaga);
}

export function* editTellerSaga(action: any) {
  yield put(onLoading());
  const { data } = yield call(
    adminService.editTellter,
    action.id,
    action.entity
  );
  yield put(offLoading());
  if (!data.is_error) {
    yield put(actEditTellerSuccess(true));
  } else {
    yield put(actEditTellerSuccess(false));
  }
}

export function* watchEditTeller() {
  yield takeLatest(adminActionTypes.EDIT_TELLER, editTellerSaga);
}

export function* deleteTellerSaga(action: any) {
  yield put(onLoading());
  const { status } = yield call(adminService.deleteTellter, action.id);
  yield put(offLoading());
  if (status === 200) {
    yield put(actDeleteTellerSuccess(true));
  } else {
    yield put(actDeleteTellerSuccess(false));
  }
}

export function* watchDeleteTeller() {
  yield takeLatest(adminActionTypes.DELETE_TELLER, deleteTellerSaga);
}

export function* adminSaga() {
  yield all([
    watchGetTransactions(),
    watchGetDetailTransaction(),
    watchGetTellers(),
    watchGetDetailTeller(),
    watchAddTeller(),
    watchEditTeller(),
    watchDeleteTeller(),
  ]);
}
