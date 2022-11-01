import _ from 'lodash';

const initValue = {
  category: { title: 'Danh muc', items: [] },
  manufacturer: {
    title: 'Hang San Xuat',
    items: [],
  },
  manufacturerCurent: {
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
        manufacturerCurent: {
          title: 'Hang San Xuat',
          items: [],
        },
      };
    case 'CHANGE_CATEGORY':
      const cate = action.payload;

      const manuArray = state.category.items.find((item) => item.code === cate);
      state.manufacturerCurent.items = manuArray?.manu_items;
      if (cate === null)
        state.manufacturerCurent.items = state.manufacturer.items;
      return {
        ...state,
      };

    default:
      return state;
  }
};
export default navbarReducer;
