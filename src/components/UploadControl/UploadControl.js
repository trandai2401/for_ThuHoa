import React, { useState } from 'react';

const UploadControl = ({ title_upload, classname, addFile }) => {
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files;
    addFile([...fileUploaded]);
  };

  return (
    <>
      <button type="button" className={classname} onClick={handleClick}>
        {title_upload}
      </button>
      <input
        type="file"
        style={{ display: 'none' }}
        ref={hiddenFileInput}
        onChange={handleChange}
        multiple
        required
      />
    </>
  );
};

export default UploadControl;
