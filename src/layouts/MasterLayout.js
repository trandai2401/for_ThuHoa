import React from 'react';
import './MasterLayout.css';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import { Sidebar } from '../components';
import Button from '../components/Button';
import { button_classname } from '../constants/string';

const MasterLayout = (props) => {
  return (
    <>
      <Header path={props.path} />
      <div className="body">
        <Sidebar />
        <div className="body-content">{props.children}</div>
      </div>
    </>
  );
};

export default MasterLayout;
