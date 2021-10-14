import { all } from 'redux-saga/effects';

import { signupUserSaga, loginUserSaga } from './user';

export default function* rootSaga() {
  yield all([signupUserSaga(), loginUserSaga()]);
}
