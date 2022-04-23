export default (state, action) => {
  if (action.type === 'CHANGE_ITEMS') {
    return action.items;
  }
  return state || {};
};
