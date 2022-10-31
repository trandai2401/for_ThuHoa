import React, { useState } from 'react';
import './MasterLayout.css';
import Dropdown from '../components/Dropdown';
import Header from '../components/Header';
import { Sidebar } from '../components';
import Button from '../components/Button';
import { button_classname } from '../constants/string';
import { UrlPage } from '../context/UrlPage';

const MasterLayout = (props) => {
  const [widened, setWidened] = useState(false);

  return (
    <>
      <Header path={props.urlPage} setWidened={setWidened} widened={widened} />
      <div className="body">
        <UrlPage.Provider value={props.urlPage}>
          <Sidebar path={props.path} widened={widened} />
        </UrlPage.Provider>
        <div className="body-content">{props.children}</div>
      </div>
    </>
  );
};

export default MasterLayout;
