import React, { useEffect } from 'react';
import './SideBar.css';
import Dropdown from '../Dropdown/Dropdown';
import { fetchNavbar } from '../../actions/navbar.action';
import {
  changeCategorySelected,
  changeManufacturerSelected,
} from '../../actions/products.action';
import { connect } from 'react-redux';

const Navbar = ({
  fetchNavbar,
  datalist,
  changeCategorySelected,
  categorySlected,
  changeManufacturerSelected,
  manufacturerSelected,
  widened,
}) => {
  useEffect(() => {
    fetchNavbar();
  }, []);

  return (
    <>
      <div className={`navbar ${widened && 'navbar-widen'}`}>
        <Dropdown
          title="Danh mục"
          items={datalist.category.items}
          onClick={changeCategorySelected}
          selectedItem={categorySlected}
          code_dropdown="categorySelected"
        />
        <Dropdown
          title="Hãng Sản Xuất"
          items={datalist.manufacturerCurent.items}
          onClick={changeManufacturerSelected}
          selectedItem={manufacturerSelected}
          code_dropdown="manufacturerSelected"
        />
      </div>
    </>
  );
};

const mapstateToProps = (state) => {
  return {
    datalist: state.navbar,
    categorySlected: state.products.categorySlected,
    manufacturerCurent: state.products.manufacturerCurent,
  };
};

export default connect(mapstateToProps, {
  fetchNavbar,
  changeCategorySelected,
  changeManufacturerSelected,
})(Navbar);
