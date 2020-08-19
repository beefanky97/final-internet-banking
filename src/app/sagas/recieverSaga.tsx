import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { recieverActionTypes, getRecieverSuccsess, addRecieverSuccsess } from "src/app/actions/recieverActions";
import { onLoading, offLoading } from "src/app/actions/commonActions";
import { receiverService } from "src/api/recieverService";

function* getAllRecieverSaga() {
  const { data }: AxiosResponse = yield call(receiverService.getReciever);
  if(data) {
    yield put(getRecieverSuccsess(data));
  }
}

function* deleteRecieverSaga(action: any) {
  yield put(onLoading());
  const { data }: AxiosResponse = yield call(receiverService.deleteReciever, action.id_customer);
  yield put(offLoading());
  if(data) {
    yield alert("Xoá thành công!");
  }
}

function* editRecieverSaga(action: any) {
  yield put(onLoading());
  const { data }: AxiosResponse = yield call(receiverService.editReciever, action.id, action.card_number, action.reminiscent_name);
  yield put(offLoading());
  if(data) {
    yield alert("Sửa thành công!");
  }
}

function* addRecieverSaga(action: any) {
  yield put(onLoading());
  const { data }: AxiosResponse = yield call(receiverService.addReciever, action.card_number, action.reminiscent_name);
  yield put(offLoading());
  if(!data.is_error) {
    // yield put(addRecieverSuccsess(data));
    yield alert("Lưu thành công!");
  }else{
    yield alert(data.msg);
  }
}

function* watchGetAllReciver() {
  //this mean listen  had this type, and do this function after
  yield takeLatest(recieverActionTypes.GET_RECIVER, getAllRecieverSaga);
}

function* watchDeleteReciver() {
  yield takeLatest(recieverActionTypes.DELETE_RECIEVER, deleteRecieverSaga);
}

function* watchEditReciver() {
  yield takeLatest(recieverActionTypes.EDIT_RECIVER, editRecieverSaga);
}

function* watchAddReciver() {
  yield takeLatest(recieverActionTypes.ADD_RECIVER, addRecieverSaga);
}

export function* recieverSaga() {
  yield all([
    watchGetAllReciver(),
    watchDeleteReciver(),
    watchEditReciver(),
    watchAddReciver()
  ]);
}
