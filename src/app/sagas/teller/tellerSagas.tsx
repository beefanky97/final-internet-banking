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
  actAddMoneyCustomerSuccess,
  actAddCustomerSuccess,
} from "src/app/actions/tellerActions";
import { actShowAllCustomers } from "../../actions/tellerActions";
import { onLoading, offLoading } from "src/app/actions/commonActions";

function* showAllCustomers() {
  yield put(onLoading());
  const { data }: AxiosResponse = yield call(tellerService.showAllCustomers);
  yield put(offLoading());
  yield put(actShowAllCustomers(data));
}

function* addCustomer(action: any) {
  console.log("over saga!", action.entity);
  yield put(onLoading());
  const { data } = yield call(tellerService.addCustomer, action.entity);
  if (!data.is_error) {
    // window.location.href = "/teller/customers";
    yield put(offLoading());
    yield put(actAddCustomerSuccess(true));
  } else {
    yield put(actAddCustomerSuccess(false));
    yield put(offLoading());
    alert(data.msg);
  }
}

function* showDetailCustomer(action: any) {
  yield put(onLoading());
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
  yield put(offLoading());
}

function* showInfoCards(action: any) {
  yield put(onLoading());
  const { data }: AxiosResponse = yield call(
    tellerService.showInfoCards,
    action.id
  );
  yield put(offLoading());
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


function* addMoneyCustomer(action: any) {
  yield put(onLoading());
  const { data }: AxiosResponse = yield call(
    tellerService.addMoneyForCustomer,
    action.card_number,
    action.money
  );
  console.log('data',data);

  if(!data.is_error){
    yield put(actAddMoneyCustomerSuccess(true));
  } else {
    yield put(actAddMoneyCustomerSuccess(false));
  }
  yield put(offLoading());
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

function* watchAddMoneyCustomer() {
  yield takeLatest(tellerActionTypes.ADD_MONEY_CUSTOMER_REQUEST, addMoneyCustomer);
}

export function* tellerSaga() {
  yield all([
    watchAllCustomer(),
    watchAddCustomer(),
    watchShowDetailCustomer(),
    watchShowInfoCards(),
    watchGetHistorTransaction(),
    watchAddMoneyCustomer(),
  ]);
}
