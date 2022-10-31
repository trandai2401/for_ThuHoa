import React from 'react';

const SelectOption = ({ title, data, onChange, name, value }) => {
  return (
    <>
      <select
        onChange={(e) => {
          const value = e.target.value;
          if (value === 'null')
            onChange({ target: { name: name, value: null } });
          else onChange({ target: { name: name, value: value } });
        }}
        name={name}
        value={value ?? undefined}
        className="custom-select"
        id="inputGroupSelect01"
      >
        <option selected={value == null} value={'null'}>
          {title}
        </option>
        {data.items.map((item) => (
          <option value={item.code}>{item.name}</option>
        ))}
      </select>
    </>
  );
};

export default SelectOption;
