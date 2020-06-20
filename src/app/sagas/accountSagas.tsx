import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { accountActionTypes, loginSuccsess, logoutSuccsess, loginFail } from "src/app/actions/accountActions";
import { accountService } from "src/api/accountService";
import { saveTokenExpire, clearTokenInfo } from "src/components/utils/functions";

function* loginSaga(action: any) {
  const { data }: AxiosResponse = yield call(accountService.login, action.username, action.password);
  console.log("data saga login", data);
  if(data.authenticated === false) {
    console.log("login fail!");
    yield put(loginFail());
    return;
  }
  yield call(saveTokenExpire, data);
  yield put(loginSuccsess(data));
}

function* logout() {
  yield call(clearTokenInfo);
  yield put(logoutSuccsess());
}

function* refreshTokenSaga() {
  const access_token = sessionStorage ? sessionStorage.getItem("access_token") : "x";
  const refresh_token = sessionStorage ? sessionStorage.getItem("refresh_token") : "x";
  console.log("access saga", access_token);
  console.log("refresh saga", refresh_token);
  const { status, data } = yield call(accountService.refreshToken, access_token as string, refresh_token as string);
  console.log("refresh saga", data, status);

  if(status === 400) {
    yield put(logoutSuccsess());
    yield call(clearTokenInfo);
    return;
  }
  yield call(saveTokenExpire, data);
}

function* watchLogin() {
  yield takeLatest(accountActionTypes.LOGIN, loginSaga);
}

function* watchLogout() {
  yield takeLatest(accountActionTypes.LOGOUT, logout);
}

function* watchRefreshToken() {
  yield takeLatest(accountActionTypes.REFRESH_TOKEN, refreshTokenSaga);
}

export function* accountSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchRefreshToken()
  ]);
}
