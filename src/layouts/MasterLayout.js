import React from 'react';
import './MasterLayout.css';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import { Sidebar } from '../components';
import Button from '../components/Button';
import { button_classname } from '../constants/string';
import { UrlPage } from '../context/UrlPage';

const MasterLayout = (props) => {
  return (
    <>
      <Header path={props.urlPage} />
      <div className="body">
        <UrlPage.Provider value={props.urlPage}>
          <Sidebar path={props.path} />
        </UrlPage.Provider>
        <div className="body-content">{props.children}</div>
      </div>
    </>
  );
};
export default MasterLayout;
