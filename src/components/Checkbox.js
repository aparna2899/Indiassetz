import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = (props) => {
  const { name, label, value, onChange } = props;

  return (
    <div className="flex items-center inline-block align-middle relative">
      <label className="text-sm font-bold" htmlFor={name}>
        {label}
      </label>
      <input
        type="checkbox"
        name={name}
        id={name}
        className=" form-checkbox w-6 h-6 rounded-md shadow-inner bg-white border border-lightgray"
        value={value}
        checked={value}
        onChange={onChange}
      />
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func
};

export default Checkbox;
