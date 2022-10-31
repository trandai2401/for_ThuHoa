import close from './delete.png';

import React from 'react';

const CardNotification = ({ type, title, content }) => {
  return (
    <>
      <div className={`card-notification ${type}`}>
        <div className="content">
          <span>{title}</span>
          <p>{content}</p>
        </div>
        <img
          class="fit-picture"
          src={close}
          alt="Grapefruit slice atop a pile of other slices"
          width={'15px'}
        ></img>
      </div>
    </>
  );
};
export default CardNotification;
