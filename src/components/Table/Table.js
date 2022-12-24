import React, { useState } from 'react';
import Pagination from 'react-paginate';
import PropTypes from 'prop-types';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const Table = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const pageCount = Math.ceil(data.length / pageSize);
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const pageData = data.slice(startIndex, endIndex);
  const [isHeaderChecked, setIsHeaderChecked] = useState(false);
  const [allCheckboxSelected, setAllCheckboxSelected] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page.selected);
  };

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
          {pageData.map((row, index) => (
            <TableRow
              key={index}
              data={row}
              allCheckboxSelected={allCheckboxSelected}
              handleSelectAllCheckBox={handleSelectAllCheckBox}
            />
          ))}
        </tbody>
      </table>
      <div className="bg-white py-4 pr-20 text-right border border-t-0  border-lightgray mb-12">
        <span className="text-sm mx-4">
          Showing {startIndex} to {endIndex} of {data.length}
        </span>
        <Pagination
          pageCount={pageCount}
          forcePage={currentPage === 0 ? null : currentPage}
          onPageChange={handlePageChange}
          containerClassName="inline-flex items-center justify-center"
          previousClassName="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-800"
          nextClassName="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-800"
          activeClassName="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-blue-500 text-blue"
          disabledClassName="opacity-25 cursor-not-allowed"
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
