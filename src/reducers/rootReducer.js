import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import test from './test';
import currentUser from './currentUser';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  test,
  currentUser,
});

export default createRootReducer;
