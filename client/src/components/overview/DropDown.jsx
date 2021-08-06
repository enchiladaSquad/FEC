import React from 'react';
import PropTypes from 'prop-types';

import {
  Select, MenuItem, FormControl, Button,
} from '@material-ui/core';

const DropDown = ({
  options,
  label,
  handleChange,
  handleClose,
  handleOpen,
  value,
  disabled = false,
  open = true,
}) => {
  return (
    <>
      {/* <Button onClick={handleOpen}>Open Select</Button> */}
      <FormControl>
        <Select
          open={open}
          value={value}
          onChange={handleChange}
          onClose={handleClose}
          label={`${label}`}
          disabled={disabled}
        >
          {options.map((option, i) => {
            console.log('option:', option);
            return (
              <MenuItem key={i} value={option}>
                {option}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
};

DropDown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  ).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  label: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

DropDown.defaultProps = {
  open: false,
};

export default DropDown;

{
  /* <select
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
              {option}
            </option>
          );
        })}
      </select> */
}
