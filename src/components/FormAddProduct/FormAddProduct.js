import React, { useState } from 'react';
import { button_classname } from '../../constants/string';
import './FormAddProduct.css';
import Button from '../Button';
import DetailFormProduct from '../DetailFormProduct/DetailFormProduct';
import UploadControl from '../UploadControl/UploadControl';
import { Icon } from '@iconify-icon/react';

const FormAddProduct = () => {
  const [form, setForm] = useState({ files: [] });
  // console.log(form);
  const onSubmit = () => {
    console.log(form);
  };
  return (
    <>
      <Button
        title="Thêm sản phẩm"
        classname={`btn btn-primary ${button_classname.themSanPham}`}
        dataToggle="modal"
        dataTarget="#formDialogAddProduct"
        dataWhatever="@mdo"
      />
      {/* dialog form */}
      <div
        className="modal fade"
        id="formDialogAddProduct"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="formDialogAddProductLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            {/* modal header */}
            <div className="modal-header mb-1">
              <h6 className="modal-title" id="formDialogAddProductLabel">
                Thêm sản phẩm
              </h6>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body pt-1">
              <DetailFormProduct
                form={form}
                setForm={setForm}
                titleForm="Thêm sản phẩm"
              />
              <div className="form-group mb-1">
                <UploadControl
                  form={form}
                  setForm={setForm}
                  title_upload="Thêm hình ảnh sản phẩm"
                  classname="upload_tagHtml"
                />
                <Icon
                  icon="charm:north-star"
                  style={{
                    position: 'relative',
                    top: '-5px',
                    fontSize: '10px',
                    color: '#ef2243',
                  }}
                />
              </div>
            </div>
            {/* button */}
            <div className="modal-footer">
              <button
                id="btn_huy"
                type="button"
                className="btn bg-transparent"
                data-dismiss="modal"
              >
                Hủy
              </button>
              <button
                onClick={onSubmit}
                id="btn_them"
                type="button"
                className="btn"
                data-dismiss="modal"
              >
                Thêm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAddProduct;
