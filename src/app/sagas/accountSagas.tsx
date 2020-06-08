import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { accountActionTypes, loginSuccsess } from "src/app/actions/accountActions";
import { accountService } from "src/api/accountService";
import { saveTokenExpire, clearTokenInfo } from "src/components/utils/functions";

function* loginSaga(action: any) {
  const { data }: AxiosResponse = yield call(accountService.login, action.username, action.password);
  console.log("data saga", data);
  yield call(saveTokenExpire, data.token);
  yield put(loginSuccsess(data));
}

function* logout() {
  yield call(clearTokenInfo);
}

function* watchLogin() {
  yield takeLatest(accountActionTypes.LOGIN, loginSaga);
}

function* watchLogout() {
  yield takeLatest(accountActionTypes.LOGOUT, logout);
}

export function* accountSaga() {
  yield all([
    watchLogin(),
    watchLogout()
  ]);
}
