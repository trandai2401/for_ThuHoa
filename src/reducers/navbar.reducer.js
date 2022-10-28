import _ from 'lodash';

const initValue = {
  category: { title: 'Danh muc', items: [] },
  manufacturer: {
    title: 'Hang San Xuat',
    items: [],
  },
};
const navbarReducer = (state = initValue, action) => {
  switch (action.type) {
    case 'FETCH_LIST_CATEGOY_MANUFACTURER':
      return {
        category: {
          title: 'Danh muc',
          items: [...action.payload.dataCategory],
        },
        manufacturer: {
          title: 'Hang San Xuat',
          items: [...action.payload.dataManufacturer],
        },
      };
    default:
      return state;
  }
};
export default navbarReducer;
