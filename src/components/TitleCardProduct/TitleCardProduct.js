import React from 'react';
import { button_classname } from '../../constants/string';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { managerProduct } from '../../api/index';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/products.action';
const TitleCardProduct = ({ id, fetchProducts }) => {
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
          fetchProducts({});
        }}
        classname={button_classname.xoaSP}
      />
    </>
  );
};

export default connect(null, { fetchProducts })(TitleCardProduct);
