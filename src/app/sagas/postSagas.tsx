import { all, takeLatest, put, call } from "redux-saga/effects";
import { AxiosResponse } from "axios";
import { postActionType, getAllPostSuccess } from "src/app/actions/postActions";
import { postService } from "src/api/postService";

function* getAllPostSaga() {
  const { data }: AxiosResponse = yield call(postService.getAllPost);
  yield put(getAllPostSuccess(data));
}

function* watchGetAllPost() {
  //this mean listen action had this type, and do this function after
  yield takeLatest(postActionType.GET_ALL_POST, getAllPostSaga);
}

export function* postSaga() {
  yield all([
    watchGetAllPost()
  ]);
}
