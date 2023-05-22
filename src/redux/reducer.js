import { combineReducers } from 'redux';
import detailsReducers from './details/reducer';

const rootReducer = combineReducers({
     details: detailsReducers,
});

export default rootReducer;

