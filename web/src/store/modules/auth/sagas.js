// Redux-saga-effects
import { takeLatest, call, put, all } from 'redux-saga/effects';
// Actions
import { signInSuccess, signFailure } from './actions';
// API
import api from '../../../services/api';
// Toast
import { toast } from 'react-toastify';
// history
import history from '../../../services/history';


export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/session', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
    toast.success(`Seja Bem-vindo, ${user.name}!!🤩🥰🐱‍🏍`)
  } catch (error) {
    toast.error('Credenciais erradas, verifique seus dados!!🤯');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const {  email, password } = payload;

    yield call(api.post, '/users', {
      email,
      password,
    });

    history.push('/');
  } catch (error) {
    toast.error('Create user fails');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
  toast('Até a próxima 😁');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
