import React from 'react';
import Button from '../Button';
import { numbers, button_classname } from '../../constants/string';
import { connect } from 'react-redux';
import { changePageSelected } from '../../actions/products.action';
import { useSearchParams } from 'react-router-dom';
import { queryToObject } from '../../util';

const Pagination = ({ count, changePageSelected, pageSelected }) => {
  let [searchParams] = useSearchParams();
  const pages = Math.ceil(count / numbers.limit);
  const renderPage = (count) => {
    const arrButton = [];
    for (let index = 1; index <= pages; index++) {
      arrButton.push(
        <Button
          key={index}
          title={index}
          classname={`${button_classname.phanTrang} `}
          changePageSelected={changePageSelected}
        />,
      );
    }
    return arrButton;
  };

  const onClickButton = (value) => {
    const query = queryToObject(searchParams);
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
