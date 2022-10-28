import React, { useState } from 'react';
import { SearchBar, ListProduct } from '../../components';
import FormAddProduct from '../../components/FormAddProduct/FormAddProduct';

const ManagerProduct = () => {
  return (
    <>
      <FormAddProduct />
      <SearchBar />
      <ListProduct />
    </>
  );
};

export default ManagerProduct;
