import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toQuery } from '../../util';
import './Button.css';

const Button = ({
  type,
  title,
  classname,
  dataToggle,
  dataTarget,
  dataWhatever,
  onClick = () => {},
}) => {
  return (
    <>
      <button
        type={type}
        className={`${classname} `}
        onClick={() => {
          onClick();
        }}
        data-toggle={dataToggle}
        data-target={dataTarget}
        data-whatever={dataWhatever}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
