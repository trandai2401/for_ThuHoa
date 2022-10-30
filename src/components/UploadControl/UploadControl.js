import { Icon } from '@iconify-icon/react';
import React, { useState } from 'react';
import ListFileImage from '../ListFileImage/ListFileImage';

const UploadControl = ({ title_upload, classname, form, setForm }) => {
  // const [files, setFiles] = useState([]);

  const files = form.files;

  const setFiles = (files) => {
    setForm({ ...form, files: files });
  };
  const hiddenFileInput = React.useRef(null);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files;
    setFiles([...files, ...fileUploaded]);
  };
  const delItemFile = (idItem) => {
    let arrFile = files;
    arrFile = arrFile.filter((item, index) => index != idItem);
    setFiles(arrFile);
  };

  const renderComponentListFile = () =>
    classname == 'plus-upload-btn' ? (
      ''
    ) : (
      <ListFileImage files={files} delItemFile={delItemFile} />
    );
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
      {renderComponentListFile()}
    </>
  );
};

export default UploadControl;
