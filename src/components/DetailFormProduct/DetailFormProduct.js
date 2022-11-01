import React, { useState } from 'react';
import Input from '../Input/Input';
import { Icon } from '@iconify-icon/react';
import SelectOption from '../SelectOption/SelectOption';
import UploadControl from '../UploadControl/UploadControl';
import { connect } from 'react-redux';
import { useEffect } from 'react';

const initValue = [];
const DetailFormProduct = ({ categorys, form, setForm, errors, touched }) => {
  const [manufacturers, setManufacturers] = useState(initValue);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(form.category === null);
    console.log(manufacturers);
    if (form.category === null) {
      setForm({ ...form, manufacturer: null });
      setManufacturers(initValue);
    } else
      setManufacturers(
        categorys.items.find((category) => category.code === form.category)
          .manu_items,
      );
  }, [form.category]);
  return (
    <>
      <form className="form-horizontal">
        {/* tên sản phẩm */}
        <div className="form-group mb-1">
          <label htmlFor="recipient-name" className="col-form-label">
            Tên sản phẩm
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
          {errors.name && touched && <p className="error">{errors.name}</p>}
          <Input
            name="name"
            onChange={onChangeInput}
            value={form.name}
            placeholder="Nhập tên sản phẩm"
            type="text"
          />
        </div>
        {/* danh mục sản phẩm */}
        <div className="form-group mb-1">
          <label htmlFor="recipient-name" className="col-form-label">
            Danh mục sản phẩm
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
          {errors.category && touched && (
            <p className="error">{errors.category}</p>
          )}
          <div className="input-group mb-1">
            <SelectOption
              name="category"
              onChange={onChangeInput}
              value={form.category}
              title="Chọn danh mục sản phẩm"
              data={categorys.items}
            />
          </div>
        </div>
        {/* hãng sản xuất */}
        <div className="form-group mb-1">
          <label htmlFor="recipient-name" className="col-form-label">
            Hãng sản xuất
            <Icon
              icon="charm:north-star"
              style={{
                position: 'relative',
                top: '-5px',
                fontSize: '10px',
                color: '#ef2243',
              }}
            />
          </label>{' '}
          {errors.manufacturer && touched && (
            <p className="error">{errors.manufacturer}</p>
          )}
          <div className="input-group mb-1">
            <SelectOption
              name="manufacturer"
              onChange={onChangeInput}
              value={form.manufacturer}
              title="Chọn hãng sản xuất"
              data={manufacturers}
            />
          </div>
        </div>
        {/* Giá sản phẩm */}
        <div className="form-group mb-1">
          <label htmlFor="recipient-name" className="col-form-label">
            Giá sản phẩm
            <Icon
              icon="charm:north-star"
              style={{
                position: 'relative',
                top: '-5px',
                fontSize: '10px',
                color: '#ef2243',
              }}
            />
          </label>{' '}
          {errors.price && touched && <p className="error">{errors.price}</p>}
          <Input
            name="price"
            onChange={onChangeInput}
            value={form.price}
            placeholder="Nhập giá sản phẩm"
            type="number"
          />
        </div>
        {/* Mô tả */}
        <div className="form-group mb-1">
          <label htmlFor="message-text" className="col-form-label">
            Mô tả:
          </label>{' '}
          {errors.description && touched && (
            <p className="error">{errors.description}</p>
          )}
          <textarea
            name="description"
            onChange={onChangeInput}
            value={form.description}
            className="form-control"
            id="message-text"
          ></textarea>
        </div>
      </form>
    </>
  );
};
const mapstateToProps = (state) => {
  return {
    categorys: state.navbar.category,
    manufacturers: state.navbar.manufacturer,
  };
};
export default connect(mapstateToProps, {})(DetailFormProduct);
