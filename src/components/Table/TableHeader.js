import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';

const TableHeader = ({ data, isHeaderChecked, handleHeaderCheckboxChange }) => {
  console.log(isHeaderChecked);
  return (
    <tr className="bg-blue text-white rounded-t-2xl">
      <div className="py-6 px-4">
        <Checkbox
          name="selectAll"
          isChecked={isHeaderChecked}
          onChange={handleHeaderCheckboxChange}
        />
      </div>
      {Object.keys(data).map((key, index) => (
        <th key={index} className="py-6 px-4 font-normal text-sm">
          {key}
        </th>
      ))}
    </tr>
  );
};

TableHeader.propTypes = {
  data: PropTypes.object.isRequired,
  isHeaderChecked: PropTypes.bool,
  handleHeaderCheckboxChange: PropTypes.func
};

export default TableHeader;
