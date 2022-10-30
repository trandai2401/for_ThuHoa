import React, { useState } from 'react';
import { button_classname } from '../../constants/string';
import Button from '../Button/Button';
const ImageUpdate = ({ classname, url, type = 'IMG', onClick }) => {
  const [isHovered, setHover] = useState(false);
  return (
    <>
      <div
        className="imageContainer"
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src={type === 'IMG_UPLOAD' ? url : `http://localhost:5000/${url}`}
          className={classname}
        />
        {isHovered && (
          <div className={`tow-btn-${classname}`}>
            <Button title="Cập nhật" classname={button_classname.editImg} />
            <br />
            <Button
              title="Xóa"
              classname={button_classname.editImg}
              onClick={onClick}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ImageUpdate;
