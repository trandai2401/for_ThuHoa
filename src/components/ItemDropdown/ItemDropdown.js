import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ItemDropdown.css';
import { useSearchParams } from 'react-router-dom';
import { queryToObject, toQuery } from '../../util';
import { useContext } from 'react';
import { UrlPage } from '../../context/UrlPage';
import { useEffect } from 'react';
const ItemDropdown = ({ title, onClick, code, code_dropdown }) => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = queryToObject(searchParams);
  const urlPage = useContext(UrlPage);
  useEffect(() => {
    query.manufacturerSelected = null;
  }, [query, query.manufacturerSelected]);
  return (
    <>
      <p
        onClick={() => {
          query[code_dropdown] = code;
          query.pageSelected = 1;
          onClick(code_dropdown);
          navigate(`/${urlPage}?` + toQuery(query));
        }}
        className={`${query[code_dropdown] == code ? 'p-selected' : ''}`}
      >
        {title}
      </p>
    </>
  );
};

export default ItemDropdown;
