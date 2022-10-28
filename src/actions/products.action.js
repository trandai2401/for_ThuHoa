import { managerProduct } from '../api/';

export const fetchProducts =
  ({
    pageSelected = 1,
    categorySelected = null,
    manufacturerSelected = null,
    searchProduct = '',
  }) =>
  async (dispatch, getState) => {
    const dataProducts = await managerProduct.fetchProducts({
      pageSelected,
      categorySelected,
      manufacturerSelected,
      searchProduct,
    });
    dispatch({
      type: 'FETCH_LIST_PRODUCTS',
      payload: {
        products: dataProducts.data.data.results,
        count: dataProducts.data.data.count,
      },
    });
  };
export const changePageSelected = (pageSelected) => {
  return { type: 'CHANGE_PAGE_SELECTED', payload: pageSelected };
};

export const changeCategorySelected = (value) => {
  return { type: 'CHANGE_CATEGORY_SELECTED', payload: value };
};

export const changeManufacturerSelected = (value) => {
  return { type: 'CHANGE_MANUFACTURER_SELECTED', payload: value };
};

export const searchProduct = (value) => {
  return { type: 'SEARCH_PRODUCT', payload: value };
};
