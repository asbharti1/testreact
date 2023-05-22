import watchLoadDetails from './details/sagas';
import { all } from 'redux-saga/effects';
export default function* rootSaga() {
	yield all([
		watchLoadDetails(),
	]);
}