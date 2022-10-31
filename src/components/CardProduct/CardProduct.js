import React from 'react';
import './CardProduct.css';
import { Link } from 'react-router-dom';
import TitleCardProduct from '../TitleCardProduct/TitleCardProduct';

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
const CardProduct = ({ name, price, illustration, _id }) => {
  const pathCurrent = window.location.pathname.slice(1);
  return (
    <>
      <Link className="card-product" to={'/san-pham/' + _id}>
        <div className="text-center">
          <img
            className="card-product-img"
            src={`http://localhost:5000/${illustration}`}
            alt="cardemo"
          />

          <div className="product-title text-left ml-3 my-2">
            <h6>{name}</h6>
          </div>

          {pathCurrent == 'quan-ly' ? (
            <TitleCardProduct id={_id} />
          ) : (
            <div className="product-price text-left ml-3">
              {formatter.format(price)}
            </div>
          )}
        </div>
      </Link>
    </>
  );
};

export default CardProduct;
