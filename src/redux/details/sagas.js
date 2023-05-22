import { put, call, fork, takeEvery, all, takeLatest } from 'redux-saga/effects';
import {
  DETAILS_ACTION_TYPES, fetchDetailsSucceeded, fetchDetailsFailed, 
} from './action';
import { getApi } from './service';

// const apiUrl = 'https://raw.githubusercontent.com/amans2k/amans2k.github.io/master/users.json';
// function getApi() {
//   return fetch(apiUrl, {
//       method: 'GET',
//       headers: {
//           'Content-Type': 'application/json',

//       }
//   }).then(response => response.json())
//     .catch((error) => {throw error})
// }

function* loadDetails (action) {
  try {
    const response = yield call(getApi, action.meta);
    const details = response.data;
    yield put(fetchDetailsSucceeded(details));
   
  } catch (error) {
    yield put(fetchDetailsFailed(error));
  }
}

export default function* watchLoadDetails () {
  yield takeLatest(DETAILS_ACTION_TYPES.FETCHING, loadDetails);
}

// export default function* rootSaga() {
//     yield all([
//       fork(watchLoadDetails),
//     ]);
//   }