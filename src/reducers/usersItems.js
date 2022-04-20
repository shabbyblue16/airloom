export default (state, action) => {
  if (action.type === 'USERS_ITEMS') {
    return action.items;
  }
  return state || {};
};
