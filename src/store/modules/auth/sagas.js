import {Alert} from 'react-native';
import {all, takeLatest, call, put, delay} from 'redux-saga/effects';

import api from '~/services/api';
import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
  try {
    const {email, password} = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const {token, user} = response.data;

    if (user.provider) {
      Alert.alert('Error on login', 'The user can not be a service provider.');
      return;
    }

    // Including token in header requests
    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield delay(3000); // applying delay

    yield put(signInSuccess(token, user));

    // history.push('/dashboard');
  } catch (err) {
    Alert.alert('Authentication failed', 'Check your credentials');
    yield put(signFailure());
  }
}

export function* signUp({payload}) {
  try {
    const {name, email, password} = payload;
    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    history.push('/');
  } catch (err) {
    Alert.alert(
      'Subscription failed',
      `It had an error in subscription. (Server response: ${err.response.data.error})`,
    );

    yield put(signFailure());
  }
}

export function setToken({payload}) {
  if (!payload) return; // if payload is empty, meaning that user is not loggedin

  const {token} = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
