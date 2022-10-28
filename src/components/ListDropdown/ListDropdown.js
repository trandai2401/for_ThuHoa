import React, { useState } from 'react';
import ItemDropdown from '../ItemDropdown/ItemDropdown';

const ListDropdown = ({ items, onClick, selectedItem, code_dropdown }) => {
  const [dropdown, setDropdown] = useState(false);
  const renderItem = [{ name: 'Tất cả', code: null }, ...items].map(
    (item, index) => {
      return (
        <ItemDropdown
          key={index}
          title={item.name}
          code={item.code}
          onClick={onClick}
          selectedItem={selectedItem}
          code_dropdown={code_dropdown}
        />
      );
    },
  );

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return <>{!dropdown ? renderItem : ''}</>;
};

export default ListDropdown;
