import { managerProduct } from '../api/';

export const fetchNavbar = () => async (dispatch) => {
  const dataCategory = await managerProduct.fetchCategory();
  const dataManufacturer = await managerProduct.fetchManufacturer();

  const data = { dataCategory, dataManufacturer };

  dispatch({
    type: 'FETCH_LIST_CATEGOY_MANUFACTURER',
    payload: data,
  });
};
export const changeCategory = (data) => async (dispatch) => {
  dispatch({
    type: 'CHANGE_CATEGORY',
    payload: data,
  });
};
