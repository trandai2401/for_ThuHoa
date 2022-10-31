import React, { useEffect, useState } from 'react';
import './SearchBar.css';
import { Icon } from '@iconify-icon/react';
import { searchProduct } from '../../actions/products.action';
import { connect } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { path as paths } from '../../constants/string';
import { toQuery } from '../../util';

var pattern = /[!@#$%^&*(),.?":{}|<>]/g;

const SearchBar = ({ searchProduct }) => {
  const pathCurrent = window.location.pathname.slice(1);
  const [term, setTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const query = {};
    searchParams.forEach((value, key) => {
      query[key] = value;
    });
    if (query.searchProduct != null) {
      setTerm(query.searchProduct);
    }
  }, []);
  useEffect(() => {
    const timerId = setTimeout(() => {
      const query = {};
      searchParams.forEach((value, key) => {
        query[key] = value;
      });

      query.searchProduct = term;

      navigate(`/${pathCurrent}?` + toQuery(query));
      searchProduct(term);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  const onEnterInput = () => {};
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onEnterInput();
        }}
        className="form-input-search"
      >
        <div className="left-icon-input-search">
          <Icon
            id="icon-search"
            icon="akar-icons:search"
            style={{ fontSize: '25px', margin: '7px 10px 0px 10px' }}
          />
          <input
            className="input-search"
            type="text"
            placeholder="Search..."
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
              var qry = e.target.value;
              if (qry.match(pattern)) {
                alert('invalid');
              } else {
              }
            }}
          />
        </div>
      </form>
    </>
  );
};

export default connect(null, { searchProduct })(SearchBar);
