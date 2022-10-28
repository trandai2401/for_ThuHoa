import React, { Fragment } from 'react';
import ListDropdown from '../ListDropdown/ListDropdown';

const Dropdown = ({ title, items, onClick, selectedItem, code_dropdown }) => {
  return (
    <>
      <div className="navbar-main">
        <div className="title-navbar">
          <b>{title}</b>
        </div>
        <div className="content-nav">
          <ListDropdown
            items={items}
            onClick={onClick}
            selectedItem={selectedItem}
            code_dropdown={code_dropdown}
          />
        </div>
      </div>
    </>
  );
};

export default Dropdown;
