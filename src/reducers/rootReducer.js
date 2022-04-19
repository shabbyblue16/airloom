import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import currentUser from './currentUser';
import usersAlbums from './usersAlbums';
import usersItems from './usersItems';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  currentUser,
  usersAlbums,
  usersItems,
});

export default createRootReducer;
