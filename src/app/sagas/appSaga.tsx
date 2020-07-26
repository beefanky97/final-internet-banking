import { all } from 'redux-saga/effects';
import { postSaga } from 'src/app/sagas/postSagas';
import { accountSaga } from 'src/app/sagas/accountSagas';
import { creditSaga } from './creditSagas';
import { recieverSaga } from './recieverSaga';
import { tellerSaga } from './teller/tellerSagas';
import { adminSaga } from './admin/adminSaga';
//import some generate func

export default function* rootSaga() {
  yield all([
    postSaga(),
    accountSaga(),
    recieverSaga(),
    creditSaga(),
    tellerSaga(),
    adminSaga()
  ]);
}
