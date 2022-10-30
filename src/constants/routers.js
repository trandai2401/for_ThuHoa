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
    pageUrl: path.sanPham,
  },

  {
    path: path.quanLy,
    component: ManagerProduct,
    layout: MasterLayout,
    pageUrl: path.quanLy,
  },

  {
    path: path.chiTietSanPham,
    component: DetailProduct,
    layout: MasterLayout,
    pageUrl: path.sanPham,
  },

  {
    path: path.chinhSuaSanPham,
    component: EditProduct,
    layout: MasterLayout,
    pageUrl: path.quanLy,
  },
];

export default routes;
