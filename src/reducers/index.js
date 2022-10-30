import { combineReducers } from 'redux';
import navbarReducer from './navbar.reducer';
import productsReducer from './products.reducer';
import spinner from './spinner.reducer';

export default combineReducers({
  navbar: navbarReducer,
  products: productsReducer,
  spinner: spinner,
});
