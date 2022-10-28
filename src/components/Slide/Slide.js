import React, { useEffect, useState } from 'react';
import './Slide.css';
import { path_url_img } from '../../constants/string';

const Slide = ({ srcProduct }) => {
  const [imgCurrent, setImgCurrent] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let tam = imgCurrent;
      tam = tam + 1;
      if (tam == srcProduct.length) {
        tam = tam - srcProduct.length;
      }
      setImgCurrent(tam);
    }, 3000);
  });

  return (
    <>
      <img
        className="imgProduct"
        src={`http://localhost:5000/${srcProduct[imgCurrent]}`}
      />
      <div className="list_btn"> </div>
    </>
  );
};

export default Slide;
