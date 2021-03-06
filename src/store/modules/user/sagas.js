import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';
import {updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}) {
  try {
    const {name, email, ...rest} = payload.data;

    // It will join two objects
    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    Alert.alert('Success!', 'Profile updated.');

    yield put(updateProfileSuccess(response.data));
    // Updating profile and refresh page it will show older value, because we need update REDUX state
    // Open user reducer and include @user/UPDATE_PROFILE_SUCCESS to update it
  } catch (err) {
    Alert.alert(
      'Ooops...',
      'Error: profile updating failure, check your data.',
    );
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
