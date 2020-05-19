import { combineReducers } from 'redux';
import logReducer from './logReducer';
import workerReducer from './workerReducer';

export default combineReducers({
  log: logReducer,
  worker: workerReducer
});
