import { put, takeLatest, call } from 'redux-saga/effects';
import { signup, setCookieItem, login } from '@utils/Api';
import * as types from '@actions/user/types';
import * as actions from '@actions/user';

function signupAPI(data) {
  return signup(data);
}

function loginAPI(data) {
  return login(data);
}

function* signupUserAsync(action) {
  try {
    const {
      name,
      email,
      password,
      profile,
      confirmPassword,
      user_id,
      chat_id,
    } = action.data;
    let response = yield call(signupAPI, {
      name,
      email,
      profile,
      password,
      confirmPassword,
      user_id,
      chat_id,
    });
    console.log(response);
    yield put(actions.signupResponse(response.user));
    setCookieItem('POSTMAN_TOKEN', response.token);
    action.data.router.push('/');
  } catch (error) {
    console.log('error occured in saga', error);
    yield put(actions.signupFailed());
  }
}

function* loginUserAsync(action) {
  try {
    const { userid, password } = action.data;

    const response = yield call(loginAPI, { userid, password });
    console.log(response);

    yield put(actions.loginResponse(response));
    setCookieItem('POSTMAN_TOKEN', response.token);
    action.data.router.push('/');
  } catch (error) {
    console.log(error);
    yield put(actions.loginFailed, error.message);
  }
}

export function* signupUserSaga() {
  yield takeLatest(types.SIGNUP_USER_REQUEST, signupUserAsync);
}

export function* loginUserSaga() {
  yield takeLatest(types.LOGIN_USER_REQUEST, loginUserAsync);
}
