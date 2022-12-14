import React, { useEffect, useState } from 'react';
import { button_classname } from '../../constants/string';
import './FormAddProduct.css';
import Button from '../Button';
import DetailFormProduct from '../DetailFormProduct/DetailFormProduct';
import UploadControl from '../UploadControl/UploadControl';
import { Icon } from '@iconify-icon/react';
import { managerProduct } from '../../api/index';
import { fetchProducts } from '../../actions/products.action';
import { connect } from 'react-redux';
import { Await } from 'react-router-dom';
import { setTrueLoading, setFalseLoading } from '../../actions/spinner.action';
import { showSuccessNotification } from '../../actions/notification.action';
import ListFileImage from '../ListFileImage/ListFileImage';

import Validator, { isStrangeChar } from '../../util/validator';
const infoProduct = {
  name: '',
  category: null,
  description: '',
  manufacturer: null,
  price: '',
  files: [],
  illustration: '',
};

const FormAddProduct = ({
  fetchProducts,
  setTrueLoading,
  setFalseLoading,
  showSuccessNotification,
}) => {
  const [form, setForm] = useState(infoProduct);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const onSubmit = async () => {
    setTouched(true);

    if (Object.keys(errors).length == 0) {
      setTrueLoading();
      await managerProduct.createProduct(form);
      setFalseLoading();
      fetchProducts({});
      await setTouched(false);
      showSuccessNotification(
        'Thông báo',
        `Đã thêm sản phẩm ${form.name} thành công.`,
      );

      setForm(infoProduct);
    }
  };
  const fileValidate = (value) => {
    return value.length <= 5;
  };
  useEffect(() => {
    const e = validator.validate(form);
    // if (form.files.length == 0) {
    //   e.files = 'The name field is required.';
    // }
    setErrors(e);
  }, [form]);

  const isPositive = (value) => {
    return +value > 0;
  };
  const rules = [
    {
      field: 'name',
      method: 'isEmpty',
      validWhen: false,
      message: 'The name field is required.',
    },
    {
      field: 'name',
      method: 'isLength',
      args: [{ min: 5 }],
      validWhen: true,
      message: 'The name must be at least 5 characters.',
    },
    {
      field: 'name',
      method: isStrangeChar,
      validWhen: false,
      message: 'The name must not include strange characters.',
    },
    {
      field: 'category',
      method: 'isEmpty',
      validWhen: false,
      message: 'The category field is required.',
    },
    {
      field: 'manufacturer',
      method: 'isEmpty',
      validWhen: false,
      message: 'The manufacturer field is required.',
    },
    {
      field: 'price',
      method: 'isEmpty',
      validWhen: false,
      message: 'The price field is required.',
    },
    {
      field: 'price',
      method: isPositive,
      validWhen: true,
      message: 'The price field is position',
    },
    {
      field: 'description',
      method: 'isEmpty',
      validWhen: false,
      message: 'The name field is required.',
    },
    {
      field: 'description',
      method: 'isLength',
      args: [{ min: 5000 }],
      validWhen: false,
      message: 'The name description must be at most 5000 characters.',
    },
    {
      field: 'files',
      method: fileValidate,
      validWhen: true,
      message: 'The files field must be less than 6.',
    },
    {
      field: 'files',
      method: (value) => value.length != 0,
      validWhen: true,
      message: 'The files field is required.',
    },
  ];
  const delItemFile = (idItem) => {
    let arrFile = form.files;
    arrFile = arrFile.filter((item, index) => index != idItem);
    setForm({ ...form, files: arrFile });
  };
  const validator = new Validator(rules);
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
                touched={touched}
                errors={errors}
                setForm={setForm}
                titleForm="Thêm sản phẩm"
              />
              <div className="form-group mb-1">
                <Icon
                  icon="charm:north-star"
                  style={{
                    position: 'relative',
                    top: '-5px',
                    fontSize: '10px',
                    color: '#ef2243',
                  }}
                />
                <UploadControl
                  addFile={(file) => {
                    setForm({ ...form, files: [...form.files, ...file] });
                  }}
                  title_upload="Thêm hình ảnh sản phẩm"
                  classname="upload_tagHtml"
                />
                <ListFileImage files={form.files} delItemFile={delItemFile} />
                {errors.files && touched && (
                  <p className="error">{errors.files}</p>
                )}
              </div>
            </div>
            {/* button */}
            <div className="modal-footer">
              <button
                id="btn_huy"
                type="button"
                className="btn bg-transparent"
                data-dismiss="modal"
                onClick={() => {
                  setForm(infoProduct);
                  setTouched(false);
                }}
              >
                Hủy
              </button>
              <button
                onClick={onSubmit}
                id="btn_them"
                type="button"
                className="btn"
                data-dismiss={`modal${
                  Object.keys(errors).length === 0 ? '' : 'e'
                }`}
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

export default connect(null, {
  fetchProducts,
  setTrueLoading,
  setFalseLoading,
  showSuccessNotification,
})(FormAddProduct);
