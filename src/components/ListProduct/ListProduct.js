import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardProduct from '../CardProduct';
import './ListProduct.css';
import { fetchProducts } from '../../actions/products.action';
import Pagination from '../Pagination/Pagination';
import { useNavigate, useSearchParams } from 'react-router-dom';
import OutOfProduct from '../OutOfProduct/OutOfProduct';
import { setTrueLoading, setFalseLoading } from '../../actions/spinner.action';

const ListProduct = ({
  products,
  fetchProducts,
  count,
  setTrueLoading,
  setFalseLoading,
}) => {
  let [searchParams] = useSearchParams();
  const query = {
    pageSelected: 1,
    categorySelected: null,
    manufacturerSelected: null,
    searchProduct: '',
  };
  searchParams.forEach((value, key) => {
    query[key] = value;
  });
  useEffect(
    () => {
      async function func() {
        setTrueLoading();
        await fetchProducts({ ...query });
        setFalseLoading();
      }
      func();
    },
    [...Object.values(query)],
    count,
  );

  const renderListProduct = () => {
    if (products.length === 0) {
      return <OutOfProduct />;
    }
    return products.map((item, index) => <CardProduct {...item} key={index} />);
  };
  return (
    <>
      <div className="container-list-product text-center">
        <div className="row mx-4">{renderListProduct()}</div>
        <Pagination count={count} />
      </div>
    </>
  );
};

const mapstateToProps = (state) => {
  return {
    products: state.products.products,
    count: state.products.count,
    pageSelected: state.products.pageSelected,
    categorySelected: state.products.categorySlected,
    manufacturerSelected: state.products.manufacturerSelected,
    searchProduct: state.products.searchProduct,
  };
};
export default connect(mapstateToProps, {
  fetchProducts,
  setTrueLoading,
  setFalseLoading,
})(ListProduct);
