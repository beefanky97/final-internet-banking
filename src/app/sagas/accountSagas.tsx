import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { accountActionTypes, loginSuccsess } from "src/app/actions/accountActions";
import { accountService } from "src/api/accountService";
import { saveTokenExpire } from "src/components/utils/functions";

function* loginSaga(action: any) {
  const { data }: AxiosResponse = yield call(accountService.login, action.username, action.password);
  console.log("data saga", data);
  yield call(saveTokenExpire, data.token);
  yield put(loginSuccsess(data));
}

function* watchLogin() {
  //this mean listen action had this type, and do this function after
  yield takeLatest(accountActionTypes.LOGIN, loginSaga);
}

export function* accountSaga() {
  yield all([
    watchLogin()
  ]);
}
