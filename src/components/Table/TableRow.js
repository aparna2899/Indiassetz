import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox';
import { Link } from 'react-router-dom';

const TableRow = ({ data, allCheckboxSelected, children }) => {
  const [state, setState] = useState(allCheckboxSelected);
  return (
    <tr className="border border-lightgray hover:bg-slate-100">
      <div className="py-6 px-4">
        <Checkbox isChecked={allCheckboxSelected || state} onChange={() => setState(!state)} />
      </div>
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
              {index === 0 ? (
                <Link
                  to="/client-detail"
                  className="hover:text-blue hover:font-bold hover:underline">
                  {value}
                </Link>
              ) : (
                <Link to="/client-detail">{value}</Link>
              )}
            </td>
          );
        }
      })}
      {children}
    </tr>
  );
};

TableRow.propTypes = {
  data: PropTypes.object.isRequired,
  allCheckboxSelected: PropTypes.bool,
  handleSelectAllCheckBox: PropTypes.func
};

export default TableRow;
