import { Icon } from '@iconify-icon/react';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { managerProduct } from '../../api';
import { rulesFormEdit } from '../../constants/rulesValidate';
import DetailFormProduct from '../DetailFormProduct/DetailFormProduct';
import ImageUpdate from '../ImageUpdate/ImageUpdate';
import UploadControl from '../UploadControl/UploadControl';
import './FormEditProduct.css';
import Validator from '../../util/validator';
import { path } from '../../constants/string';
import { showSuccessNotification } from '../../actions/notification.action';
import { useDispatch } from 'react-redux';

const infoProduct = {
  name: '',
  category: null,
  description: '',
  manufacturer: null,
  price: '',
  images: [],
  files: [],
  illustration: '',
  illustrationFiles: null,
};

const FormEditProduct = () => {
  const [form, setForm] = useState(infoProduct);
  let params = useParams();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();
  const validator = new Validator(rulesFormEdit);
  const dispatch = useDispatch();
  useEffect(() => {
    const e = validator.validate(form);
    setErrors(e);
  }, [form]);
  useEffect(() => {
    managerProduct.fetchDetailProduct(params.id).then((res) => {
      setForm({ ...form, ...res, price: res.price.toString() });
    });
  }, []);
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

  const delItemFile = (idItem) => {
    let arrFile = form.files;
    arrFile = arrFile.filter((item, index) => index != idItem);
    setForm({ ...form, files: arrFile });
  };

  const delItemImage = (idItem) => {
    const arrFile = form.images.filter((item, index) => index != idItem);
    setForm({ ...form, images: arrFile });
  };

  const onClickBtnSubmit = () => {
    setTouched(true);

    if (Object.keys(errors).length === 0) {
      managerProduct.updateProduct(params.id, form);
      dispatch(
        showSuccessNotification(
          'Th??ng b??o',
          `???? c???p nh???t s???n ph???m ${form.name} th??nh c??ng`,
        ),
      );
      navigate(`/${path.sanPham}/${params.id}`);
    }
  };

  return (
    <>
      <div className="container-edit-product">
        <h6>Th??ng tin s???n ph???m</h6>

        <div className="content-edit-product">
          {/* Form edit inputs left */}
          <div className="form-edit mx-1">
            <DetailFormProduct
              form={form}
              setForm={setForm}
              errors={errors}
              touched={touched}
            />
          </div>
          {/* Form edit images right */}
          <div className="images-manager mx-1">
            <label htmlFor="recipient-name" className="col-form-label">
              ???nh minh h???a
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
              {form.illustration !== null ? (
                <ImageUpdate
                  classname="illustrating"
                  url={
                    form.illustrationFiles === null
                      ? `http://localhost:5000/${form.illustration}`
                      : form.illustration
                  }
                  onClick={() => setForm({ ...form, illustration: null })}
                />
              ) : (
                <UploadControl
                  addFile={(file) => {
                    setForm({
                      ...form,
                      illustrationFiles: file[0],
                      illustration: URL.createObjectURL(file[0]),
                    });
                  }}
                  title_upload={icon_upload}
                  classname="plus-upload-btn"
                />
              )}
            </div>
            <label htmlFor="recipient-name" className="col-form-label">
              ???nh slide
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
              {form.images.map((e, index) => (
                <ImageUpdate
                  classname="img-slide my-3"
                  url={`http://localhost:5000/${e}`}
                  onClick={() => delItemImage(index)}
                />
              ))}
              {form.files.map((e, index) => {
                const objectUrl = URL.createObjectURL(e);
                return (
                  <ImageUpdate
                    classname="img-slide my-3"
                    url={objectUrl}
                    onClick={() => delItemFile(index)}
                  />
                );
              })}
              <UploadControl
                addFile={(file) => {
                  setForm({ ...form, files: [...form.files, ...file] });
                }}
                title_upload={icon_upload}
                classname="plus-upload-btn"
              />
            </div>
          </div>
        </div>

        {/* buttons */}
        <div className="w-100 text-center my-3">
          <button
            onClick={() => {
              navigate(-1);
            }}
            id="btn_huy"
            type="button"
            className="btn bg-transparent"
            data-dismiss="modal"
          >
            H???y
          </button>
          <button
            id="btn_them"
            type="button"
            className="btn"
            onClick={onClickBtnSubmit}
          >
            L??u
          </button>
        </div>
      </div>
    </>
  );
};

export default FormEditProduct;
