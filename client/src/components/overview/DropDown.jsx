import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({
  options,
  handleChange,
  label,
  value,
  disabled = false,
}) => {
  return (
    <>
      <select
        label={label}
        className="enchilada"
        onChange={handleChange}
        disabled={disabled}
        value={value}
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
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
};

export default DropDown;
