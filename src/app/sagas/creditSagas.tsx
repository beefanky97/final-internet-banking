import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { creditActionTypes, transfer } from "src/app/actions/creditActions";
import { accountService } from "src/api/accountService";
import { saveTokenExpire, clearTokenInfo } from "src/components/utils/functions";
import { creditService } from "src/api/creditService";


function* transferSaga(action: any) {
  const { status = 401, data }: AxiosResponse = yield call(creditService.transfer);
  console.log("data saga", data);
  if(status === 401 && sessionStorage) {
    // refresh token
    const newToken =  yield call(accountService.refreshToken, JSON.stringify(sessionStorage.getItem("refresh_token")));
    // save new token info
    yield call(saveTokenExpire, newToken.data);
    // transfer again
    yield put(transfer());
  }
}

function* getCardInfoSaga(action: any) {
  console.log("saga card info", action.card_number);
  const { data }: AxiosResponse = yield call(creditService.getCardInfo, action.card_number);
  console.log("card info", data);
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
