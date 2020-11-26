// redux-saga-effects
import { takeLatest, call, put, all } from 'redux-saga/effects';
// Actions
import { updateProfileSuccess, updateProfileFailure } from './actions';
// API
import api from '../../../services/api';
// history
import history from '../../../services/history';
// Toast
import { toast } from 'react-toastify';


export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar,...rest } = payload.data;

    const profile = Object.assign(
      {
        name,
        email,
        avatar
      },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, '/session', profile);

    yield put(updateProfileSuccess(response.data));

    toast.success('Perfil atualizado com sucesso');

    history.push('/dashboard');
  } catch (error) {
    toast.error('Erro ao atualizar o perfil');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
