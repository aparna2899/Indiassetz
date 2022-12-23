import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ data }) => {
  return (
    <tr className="bg-blue text-white rounded-t-2xl">
      {Object.keys(data).map((key, index) => (
        <th key={index} className="py-6 px-4 font-normal text-sm">
          {key}
        </th>
      ))}
    </tr>
  );
};

TableHeader.propTypes = {
  data: PropTypes.object.isRequired
};

export default TableHeader;
