//import createFailedNetworkActionCreator from '../../services/utils/createFailedNetworkActionCreator';

export const DETAILS_ACTION_TYPES = {

  FETCHING: 'DETAILS/FETCHING',
  FETCH_SUCCEEDED: 'DETAILS/FETCH_SUCCEEDED',
  FETCH_FAILED: 'DETAILS/FETCH_FAILED',
  
};

export function fetchingDetails () {
  return {
    type: DETAILS_ACTION_TYPES.FETCHING,
  };
}

export function fetchDetailsSucceeded (details) {
  return {
    type: DETAILS_ACTION_TYPES.FETCH_SUCCEEDED,
    payload: details,
  };
}

export function fetchDetailsFailed () {
    return{
        type: DETAILS_ACTION_TYPES.FETCH_FAILED
    }
    
};

