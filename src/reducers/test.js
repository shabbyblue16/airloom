export default (state, action) => {
  if (action.type === 'TEST') {
    return action.test;
  }
  return state || {};
};
