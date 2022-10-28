import React from 'react';
import { button_classname } from '../../constants/string';
import Button from '../Button/Button';
import { managerProduct } from '../../api/index';
const TitleCardProduct = ({ id }) => {
  return (
    <>
      <Button title="Cập nhật" classname={button_classname.capNhat} />
      <Button
        title="Xóa"
        onClick={(e) => {
          e.preventDefault();
          managerProduct.removeProduct(id);
        }}
        classname={button_classname.xoaSP}
      />
    </>
  );
};

export default TitleCardProduct;
