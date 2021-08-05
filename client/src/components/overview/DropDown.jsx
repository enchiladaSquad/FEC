import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({
  options, onChange, flexGrow, disabled = false,
}) => {
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
            <option key={i} value={option}>
              {option.toString()}
            </option>
          );
        })}
      </select>
    </>
  );
};

DropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  flexGrow: PropTypes.number.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default DropDown;
