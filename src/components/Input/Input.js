import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <input
      {...props}
      className="form-control"
      // id="recipient-name"
    />
  );
};

export default Input;
