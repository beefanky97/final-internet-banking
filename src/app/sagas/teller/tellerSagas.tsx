import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { tellerService } from "src/api/teller/tellerService";
import { tellerActionTypes, actAddCustomer } from "src/app/actions/tellerActions";
import { actShowAllCustomers } from '../../actions/tellerActions';

function* showAllCustomers() {
    const { data }: AxiosResponse = yield call(tellerService.showAllCustomers);
    yield put(actShowAllCustomers(data));
}

function* addCustomer(action: any) {
    yield call(tellerService.addCustomer, action.entity);
    yield put(actAddCustomer(action.entity));
}

function* watchAllCustomer() {
    yield takeLatest(tellerActionTypes.All_CUSTOMERS_REQUEST, showAllCustomers);
}

function* watchAddCustomer() {
    yield takeLatest(tellerActionTypes.ADD_CUSTOMER, addCustomer);
}

export function* tellerSaga() {
    yield all([
        watchAllCustomer(),
        watchAddCustomer(),
    ]);
}
