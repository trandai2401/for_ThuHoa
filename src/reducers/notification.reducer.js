const notification = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NOTIFICATION':
      return { [action.payload.id]: action.payload.data, ...state };
    case 'REMOVE_NOTIFICATION':
      delete state[action.payload];
      console.log(state);
      return { ...state };
    default:
      return state;
  }
};
export default notification;
