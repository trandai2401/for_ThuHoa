import React from 'react';
import del from './delete.png';

export default function DeleteConfirm({ onConfirm }) {
  return (
    <div className="confirm-popup">
      <img src={del} width="92px" height={'92px'} />
      <span>
        Bạn có chắc muốn xóa sản phẩm Streetfighter V4? Sản phẩm sẽ bị xóa vĩnh
        viễn.
      </span>
      <div className="confirm-btn">
        <button onClick={() => onConfirm(false)} className="cancel">
          Hủy
        </button>
        <button onClick={() => onConfirm(true)}>Xóa</button>
      </div>
    </div>
  );
}
