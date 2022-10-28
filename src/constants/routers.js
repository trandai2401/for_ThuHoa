import ListViewProduct from '../pages/ListViewProduct/ListViewProduct';
import MasterLayout from '../layouts/MasterLayout';
import { path } from './string';
import DetailProduct from '../components/DetailProduct/DetailProduct';
import ManagerProduct from '../pages/ManagerProduct/ManagerProduct';
import EditProduct from '../pages/EditProduct/EditProduct';

const routes = [
  {
    path: path.sanPham,
    exact: true,
    component: ListViewProduct,
    layout: MasterLayout,
  },

  {
    path: path.quanLy,
    component: ManagerProduct,
    layout: MasterLayout,
  },

  {
    path: path.chiTietSanPham,
    component: DetailProduct,
    layout: MasterLayout,
  },

  {
    path: path.chinhSuaSanPham,
    component: EditProduct,
    layout: MasterLayout,
  },
];

export default routes;
