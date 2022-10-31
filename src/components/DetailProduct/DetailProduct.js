import React, { useEffect, useState } from 'react';
import './DetailProduct.css';
import { useParams } from 'react-router-dom';
import Button from '../Button';
import { button_classname } from '../../constants/string';
import { Icon } from '@iconify-icon/react';
import Slide from '../Slide/Slide';
import { managerProduct } from '../../api/index';
import { connect } from 'react-redux';
import RelatedProduct from '../RelatedProduct/RelatedProduct';

const infoProduct = {
  name: '',
  category: '',
  description: '',
  manufacturer: '',
  price: '',
  images: [],
};
const DetailProduct = ({ category, manufacturer }) => {
  const [product, setProduct] = useState(infoProduct);
  const [relatedProduct, setRelatedProduct] = useState([]);
  let params = useParams();
  useEffect(() => {
    managerProduct.fetchDetailProduct(params.id).then((res) => {
      setProduct(res);
    });
    managerProduct.fetchRelateProduct(params.id).then((res) => {
      setRelatedProduct(res.data.data);
    });
    window.scrollTo(0, 0);
  }, [params.id]);

  const renderRelatedProducts = relatedProduct.map((item, index) => {
    return (
      <RelatedProduct
        name={item.name}
        price={item.price}
        id={item._id}
        image={item.images[0]}
        key={item._id}
      />
    );
  });

  return (
    <>
      <div className="container-detail-product">
        <Icon
          icon="eva:arrow-back-fill"
          style={{
            position: 'relative',
            top: '5px',
            fontSize: '20px',
            color: '#00ADE8',
          }}
        />
        <Button title="Quay lại" classname={button_classname.back} />

        <div className="content-product">
          <div className="content-product-left">
            <h5>{product.name}</h5>
            <span>Danh mục: {product.category}</span>
            <br />
            <br />
            <span>Hãng sản xuất: {product.manufacturer} </span>
            <br />
            <br />
            <span>Giá sản phẩm: &#36; {product.price}</span>
            <br />
            <br />
            <span>Mô tả sản phẩm:</span>
            <br />
            <span>{product.description}</span>
          </div>
          <div className="sile-product text-center">
            <Slide srcProduct={product.images} />
          </div>
        </div>

        <br />
        <b>Gợi ý cho bạn: </b>

        <div className="row-related-product">{renderRelatedProducts}</div>
      </div>
    </>
  );
};

const mapstateToProps = (state) => {
  return {
    category: state.navbar.category,
    manufacturer: state.navbar.manufacturer,
  };
};
export default connect(mapstateToProps, {})(DetailProduct);
