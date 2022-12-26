import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ isChecked, onChange }) => {
  return (
    <div className="flex items-center inline-block align-middle relative">
      <input
        type="checkbox"
        className=" form-checkbox w-6 h-6 rounded-md shadow-inner bg-white border border-lightgray"
        checked={isChecked}
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
