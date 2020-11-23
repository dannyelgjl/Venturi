import {  takeLatest, call, put,all } from 'redux-saga/effects';

import { singInSuccess } from './actions';

import api from '../../../services/api';

export function* singIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email, 
    password
  });

  const { token, user } = response.data;
  
  yield put(singInSuccess(token, user));

}

export default all([
  takeLatest('@auth/SING_IN_REQUEST', singIn)
]);