import React, { Fragment, useState } from 'react';
import './Header.css';
import logo from '../../asset/images/logo.svg';
import { path as paths } from '../../constants/string';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify-icon/react';
import SideBar from '../SideBar';

const Header = ({ path, setWidened, widened }) => {
  const [isShow, setIsShow] = useState(false);
  const onClickShowSideBar = () => {
    setIsShow(true);
    if (isShow === true) {
      return <SideBar />;
    }
    setIsShow(false);
    return null;
  };
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
        <div className="empty">
          <button
            type="button"
            className="btn-menu-hidden"
            onClick={() => setWidened(!widened)}
          >
            <Icon
              icon="heroicons-outline:menu"
              style={{
                position: 'relative',
                top: '2px',
                fontSize: '50px',
                color: '#00ade8',
              }}
            />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
