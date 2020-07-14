import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { accountActionTypes, loginSuccsess, logoutSuccsess, loginFail } from "src/app/actions/accountActions";
import { accountService } from "src/api/accountService";
import { saveTokenExpire, clearTokenInfo } from "src/components/utils/functions";

function* loginSaga(action: any) {
  const { data }: AxiosResponse = yield call(accountService.login, action.username, action.password);
  if(data.authenticated === false) {
    yield put(loginFail());
    yield call(clearTokenInfo);
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
  const { status, data } = yield call(accountService.refreshToken, access_token as string, refresh_token as string);

  if(status === 400) {
    yield put(logoutSuccsess());
    yield call(clearTokenInfo);
    return;
  }
  yield call(saveTokenExpire, data);
}

function* changePasswpordSaga(action: any) {
  const { data } = yield call(accountService.changePassword, action.current_password, action.new_password, action.confirm_password);
  if(!data.is_error) {
    alert("Đổi mật khẩu thành công!");
    window.location.href = "./";
  } else {
    alert("Có điều gì đó không đúng, xin thao tác l!");
    window.location.href = "./login";
  }
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

function* watchChangePassword() {
  yield takeLatest(accountActionTypes.CHANGE_PASSWORD, changePasswpordSaga);
}

export function* accountSaga() {
  yield all([
    watchLogin(),
    watchLogout(),
    watchRefreshToken(),
    watchChangePassword()
  ]);
}
