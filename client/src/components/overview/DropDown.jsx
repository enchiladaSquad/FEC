import React from 'react';

const DropDown = ({
  options, onChange, flexGrow, label, disabled = false,
}) => {
  return (
    <>
      {/* <label name={`${label}`} htmlFor={`${label}`} /> */}
      <select
        style={{ flexGrow }}
        className="enchilada"
        onChange={(e) => {
          console.log('e.target:', e.target);
          onChange(e.target.value);
        }}
        disabled={disabled}
      >
        {options.map((option, i) => {
          return (
            <option key={label + i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default DropDown;
