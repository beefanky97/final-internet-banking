import { all } from 'redux-saga/effects';
//import some generate func

export default function* rootSaga() {
  yield all([
      //structure: [generateFunction()]
      console.log("Hello my Saga!")
  ]);
}
