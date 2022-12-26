import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Filter = ({ statusList, selectedStatus, handleFilterChange }) => {
  return (
    <div className="flex items-center justify-around bg-white mb-4 rounded-lg">
      {statusList.map((status) => (
        <Button
          key={status}
          buttonText={status}
          onClick={() => handleFilterChange(status)}
          type="button"
          className={`mx-2 my-2 py-2 px-14 rounded-md hover:bg-slate-200 ${
            status === selectedStatus ? 'bg-blue text-white' : 'shadow-none text-blue'
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
