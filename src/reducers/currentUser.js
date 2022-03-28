export default (state, action) => {
  if (action.type === 'CURRENT_USER') {
    return action.user;
  }
  return state || null;
};
