import { Icon } from '@iconify-icon/react';
import React from 'react';
import './ListFileImage.css';

const ListFileImage = ({ files, delItemFile }) => {
  const renderListImg = files.map((item, index) => {
    return (
      <div className="item-file" key={index}>
        <p className="m-0">{item.name}</p>
        <button
          type="button"
          className="btn-del-item-file"
          onClick={() => delItemFile(index)}
        >
          <Icon
            icon="fa6-solid:delete-left"
            style={{
              position: 'relative',
              top: '2px',
              right: '3px',
              fontSize: '20px',
              color: '#ef2243',
            }}
          />
        </button>
      </div>
    );
  });
  return <>{renderListImg}</>;
};

export default ListFileImage;
