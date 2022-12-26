import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  disabled,
  icon,
  rows = '4',
  className = '',
  inputclasses = ''
}) => {
  return (
    <div className={classnames('mb-4 mx-2 flex-1', [className])}>
      <label className="block text-blue text-sm font-medium mb-2" htmlFor={name}>
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        {icon && <span className="absolute inset-y-0 left-0 pl-3 flex items-center">{icon}</span>}
        {type === 'textarea' ? (
          <textarea
            className={`form-input py-2 border border-lightgray block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 resize-none scroll-auto ${
              disabled ? 'bg-slate-100' : 'bg-white'
            }`}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            rows={rows}
          />
        ) : (
          <input
            className={classnames(
              `form-input py-4 border border-lightgray block w-full leading-5 rounded-md transition duration-150 ease-in-out sm:text-sm sm:leading-5 ${
                disabled ? 'bg-slate-100' : 'bg-white'
              }`,
              [inputclasses]
            )}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        )}
      </div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  icon: PropTypes.element,
  rows: PropTypes.number
};

export default Input;
