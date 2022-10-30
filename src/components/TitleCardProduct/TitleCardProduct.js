import React from 'react';
import { button_classname } from '../../constants/string';
import Button from '../Button/Button';
import { managerProduct } from '../../api/index';
import { useNavigate } from 'react-router-dom';
const TitleCardProduct = ({ id }) => {
  const navigate = useNavigate();
  return (
    <>
      <Button
        title="Cập nhật"
        onClick={(e) => {
          e.preventDefault();

          navigate(`/chinh-sua/${id}`);
        }}
        classname={button_classname.capNhat}
      />
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
