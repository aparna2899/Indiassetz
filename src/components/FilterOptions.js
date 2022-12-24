import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Filter = ({ options, selectedOption, handleFilterChange }) => {
  return (
    <div className="flex items-center justify-around bg-white mb-4 rounded-lg">
      {options.map((option) => (
        <Button
          key={option}
          buttonText={option}
          onClick={() => handleFilterChange(option)}
          type="button"
          className={`mx-2 my-2 py-2 px-14 rounded-md ${
            option === selectedOption ? 'bg-blue text-white' : 'shadow-none text-blue'
          }`}></Button>
      ))}
    </div>
  );
};

Filter.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  selectedOption: PropTypes.string,
  handleFilterChange: PropTypes.func
};

export default Filter;
