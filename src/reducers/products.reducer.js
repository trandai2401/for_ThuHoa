const productsReducer = (
  state = {
    products: [],
    count: 0,
    pageSelected: 1,
    categorySlected: null,
    manufacturerSelected: null,
    searchProduct: null,
  },
  action,
) => {
  switch (action.type) {
    case 'FETCH_LIST_PRODUCTS':
      return {
        ...state,
        ...action.payload,
      };

    case 'CHANGE_PAGE_SELECTED':
      return {
        ...state,
        pageSelected: action.payload,
      };

    case 'CHANGE_CATEGORY_SELECTED':
      return {
        ...state,
        categorySlected: action.payload,
      };

    case 'CHANGE_MANUFACTURER_SELECTED':
      return {
        ...state,
        manufacturerSelected: action.payload,
      };

    case 'SEARCH_PRODUCT':
      return {
        ...state,
        searchProduct: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
