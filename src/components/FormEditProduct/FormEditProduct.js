import { Icon } from '@iconify-icon/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { managerProduct } from '../../api';
import DetailFormProduct from '../DetailFormProduct/DetailFormProduct';
import ImageUpdate from '../ImageUpdate/ImageUpdate';
import UploadControl from '../UploadControl/UploadControl';
import './FormEditProduct.css';
const infoProduct = {
  name: '',
  category: null,
  description: '',
  manufacturer: null,
  price: '',
  images: [],
  files: [],
};
const FormEditProduct = () => {
  const [form, setForm] = useState(infoProduct);
  let params = useParams();
  useEffect(() => {
    managerProduct.fetchDetailProduct(params.id).then((res) => {
      setForm({ ...form, ...res });
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

  return (
    <>
      <div className="container-edit-product">
        <h6>Thông tin sản phẩm</h6>

        <div className="d-flex justify-content-between">
          <div className="form-edit mx-1">
            <DetailFormProduct form={form} setForm={setForm} />
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
              <ImageUpdate classname="illustrating" url={form.images[0]} />
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
              {form.images.length > 1
                ? form.images.map((e) => (
                    <ImageUpdate classname="img-slide my-3" url={e} />
                  ))
                : null}
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
