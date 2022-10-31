import { combineReducers } from 'redux';
import navbarReducer from './navbar.reducer';
import notification from './notification.reducer';
import productsReducer from './products.reducer';
import spinner from './spinner.reducer';

export default combineReducers({
  navbar: navbarReducer,
  products: productsReducer,
  spinner: spinner,
  notifications: notification,
});
