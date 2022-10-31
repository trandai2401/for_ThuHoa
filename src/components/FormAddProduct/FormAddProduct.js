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
import Validator from '../../util/validator';
const infoProduct = {
  name: '',
  category: null,
  description: '',
  manufacturer: null,
  price: '',
  files: [],
  illustration: '',
};

const FormAddProduct = ({ fetchProducts, setTrueLoading, setFalseLoading }) => {
  const [form, setForm] = useState(infoProduct);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const onSubmit = async () => {
    setTouched(true);
    console.log(Object.keys(errors).length == 0);
    if (Object.keys(errors).length == 0) {
      console.log(123);
      setTrueLoading();
      await managerProduct.createProduct(form);
      setFalseLoading();
      fetchProducts({});
      setTouched(false);
      setForm(infoProduct);
    }
  };

  useEffect(() => {
    const e = validator.validate(form);
    if (form.files.length == 0) {
      e.files = 'The name field is required.';
    }
    console.log(e);
    setErrors(e);
  }, [form]);
  const requiredWith = (value, field, state) =>
    (!state[field] && !value) || !!value;
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
      field: 'category',
      method: 'isEmpty',
      validWhen: false,
      message: 'The name field is required.',
    },
    {
      field: 'manufacturer',
      method: 'isEmpty',
      validWhen: false,
      message: 'The name field is required.',
    },
    {
      field: 'price',
      method: 'isEmpty',
      validWhen: false,
      message: 'The name field is required.',
    },
    {
      field: 'description',
      method: 'isEmpty',
      validWhen: false,
      message: 'The name field is required.',
    },
  ];
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
                  form={form}
                  setForm={setForm}
                  title_upload="Thêm hình ảnh sản phẩm"
                  classname="upload_tagHtml"
                />

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
})(FormAddProduct);
