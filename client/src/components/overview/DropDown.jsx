import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({
  options, onChange, flexGrow, label, disabled = false,
}) => {
  console.log('options:', options);
  return (
    <>
      <select
        style={{ flexGrow }}
        className="enchilada"
        onChange={(e) => {
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

DropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  flexGrow: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default DropDown;
