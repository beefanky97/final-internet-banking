import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { recieverActionTypes, getRecieverSuccsess } from "src/app/actions/recieverActions";
import { onLoading, offLoading } from "src/app/actions/commonActions";
import { receiverService } from "src/api/recieverService";

function* getAllRecieverSaga() {
  const { data }: AxiosResponse = yield call(receiverService.getReciever);
  yield put(getRecieverSuccsess(data));
}

function* deleteRecieverSaga(action: any) {
  yield put(onLoading());
  const { data }: AxiosResponse = yield call(receiverService.deleteReciever, action.id_customer);
  if(data) {
    yield put(offLoading());
  }
}

function* watchGetAllReciver() {
  //this mean listen  had this type, and do this function after
  yield takeLatest(recieverActionTypes.GET_RECIVER, getAllRecieverSaga);
}

function* watchDeleteReciver() {
  yield takeLatest(recieverActionTypes.DELETE_RECIEVER, deleteRecieverSaga);
}

export function* recieverSaga() {
  yield all([
    watchGetAllReciver(),
    watchDeleteReciver()
  ]);
}
