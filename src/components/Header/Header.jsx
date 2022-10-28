import React, { Fragment } from 'react';
import './Header.css';
import logo from '../../asset/images/logo.svg';
import { path as paths } from '../../constants/string';
import { Link } from 'react-router-dom';

const Header = ({ path }) => {
  return (
    <>
      <header className="header">
        <div className="logo_ncc">
          <div>
            <img src={logo} alt="" />
            <h2>NCC</h2>
          </div>
        </div>
        <div className="menu_header d-flex justify-content-around">
          <Link to={`/${paths.sanPham}`} className="">
            {path == paths.sanPham ? <b>SẢN PHẨM</b> : 'SẢN PHẨM'}
          </Link>
          <Link to={`/${paths.quanLy}`} className="">
            {path == paths.quanLy ? (
              <b>QUẢN LÝ SẢN PHẨM</b>
            ) : (
              'QUẢN LÝ SẢN PHẨM'
            )}
          </Link>
        </div>
        <div className="empty"></div>
      </header>
    </>
  );
};

export default Header;
