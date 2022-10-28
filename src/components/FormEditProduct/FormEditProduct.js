import { Icon } from '@iconify-icon/react';
import React, { useState } from 'react';
import DetailFormProduct from '../DetailFormProduct/DetailFormProduct';
import ImageUpdate from '../ImageUpdate/ImageUpdate';
import UploadControl from '../UploadControl/UploadControl';
import './FormEditProduct.css';

const FormEditProduct = () => {
  const icon_upload = (
    <Icon
      icon="fa:plus"
      style={{
        position: 'relative',
        top: '5px',
        fontSize: '40px',
        color: '#00ADE8',
      }}
    />
  );

  return (
    <>
      <div className="container-edit-product">
        <h6>Thông tin sản phẩm</h6>

        <div className="d-flex justify-content-between">
          <div className="form-edit mx-1">
            <DetailFormProduct />
          </div>
          <div className="images-manager mx-1">
            <label htmlFor="recipient-name" className="col-form-label">
              Ảnh minh họa
              <Icon
                icon="charm:north-star"
                style={{
                  position: 'relative',
                  top: '-5px',
                  fontSize: '10px',
                  color: '#ef2243',
                }}
              />
            </label>
            <div className="upload-img-illustrating text-center">
              <ImageUpdate classname="illustrating" />
            </div>
            <label htmlFor="recipient-name" className="col-form-label">
              Ảnh slide
              <Icon
                icon="charm:north-star"
                style={{
                  position: 'relative',
                  top: '-5px',
                  fontSize: '10px',
                  color: '#ef2243',
                }}
              />
            </label>
            <div className="change-img-slide text-center">
              <ImageUpdate classname="img-slide my-3" />
              <ImageUpdate classname="img-slide my-3" />
              <ImageUpdate classname="img-slide my-3" />

              <UploadControl
                title_upload={icon_upload}
                classname="plus-upload-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormEditProduct;
