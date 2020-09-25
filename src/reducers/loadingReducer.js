import { IS_LOADING, NOT_LOADING } from '../actions/loadingTypes';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case IS_LOADING:
      return true;
    case NOT_LOADING:
      return false;
    default:
      return state;
  }
};

export default loadingReducer;
