import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';
import Pagination from '../Pagination';

const Table = ({ data, children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const totalPages = Math.ceil(data.length / 10);
  const endIndex = currentPage * pageSize;
  const startIndex = endIndex - pageSize;
  const tableData = data.slice(startIndex, endIndex);

  const [isHeaderChecked, setIsHeaderChecked] = useState(false);
  const [allCheckboxSelected, setAllCheckboxSelected] = useState(false);

  const paginateFront = () => setCurrentPage(currentPage + 1);
  const paginateBack = () => setCurrentPage(currentPage - 1);

  const handleHeaderCheckboxChange = () => {
    setIsHeaderChecked(!isHeaderChecked);
  };

  const handleSelectAllCheckBox = () => {
    if (isHeaderChecked) setAllCheckboxSelected(true);
    else setAllCheckboxSelected(false);
  };

  return (
    <>
      <table className="w-full text-left table-collapse bg-white rounded-t-lg">
        <thead>
          <TableHeader
            data={data[0]}
            isHeaderChecked={isHeaderChecked}
            handleHeaderCheckboxChange={handleHeaderCheckboxChange}
          />
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <TableRow
              key={index}
              data={row}
              allCheckboxSelected={allCheckboxSelected}
              handleSelectAllCheckBox={handleSelectAllCheckBox}>
              {children}
            </TableRow>
          ))}
        </tbody>
      </table>
      <div className="bg-white py-4 pr-20 text-right border border-t-0  border-lightgray mb-12">
        <Pagination
          totalPages={totalPages}
          pageSize={pageSize}
          currentPage={currentPage}
          paginateBack={paginateBack}
          paginateFront={paginateFront}
          totalData={data.length}
        />
      </div>
    </>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  isHeaderChecked: PropTypes.bool,
  handleHeaderCheckboxChange: PropTypes.func
};

export default Table;
