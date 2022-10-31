import React from 'react';
import emptyProduct from '../../asset/images/emptyProduct.svg';

const OutOfProduct = () => {
  return (
    <>
      <div className="card-empty-product text-center w-100">
        <img src={emptyProduct} />
      </div>
    </>
  );
};

export default OutOfProduct;
