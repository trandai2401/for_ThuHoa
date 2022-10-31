import React from 'react';
import Button from '../Button';
import { numbers, button_classname } from '../../constants/string';
import { connect } from 'react-redux';
import { changePageSelected } from '../../actions/products.action';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { queryToObject, toQuery } from '../../util';

const Pagination = ({ count, changePageSelected, pageSelected }) => {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = {};
  searchParams.forEach((value, key) => {
    query[key] = value;
  });
  const pathCurrent = window.location.pathname.slice(1);

  query.pageSelected = query.pageSelected ?? 1;
  const pages = Math.ceil(count / numbers.limit);
  const renderPage = (count) => {
    const arrButton = [];
    for (let index = 1; index <= pages; index++) {
      arrButton.push(
        <Button
          onClick={() => {
            onClickButton(index);
          }}
          key={index}
          title={index}
          classname={`${button_classname.phanTrang} ${
            query.pageSelected == index ? 'phan-trang-selected' : ''
          }`}
        />,
      );
    }
    return arrButton;
  };

  const onClickButton = (title) => {
    const query = queryToObject(searchParams);
    query.pageSelected = title;
    navigate(`/${pathCurrent}?` + toQuery(query));
    window.scrollTo(0, 0);
  };
  return (
    <>
      <Button title="<<" classname={button_classname.phanTrang} />
      {renderPage(count)}
      <Button title=">>" classname={button_classname.phanTrang} />
    </>
  );
};

const mapStateToProps = (state) => {
  return { pageSelected: state.products.pageSelected };
};

export default connect(mapStateToProps, { changePageSelected })(Pagination);
