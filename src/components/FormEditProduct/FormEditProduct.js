import { Icon } from '@iconify-icon/react';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { managerProduct } from '../../api';
import Validator from '../../util/validator';
import DetailFormProduct from '../DetailFormProduct/DetailFormProduct';
import ImageUpdate from '../ImageUpdate/ImageUpdate';
import UploadControl from '../UploadControl/UploadControl';
import './FormEditProduct.css';
const infoProduct = {
  name: '',
  category: '',
  description: '',
  manufacturer: '',
  price: '',
  images: [],
  files: [],
  illustration: '',
};
const FormEditProduct = () => {
  const [form, setForm] = useState(infoProduct);
  let params = useParams();
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const e = validator.validate(form);
    setErrors(e);
  }, [form]);
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
    console.log(errors);

    if (Object.keys(errors).length === 0) {
      const data = new FormData();
      data.append('name', form.name);
      data.append('category', form.category);
      data.append('manufacturer', form.manufacturer);
      data.append('price', form.price);
      data.append('description', form.description);
      data.append('illustration', form.illustration);
      console.log(form.images);

      form.images.forEach((element) => {
        data.append('images[]', element);
      });
      form.files.forEach((element) => {
        data.append('files', element);
      });
      managerProduct.updateProduct(params.id, data);
    }
  };
  return (
    <>
      <div className="container-edit-product">
        <h6>Thông tin sản phẩm</h6>

        <div className="d-flex justify-content-between">
          <div className="form-edit mx-1">
            <DetailFormProduct
              form={form}
              setForm={setForm}
              errors={errors}
              touched={touched}
            />
            <button onClick={onClickBtnSubmit}> Hello Hòa</button>
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
              <ImageUpdate classname="illustrating" url={form.illustration} />
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
              {form.images.map((e, index) => (
                <ImageUpdate
                  classname="img-slide my-3"
                  url={e}
                  onClick={() => delItemImage(index)}
                />
              ))}
              {form.files.map((e, index) => {
                const objectUrl = URL.createObjectURL(e);

                return (
                  <ImageUpdate
                    type="IMG_UPLOAD"
                    classname="img-slide my-3"
                    url={objectUrl}
                    onClick={() => delItemFile(index)}
                  />
                );
              })}
              <UploadControl
                form={form}
                setForm={setForm}
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
