import React from 'react';
import { button_classname } from '../../constants/string';
import Button from '../Button/Button';

const TitleCardProduct = () => {
  return (
    <>
      <Button title="Cập nhật" classname={button_classname.capNhat} />
      <Button title="Xóa" classname={button_classname.xoaSP} />
    </>
  );
};

export default TitleCardProduct;
