import * as types from './types';

export const loginRequest = (data) => ({
  type: types.LOGIN_USER_REQUEST,
  data,
});

export const loginResponse = (data) => ({
  type: types.LOGIN_USER_RESPONSE,
  data,
});

export const loginFailed = (error) => ({
  type: types.LOGIN_USER_FAILED,
  error,
});

export const setupUser = (data) => ({
  type: types.SETUP_USER,
  data,
});

export const updateUser = (data) => ({
  type: types.UPDATE_USER,
  data,
});

export const signupRequest = (data) => ({
  type: types.SIGNUP_USER_REQUEST,
  data,
});

export const signupResponse = (response) => ({
  type: types.SIGNUP_USER_RESPONSE,
  data: response,
});

export const signupFailed = (error) => ({
  type: types.SIGNUP_USER_FAILED,
  error,
});
