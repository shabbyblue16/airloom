import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import currentUser from './currentUser';
import usersAlbums from './usersAlbums';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  currentUser,
  usersAlbums,
});

export default createRootReducer;
