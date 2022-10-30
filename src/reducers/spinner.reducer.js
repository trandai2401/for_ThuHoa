const initValue = {
  isLoading: false,
};
const spinner = (state = initValue, action) => {
  switch (action.type) {
    case 'FALSE_SPINNER':
      return {
        isLoading: false,
      };
    case 'TRUE_SPINNER':
      return {
        isLoading: true,
      };
    default:
      return state;
  }
};
export default spinner;
