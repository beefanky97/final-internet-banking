import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { tellerService } from "src/api/teller/tellerService";
import {
  tellerActionTypes,
  actShowDetailCustomer,
} from "src/app/actions/tellerActions";
import { actShowAllCustomers } from "../../actions/tellerActions";

function* showAllCustomers() {
  const { data }: AxiosResponse = yield call(tellerService.showAllCustomers);
  yield put(actShowAllCustomers(data));
}

function* addCustomer(action: any) {
  console.log("over saga!", action.entity);
  const data = yield call(tellerService.addCustomer, action.entity);
  if (!data.data.is_error) {
    window.location.href = "/teller/customers";
  }
}

function* showDetailCustomer(action: any) {
  const { data }: AxiosResponse = yield call(
    tellerService.showDetailCustomer,
    action.id
  );

  yield put(actShowDetailCustomer(data));
}

function* watchAllCustomer() {
  yield takeLatest(tellerActionTypes.All_CUSTOMERS_REQUEST, showAllCustomers);
}

function* watchAddCustomer() {
  console.log("over saga watching");
  yield takeLatest(tellerActionTypes.ADD_CUSTOMER, addCustomer);
}

function* watchShowDetailCustomer() {
  yield takeLatest(
    tellerActionTypes.DETAIL_CUSTOMER_REQUEST,
    showDetailCustomer
  );
}

export function* tellerSaga() {
  yield all([
    watchAllCustomer(),
    watchAddCustomer(),
    watchShowDetailCustomer(),
  ]);
}
