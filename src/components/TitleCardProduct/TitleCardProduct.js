import React from 'react';
import { button_classname } from '../../constants/string';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import { managerProduct } from '../../api/index';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/products.action';
import { showSuccessNotification } from '../../actions/notification.action';
import { useState } from 'react';
import DeleteConfirm from '../Popup/DeleteConfirm';
import Popup from '../Popup/Popup';

const TitleCardProduct = ({
  id,
  fetchProducts,
  showSuccessNotification,
  name,
}) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const areSureDelete = (type) => {
    if (type) {
      managerProduct.removeProduct(id);
      showSuccessNotification(
        'Thông báo',
        `Đã xóa sản phẩm ${name} thành công.`,
      );
      fetchProducts({});
    }
    setIsLoading(false);
  };
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
          setIsLoading(true);
        }}
        classname={button_classname.xoaSP}
      />
      {isLoading && (
        <Popup>
          <DeleteConfirm onConfirm={areSureDelete} />
        </Popup>
      )}
    </>
  );
};

export default connect(null, { fetchProducts, showSuccessNotification })(
  TitleCardProduct,
);
