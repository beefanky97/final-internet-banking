import { all } from 'redux-saga/effects';
import { postSaga } from 'src/app/sagas/postSagas';
//import some generate func

export default function* rootSaga() {
  yield all([
    postSaga()
  ]);
}
