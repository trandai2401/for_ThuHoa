import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemDropdown.css';
import { useSearchParams } from 'react-router-dom';
import { queryToObject, toQuery } from '../../util';

const ItemDropdown = ({
  title,
  onClick,
  code,
  selectedItem,
  code_dropdown,
}) => {
  const pathCurrent = window.location.pathname.slice(1);
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = queryToObject(searchParams);
  return (
    <>
      <p
        onClick={() => {
          query[code_dropdown] = code;
          onClick(code_dropdown);
          navigate(`/${pathCurrent}?` + toQuery(query));
        }}
        className={`${query[code_dropdown] == code ? 'p-selected' : ''}`}
      >
        {title}
      </p>
    </>
  );
};

export default ItemDropdown;