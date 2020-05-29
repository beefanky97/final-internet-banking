import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from 'src/app/reducers/appReducer';
import appSaga from 'src/app/sagas/appSaga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const appStore = createStore(
  appReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(appSaga)

export default appStore;