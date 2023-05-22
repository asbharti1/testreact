import { DETAILS_ACTION_TYPES } from './action';
export const INITIAL_STATE = {

	detailsListResult: [],
	detailsListIsPending: false,
};

export default function detailsReducers(state = INITIAL_STATE, action) {
	switch (action.type) {

		case DETAILS_ACTION_TYPES.FETCHING:
			return {
				...state,
				detailsListIsPending: true,
				detailsListError: INITIAL_STATE.detailsListError,
			};
		case DETAILS_ACTION_TYPES.FETCH_SUCCEEDED:
			return {
				...state,
				detailsListIsPending: INITIAL_STATE.detailsListIsPending,
				detailsListResult: action.payload,
			};
		case DETAILS_ACTION_TYPES.FETCH_FAILED:
			return {
				...state,
				detailsListIsPending: INITIAL_STATE.detailsListIsPending,
				detailsListError: action.payload,
				detailsListResult: INITIAL_STATE.detailsListResult,
			};
        default:
			return state;
        }
    }
    //export const getDetails = state => state.details && state.details.detailsListResult
    // export const getDetails = state => (state.details && state.details.detailsListResult ?
    //     state.details.detailsListResult.map((object) => {
    //         return { ...object, key: object.id };
    //     }) : []);