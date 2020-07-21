import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import { tellerService } from "src/api/teller/tellerService";
import {
  tellerActionTypes,
  actShowDetailCustomer,
  actShowInfoCards,
  getReceivingTransactionSuccess,
  getRemindingDebtTransactionSuccess,
  getSendingTransactionSuccess,
} from "src/app/actions/tellerActions";
import { actShowAllCustomers } from "../../actions/tellerActions";
import { onLoading, offLoading } from "src/app/actions/commonActions";

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

  const dataCards: AxiosResponse = yield call(
    tellerService.showInfoCards,
    action.id
  );
  yield put(actShowInfoCards(dataCards.data));
}

function* showInfoCards(action: any) {
  const { data }: AxiosResponse = yield call(
    tellerService.showInfoCards,
    action.id
  );
  yield put(actShowInfoCards(data));
}

function* getHistoryTransaction(action: any) {
  yield put(onLoading());
  const { data } = yield call(tellerService.getHistoryTransaction, action.type_transaction, action.card_number);
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
        yield put(offLoading());
        alert("Lấy dữ liệu giao dịch thất bại, xin thử lại!");
        return;
    }
  }
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

function* watchShowInfoCards() {
  yield takeLatest(tellerActionTypes.INFO_CARDS_REQUEST, showInfoCards);
}


function* watchGetHistorTransaction() {
  yield takeLatest(tellerActionTypes.GET_HISTORY_TRANSACTION, getHistoryTransaction);
}

export function* tellerSaga() {
  yield all([
    watchAllCustomer(),
    watchAddCustomer(),
    watchShowDetailCustomer(),
    watchShowInfoCards(),
    watchGetHistorTransaction(),
  ]);
}
