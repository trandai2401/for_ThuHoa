import ReactDOM from 'react-dom';

import React from 'react';
import './popup.css';
import { useEffect } from 'react';

export default function Popup({ children }) {
  return ReactDOM.createPortal(
    <>
      <div className="wrapper-popup" onClick={(e) => e.stopPropagation()}>
        <div className="content">{children}</div>
      </div>
    </>,
    document.getElementById('popup-root'),
  );
}
