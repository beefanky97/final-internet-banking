import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { creditActionTypes, transfer } from "src/app/actions/creditActions";
import { accountService } from "src/api/accountService";
import { saveTokenExpire, clearTokenInfo } from "src/components/utils/functions";
import { creditService } from "src/api/creditService";


function* transferSaga(action: any) {
  console.log("input", action.transferInfo);
  const { status, data }: AxiosResponse = yield call(creditService.transfer, action.transferInfo);
  console.log("transfer saga", data, status);
}

function* getCardInfoSaga(action: any) {
  const { data }: AxiosResponse = yield call(creditService.getCardInfo, action.card_number);
}

function* watchGetCardInfo() {
  yield takeLatest(creditActionTypes.GET_CARD_INFO, getCardInfoSaga);
}

function* watchTransfer() {
  yield takeLatest(creditActionTypes.TRANSFER, transferSaga);
}

export function* creditSaga() {
  yield all([
    watchTransfer(),
    watchGetCardInfo()
  ]);
}
