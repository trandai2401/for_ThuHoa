import React, { useState } from 'react';
import { button_classname } from '../../constants/string';
import Button from '../Button/Button';
const ImageUpdate = ({ classname }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <>
      <div
        className="imageContainer"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img src="http://localhost:5000/xeOtoBMW.png" className={classname} />

        {isHovered && (
          <div className={`tow-btn-${classname}`}>
            <Button title="Cập nhật" classname={button_classname.editImg} />
            <br />
            <Button title="Xóa" classname={button_classname.editImg} />
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUpdate;
