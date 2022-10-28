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
  dataDismiss,
  id,
}) => {
  const pathCurrent = window.location.pathname.slice(1);
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = {};
  searchParams.forEach((value, key) => {
    query[key] = value;
  });

  query.pageSelected = query.pageSelected ?? 1;
  return (
    <>
      <button
        type={type}
        className={`${classname} ${
          query.pageSelected == title ? 'phan-trang-selected' : ''
        }`}
        onClick={() => {
          query.pageSelected = title;
          navigate(`/${pathCurrent}?` + toQuery(query));
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
