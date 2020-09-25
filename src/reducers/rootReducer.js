import { combineReducers } from 'redux';
import postReducer from './postReducer';
import titleReducer from './titleReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  titles: titleReducer,
  loading: loadingReducer,
});

export default rootReducer;
