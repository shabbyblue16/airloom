export default (state, action) => {
  if (action.type === 'USERS_ALBUMS') {
    return action.albums;
  }
  return state || [];
};
