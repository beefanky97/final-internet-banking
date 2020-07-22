import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import {
  creditActionTypes,
  getCardInfoSuccess,
  getReceivingTransactionSuccess,
  getSendingTransactionSuccess,
  getRemindingDebtTransactionSuccess,
  getDebtListSuccess,
} from "src/app/actions/creditActions";
import { accountService } from "src/api/accountService";
import { saveTokenExpire, clearTokenInfo } from "src/components/utils/functions";
import { creditService } from "src/api/creditService";
import { onLoading, offLoading } from "../actions/commonActions";

function* transferSaga(action: any) {
  const { status, data }: AxiosResponse = yield call(creditService.transfer, action.transferInfo);
}

function* getCardInfoSaga(action: any) {
  const { data } = yield call(creditService.getCardInfo, action.card_number);
  yield put(getCardInfoSuccess(data));
}

function* getHistoryTransaction(action: any) {
  yield put(onLoading());
  const { data } = yield call(creditService.getHistoryTransaction, action.type_transaction);
  if (!data.is_error) {
    switch (action.type_transaction) {
      case "receiving":
        yield put(getReceivingTransactionSuccess(data));
        yield put(offLoading());
        return;
      case "sending":
        yield put(getSendingTransactionSuccess(data));
        yield put(offLoading());
        return;
      case "reminding-debt":
        yield put(getRemindingDebtTransactionSuccess(data));
        yield put(offLoading());
        return;
      default:
        alert("Lấy dữ liệu giao dịch thất bại, xin thử lại!");
        return;
    }
  }
}

function* getDebtListSaga() {
  const res = yield call(creditService.getDebtList);
  console.log("saga", res);
  yield put(getDebtListSuccess({ 
    othersDebt: res.othersDebt.data,
    myDebt: res.myDebt.data,
    othersUnpaidDebt: res.othersUnpaidDebt.data,
    myUnpaidDebt: res.myUnpaidDebt.data 
  }));
}

function* watchGetCardInfo() {
  yield takeLatest(creditActionTypes.GET_CARD_INFO, getCardInfoSaga);
}

function* watchTransfer() {
  yield takeLatest(creditActionTypes.TRANSFER, transferSaga);
}

function* watchGetHistorTransaction() {
  yield takeLatest(creditActionTypes.GET_HISTORY_TRANSACTION, getHistoryTransaction);
}

function* watchGetDebtList() {
  yield takeLatest(creditActionTypes.GET_DEBT_LIST, getDebtListSaga);
}

export function* creditSaga() {
  yield all([watchTransfer(), watchGetCardInfo(), watchGetHistorTransaction(), watchGetDebtList()]);
}
