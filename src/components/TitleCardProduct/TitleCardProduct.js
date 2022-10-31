import React from 'react';
import { button_classname } from '../../constants/string';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { managerProduct } from '../../api/index';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/products.action';
import { showSuccessNotification } from '../../actions/notification.action';

const TitleCardProduct = ({
  id,
  fetchProducts,
  showSuccessNotification,
  name,
}) => {
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
          showSuccessNotification(
            'Thông báo',
            `Đã xóa sản phẩm ${name} thành công.`,
          );
          fetchProducts({});
        }}
        classname={button_classname.xoaSP}
      />
    </>
  );
};

export default connect(null, { fetchProducts, showSuccessNotification })(
  TitleCardProduct,
);
