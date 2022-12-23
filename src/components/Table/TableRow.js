import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ data }) => {
  return (
    <tr className="border border-lightgray hover:bg-gray-100">
      {Object.values(data).map((value, index) => {
        if (typeof value === 'object') {
          return (
            <td key={index} className="px-2 py-4">
              <select className="bg-slate-200 border-none text-sm rounded-md">
                {Object.keys(value).map((option, index) => (
                  <option key={index} value={value[option]}>
                    {option}
                  </option>
                ))}
              </select>
            </td>
          );
        } else {
          return (
            <td key={index} className="px-4 py-4 text-sm">
              {value}
            </td>
          );
        }
      })}
    </tr>
  );
};

TableRow.propTypes = {
  data: PropTypes.object.isRequired
};

export default TableRow;
