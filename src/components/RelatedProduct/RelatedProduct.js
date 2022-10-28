import React from 'react';
import { Link } from 'react-router-dom';
import './RelatedProduct.css';

const RelatedProduct = ({ name, price, id, image }) => {
  return (
    <>
      <Link to={`/san-pham/${id}`} className="card-related-product mx-2">
        <div className="text-center">
          <img src={`http://localhost:5000/${image}`} />
          <div className="product-title text-left ml-3 my-2">
            <h6>{name}</h6>
          </div>
          <div className="product-price text-left ml-3">$ {price}</div>
        </div>
      </Link>
    </>
  );
};

export default RelatedProduct;
