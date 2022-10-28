import React from 'react';
import { SearchBar, ListProduct } from '../../components';
import Button from '../../components/Button';
import { button_classname, path as paths } from '../../constants/string';

const ListViewProduct = () => {
  return (
    <>
      <SearchBar />
      <ListProduct />
    </>
  );
};

export default ListViewProduct;
